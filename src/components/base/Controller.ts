/**
 * @class Controller - Базовый класс для контроллеров
 * Он явяется как бы обёрткой для управления моделью данных
 */
export class Controller<T> {
	constructor(protected model: T) {}
}
