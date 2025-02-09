## Application Architecture 
- MVC (Model-View-Controller) 

## Types of data in the project

### API
#### `IProduct`
The interface describes the product data:
- `id: string' – unique identifier
- `title: string` – product name
- `image: string` – link to the product image
- `category: string' – product category
- `description: string' – product description
- `price: number | null' – the price of the product
- `selected: boolean` – whether the product is selected

#### `IOrderMethod`
Interface for describing the order processing method:
- `payment: string' – payment method
- `address: string' – delivery address

#### `IContacts`
Extends the `IOrderMethod` by adding the user's contact information:
- `email: string' – email address
- `phone: string' – phone number

#### `IOrder`
Expands `IContacts' by adding order details:
- `total: number` – total order amount
- `items: string[]` – list of items in the order

#### `IOrderResult`
API response after placing the order:
- `id: string' – order ID
- `total: number` – the total amount of the order

#### `IProductAPI`
The API interface for working with products and orders:
- `GetProducts(): Promise<IProduct[]>` – getting a list of products
- `getProduct(id: string): Promise<IProduct>` – receiving the product by ID
- `orderProducts(order: IOrder): Promise<IOrderResult[]>` – placing an order

### Form errors
#### `IFormErrors`
Typing errors in the order form:  
`Partial<Record<keyof IOrder, string>>`

#### `IOrderForm`
Structure of the order form:
- `payment: string`
- `address: string`
- `email: string`
- `phone: string`

### Application Status
#### `IAppState`
The interface describes the global state of the application:
- `products: Map<string, IProduct>` – list of products
- `basket: Map<string, IProduct>` – products in the basket
- `basketTotal: number` – the total amount of items in the basket
- `order: IOrder' – order data
- `FormError: IFormErrors' – form errors

Methods:
- **API**:
- `laodProducts(): Promise<IProduct[]>`
- `orderProducts(): Promise<IOrderResult>`
- **Working with the shopping cart**:
- `addProductInBasket(product: IProduct): void`
  - `deleteProductInBasket(id: string): void`
  - `getAmountProductInBasket(): number`
  - `getTotalPriceInBasket(): number`
- **Working with an order**:
- `setOrderItems(): void` – adding product IDs to `items`
  - `setOrderField(field: keyof IOrderForm, value: string): void` – setting the order data
  - `validateContacts(): boolean` – contact validation
- `validateOrder(): boolean' – order validation
- **Reset status**:
- `clearBasket(): void`
  - `refreshOrder(): void`
  - `resetSelected(): void`

### Auxiliary types
#### `ApiListResponse<Type>`
API response with an array of elements:
- `total: number`
- `items: Type[]`

### Events
#### `IEvents`
Interface for working with events:
- `on<T>(event: eventName, callback: (data: T) => void): void` – subscription
- `emit<T>(event: string, data?: T): void` – event generation
- `trigger<T>(event: string, context?: Partial<T>): (data: T) => void` – event trigger

### Display (Views)
#### `IView<T>`
Interface of the basic view:
- `toggleClass(element: HTMLElement, className: string, force?: boolean): void`
- `setDisabled(element: HTMLElement, state: boolean): void`
- `render(data?: Partial<T>): HTMLElement`

#### `IModalDataView`
- `content: HTMLElement' – content of the modal window

#### `IBasketView`
- `list: HTMLElement[]` – list of products in the shopping cart
- `total: number` – total amount

#### `IContactsView`
- `email: string`
- `phone: string`

#### `IOrderMethodView`
- `payment: string`
- `address: string`

#### `IPageView`
- `counter: number`
- `products: HTMLElement[]`
- `locked: boolean`

#### `IProductBasketView`
- `index: number`
- `title: string`
- `price: number | null`

#### `IProductItemBasketActions`
- `onClick(event: MouseEvent): void`

#### `ICardActions`
- `onClick(event: MouseEvent): void`

#### `IProductCardView`
- `id: string`
- `title: string`
- `category: string`
- `description: string`
- `image: string`
- `price: number | null`
- `selected: boolean`

#### `ISuccess`
- `description: number`

#### `ISuccessActions`
- `onClick(event: MouseEvent): void`