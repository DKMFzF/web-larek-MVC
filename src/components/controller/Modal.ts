import { EnumAppStateModals, IAppState } from "../../types/components/model/AppState";
import { Controller } from "../base/Controller";

export class ModalController extends Controller<IAppState> {
    onClose = () => {
        this.model.openModal(EnumAppStateModals.NONE);
    }
}
