import { IClickable } from '../../base/View';

export interface IProductBasketData {
    id: string;
    title: string;
    price: number;
}

export interface IProductBasketSettings extends IClickable<IProductBasketData> {
    title: string;
    price: string;
    delete: string;
}
