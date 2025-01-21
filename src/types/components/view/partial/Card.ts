import { IClickable } from '../../base/View';

export interface ICardData {
	id: string;
    title: string;
    category: string;    
    price: number;
    imageUrl: string;
}

export interface ICardSettings extends IClickable<string> {
    title: string;
    category: string;    
    price: string;
    imageUrl: string;
}
