import { IClickable } from '../../base/View';

export interface IPageData  {
    counter: number;
    isLocked: boolean;
}

export interface IPageSettings extends IClickable<never> {
    wrapper: string; // обётка для страницы
	counter: string; // счетчик товаров в корзине
	basket: string; // ссылка на корзину
	lockedClass: string; // класс который блокирует страницу
}
