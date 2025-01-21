import { ModalScreen } from "./ModalScreen";
import { IOrderData } from "../../../types/components/view/partial/Order";
import { IOrderFormData, IOrderFormSettings } from "../../../types/components/view/screen/OrderFrom";
import { IChangeableEvent, IView } from "../../../types/components/base/View";
import { OrderView } from "../partial/Order";
import { cloneTemplate } from "../../../utils/html";
import { SETTINGS } from "../../../utils/constants";

export class OrderFormScreen extends ModalScreen<IOrderData, IOrderFormData, IOrderFormSettings> {
    initContent() {
        return new OrderView(cloneTemplate(SETTINGS.orderTemplate), {
            ...SETTINGS.orderSettings,
            onChange: this.onFormChange.bind(this)
        });
    }

    protected onFormChange({ value }: IChangeableEvent<IOrderData>) {
        this.settings.onChange(value);
        
        // Логика для активации кнопки "Далее" только если выбраны оба поля
        // const isValid = value.payment && value.address;
        // this.isDisabled = !isValid;
    }
}
