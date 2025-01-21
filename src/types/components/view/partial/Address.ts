import { IChangeable } from '../../base/View';

export interface IAddressData {
    address: string;
    email: string;
}

export interface IAddressSettings extends IChangeable<IAddressData> {
    address: string;
    email: string;
}