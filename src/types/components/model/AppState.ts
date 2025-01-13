import {
    IProduct,
    IOrder,
    IProductAPI,
    IContacts,
    TItemId
} from './ProductAPI';

// краткое описание продукта для отображения в корзине
export interface IProductBasket {
    _id: TItemId;
    title: string;
    price: number | null;
}

// все модальные окна страницы
export enum AppStateModals {
    basket = 'modal:basket',
	place = 'modal:adrress',
	contacts = 'modal:contacts',
	success = 'modal:success',
	none = 'modal:none',
}

// Какие изменения состояния приложения могут происходить
export enum AppStateChanges {
	products = 'change:product',
	modal = 'change:modal',
	modalMessage = 'change:modalMessage',
	selectedProduct = 'change:selectedProduct',
    basket = 'change:basket',
    order = 'change:order',
}

// состояние приложения, которое мы будем хранить в localStorage
export interface IPersistedState {
    items: IProductBasket[];
    contacts: IContacts;
}

// модель данных приложения
export interface AppState {
    // загрузка данных с сервера
    products: Map<string, IProduct>;

    // заполнение пользователем данные
    selectedProduct: IProduct | null;
    basket: Map<string, IProductBasket>;
    basketTotal: number;
    contacts: IContacts; // внутренние хранилище
    order: IOrder | null;

    // состояние интрфейса
    openedModal: AppStateModals;
    isOrderReady: boolean;
    modalMessage: string | null;
    isError: boolean;

    // действия с API
    laodProducts(): Promise<void>;

    // действия с localStorage
    restoreState(): void;
    persistState(): void;

    // пользовательские действия
    selectProduct(id: string): void;
	removeProductInBasket(id: string): void;
	fillContacts(contacts: Partial<IContacts>): void;
	isValidContacts(): boolean;

    // Методы для работы с модальными окнами
	openModal(modal: AppStateModals): void;
	setMessage(message: string | null, isError: boolean): void;
}

// Настройка модели данных
export interface AppStateSetting {
    formatCurrency: (value: number) => string;
	storageKey: string;
	// Функция, которая будет вызываться при изменении состояния
	onChange: (changed: AppStateChanges) => void;
}

// Конструктор модели данных
export interface AppStateConstructor {
    new (api: IProductAPI, setting: AppStateSetting): AppState;
}
