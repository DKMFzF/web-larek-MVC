import './scss/styles.scss';
import { ProductAPI } from './components/model/ProductApi';
import { API_URL, CDN_URL } from './utils/constants';
import { SETTINGS } from './utils/constants';
import { BasketScreen } from './components/view/screen/Basket'; 
import { AppState } from './components/model/AppState';
import { AppStateEmitter } from './components/model/AppStateEmitter';
import { MainScreen } from './components/view/screen/Main';
import { MainController } from './components/controller/Main';
import { EnumAppStateChanges, EnumAppStateModals } from './types/components/model/AppState';
import { BasketController } from './components/controller/Basket';
import { OrderFormScreen } from './components/view/screen/OrderForm';
import { OrderController } from './components/controller/Order';
import { ContactsFormScreen } from './components/view/screen/ContactsForm';
import { ContactsController } from './components/controller/Contacts';
import { SuccessScreen } from './components/view/screen/Success';
import { ModalController } from './components/controller/Modal';
import { PrewiewScreen } from './components/view/screen/ProductViewing';
import { PrewiewController } from './components/controller/PrewiewController';
import { TModalChange } from './types/components/model/AppStateEmitter';

const api = new ProductAPI(CDN_URL, API_URL);
const app = new AppStateEmitter(api, SETTINGS.appState, AppState);
const main = new MainScreen(new MainController(app.model));
const modal = {
    [EnumAppStateModals.BASKET]: new BasketScreen(new BasketController(app.model)),
    [EnumAppStateModals.ORDER]: new OrderFormScreen(new OrderController(app.model)),
    [EnumAppStateModals.CONTACTS]: new ContactsFormScreen(new ContactsController(app.model)),
    [EnumAppStateModals.SUCCESS]: new SuccessScreen(new ModalController(app.model)),
    [EnumAppStateModals.CARD]: new PrewiewScreen(new PrewiewController(app.model))
}

// подписка на продукты
// срабатывает когда изменяется список продуктов
app.on(EnumAppStateChanges.PRODUCTS, () => {
    main.items = Array.from(app.model.products.values());
});

// указываем состояние модального окна
app.on<TModalChange>(EnumAppStateChanges.MODAL, ({ previous, current }) => {
    main.page.isLocked = current !== EnumAppStateModals.NONE;
    if (previous !== EnumAppStateModals.NONE) modal[previous].render({ isActive: false}); // рендеринг окна
});

// срабатывает когда обновляется состояние корзины
// app.on(EnumAppStateChanges.BASKET, () => {
//     main.counter = app.model.basket.size; // вносим изменения в счетчик
    
//     // вносим изменения в саму коризину
//     modal[EnumAppStateModals.BASKET].render({
//         products: Array.from(app.model.basket.values()),
//     });
// });

// console.log(modal[EnumAppStateModals.BASKET]);

// срабатывает когда открывается модальное окно корзины
app.on(EnumAppStateModals.BASKET, () => {
    modal[EnumAppStateModals.BASKET].render({
        products: Array.from(app.model.basket.values()),
        totlal: app.model.formatCurrency(app.model.basketTotal),
        isDisabled: app.model.basket.size === 0,
        isActive: true,
    });
});

// загрузка продуктов
app.model
    .laodProducts()
    // .then(() => {
    //     // app.model.restoreState();
    // })
    .catch((err: string) => console.log(`Error: ${err}`));
