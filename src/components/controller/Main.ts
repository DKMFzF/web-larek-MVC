import { EnumAppStateModals, IAppState } from "../../types/components/model/AppState";
import { Controller } from "../base/Controller";

export class Main extends Controller<IAppState> {
    onOpenBasket = () => {
        this.model.openModal(EnumAppStateModals.BASKET);
    }

    onOpenCardProduct = () => {
        this.model.openModal(EnumAppStateModals.CARD);
    }
}
