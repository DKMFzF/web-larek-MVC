import { IClickable } from '../../base/View';

export interface ICardData {
	_id: string;
    title: string;
    category: string;    
    price: number;
    imageUrl: string;
}

export interface ICardSettings extends IClickable<string> {
    title: string;
    category: string;    
    price: number;
    imageUrl: string;
}
