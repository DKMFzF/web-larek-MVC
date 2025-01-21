import { IChangeable } from '../../base/View';

export interface IOrderData {
    address: string;
    email: string;
}

export interface IOrderSettings extends IChangeable<IOrderData> {
    address: string;
    email: string;
}