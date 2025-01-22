import { EnumAppStateModals, IAppState } from "../../types/components/model/AppState";
import { TItemId } from "../../types/components/model/ProductAPI";
import { IBasketSettings } from "../../types/components/view/screen/Basket";
import { Controller } from "../base/Controller";
import { AppState } from "../model/AppState";

export class BasketController extends Controller<IAppState> implements IBasketSettings {
    onRemove = (id: TItemId) => {
        this.model.removeProductInBasket(id);
    }

    onNext = () => {
        this.model.openModal(EnumAppStateModals.CONTACTS);
    }

    onClose = () => {
        this.model.openModal(EnumAppStateModals.NONE);
    }
}