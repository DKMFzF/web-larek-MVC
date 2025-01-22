import { IClickable } from "../../base/View";

export interface IProductData {
    title: string;
    category: string;
    description: string;
    price: number;
    cover: string;
}

// interface ProductItem extends IProductData {
//     id: string;
// }

// TODO: может быть не понадодиться 
export interface IProductSettings extends IClickable<IProductData>{
    title: string;
    category: string;
    description: string;
    price: string;
    cover: string;

    addBasket: string;
}
