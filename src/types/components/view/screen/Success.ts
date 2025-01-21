import { IHeaderData } from '../common/Header';
import { IModalScreenStatusIsActive } from './ModalScreen';


export interface ISuccessData extends IModalScreenStatusIsActive {
	content: IHeaderData;
    isActive: boolean;
}

// TODO: добавить onNext (или носледовать от IModalScreenSettings)
export interface ISuccessSettings {
	onClose: () => void;
}
