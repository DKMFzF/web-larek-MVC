import { EnumAppStateModals, IAppState } from "../../types/components/model/AppState";
import { IOrderData } from "../../types/components/view/partial/Order";
import { IOrderFormSettings } from "../../types/components/view/screen/OrderFrom";
import { Controller } from "../base/Controller";

export class OrderController extends Controller<IAppState> implements IOrderFormSettings {
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
