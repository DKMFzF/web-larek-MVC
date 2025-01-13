import { IClickable } from '../../base/View';

export interface CardData {
	_id: string;
    title: string;
    category: string;    
    price: number;
    imageUrl: string;
}

export interface CardSettings extends IClickable<string> {
    title: string;
    category: string;    
    price: number;
    imageUrl: string;
}
