import { IChangeable } from '../../base/View'; 

export interface IOrderData {
    address: string;
    email: string;
    phone: string;
    payment: string;
}

export interface IOrderSettings extends IChangeable<IOrderData>{
    address: string;
    email: string;
    phone: string;
    payment: string;
}
