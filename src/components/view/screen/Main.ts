import { IClickableEvent } from "../../../types/components/base/View";
import { SETTINGS } from "../../../utils/constants";
import { Screen } from '../../base/Screen';
import { ListView } from "../common/List";
import { PageView } from "../partial/Page";
import { ICardData } from "../../../types/components/view/partial/Card";
import { IMainData, IMainSettings, IProductItem } from "../../../types/components/view/screen/Main";
import { CardView } from "../partial/Card";

// Класс основного экрана страницы
export class MainScreen extends Screen<IMainData, IMainSettings> {
    protected declare cards: ListView<ICardData>;
    public declare page: PageView;

    protected init() {
        // создание основного Layout страницы
        this.page = new PageView(this.ensureTemplate(SETTINGS.pageSelector), {
            ...SETTINGS.pageSettings,
            onClick: this.settings.onOpenBasket,
        });

        // создание списка карточек товаров
        this.cards = new ListView<ICardData>(this.ensureTemplate(SETTINGS.gallerySelector), {
            ...SETTINGS.gallerySettings,
            item: new CardView(this.ensureTemplate(SETTINGS.cardTemplate), {
                ...SETTINGS.cardSettings,
                onClick: this.onSelectProductHandler.bind(this)
            })
        });
    }

    protected onSelectProductHandler({ item }: IClickableEvent<string>) {
		this.settings.onOpenProduct(item);
	}

    set counter(value: string) {
        this.page.counter = value;
    }

    set items(value: ICardData[]) {
        this.cards.items = value;
    }

    set selected(value: IProductItem) {
        this.cards.setActiveItem(value.id);
    }
}
