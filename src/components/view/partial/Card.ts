import { ICardData, ICardSettings } from "../../../types/components/view/partial/Card";
import { View } from "../../base/View";

// реализация карточки продукта на начальном экране
export class CardView extends View<ICardData, ICardSettings> {
    id: string;
    
    init() {
        this.element.addEventListener('click', this.onCLickHandler.bind(this))
    }

    onCLickHandler(event: MouseEvent) {
        this.settings.onClick({ event, item: this.id });
    }

    set cover(value: string) {
        this.setValue<HTMLImageElement>(this.settings.image, { src: value });
    }

    set title(value: string) {
        this.setValue(this.settings.title, value);
        this.setValue<HTMLImageElement>(this.settings.image, { alt: value, });
    }

    set price(value: number) {
        this.setValue(this.settings.price, `${String(value)} синапсов`);
    }

    set category(value: string) {
        this.setValue(this.settings.category, value);
    }
}
