import {
    IModalScreenStatusIsActive,
    IModalScreenStatusIsDisabled,
    IModalScreenErrorInfo,
    IModalScreenSettings,
    IModalScreenChangeSettings
} from './ModalScreen';
import { IAddressData } from '../partial/Address';

export interface IAddressFormData 
    extends IModalScreenStatusIsActive, 
        IModalScreenStatusIsDisabled, 
        IModalScreenErrorInfo {
    address: IAddressData;
}

export interface IAddressFormSettings extends IModalScreenSettings, IModalScreenChangeSettings<IAddressData> {}
