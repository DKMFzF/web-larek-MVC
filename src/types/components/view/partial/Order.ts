import { IChangeable } from '../../base/View';

export interface IOrderData {
    payment: string;
    address: string;
}

export interface IOrderSettings extends IChangeable<IOrderData> {
    payment: string;
    address: string;
}
