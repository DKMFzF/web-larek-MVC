export interface IProductData {
    id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface IProductSettings {
    id: string;
    title: string;
    category: string;
    description: string;
    price: string;
    imageUrl: string;
    compactClass: string;
	tagsSeparator: string;
	isCompact: boolean;
}
