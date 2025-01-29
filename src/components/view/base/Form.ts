import { View } from '../../base/View';
import { IEvents } from '../../base/events';
import { ensureElement } from '../../../utils/utils';
import { SETTINGS } from '../../../utils/constants';

interface IFormStateView {
  valid: boolean;
  errors: string[];
}

export class FormView<T> extends View<IFormStateView> {
  protected _submit: HTMLButtonElement;
  protected _errors: HTMLElement;

  constructor(protected container: HTMLFormElement, protected events: IEvents) {
    super(container);

    this._submit = ensureElement<HTMLButtonElement>(SETTINGS.formSettings.buttonSubmit, this.container);
    this._errors = ensureElement<HTMLElement>(SETTINGS.formSettings.error, this.container);

    // ввод данных
    this.container.addEventListener('input', (evt: Event) => {
      const target = evt.target as HTMLInputElement;
      const field = target.name as keyof T;
      const value = target.value;
      this.onInputChange(field, value);
    });

    // переход на следующую модалку
    this.container.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      this.events.emit(`${this.container.name}:submit`);
    });
  }

  // изменение инпута
  protected onInputChange(field: keyof T, value: string) {}

  set valid(value: boolean) {
    this._submit.disabled = !value;
  }

  set errors(value: string) {
    this.setText(this._errors, value);
  }

  render(state: Partial<T> & IFormStateView) {
    const { valid, errors, ...inputs } = state;
    super.render({ valid, errors });
    Object.assign(this, inputs);
    return this.container;
  }
}
