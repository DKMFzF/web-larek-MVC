import { IClickableEvent } from "../../../types/components/base/View";
import { SETTINGS } from "../../../utils/constants";
import { Screen } from '../../base/Screen';
import { ListView } from "../common/List";
import { PageView } from "../partial/Page";
import { ICardData } from "../../../types/components/view/partial/Card";
import { IMainData, IMainSettings } from "../../../types/components/view/screen/Main";
import { CardView } from "../partial/Card";
import { cloneTemplate, ensureElement } from "../../../utils/html";

// Класс основного экрана страницы
export class MainScreen extends Screen<IMainData, IMainSettings> {
    protected declare cards: ListView<ICardData>;
    public declare page: PageView;

    protected init() {
        // создание основного Layout страницы
        this.page = new PageView(ensureElement(SETTINGS.pageSelector), {
            ...SETTINGS.pageSettings,
            onClick: this.settings.onOpenBasket,
        });
        
        // создание списка карточек товаров
        this.cards = new ListView<ICardData>(ensureElement(SETTINGS.gallerySelector), {
            ...SETTINGS.gallerySettings,

            // Клонирует темплейт
            item: new CardView(cloneTemplate(SETTINGS.cardTemplate), {
                ...SETTINGS.cardSettings,
                onClick: this.onSelectProductHandler.bind(this)
            })
        });

        // передаём эелмент, что бы не выбросилась ошибка
        this.element = this.page.element;
    }

    protected onSelectProductHandler({ item }: IClickableEvent<string>) {
		this.settings.onOpenProduct(item);
	}

    set counter(value: number) {
        this.page.counter = value;
    }

    set items(value: ICardData[]) {
        this.cards.items = value;
    }
}
