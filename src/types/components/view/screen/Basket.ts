import { IHeaderData } from '../common/Header';
import { IProductData } from '../partial/Product';

export interface IBasketData {
    products: IProductData[];
    header: IHeaderData;
    isActive: boolean;
    isDisabled: boolean;
    totlal: number;
}

export interface IBasketSettings {
    onRemove: (id: string) => void;
    onClose: () => void;
    onNext: () => void;
}
