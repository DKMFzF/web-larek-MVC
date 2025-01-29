export interface IProduct {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    price: number | null;
    selected: boolean;
}

// заполнения данных пользователя
// export type TPaymentMethod = 'card' | 'cash' | null;
export interface IOrderMethod {
    payment: string;
    address: string;
}

export interface IContacts extends IOrderMethod {
    email: string;
    phone: string;
}

export interface IOrder extends IContacts {
    total: number;
    items: string[];
}

// такой ответ ждём от API
export interface IOrderResult {
    id: string;
    total: number;
}

// APi
export interface IProductAPI {
    getProducts: () => Promise<IProduct[]>;
	getProduct: (id: string) => Promise<IProduct>;
	orderProducts: (order: IOrder) => Promise<IOrderResult[]>;
}

// Типизация ошибки
export type IFormErrors = Partial<Record<keyof IOrder, string>>;

export interface IOrderForm {
    payment: string;
    address: string;
    email: string;
    phone: string;
}

// состояние приложения
export interface IAppState {
    products: Map<string, IProduct>;
    basket: Map<string, IProduct>;
    basketTotal: number;
    order: IOrder;
    formError: IFormErrors;

    // api
    laodProducts(): Promise<IProduct[]>;
    // orderProducts(): Promise<IOrderResult>;    

    // method basket
    addProductInBasket(product: IProduct): void;
    deleteProductInBasket(id: string): void;
    getAmountProductInBasket(): number;
    getTotalPricteInBasket(): number;

    // method order
    setOrderItems(): void; // Метод для добавления ID товаров в корзине в поле items для order
    setOrderField(field: keyof IOrderForm, value: string): void;
    validateContacts(): boolean;
    validateOrder(): boolean;
    
    // dumping methods
    clearBasket(): void;
    refreshOrder(): void;
    // setProducts(items: IProduct[]): void;
    resetSelected(): void;
}

// export interface IOrderMethodView {
//     payment: string;
//     address: string;
// }

// export interface IContactsView {
//     email: string;
//     phone: string;
// }
