export enum EnumApiMethods {
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
	GET = 'GET',
}

export type TErrorState = {
	error: string;
};

export interface IApi {
    get<T>(uri: string, method: string): Promise<T>;
    post<T>(uri: string, data: object, method: string): Promise<T>;
}
