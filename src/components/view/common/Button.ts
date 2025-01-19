import { View } from "../../base/View";
import { IClickableEvent } from '../../../types/components/base/View';
import { TElementCreator } from '../../../types/html';
import { createElement } from '../../../utils/html';
import { 
    IButtonData,
    IButtonSettings
} from '../../../types/components/view/common/Button';

/**
 * @class ButtonView - класс отображения кнопки
 */
export class ButtonView<T> extends View<IButtonData, IButtonSettings<T>> {
    init() {
        this.element.addEventListener('click', this.onClickHandler.bind(this));
    }

    onClickHandler(event: MouseEvent) {
		this.settings.onClick({ event });
	}

    set label(value: string) {
        this.setValue(this.element, value);
    }

    static make<T extends HTMLElement>(
        label: string,
        settings: TElementCreator,
        onClick: (args: IClickableEvent<never>) => void
    ): T {
        const element = new ButtonView(createElement(...settings), { onClick });
        return element.render({ label }) as T;
    }
}
