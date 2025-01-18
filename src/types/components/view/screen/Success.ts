// import { HeaderData } from '../common/Header';

export interface ISuccessData {
	title: string;
    discription: string;
    
	isActive: boolean;
}

export interface ISuccessSettings {
	onClose: () => void;
}
