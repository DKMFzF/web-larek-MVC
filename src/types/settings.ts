import { TElementCreator } from './html';

// типизация для настройки приложения
export interface ISETTINGS {
    // view settings
	gallerySelector: string;
	gallerySettings: {
		activeItemClass: string;
		itemClass: string;
	}

	basketTemplate: string;
	basketSettings: {
		title: string;
		list: string;
		button: string;
		price: string;

		// message: string;

		activeItemClass: string;
		itemClass: string;
	};

	productTemplate: string;
	productSettings: {
		title: string;
		image: string;
		category: string;
		price: string;
		description: string;
		addBasket: string;
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
		cash: string;
		card: string;
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
		image: string;
		category: string;
		price: string;
	};

	// modal settings
	modalTemplate: string;
    modalSettings: {
		close: string; // кнопка закрытия модального окна
		content: string; // контент модального окна
		activeClass: string; // активный класс модального окна
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

	appState: {
		formatCurrency: (value: number) => string;
		storageKey: string;
	}
}
