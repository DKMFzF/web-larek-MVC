export interface IApiListResponse<Type> {
    items: Type[];
    total: number;
}

export type TItemId = string;
export interface IProduct {
    _id: TItemId;
    title: string;
    image: string;
    category: string;
    description: string;
    price: number | null;
}

type TPaymentMethod = 'online' | 'upon receipt';
interface IOrderMethod {
    payment: TPaymentMethod;
    address: string;
}

export interface IContacts extends IOrderMethod {
    email: string;
    phone: string;
}

export interface IOrder extends IContacts {
    total: number;
    items: TItemId[];
}

export interface IOrderResult {
    items: TItemId;
    total: number;
}

export interface IProductAPI {
    getProducts: () => Promise<IProduct[]>;
	getProduct: (id: TItemId) => Promise<IProduct>;
	orderProducts: (order: IOrder) => Promise<IOrderResult[]>;
}
