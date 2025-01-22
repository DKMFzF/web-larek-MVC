import { ICardData } from "../partial/Card";

// export interface IProductItem extends IProductData {
//     id: string;
// }

export interface IMainData {
    counter: number;
	items: ICardData[]; // то что будет находиться в галерии
	// selected: IProductItem; 
}

export interface IMainSettings {
    onOpenBasket: () => void; // открытие корзины
    onOpenProduct: (id: string) => void; // открытие карточки товара

    // TODO: это свойство может понадобиться в реализации CardScreen
    // onSelectProduct: (id: string) => void;
}
