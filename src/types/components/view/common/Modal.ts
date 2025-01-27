import { IView } from '../../base/View';

export interface IModalData<C> {
	content: C;
	isActive: boolean;
}

export interface IModalSettings<C> {
	close: string; // элемент закрытия модального окна
	content: string; // контент
	activeClass: string; // активный класс для открытия

	// отображемый кнтент модального окна
	contentView: IView<C>; // контентное отображение (передаётся в initContent())
	actions: HTMLButtonElement;

	// основные методы для работы с модальным окном
	onOpen?: () => void;
	onClose?: () => void;
}
