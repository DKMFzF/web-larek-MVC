import { IProductData } from "../partial/Product";

export interface IProductItem extends IProductData {
    id: string;
    cover: string;
}

export interface IMainData {
    counter: number;
	items: IProductData[];
	selected: IProductItem;
}

export interface IMainSettings {
    onOpenBasket: () => void;
	// onSelectProduct: (id: string) => void;
	onOpenProduct: (id: string) => void;
}
