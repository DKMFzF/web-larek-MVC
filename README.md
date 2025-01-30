# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```


## Архитектура приложения 
- MVC (Model-View-Controller) 


## Типы данных в проекте


### base/

# README

## Типы данных в проекте

### API
#### `IProduct`
Интерфейс описывает данные о продукте:
- `id: string` – уникальный идентификатор
- `title: string` – название товара
- `image: string` – ссылка на изображение товара
- `category: string` – категория товара
- `description: string` – описание товара
- `price: number | null` – цена товара
- `selected: boolean` – выбран ли товар

#### `IOrderMethod`
Интерфейс для описания метода оформления заказа:
- `payment: string` – метод оплаты
- `address: string` – адрес доставки

#### `IContacts`
Расширяет `IOrderMethod`, добавляя контактные данные пользователя:
- `email: string` – адрес электронной почты
- `phone: string` – номер телефона

#### `IOrder`
Расширяет `IContacts`, добавляя детали заказа:
- `total: number` – общая сумма заказа
- `items: string[]` – список товаров в заказе

#### `IOrderResult`
Ответ API после оформления заказа:
- `id: string` – идентификатор заказа
- `total: number` – общая сумма заказа

#### `IProductAPI`
Интерфейс API для работы с товарами и заказами:
- `getProducts(): Promise<IProduct[]>` – получение списка товаров
- `getProduct(id: string): Promise<IProduct>` – получение товара по ID
- `orderProducts(order: IOrder): Promise<IOrderResult[]>` – оформление заказа

### Ошибки форм
#### `IFormErrors`
Типизация ошибок формы заказа:  
`Partial<Record<keyof IOrder, string>>`

#### `IOrderForm`
Структура формы заказа:
- `payment: string`
- `address: string`
- `email: string`
- `phone: string`

### Состояние приложения
#### `IAppState`
Интерфейс описывает глобальное состояние приложения:
- `products: Map<string, IProduct>` – список товаров
- `basket: Map<string, IProduct>` – товары в корзине
- `basketTotal: number` – общая сумма товаров в корзине
- `order: IOrder` – данные заказа
- `formError: IFormErrors` – ошибки формы

Методы:
- **API**:
  - `laodProducts(): Promise<IProduct[]>`
  - `orderProducts(): Promise<IOrderResult>`
- **Работа с корзиной**:
  - `addProductInBasket(product: IProduct): void`
  - `deleteProductInBasket(id: string): void`
  - `getAmountProductInBasket(): number`
  - `getTotalPriceInBasket(): number`
- **Работа с заказом**:
  - `setOrderItems(): void` – добавление ID товаров в `items`
  - `setOrderField(field: keyof IOrderForm, value: string): void` – установка данных заказа
  - `validateContacts(): boolean` – валидация контактов
  - `validateOrder(): boolean` – валидация заказа
- **Сброс состояния**:
  - `clearBasket(): void`
  - `refreshOrder(): void`
  - `resetSelected(): void`

### Вспомогательные типы
#### `ApiListResponse<Type>`
Ответ API с массивом элементов:
- `total: number`
- `items: Type[]`

### События
#### `IEvents`
Интерфейс для работы с событиями:
- `on<T>(event: EventName, callback: (data: T) => void): void` – подписка
- `emit<T>(event: string, data?: T): void` – генерация события
- `trigger<T>(event: string, context?: Partial<T>): (data: T) => void` – триггер события

### Отображение (Views)
#### `IView<T>`
Интерфейс базового представления:
- `toggleClass(element: HTMLElement, className: string, force?: boolean): void`
- `setDisabled(element: HTMLElement, state: boolean): void`
- `render(data?: Partial<T>): HTMLElement`

#### `IModalDataView`
- `content: HTMLElement` – содержимое модального окна

#### `IBasketView`
- `list: HTMLElement[]` – список товаров в корзине
- `total: number` – общая сумма

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
