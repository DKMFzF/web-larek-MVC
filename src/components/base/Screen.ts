import { View } from './View';

// доавляен для удобства отображения элементов,
// в которых нужна функциональность View
export abstract class Screen<T, S extends object> extends View<T, S> {
	constructor(settings: S) {
		super(null, settings);
	}
}
