export type TSelectorElement<T> = T | string;
export type TSelectorCollection<T> = string | NodeListOf<Element> | T[];

export type TElementChild = HTMLElement | HTMLElement[];

// следующие типы для универсальной настройки тега
export type TElementAttrs =
	| 'textContent'
	| 'className'
	| 'href'
	| 'src'
	| 'alt'
	| 'dataset'
	| 'disabled'; // ограничиваем, что можно настроить

	export type TElementProps<T extends HTMLElement> = Partial<
	Record<keyof T, string | boolean | object>
>; // Partial делает все поля не обязательными

export type TElementValue<T extends HTMLElement> = | string | TElementChild | TElementProps<T>; // получаем такие варианты значения

export type TElementCreator<T extends HTMLElement = HTMLElement> = [keyof HTMLElementTagNameMap, TElementProps<T>];
