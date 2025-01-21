import { TElementCreator } from './html';

// типизация для настройки приложения
export interface ISettings {
    // view settings
	basketTemplate: string;
	basketSettings: {
		activeItemClass: string;
		itemClass: string;
	};

	productBasketTemplate: string;
	productBasketSettings: {
		index: string;
		title: string;
		price: string;
		delete: string;
	};
	
	orderTemplate: string;
	orderSettings: {
		payment: string;
		address: string;
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

	orderModal: {
		nextLabel: string;
		nextSettings: TElementCreator;
	};

	// contactsTemplate: string;
	// contactsSettings: {
	// 	nextLabel: string;
	// 	nextSettings: TElementCreator;
	// } 
}
