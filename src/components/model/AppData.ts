import {
	EnumAppStateChanges,
	IAppState,
	IFormErrors,
	IOrder,
	IOrderForm,
	IProduct,
} from '../../types';
import { Model } from '../base/Modal';

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

// Класс управления приложением
export class AppState extends Model<IAppState> {
	products: IProduct[];
	basket: IProduct[] = [];
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

	// clearBasket() {
	// 	this.basket.clear();
	// 	this.basketTotal = 0;
	// }

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
	setProducts(products: IProduct[]) {
		this.products = products.map((item) => new Product({ 
			...item, 
			selected: false 
		}, this.events));
    	this.emitChanges(EnumAppStateChanges.PRODUCTS, { store: this.products });
	}

    resetSelected() {
        this.products.forEach((product) => product.selected = false);
    }
}
