import { Api } from '../base/api';
import { 
    IApiListResponse,
    IProduct,
    IOrder,
    IOrderResult,
    IProductAPI,
    TItemId
} from '../../types/components/model/ProductAPI';

export class ProductAPI extends Api implements IProductAPI {
    readonly cdn: string;

    constructor(cdn: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options);
        this.cdn = cdn;
    }

    async getProducts(): Promise<IProduct[]> {
        const data = await this.get<IApiListResponse<IProduct>>('/product/');
        // console.log(data);
        return data.items;
    }

    async getProduct(id: TItemId): Promise<IProduct> {
        const data = await this.get<IProduct>(`/product/${id}`);
        console.log(data);
        return data;
    }

    async orderProducts(order: IOrder): Promise<IOrderResult[]> {
        const data = await this.post<IApiListResponse<IOrderResult>>(
            '/order',
            order
        );
        return data.items;
    }
}
