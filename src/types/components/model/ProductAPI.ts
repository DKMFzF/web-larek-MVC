interface IApiListResponse<T> {
    items: T[];
    total: number;
}

type ItemId = string;
interface IProduct {
    _id: ItemId;
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

interface IContacts extends IOrderMethod {
    email: string;
    phone: string;
}

interface IOrder extends IContacts {
    total: number;
    items: ItemId[];
}

interface IOrderResult {
    items: ItemId;
    total: number;
}

interface IProductAPI {
    getProducts: () => Promise<IProduct[]>;
	getProduct: (id: ItemId) => Promise<IProduct>;
	orderProducts: (order: IOrder) => Promise<IOrderResult[]>;
}
