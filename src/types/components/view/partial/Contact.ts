import { IChangeable } from '../../base/View';

export interface IContactsData {
    email: string;
    phone: string;
}

export interface IContactsSettings extends IChangeable<IContactsData>{
    phone: string;
    email: string;
}
