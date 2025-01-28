import { View } from '../../base/View';
import { ensureElement, handlePrice } from '../../../utils/utils';
import { CDN_URL, SETTINGS } from '../../../utils/constants';
import { categoryCheck } from '../../../utils/constants';
import { TCategoryType } from '../../../types';

interface ICardActions {
  onClick: (event: MouseEvent) => void;
}

// типизация отображения
export interface IProductCardView {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number | null;
  selected: boolean;
}

// Общий класс для карточек
export class ProductCardView extends View<IProductCardView> {
  protected _id: string;
  protected _title: HTMLElement;
  protected _image: HTMLImageElement;
  protected _category: HTMLElement;
  protected _price: HTMLElement;
  protected _button: HTMLButtonElement;

  constructor(container: HTMLElement, actions?: ICardActions) {
    super(container);

    this._title = ensureElement<HTMLElement>(SETTINGS.productSettings.title, container);
    this._image = ensureElement<HTMLImageElement>(SETTINGS.productSettings.image, container);
    this._button = container.querySelector(SETTINGS.productSettings.button);
    this._category = container.querySelector(SETTINGS.productSettings.category);
    this._price = container.querySelector(SETTINGS.productSettings.price);

    if (actions?.onClick) {
      if (this._button) this._button.addEventListener('click', actions.onClick);
      else container.addEventListener('click', actions.onClick);
    }
  }

  get id(): string {
    return this.container.dataset.id || '';
  }

  get title(): string {
    return this._title.textContent || '';
  }

  set id(value: string) {
    this.container.dataset.id = value;
  }

  set title(value: string) {
    this._title.textContent = value;
    this._image.alt = value;
  }

  set image(value: string) {
    this._image.src = value;
  }

  set selected(value: boolean) {
    if (!this._button.disabled) this._button.disabled = value;
  }

  set price(value: number | null) {
    this._price.textContent = value ? handlePrice(value) + ' синапсов' : 'Бесценно';
    if (this._button && !value) this._button.disabled = true;
  }

  set category(value: TCategoryType) {
    this._category.textContent = value;
    this._category.classList.add(categoryCheck[value]);
  }
}

// основа для карточки в main page
export class ProductItemView extends ProductCardView {
  constructor(container: HTMLElement, actions?: ICardActions) {
    super(container, actions);
  }
}

// основа для карточки в мадалке превьюшки
export class ProductItemModalView extends ProductCardView {
  protected _description: HTMLElement;

  constructor(container: HTMLElement, actions?: ICardActions) {
    super(container, actions);

    this._description = container.querySelector(SETTINGS.productSettings.text);
  }

  set description(value: string) {
    this._description.textContent = value;
  }
}
