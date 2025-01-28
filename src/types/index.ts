// основной продукт
export interface IProduct {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    price: number | null;
}

// заполнения данных пользователя
export type TPaymentMethod = 'card' | 'cash' | null;
export interface IOrderMethod {
    payment: TPaymentMethod;
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

// все модальные окна страницы
export enum EnumAppStateModals {
    PRIVIEW_PRODUCT = 'modal:priviewProduct',
    BASKET = 'modal:basket',
	ORDER = 'modal:order',
	CONTACTS = 'modal:contacts',
	SUCCESS = 'modal:success',
	NONE = 'modal:none',
}

// Какие изменения состояния приложения могут происходить
export enum EnumAppStateChanges {
	PRODUCTS = 'change:product',
	MODAL = 'change:modal',
	MODAL_MESSAGE = 'change:modalMessage',
	SELECTED_PRODUCT = 'change:selectedProduct',
    BASKET = 'change:basket',
    ORDER = 'change:order',
    CONTACTS = 'change:contacts',
}

// Типизация ошибки
export type IFormErrors = Partial<Record<keyof IOrder, string>>;

// состояние приложения
export interface IAppState {
    products: Map<string, IProduct>;
    basket: Map<string, IProduct>;
    // basketTotal: number;
    // contacts: IContacts; // для localStorage
    order: IOrder;
    formError: IFormErrors;

    openedModal: EnumAppStateModals;

    // api method
    // laodProducts(): Promise<void>;
    // orderProducts(): Promise<IOrderResult[]>;

    // method in localStorage
    // restoreState(): void;
    // persistState(): void;

    // method basket
    addProductInBasket(product: IProduct): void;
    deleteProductInBasket(id: string): void;
    getAmountProductInBasket(): number;
    getTotalPricteInBasket(): number;

    // method order
    setItems(): void; // Метод для добавления ID товаров в корзине в поле items для order
    setOrderField(): void;
    validateContacts(): boolean;
    validateOrder(): boolean;
    
    // dumping methods
    clearBasket(): void;
    refreshOrder(): boolean;
    setStore(items: IProduct[]): void;
    resetSelected(): void;

    // method open modal
    // openModal(modal: EnumAppStateModals): void;
}
