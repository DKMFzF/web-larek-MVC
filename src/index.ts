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
import { PageView } from './components/view/partial/Page';
import { ModalView } from './components/view/base/Modal';
import { IProduct } from './types';
import { ProductItemView, ProductItemModalView } from './components/view/partial/ProductCard';
import { Basket } from './components/view/partial/Basket';
import { ProductItemBasket } from './components/view/partial/ProductBasket';

const api = new ProductAPI(CDN_URL, API_URL);
const events = new EventEmitter();
const main = new PageView(document.body, events);
const modal = new ModalView(ensureElement<HTMLElement>(SETTINGS.modalContainer), events);
const app = new AppState(api, {}, events);
const templates = {
    productsTemplate: ensureElement<HTMLTemplateElement>(SETTINGS.productCardMainTemplate),
    cardPreviewTemplate: ensureElement<HTMLTemplateElement>(SETTINGS.productCardPreviewTemplate),
    cardBasketTemplate: ensureElement<HTMLTemplateElement>('#card-basket'),
    basketTemplate: ensureElement<HTMLTemplateElement>('#basket'),
    contactsTemplate: ensureElement<HTMLTemplateElement>('#contacts'),
    successTemplate: ensureElement<HTMLTemplateElement>('#success'),
}

// компоненты
const basket = new Basket(cloneTemplate(templates.basketTemplate), events);

// Получаем данные с сервера
app.laodProducts().catch(err => console.log(err));

// Изменяем каталог
events.on(AppStateComponents.PRODUCT.CHANGE, () => {
    main.products = Array.from(app.products.values()).map(item => {
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
  // console.log(item.selected)
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

// добавляем product в basket 
events.on(AppStateComponents.PRODUCT.TO_BASKET, (item: IProduct) => {
    item.selected = true;
    app.addProductInBasket(item);
    app.basketTotal += item.price;
    main.counter = app.getAmountProductInBasket();
    modal.close();
})

// при закрытии модалки прокрутка разрешается
events.on(AppStateComponents.MODAL.CLOSE, () => {
    main.locked = false;
});

// евент на открытие корзины
events.on(AppStateComponents.BASKET.OPEN, () => {
  main.locked = true;
  const basketContent = Array.from(app.basket.values()).map((item, index) => {
    const productInBasket = new ProductItemBasket(cloneTemplate(templates.cardBasketTemplate), {
      onClick: () => events.emit(AppStateComponents.BASKET.DELETE, item)
    })

    return productInBasket.render({
      index: index + 1,
      title: item.title,
      price: item.price,
    })
  });
  
  modal.render({
    content: basket.render({
      list: basketContent,
      total: app.basketTotal
    })
  });
});

events.on(AppStateComponents.BASKET.DELETE, (item: IProduct) => {
  item.selected = false;
  app.basket.delete(item.id);
  main.counter = app.basket.size;
  app.basketTotal -= item.price;
  basket.total = app.basketTotal;
  if (app.basket.size === 0) basket.disableButton();
})
