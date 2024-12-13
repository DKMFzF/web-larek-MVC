// МОДЕЛИ ДАННЫХ

/**
 * Описание полей товара
 */
interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
}

/**
 * Описание полей форм
 */
interface DataBuyer {
    payment: 'online' | 'upon receipt';
    email: string;
    phone: string;
    address: string;
}

/**
 * Описание полей Корзины пользователя
 */
interface Basket {
    items: Product[];
    totalPrice: number;
}

/**
 * Описание полей 
 */
interface MakingOrder {
    success: boolean;
    message: string;
}
