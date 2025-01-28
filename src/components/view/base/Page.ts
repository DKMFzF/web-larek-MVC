import { View } from '../../base/View';
import { IEvents } from '../../base/events';
import { ensureElement } from '../../../utils/utils';
import { SETTINGS, AppStateComponents } from '../../../utils/constants';

/*
  * Интерфейс описывающий страницу
  * */
interface IPageView {
  counter: number; // Счётчик товаров в корзине
  store: HTMLElement[]; // Массив карточек с товарвми
  locked: boolean;   // Отключает прокрутку страницы
}

// Главная страница
export class PageView extends View<IPageView> {
  // Ссылки на внутренние элементы
  protected _counter: HTMLElement;
  protected _store: HTMLElement;
  protected _wrapper: HTMLElement;
  protected _basket: HTMLElement;
  
  // Конструктор принимает родительский элемент и обработчик событий
  constructor(container: HTMLElement, protected events: IEvents) {
    super(container);

    this._counter = ensureElement<HTMLElement>(SETTINGS.pageSettings.counter);
    this._store = ensureElement<HTMLElement>(SETTINGS.pageSettings.gallery);
    this._wrapper = ensureElement<HTMLElement>(SETTINGS.pageSettings.wrapper);
    this._basket = ensureElement<HTMLElement>(SETTINGS.pageSettings.basket);

    this._basket.addEventListener('click', () => {
      this.events.emit(AppStateComponents.BASKET.OPEN);
    });
  }

  // Сеттер для счётчика товаров в корзине
  set counter(value: number) {
    this.setText(this._counter, String(value));
  }

  // Сеттер для карточек товаров на странице
  set products(items: HTMLElement[]) {
    this._store.replaceChildren(...items);
  }

  // Сеттер для блока прокрутки
  set locked(value: boolean) {
    // this._wrapper.classList.toggle(SETTINGS.pageSettings.locked);
    if (value) {
      this._wrapper.classList.add(SETTINGS.pageSettings.locked);
    } else {
      this._wrapper.classList.remove(SETTINGS.pageSettings.locked);
    }
  }
}
