export interface IProductData {
    _id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface IProductSettings {
    _id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
    compactClass: string;
	tagsSeparator: string;
	isCompact: boolean;
}
