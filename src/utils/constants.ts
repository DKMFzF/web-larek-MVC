import { TCategoryType } from '../types';
import { ISETTINGS } from '../types/settings';

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

// Настройка приложения
export const SETTINGS: ISETTINGS = {
    productCard: {
        title: '.card__title',
        image: '.card__image',
        category: '.card__category',
        price: '.card__price',
        button: '.card__button',
        text: '.card__text',
    },
};
