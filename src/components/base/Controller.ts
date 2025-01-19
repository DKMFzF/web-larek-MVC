/**
 * @class Controller - Базовый класс для контроллеров
 */
export class Controller<T> {
	constructor(protected model: T) {}
}
