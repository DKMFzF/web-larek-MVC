import { IClickable } from '../../base/View';

export interface IProductBasketData {
    id: string;
    index: number;
    title: string;
    price: number;
}

export interface IProductBasketSettings extends IClickable<IProductBasketData> {
    index: string;
    title: string;
    price: string;
    delete: string;
}
