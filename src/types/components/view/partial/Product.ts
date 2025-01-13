export interface ProductData {
    _id: string;
    title: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface ProductSettings {
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
