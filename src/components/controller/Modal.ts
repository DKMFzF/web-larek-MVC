import { EnumAppStateModals, IAppState } from "../../types/components/model/AppState";
import { IModalScreenSettings } from "../../types/components/view/screen/ModalScreen";
import { Controller } from "../base/Controller";

export class ModalController extends Controller<IAppState> implements IModalScreenSettings {
    onClose = () => {
        this.model.openModal(EnumAppStateModals.NONE);
    }
    onNext = () => {
        this.model.openModal(EnumAppStateModals.NONE);
    }
}
