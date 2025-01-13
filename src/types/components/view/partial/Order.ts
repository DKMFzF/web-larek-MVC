import { IChangeable } from '../../base/View'; 

export interface OrderData {
    address: string;
    email: string;
    phone: string;
    payment: string;
}

export interface OrderSettings extends IChangeable<OrderData>{
    address: string;
    email: string;
    phone: string;
    payment: string;
}
