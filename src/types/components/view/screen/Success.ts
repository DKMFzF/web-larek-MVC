import { IModalScreenStatusIsActive } from './ModalScreen';

export interface ISuccessData extends IModalScreenStatusIsActive {
	title: string;
    discription: string;
}

// TODO: добавить onNext (или носледовать от IModalScreenSettings)
export interface ISuccessSettings {
	onClose: () => void;
}
