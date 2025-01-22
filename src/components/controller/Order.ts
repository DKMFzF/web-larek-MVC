import { EnumAppStateModals, IAppState } from "../../types/components/model/AppState";
import { IOrderData } from "../../types/components/view/partial/Order";
import { Controller } from "../base/Controller";

// TODO: скорее всего нужно будет дописать проверки

export class OrderController extends Controller<IAppState> {
    onChange = (value: IOrderData) => {
        this.model.fillOrder(value);
    }

    onNext = () => {
        this.model.openModal(EnumAppStateModals.CONTACTS);
    }
    
    onClose = () => {
        this.model.openModal(EnumAppStateModals.NONE);
    }
}
