import { HeaderData } from '../common/Header';

export interface SuccessData {
	title: string;
    discription: string;
    
	isActive: boolean;
}

export interface SuccessSettings {
	onClose: () => void;
}
