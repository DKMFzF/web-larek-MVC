import { EnumAppStateModals } from "../../types/components/model/AppState";
import { TItemId } from "../../types/components/model/ProductAPI";
import { Controller } from "../base/Controller";
import { AppState } from "../model/AppState";

export class BasketController extends Controller<AppState> {
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