import { View } from '../../base/View';
import { IModalData, IModalSettings } from '../../../types/components/view/common/Modal';

/**
 * @class ModalView - Класс реализации отображения модального окна
 */
export class ModalView<C> extends View<IModalData<C>, IModalSettings<C>> {
	protected static _openedModal: ModalView<unknown> | null = null;

	protected init() {
		// TODO: сделать закрытие на клавишу Esc
		this.ensure(this.settings.close).addEventListener('click', this.onCloseHandler.bind(this)); // слушаем клик по иконке закрыть
		this.element.addEventListener('click', this.onCloseHandler.bind(this)); // клик по оверлею тоже закрывает модальное окно
	}

	// метод закрываший модальное окно
	protected onCloseHandler(event?: MouseEvent) {
		// при повторном вызове ensure возвращает элемент из кеша
		if (event && ![this.ensure(this.settings.close), this.element].includes(event.target as HTMLElement)) return;
		this.element.remove();
		this.element.classList.remove(this.settings.activeClass);
		if (event) this.settings.onClose?.();
		// если закрывается текущее модальное окно, то обнуляем статическое поле
		if (ModalView._openedModal === this) ModalView._openedModal = null;
	}

	// метод открытия модального окна
	protected onOpenHandler() {
		if (ModalView._openedModal) ModalView._openedModal.isActive = false;
		ModalView._openedModal = this;
		this.element.classList.add(this.settings.activeClass);
		document.body.append(this.element);
		this.settings.onOpen?.();
	}

	// установка контента в модальное окно TODO: контент не устанавливается
	set content(data: C) {
		this.setValue(this.settings.content, this.settings.contentView.render(data));
	}

	// Открытие и закрытие модального окна
	set isActive(state: boolean) {
		if (state) {
			this.element.classList.add(this.settings.activeClass);
			this.onOpenHandler();
		} else {
			this.element.classList.remove(this.settings.activeClass);
			this.onCloseHandler();
		}
	}
}
