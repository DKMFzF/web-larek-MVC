export interface IProductData {
    title: string;
    category: string;
    description: string;
    price: number;
    cover: string;
}

export interface IProductSettings {
    title: string;
    category: string;
    description: string;
    price: string;
    cover: string;
    
    // настройки отображения
    compactClass: string;
	tagsSeparator: string;
	isCompact: boolean;
}
