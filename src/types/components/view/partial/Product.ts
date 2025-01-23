import { IClickable } from "../../base/View";

export interface IProductData {
    title: string;
    category: string;
    description: string;
    price: number;
    image: string;
}

export interface IProductSettings extends IClickable<IProductData>{
    title: string;
    category: string;
    description: string;
    price: string;
    image: string;
    addBasket: string;
}
