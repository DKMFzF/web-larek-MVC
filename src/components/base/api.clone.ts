// import { ApiMethods } from '../../types/components/base/Api';
// // import { IApiListResponse } from '../../types/components/model/ProductAPI';




// export class Api {
//     readonly baseUrl: string;
//     protected options: RequestInit;

//     constructor(baseUrl: string, options: RequestInit = {}) {
//         this.baseUrl = baseUrl;
//         this.options = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 ...(options.headers as object ?? {})
//             }
//         };
//     }

//     protected handleResponse(response: Response): Promise<object> {
//         if (response.ok) return response.json();
//         else return response.json()
//             .then(data => Promise.reject(data.error ?? response.statusText));
//     }

//     get(uri: string) {
//         return fetch(this.baseUrl + uri, {
//             ...this.options,
//             method: 'GET'
//         }).then(this.handleResponse);
//     }

//     post(uri: string, data: object, method: ApiMethods = 'POST') {
//         return fetch(this.baseUrl + uri, {
//             ...this.options,
//             method,
//             body: JSON.stringify(data)
//         }).then(this.handleResponse);
//     }
// }
