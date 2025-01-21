import { IView } from '../../base/View';

export interface IModalData<C> {
	content: C;
	message?: string;
	isActive: boolean;
	isError?: boolean;
}

export interface IModalSettings<C> {
	close: string;
	content: string;
	contentView: IView<C>;
	actions: HTMLElement[];
	activeClass: string;
	message?: string;
	messageErrorClass?: string;
	onOpen?: () => void;
	onClose?: () => void;
}
