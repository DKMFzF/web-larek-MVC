import { HeaderData } from '../common/Header';
import { ProductData } from '../partial/Product';

export interface BasketData {
    products: ProductData[];
    header: HeaderData;
    isActive: boolean;
    isDisabled: boolean;
    totlal: number;
}

export interface BasketSettings {
    onRemove: (id: string) => void;
    onClose: () => void;
    onNext: () => void;
}
