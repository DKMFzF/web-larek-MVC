import {
	IAppState,
	IFormErrors,
	IOrder,
	IOrderForm,
	IOrderResult,
	IProduct,
} from '../../types';
import { Model } from '../base/Modal';
import { AppStateComponents, SETTINGS } from '../../utils/constants';
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
	products: Map<string, IProduct> = new Map<string, IProduct>();
	basket: Map<string, IProduct> = new Map<string, IProduct>();
	basketTotal = 0;
	order: IOrder = {
		payment: null,
		address: '',
		email: '',
		phone: '',
		total: 0,
		items: [],
	};
	formError: IFormErrors = {};

	constructor(
		protected api: IProductAPI,
		data: Partial<IAppState>,
		events: IEvents
	) {
		super(data, events);
	}

	// api
	async laodProducts(): Promise<IProduct[]> {
		this.products.clear();
		const products: IProduct[] = await this.api.getProducts();
		for (const product of products) this.products.set(product.id, product);
		this.emitChanges(AppStateComponents.PRODUCT.CHANGE);
		return this.api.getProducts();
	}

	async orderProducts(): Promise<IOrderResult> {
		try {
			const result = await this.api.orderProducts(this.order);
			this.clearBasket();
			this.refreshOrder();
			this.resetSelected();
			return result;
		} catch (err: unknown) {
			console.log(err);
		}
	}

	// basket
	addProductInBasket(product: IProduct): void {
		if (!product) throw new Error(EnumErrorAppStateComponents.InvProduct);
		if (this.products.has(product.id)) this.basket.set(product.id, product);
		else throw new Error(EnumErrorAppStateComponents.InvProductId);
	}

	getAmountProductInBasket(): number {
		return this.basket.size;
	}

	getTotalPricteInBasket() {
		return this.basketTotal;
	}

	deleteProductInBasket(id: string) {
		this.basket.delete(id);
	}

	setOrderItems() {
		this.order.items = Array.from(this.basket.values()).map(
			(product) => product.id
		);
	}

	setOrderField(field: keyof IOrderForm, value: string) {
		this.order[field] = value;
		this.order.total = this.basketTotal;
		if (this.validateContacts())
			this.events.emit(AppStateComponents.CONTACT.READY, this.order);
		if (this.validateOrder())
			this.events.emit(AppStateComponents.ORDER.READY, this.order);
	}

	validateOrder() {
		const err: typeof this.formError = {};
		if (!this.order.address) err.address = SETTINGS.errorFormText.address;
		if (!this.order.payment) err.payment = SETTINGS.errorFormText.payment;
		this.formError = err;
		this.events.emit(AppStateComponents.ORDER.ERROR, this.formError);
		return Object.keys(err).length === 0;
	}

	validateContacts() {
		const err: typeof this.formError = {};
		if (!this.order.email) err.email = SETTINGS.errorFormText.email;
		if (!this.order.phone) err.phone = SETTINGS.errorFormText.phone;
		this.formError = err;
		this.events.emit(AppStateComponents.CONTACT.ERROR, this.formError);
		return Object.keys(err).length === 0;
	}

	clearBasket() {
		this.basket.clear();
		this.basketTotal = 0;
	}

	refreshOrder() {
		this.order = {
			payment: null,
			address: '',
			email: '',
			phone: '',
			total: 0,
			items: [],
		};
	}

	resetSelected() {
		Array.from(this.products.values()).forEach(
			(item) => (item.selected = false)
		);
	}
}

const enum EnumErrorAppStateComponents {
	InvProduct = '[INVALID PRODUCT]',
	InvProductId = `[INVALIDE PRODUCT ID]`,
}
