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
	protected declare modal: ModalView<M>; // Тут будет храниться модальное окно
	
	// кнопка "Далее"
	protected declare nextButton: HTMLButtonElement; // TODO: не рендароиться

	// Абстрактные метод для реализации в дочерних классах
	// реализация initModelScreenContent() для реализации в дочерних классах
	abstract initContent(): IView<M>; // тут будут баскет, ордер и тд. (контент модального окна)

	// Переопределенный init() для инициализации модального окна
	protected init() {

		// Очень странная инициализация
		this.nextButton = this.getNextButton(
			SETTINGS.basketModal,
			this.settings.onNext
		);
		
		this.modal = this.getModalView({ contentView: this.initContent() }, this.settings.onClose); // инициализация модального окна
		
		this.element = this.modal.element;
	}

	// Вспомогательные методы

	// TODO: этот метод должен быть на уровне реализации отбедельных модальных окон
	protected getNextButton(
        settings: { 
			nextLabel: string; 
			nextSettings: TElementCreator 
		},
		onClick: () => void
	) {
		return ButtonView.make<HTMLButtonElement>(
			settings.nextLabel,
			settings.nextSettings,
			onClick
		);
	}

	// клонирование базового модального окна
	protected getModalView(settings: { contentView: IView<M> }, onClose: () => void) {
		return new ModalView<M>(cloneTemplate(SETTINGS.modalTemplate), {
				...SETTINGS.modalSettings,
				...settings,
				onClose,
			}
		);
	}

	// Методы установки данных

	set content(value: M) {
		console.log('ModalScreen -> set content');
		this.modal.content = value;
	}

	set isActive(value: boolean) {
		this.modal.isActive = value;
	}

	// Убраны по причине ненужности
	// set message(value: string) {
	// 	this.modal.message = value;
	// }

	// set isError(value: boolean) {
	// 	this.modal.isError = value;
	// }

	set isDisabled(state: boolean) {
		this.nextButton.disabled = state;
	}
}
