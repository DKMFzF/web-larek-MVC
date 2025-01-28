import './scss/styles.scss';
import { 
    API_URL, 
    CDN_URL, 
    SETTINGS,
    AppStateComponents 
} from './utils/constants';
import { ProductAPI } from './components/model/ProductsAPI';
import { EventEmitter } from './components/base/events';
import { cloneTemplate, ensureElement } from './utils/utils';
import { AppState } from './components/model/AppData';
import { PageView } from './components/view/base/Page';
import { ModalView } from './components/view/base/Modal';
import { IProduct } from './types';
import { ProductItemView, ProductItemModalView } from './components/view/partial/ProductCard';

const api = new ProductAPI(CDN_URL, API_URL);
const events = new EventEmitter();
const main = new PageView(document.body, events);
const modal = new ModalView(ensureElement<HTMLElement>(SETTINGS.modalContainer), events);
const app = new AppState({}, events);
const templates = {
    productsTemplate: ensureElement<HTMLTemplateElement>(SETTINGS.productCardMainTemplate),
    cardPreviewTemplate: ensureElement<HTMLTemplateElement>(SETTINGS.productCardPreviewTemplate),
    cardBasketTemplate: ensureElement<HTMLTemplateElement>('#card-basket'),
    basketTemplate: ensureElement<HTMLTemplateElement>('#basket'),
    contactsTemplate: ensureElement<HTMLTemplateElement>('#contacts'),
    successTemplate: ensureElement<HTMLTemplateElement>('#success'),
}

// Получаем данные с сервера
api.getProducts()
    .then(res => app.setProducts(res as IProduct[]))
    .catch(err => console.log(err));

// Изменяем каталог
events.on(AppStateComponents.PRODUCT.CHANGE, () => {
    main.products = app.products.map(item => {
        const product = new ProductItemView(cloneTemplate(templates.productsTemplate), {
            onClick: () => events.emit(AppStateComponents.PRODUCT.SELECT, item)
        });
        return product.render({
            id: item.id,
            title: item.title,
            image: item.image,
            category: item.category,
            price: item.price
        }); 
    })
});

// открытие карточки
events.on(AppStateComponents.PRODUCT.SELECT, (item: IProduct) => {
    main.locked = true;
    const product = new ProductItemModalView(cloneTemplate(templates.cardPreviewTemplate), {
      onClick: () => {
        events.emit(AppStateComponents.PRODUCT.TO_BASKET, item)
      },
    });
    modal.render({
      content: product.render({
        id: item.id,
        title: item.title,
        image: item.image,
        category: item.category,
        description: item.description,
        price: item.price,
        selected: item.selected
      }),
    });
  });

// при закрытии модалки прокрутка разрешается
events.on(AppStateComponents.MODAL.CLOSE, () => {
    main.locked = false;
});
