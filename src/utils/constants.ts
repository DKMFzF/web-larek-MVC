import { TCategoryType } from '../types';
import { ISETTINGS,  } from '../types/settings';

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

export const categoryCheck: Record<TCategoryType, string> = {
    'другое': 'card__category_other',
    'софт-скил': 'card__category_soft',
    'дополнительное': 'card__category_additional',
    'кнопка': 'card__category_button',
    'хард-скил': 'card__category_hard',
}

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
        OPEN: 'basket:open'
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

    // modal
    modalContainer: '#modal-container', 
    modalSettings: {
        activeClass: 'modal_active',
        content: '.modal__content',
        close: '.modal__close',
    },

    // product-card
    productCardPreviewTemplate: '#card-preview',
    productCardMainTemplate: '#card-catalog',
    productSettings: {
        title: '.card__title',
        image: '.card__image',
        category: '.card__category',
        price: '.card__price',
        button: '.card__button',
        text: '.card__text',
    },
};
