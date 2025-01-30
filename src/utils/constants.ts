import { ISETTINGS,  } from '../types/settings';

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

export const AppStateComponents = {
    MODAL: {
        OPEN: 'modal:open',
        CLOSE: 'modal:close',
    },
    PRODUCT: {
        CHANGE: 'products:changed',
        SELECT: 'product:select',
        TO_BASKET: 'product:toBasket'
    },
    BASKET: {
        OPEN: 'basket:open',
        DELETE: 'basket:delete',
        ORDER: 'basket:order',
    },
    ORDER: {
        ERROR: 'orderFormErrors:change',
        INPUT: 'orderInput:change',
        READY: 'order:ready',
        SUBMIT: 'order:submit',
    },
    CONTACT: {
        ERROR: 'contactsFormErrors:change',
        INPUT: 'contactsInput:change',
        READY: 'contacts:ready',
        SUBMIT: 'contacts:submit',
        TO_SUCCESS: 'order:success',
    }
}

// Настройка приложения
export const SETTINGS: ISETTINGS = {
    // main page
    pageSettings: {
        counter: '.header__basket-counter',
        gallery: '.gallery',
        wrapper: '.page__wrapper',
        locked: 'page__wrapper_locked',
        basket: '.header__basket',
    },

    // product-card
    productCardPreviewTemplate: '#card-preview',
    productCardMainTemplate: '#card-catalog',
    productCardBasketTemplate: '#card-basket',
    productSettings: {
        title: '.card__title',
        image: '.card__image',
        category: '.card__category',
        price: '.card__price',
        button: '.card__button',
        text: '.card__text',
    },
    productBasketSettings: {
        id: '.basket__item-index',
        buttonDelete: '.basket__item-delete',
    },

    // basket
    basketTemplate: '#basket',
    basketSettings: {
        button: '.basket__button',
        total: '.basket__price',
        list: '.basket__list',
    },

    // order
    orderTemplate: '#order',
    orderSettings: {
        orderMethodPay: {
            card: 'card',
            cash: 'cash',
            active: 'button_alt-active',
        },
        address: 'input[name="address"]',
    },

    // modal
    modalContainer: '#modal-container', 
    modalSettings: {
        activeClass: 'modal_active',
        content: '.modal__content',
        close: '.modal__close',
    },

    // form-model
    formSettings: {
        error: '.form__errors',
        buttonSubmit: 'button[type=submit]',
    },

    // contacts
    contactsTemplate: '#contacts',

    // success
    successTemplate: '#success',
    successSettings: {
        description: '.order-success__description',
        button: '.order-success__close',
    },

    errorFormText: {
        payment: 'Необходимо указать адресс;',
        address: 'Необходимо указать способ оплаты;',
        email: 'Необходимо указать email;',
        phone: 'Необходимо указать телефон;',
    },
};
