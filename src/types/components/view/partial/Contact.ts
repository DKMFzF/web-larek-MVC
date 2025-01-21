import { IChangeable } from '../../base/View';

export interface IContactsData {
    phone: string;
    payment: string;
}

export interface IContactsSettings extends IChangeable<IContactsData>{
    phone: string;
    payment: string;
}
