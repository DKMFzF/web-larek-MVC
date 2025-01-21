import { ISettings } from '../types/settings';

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

// Настройка приложения
export const SETTINGS: ISettings = {
    modalTemplate: '#modal',
    modalSettings: {
		close: '.modal__close',
		content: '.modal__content',
		activeClass: 'modal_active',
	},
    basketModal: {
        title: 'Корзина',
        nextLabel: 'Оформить',
        nextSettings: ['button', { className: 'button'}],
        totalLabel: 'синапсов'
    }
};
