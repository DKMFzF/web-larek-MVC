
import { Controller } from "../base/Controller";
import { EnumAppStateModals, IAppState } from "../../types/components/model/AppState";
import { IContactsData } from "../../types/components/view/partial/Contact";

export class ContactsController extends Controller<IAppState> {
    onChange = (value: IContactsData) => {
        this.model.fillContacts(value);
    }

    onNext = async () => {
        const productAmount = this.model.basket.size;
        if (this.model.isValidContacts()) {
            const result = await this.model.orderProducts();
            if (result.length === productAmount) {
                this.model.persistState();
                this.model.openModal(EnumAppStateModals.SUCCESS);
            }
        }
    }

    onClose = () => {
        this.model.openModal(EnumAppStateModals.NONE);
    }
}
