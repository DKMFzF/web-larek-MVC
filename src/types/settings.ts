import { TElementCreator } from './html';

// типизация для настройки приложения
export interface ISettings {
    // view settings
	basketTemplate: string;
	basketSettings: {
		activeItemClass: string;
		itemClass: string;
	};

	productBaksetTemplate: string;
	productBaksetSettings: {
		index: string;
		titel: string;
		price: string;
		delete: string;
	};
	
	// modal settings
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
