import { IView } from "../../base/View";
import { IListData } from "../common/List";
import { IProductBasketData } from "./ProductBasket";

export interface IBasketData {
    title: string;
    products: IListData<IProductBasketData>;
    total: string;
}

export interface IBasketSettings<T> {
    title: string;
    basketList: string;
    total: string;
    nextButton: string;

    // isDisabled: boolean;
    // actions: HTMLButtonElement;

    basketListView: IView<T>;
}
