import { EnumAppStateModals, IAppState, IProductBasket } from "../../types/components/model/AppState";
import { IProductBasketData } from "../../types/components/view/partial/ProductBasket";
import { IPrewiewScreenSettings } from "../../types/components/view/screen/ProductViewing";
import { Controller } from "../base/Controller";

export class PrewiewController extends Controller<IAppState> implements IPrewiewScreenSettings {
    onClose = () => {
        this.model.openModal(EnumAppStateModals.NONE);
    }

    addInBasket = (product: IProductBasketData) => {
        this.model.addInBasket(this.mapProductBasketDataToModel(product));
    }

    // маппинг IProductBasketData -> IProductBasket 
    // Пояснсю: интрфейсы моделей и отображений не должны пересикаться, по этому
    // я мапплю данные из отображения в модель. Можно было использовать слой
    // Адаптера, но мне в падлу( 
    // Если я не прав, то уничтожте меня аргументами (скорее всего я не прав xD)
    protected mapProductBasketDataToModel(data: IProductBasketData): IProductBasket {
        return {
            id: data.id,
            index: data.index,
            title: data.title,
            price: data.price || null,
        };
    }
}
