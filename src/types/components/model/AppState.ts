import {
    IProduct,
    IOrder,
    IProductAPI,
    IContacts,
    TItemId,
    IOrderResult,
    IOrderMethod
} from './ProductAPI';

// краткое описание продукта для отображения в корзине
export interface IProductBasket {
    _id: TItemId;
    title: string;
    price: number | null;
}

// все модальные окна страницы
export enum EnumAppStateModals {
    CARD = 'modal:card',
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

// состояние приложения, которое мы будем хранить в localStorage
export interface IPersistedState {
    products: IProductBasket[];
    contacts: IContacts;
}

// модель данных приложения
export interface IAppState {
    // загрузка данных с сервера
    products: Map<string, IProduct>;

    // заполнение пользователем данные
    // selectedProduct: IProduct | null;
    basket: Map<string, IProductBasket>;
    basketTotal: number;
    contacts: IContacts; // внутренние хранилище
    order: IOrder | null;

    // состояние интрфейса
    openedModal: EnumAppStateModals;
    isOrderReady: boolean;
    modalMessage: string | null;
    isError: boolean;

    // действия с API
    laodProducts(): Promise<void>;
    orderProducts(): Promise<IOrderResult[]>;

    // действия с localStorage
    restoreState(): void;
    persistState(): void;

    // пользовательские действия
    addInBasket(product: IProductBasket): void;
	removeProductInBasket(id: TItemId): void;
    fillOrder(order: Partial<IOrderMethod>): void
	fillContacts(contacts: Partial<IContacts>): void;
	isValidContacts(): boolean;

    // Методы для работы с модальными окнами
	openModal(modal: EnumAppStateModals): void;
	setMessage(message: string | null, isError: boolean): void;
}

// Настройка модели данных
export interface IAppStateSetting {
    formatCurrency: (value: number) => string;
	storageKey: string;
	// Функция, которая будет вызываться при изменении состояния
	onChange: (changed: EnumAppStateChanges) => void;
}

// Конструктор модели данных
export interface IAppStateConstructor {
    new (api: IProductAPI, setting: IAppStateSetting): IAppState;
}
