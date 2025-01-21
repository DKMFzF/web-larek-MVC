import {
    TItemId,
    IProduct,
    IContacts,
    IOrder,
    IProductAPI,
    IOrderResult
} from '../../types/components/model/ProductAPI';
import {
    IProductBasket,
    IPersistedState,
    IAppState,
    IAppStateSetting,
    EnumAppStateModals,
    EnumAppStateChanges,
} from '../../types/components/model/AppState';

/**
 * @class AppState - Модель данных приложения
 */
export class AppState implements IAppState {
    private _selectedProduct: string | null = null;
    basket: Map<string, IProductBasket> = new Map<string, IProductBasket>();

    products: Map<string, IProduct> = new Map<string, IProduct>();
    contacts: IContacts = {
        payment: null,
        address: '',
        email: '',
        phone: ''
    }

    openedModal: EnumAppStateModals = EnumAppStateModals.NONE;
    modalMessage: string | null = null;
    isError: boolean = false;

    constructor(protected api: IProductAPI, protected settings: IAppStateSetting) {}

    get basketTotal(): number {
        return Array.from(this.basket.values()).reduce<number>(
            (acc, procuct) => acc + procuct.price,
            0
        );
    }

    get isOrderReady(): boolean {
        return (
            this.basket.size > 0 &&
            !!this.contacts.payment &&
            !!this.contacts.address &&
            !!this.contacts.email &&
            !!this.contacts.phone
        );
    }

    get selectedProduct(): IProduct | null {
        return this._selectedProduct && this.products.has(this._selectedProduct) 
            ? this.products.get(this._selectedProduct)
            : null;
    }

    get order(): IOrder | null {
        return {
             ...this.contacts,
             total: this.basketTotal,
             items: Array.from(this.basket.values()).map((product) => product._id)
        }
    }

    // api
    
    // загрузка продуктов 
    async laodProducts(): Promise<void> {
        this.products.clear();
        const products: IProduct[] = await this.api.getProducts();
        for (const product of products) {
            this.products.set(product._id, product);
        }
        this.notifyChanged(EnumAppStateChanges.PRODUCTS);
    }

    // отправка заказа продукта
    async orderProducts(): Promise<IOrderResult[]> {
        try {
            const result = await this.api.orderProducts(this.order);
            this.basket.clear();
            this.selectProduct(null);
            this.persistState();
            this.notifyChanged(EnumAppStateChanges.BASKET);
            return result;
        } catch (err: unknown) {
            if (err instanceof Error) this.setMessage(err.message, true);
            if (typeof err === 'string') this.setMessage(err, true);
            return [];
        }
    }

    // localStorage in website
    restoreState(): void {
        if (!localStorage || !this.settings.storageKey) return;
        try {
            const state = localStorage.getItem(this.settings.storageKey);
            if (!state) return;
            const { products, contacts } = JSON.parse(state) as IPersistedState;
            this.contacts = contacts;
            this.notifyChanged(EnumAppStateChanges.ORDER);
            this.basket.clear();
            for (const product of products) {
                this.basket.set(product._id, product);
            }
            this.notifyChanged(EnumAppStateChanges.BASKET);
        } catch (err) {
            console.error(`[FAILED TO RESTORE STATE]: ${err}`);
        }
    }

    // website in localStorage
    persistState(): void {
        const state: IPersistedState = {
            products: Array.from(this.basket.values()),
            contacts: this.contacts
        };
        if (localStorage && this.settings.storageKey) {
            localStorage.setItem(this.settings.storageKey, JSON.stringify(state));
        } 
    }

    // user case
    selectProduct(id: TItemId): void {
        if (!id) {
            this._selectedProduct = null;
            this.notifyChanged(EnumAppStateChanges.SELECTED_PRODUCT);
            return;
        }
        if (this.products.has(id)) {
            this._selectedProduct = id;
            this.notifyChanged(EnumAppStateChanges.SELECTED_PRODUCT);
        } else {
            throw new Error(`[INVALIDE PRODUCT ID]: ${id}`);
        }
    }

    removeProductInBasket(id: TItemId): void {
        if (!this.basket.has(id)) throw new Error(`[INVALIDE PRODUCT KEY]: ${id}`);
        this.basket.delete(id);
        this.notifyChanged(EnumAppStateChanges.BASKET);
    }

    fillContacts(contacts: Partial<IContacts>): void {
        this.contacts = {
            ...this.contacts,
            ...contacts
        }
        this.notifyChanged(EnumAppStateChanges.ORDER);
    }

    isValidContacts(): boolean {
        const error = this.validateContacts(this.contacts);
        if (error) {
            this.setMessage(error, true);
            return false;
        } else {
            this.setMessage(null);
            return true;
        }
    }

    setMessage(message: string | null, isError = false): void {
		this.modalMessage = message;
		this.isError = isError;
		this.notifyChanged(EnumAppStateChanges.MODAL_MESSAGE);
	}

    openModal(modal: EnumAppStateModals): void {
        switch (modal) {
            case EnumAppStateModals.CARD:
                if (!this._selectedProduct) throw new Error('[CARD NO SELECTED]');
                break;
            case EnumAppStateModals.ADRRESS:
                if (this.basket.size === 0) throw new Error(`[NO SELECTED PRODUCTS]`);
                break;
            case EnumAppStateModals.CONTACTS:
                if (!this.contacts.address || this.contacts.email) throw new Error(`[NO SELECTED ADRRESS]`);
                break;   
        }

        if (this.openedModal !== modal) {
            this.openedModal = modal;
            this.notifyChanged(EnumAppStateChanges.MODAL);
        }
    }

    // изменение состояния прилоежния
    protected notifyChanged(changed: EnumAppStateChanges): void {
		this.settings.onChange(changed);
	}

    protected validateContacts(contacts: Partial<IContacts>): string | null {
		const errors: string[] = [];
		if (!contacts.email || !contacts.phone) {
			errors.push('Email и телефон обязательные поля');
		}
		if (
			contacts.email &&
			!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(contacts.email)
		) {
			errors.push('Некорректный email');
		}
		if (contacts.phone && !/^\+?[0-9]{10,14}$/.test(contacts.phone)) {
			errors.push('Некорректный телефон');
		}
		if (errors.length) {
			return errors.join('. ') + '.';
		}
		return null;
	}
}
