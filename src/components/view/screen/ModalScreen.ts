import { Screen } from '../../base/Screen';
import { cloneTemplate } from '../../../utils/html';
import { SETTINGS } from '../../../utils/constants';
import { TElementCreator } from '../../../types/html';
import { ModalView } from '../common/Modal';
import { ButtonView } from '../common/Button';
import { IView } from '../../../types/components/base/View';
import { IModalScreenSettings } from '../../../types/components/view/screen/ModalScreen';

/**
 * @class ModalScreen - класс управлением реализации модального окна
 * В котором инициализируется основной контент модального окна
 * M - внутренние данные для контента модального окна
 * C - внешние данные для экрана
 * S - настройки экрана (обработчик событий)
 */
export abstract class ModalScreen<M, C, S extends IModalScreenSettings> extends Screen<C, S> {
	protected declare modal: ModalView<M>;
	protected abstract declare nextButton: HTMLButtonElement;
	abstract initContent(): IView<M>;

	protected init() {
		this.modal = this.getModalView({ contentView: this.initContent() }, this.settings.onClose); // инициализация модального окна
		this.element = this.modal.element; // передача заполненного элемента в основной элемент
	}

	protected getNextButton(settings: { nextLabel: string; nextSettings: TElementCreator }, onClick: () => void) {
		return ButtonView.make<HTMLButtonElement>(
			settings.nextLabel, 
			settings.nextSettings, 
			onClick
		);
	}
	
	protected getModalView(settings: { contentView: IView<M> }, onClose: () => void) {
		return new ModalView<M>(cloneTemplate(SETTINGS.modalTemplate), { 
			...SETTINGS.modalSettings, 
			...settings,
			actions: this.nextButton, 
			onClose, 
		});
	}

	set content(value: M) {
		this.modal.content = value;
	}

	set isActive(value: boolean) {
		this.modal.isActive = value;
	}
}
