import { SETTINGS } from "../../../utils/constants";
import { handlePrice } from "../../../utils/utils";
import { View } from "../../base/View";

export interface IProductBasketView {
  index: number;
  title: string;
  price: number | null;
}

export interface IProductItemBasketActions {
  onClick: (event: MouseEvent) => void;
}

export class ProductItemBasket extends View<IProductBasketView> {
  protected _index: HTMLElement;
  protected _title: HTMLElement;
  protected _price: HTMLElement;
  protected _button: HTMLButtonElement;

  constructor(container: HTMLElement, actions?: IProductItemBasketActions) {
    super(container);

    this._title = container.querySelector(SETTINGS.productSettings.title);
    this._index = container.querySelector(SETTINGS.productBasketSettings.id);
    this._price = container.querySelector(SETTINGS.productSettings.price);
    this._button = container.querySelector(SETTINGS.productBasketSettings.buttonDelete);

    if (this._button) this._button.addEventListener('click', (evt) => {
        this.container.remove();
        actions?.onClick(evt);
      });
    }

  set title(value: string) {
    this._title.textContent = value;
  }

  set index(value: number) {
    this._index.textContent = value.toString();
  }

  set price(value: number) {
    this._price.textContent = handlePrice(value) + ' синапсов';
  }
}
