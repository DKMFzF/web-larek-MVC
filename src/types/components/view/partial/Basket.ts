import { IView } from "../../base/View";
import { IListData } from "../common/List";
import { IProductBasketData } from "./ProductBasket";

export interface IBasketData {
    title: string;
    products: IProductBasketData[];
    total: string;
}

export interface IBasketSettings<T> {
    title: string;
    total: string;
    nextButton: string;
    basketListView: {
        basketList: string;
        basketListContent: IView<T>;
    }
}
