// import { IHeaderData } from "../../../types/components/view/common/Header";
// import { ISuccessData, ISuccessSettings } from "../../../types/components/view/screen/Success";
// import { SETTINGS } from "../../../utils/constants";
// import { cloneTemplate } from "../../../utils/html";
// import { Screen } from "../../base/Screen";
// import { HeaderView } from "../common/Header";
// import { ModalView } from "../common/Modal";

// export class SuccessScreen extends Screen<ISuccessData, ISuccessSettings> {
//     protected declare _modal: ModalView<IHeaderData>;
    
//     init() {
//         this._modal = new ModalView<IHeaderData>(cloneTemplate(SETTINGS.modalTemplate), {
//             ...SETTINGS.modalSettings,
//             contentView: new HeaderView(cloneTemplate(SETTINGS.messageTemplate), {
//                 ...SETTINGS.messageSettings,
//                 onClick: this.settings.onClose,
//             }),
//             onClose: this.settings.onClose,
//             actions: []
//         });

//         this.element = this._modal.element;
//     }

//     set content(value: IHeaderData) {
//         this._modal.content = value;
//     }

//     set isActive(value: boolean) {
//         this._modal.isActive = value;
//     }
// }
