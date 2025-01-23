import { IChangeable } from '../../base/View';

export type TPayment = 'cash' | 'card' | null;
export interface IOrderData {
    payment: TPayment;
    address: string;
}

export interface IOrderSettings extends IChangeable<IOrderData> {
    cash: string;
    card: string;
    address: string;
}
