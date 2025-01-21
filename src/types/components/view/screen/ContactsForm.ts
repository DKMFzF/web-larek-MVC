import { 
	IModalScreenStatusIsActive, 
	IModalScreenStatusIsDisabled,
	IModalScreenErrorInfo,
	IModalScreenSettings,
	IModalScreenChangeSettings
} from './ModalScreen';
import { IContactsData } from '../partial/Contact';

export interface IContactsFormData 
	extends IModalScreenStatusIsActive, 
		IModalScreenStatusIsDisabled, 
		IModalScreenErrorInfo {
	contacts: IContactsData;
}

export interface IContactsFormSettings extends IModalScreenSettings, IModalScreenChangeSettings<IContactsData> {}
