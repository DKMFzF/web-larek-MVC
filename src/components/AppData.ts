import { EnumAppStateModals, IAppState, IContacts, IFormErrors, IOrder, IProduct, IProductAPI } from "../types";
// import { Component } from "./base/Components";
import { Model } from "./base/Modal";

export class Product extends Model<IProduct> {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    price: number | null;
    selected: boolean;
}


export class AppState extends Model<IAppState> {
    products: Map<string, IProduct> = new Map<string, IProduct>();
    basket: Map<string, IProduct> = new Map<string, IProduct>();
    basketTotal: number = 0;
    contacts: IContacts = {
        payment: null,
        address: '',
        email: '',
        phone: '',
    }
    order: IOrder = {
        payment: null,
        address: '',
        email: '',
        phone: '',
        total: 0,
        items: [],
    }
    openedModal: EnumAppStateModals = EnumAppStateModals.NONE;
    formError: IFormErrors = {}

    addProductInBasket(product: IProduct) {
        if (!this.basket.has(product.id)) {
            this.products.set(product.id, product);
            this.basketTotal += product.price != null ? product.price : 0;
        }
    }

    deleteProductInBasket(id: string) {
        if (this.basket.has(id)) {
            this.basket.delete(id);
            this.basketTotal -= this.products.get(id).price != null ? this.products.get(id).price : 0;
        }
        else return;
    }

    getAmountProductInBasket() {
        return this.basket.size;
    }

    getTotalPricteInBasket() {
        return this.basketTotal;
    }

    setItems() {
        this.order.items = Array.from(this.basket.values()).map((product) => product.id);
    }

    // setOrderField() {

    // }
}
