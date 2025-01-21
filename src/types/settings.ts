import { TElementCreator } from './html';

// типизация для настройки приложения
export interface ISettings {
    // view settings
	gallerySelector: string;
	gallerySettings: {
		activeItemClass: string;
		itemClass: string;
	}

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

	contactsTemplate: string;
	contactsSettings: {
		email: string;
		phone: string;
	};

	messageTemplate: string;
	messageSettings: {
		title: string;
		description: string;
		action: string;
	};
	
	pageSelector: string;
	pageSettings: {
		wrapper: string;
		counter: string;
		basket: string;
		lockedClass: string;
	};

	cardTemplate: string;
	cardSettings: {
		title: string;
		imageUrl: string;
		category: string;
		price: string;
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
}
