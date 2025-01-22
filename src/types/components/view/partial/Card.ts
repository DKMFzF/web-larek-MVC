import { IClickable } from "../../base/View";

export interface ICardData {
    id: string;
    title: string;
    price: string;
    cover: string;
    category: string;
}

export interface ICardSettings extends IClickable<string> {
    title: string;
    price: string;
    cover: string;
    category: string;
}