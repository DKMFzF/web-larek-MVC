import { TElementCreator } from './html';

// типизация для настройки приложения
export interface ISettings {
    modalTemplate: string;
    modalSettings: {
		close: string;
		content: string;
		activeClass: string;
	};

	basketModal: {
		title: string;
		nextLabel: string;
		nextSettings: TElementCreator; 
		totalLabel: string;
	};
}
