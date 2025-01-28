import {
	IAppState,
	IFormErrors,
	IOrder,
	IOrderForm,
	IProduct,
} from '../../types';
import { Model } from '../base/Modal';
import { AppStateComponents } from '../../utils/constants';
import { IProductAPI } from './ProductsAPI';
import { IEvents } from '../base/events';

// Класс товара
export class Product extends Model<IProduct> {
	id: string;
	title: string;
	image: string;
	category: string;
	description: string;
	price: number | null;
	selected: boolean;
}

// Класс управления приложением  implements IAppState
export class AppState extends Model<IAppState> implements IAppState {
	// products: IProduct[];
	products: Map<string, IProduct> = new Map<string, IProduct>();	
	basket: Map<string, IProduct> = new Map<string, IProduct>();
	basketTotal: number = 0;
	order: IOrder = {
		payment: '',
		address: '',
		email: '',
		phone: '',
		total: 0,
		items: [],
	};
	formError: IFormErrors = {};

	constructor(protected api: IProductAPI, data: Partial<IAppState>, events: IEvents) {
		super(data, events);
	}

	// api
	async laodProducts(): Promise<IProduct[]> {
        this.products.clear();
		const products: IProduct[] = await this.api.getProducts();
		for (const product of products) this.products.set(product.id, product);
		this.emitChanges(AppStateComponents.PRODUCT.CHANGE);
		return this.api.getProducts()
	}

	getTotalPricteInBasket() {
		return this.basketTotal;
	}

	setItems() {
		this.order.items = Array.from(this.basket.values()).map(
			(product) => product.id
		);
	}

	setOrderField(field: keyof IOrderForm, value: string) {
		this.order[field] = value;
		if (this.validateContacts()) this.events.emit('contacts:ready', this.order);
		if (this.validateOrder()) this.events.emit('order:ready', this.order);
	}

	validateContacts() {
		const err: typeof this.formError = {};
		if (!this.order.email) err.email = 'Необходимо указать почту';
		if (!this.order.phone) err.phone = 'Необходимо указать телефон';
		this.formError = err;
		this.events.emit('contactsFormErrors:change', this.formError);
		return Object.keys(err).length === 0;
	}

	validateOrder() {
		const err: typeof this.formError = {};
		if (!this.order.email) err.email = 'Необходимо указать email';
		if (!this.order.phone) err.phone = 'Необходимо указать телефон';
		this.formError = err;
		this.events.emit('orderFormErrors:change', this.formError);
		return Object.keys(err).length === 0;
	}

	clearBasket() {
		this.basket.clear();
		this.basketTotal = 0;
	}

	refreshOrder() {
		this.order = {
			payment: '',
			address: '',
			email: '',
			phone: '',
			total: 0,
			items: [],
		};
	}

	// изменение продуктов
	// setProducts(products: IProduct[]) {
	// 	products.forEach(product => {
	// 		this.products.set(product.id, new Product(
	// 			{
	// 				...product,
	// 				selected: false,
	// 			},
	// 			this.events
	// 		))
	// 	});

    // 	this.emitChanges(AppStateComponents.PRODUCT.CHANGE, { store: this.products });
	// }

	resetSelected() {
		Array.from(this.products.values()).forEach(item => item.selected = false);
	}
}
