import { EnumApiMethods, ErrorState } from '../../types/components/base/Api';

export interface IApi {
    get<T>(uri: string, method: string): Promise<T>;
    post<T>(uri: string, data: object, method: string): Promise<T>;
}

export class Api implements IApi {
    readonly baseUrl: string;
    protected _options: RequestInit;

    constructor(baseUrl: string, options: RequestInit = {}) {
        this.baseUrl = baseUrl;
        this._options = {
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers as object ?? {}),
            },
        };
    }

    protected async _handleResponse<T>(response: Response): Promise<T> {
        if (response.ok) return response.json();
        const data = (await response.json()) as ErrorState;
        return Promise.reject(data.error ?? response.statusText);
    }

    async get<T>(uri: string, method = EnumApiMethods.GET): Promise<T> {
        const response = await fetch(this.baseUrl + uri, {
            ...this._options,
            method,
        });
        return this._handleResponse<T>(response);
    }

    async post<T>(uri: string, data: object, method = EnumApiMethods.POST): Promise<T> {
        const response = await fetch(this.baseUrl + uri, {
            ...this._options,
            method,
            body: JSON.stringify(data),
        });
        return this._handleResponse<T>(response);
    }
}
