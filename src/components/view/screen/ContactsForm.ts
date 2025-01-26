// import { IContactsData } from "../../../types/components/view/partial/Contact";
// import { IContactsFormData, IContactsFormSettings } from "../../../types/components/view/screen/ContactsForm";
// import { SETTINGS } from "../../../utils/constants";
// import { cloneTemplate } from "../../../utils/html";
// import { ModalScreen } from './ModalScreen';
// import { ContactsView } from '../partial/Contacts';
// import { IChangeableEvent } from "../../../types/components/base/View";

// export class ContactsFormScreen extends ModalScreen<IContactsData, IContactsFormData, IContactsFormSettings> {
//     initContent() {
//         return new ContactsView(cloneTemplate(SETTINGS.contactsTemplate), {
//             ...SETTINGS.contactsSettings,
//             onChange: this.onFormChange.bind(this)
//         });
//     }

//     protected onFormChange({ value }: IChangeableEvent<IContactsData>) {
// 		this.settings.onChange(value);
// 	}

//     set contacts(value: IContactsData) {
//         this.modal.content = value;
//     }
// }
