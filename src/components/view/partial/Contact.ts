import { IContacts } from "../../../types";
import { AppStateComponents } from "../../../utils/constants";
import { IEvents } from "../../base/events";
import { FormView } from "../base/Form";

export class ContactsView extends FormView<IContacts> {
    constructor(container: HTMLFormElement, protected event: IEvents) {
        super(container, event);
    }

    protected onInputChange(field: keyof IContacts, value: string) {
        this.events.emit(AppStateComponents.CONTACT.INPUT, { field, value, })
    }
}
