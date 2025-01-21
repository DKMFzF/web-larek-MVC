import { TElementCreator } from './html';

export interface ISettings {
    modalTemplate: string;

    modalSettings: {
		close: string;
		header: string;
		content: string;
		footer: string;
		message: string;
		activeClass: string;
		messageErrorClass: string;
	};
    
	basketModal: {
		headerTitle: string;
		nextLabel: string;
		nextSettings: TElementCreator; 
		totalLabel: string;
	};
}
