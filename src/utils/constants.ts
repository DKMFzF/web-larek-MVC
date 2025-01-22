import { ISETTINGS } from '../types/settings';

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

// TODO: подправить нейминг классов и индификаторов

// Настройка приложения
export const SETTINGS: ISETTINGS = {
    // view settings
    gallerySelector: '.gallery',
	gallerySettings: {
		activeItemClass: 'gallery__item_active',
		itemClass: 'gallery__item',
	},

    cardTemplate: '#card-catalog',
    cardSettings: {
        title: '.card__title',
        category: '.card__category',
        price: '.card__price',
        cover: '.card__image',
    },

    pageSelector: '.page',
	pageSettings: {
		wrapper: '.page__wrapper',
		counter: '.header__basket-counter',
		basket: '.header__basket',
		lockedClass: '.page__wrapper_locked',
	},

    basketTemplate: '#basket',
    basketSettings: {
        activeItemClass: '',
		itemClass: '.basket__item'
    },

    productTemplate: '#card-preview',
	productSettings: {
		title: '.card__title',
		cover: '.card__image',
		category: '.card__category',
		price: '.card__price',
		description: '.card__text',
        addBasket: '.card__button',
	},

    productBasketTemplate: '#card-basket',
	productBasketSettings: {
		index: '.basket__item-index',
		title: '.card__title',
		price: '.card__price',
		delete: '.basket__item-delete',
	},

    orderTemplate: '#order',
	orderSettings: {
        cash: 'button["name"]',
        card: 'button["cash"]',
        address: 'input[name="address"]',
	},
    
    contactsTemplate: '#contacts',
    contactsSettings: {
        email: 'input["email"]',
        phone: 'input["phone"]',
    },

    messageTemplate: '#success',
    messageSettings: {
        title: '.order-success__title',
        description: '.order-success__description',
        action: '.order-success__close',
    },

    // modal settings
    modalTemplate: '#modal',
    modalSettings: {
		close: '.modal__close',
		content: '.modal__content',
		activeClass: '.modal_active',
	},

    basketModal: {
        title: 'Корзина',
        nextLabel: 'Оформить',
        nextSettings: [
            'button', 
            { className: 'button'}
        ],
        totalLabel: 'синапсов'
    },

    orderModal: {
        nextLabel: 'Далее',
        nextSettings: [
            'button',
            { className: 'button' }
        ],
    },

    appState: {
		formatCurrency: (value: number) => `${value} рублей`,
		storageKey: '',
	},
};
