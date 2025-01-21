import { ISettings } from '../types/settings';

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

// Настройка приложения
export const SETTINGS: ISettings = {
    modalTemplate: '#modal',
    modalSettings: {
		close: '.modal__close',
		header: '.modal__header',
		content: '.modal__content',
		footer: '.modal__footer',
		message: '.modal__message',
		activeClass: 'modal_active',
		messageErrorClass: 'modal__message_error',
	},
    basketModal: {
        headerTitle: 'Корзина',
        nextLabel: 'Оформить',
        nextSettings: ['button', { className: 'button'}],
        totalLabel: 'синапсов'
    }
};
