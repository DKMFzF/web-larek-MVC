import { ProductData } from "../partial/Product";

export interface ProductItem extends ProductData {
    id: string;
    cover: string;
}

export interface MainData {
    counter: number;
	items: ProductData[];
	selected: ProductItem;
}

export interface MainSettings {
    onOpenBasket: () => void;
	// onSelectProduct: (id: string) => void;
	onOpenProduct: (id: string) => void;
}
