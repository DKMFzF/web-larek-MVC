import { 
    IEvents, 
    TEventName, 
    TSubscriber, 
    TEmitterEvent 
} from '../../types/components/base/EventEmitter';

/**
 * @class EventEmitter - Брокер событий, классическая реализация
 * В расширенных вариантах есть возможность подписаться на все события
 * или слушать события по шаблону например
 */
export class EventEmitter implements IEvents {
    // внутреннее хранилище событий исключает дублиролвание обработчиков
    _events: Map<TEventName, Set<TSubscriber>>;

    constructor() {
        this._events = new Map<TEventName, Set<TSubscriber>>();
    }

    /**
     * Установить обработчик на событие (подписка на событие)
     * @param eventName - имя события
     * @param callback - обработчик события
     */
    on<T extends object>(eventName: TEventName, callback: (event: T) => void) {
        // проверка на то существует ли событие в карте, если нет то дабовляет
        if (!this._events.has(eventName)) this._events.set(eventName, new Set<TSubscriber>());
        this._events.get(eventName)?.add(callback);
    }

    /**
     * Снять обработчик с события
     * @param eventName - имя события, от куда будем снимать обработчик
     * @param callback - обработчик события, которое хотим снять
     * Проверяем, существует ли событие в карте, если есть, то удалаяем,
     * если у события нет обработчиков, то удаляем и его тоже
     */
    off(eventName: TEventName, callback: TSubscriber) {
        if (this._events.has(eventName)) {
            this._events.get(eventName)!.delete(callback);
            if (this._events.get(eventName)?.size === 0) this._events.delete(eventName);
        }
    }

    /**
     * Вызывает все обработчики, подписанные на событие eventName, с данными data
     * @param eventName - имя события
     * @param data - данные, которые будут переданы в обработчик
     * Как работает: Проходит по всем событиям в _events.
     * Если имя события (name) совпадает с eventName, либо является регулярным выражением, 
     * которое проходит проверку через RegExp.test, вызывает каждый callback из 
     * множества подписчиков. Если подписчик слушает все события ('*'), он тоже будет вызван.
     */
    emit<T extends object>(eventName: string, data?: T) {
        this._events.forEach((subscribers, name) => {
            if (name === '*') subscribers.forEach(callback => callback({ eventName, data }));
            if (name instanceof RegExp && name.test(eventName) || name === eventName) 
                subscribers.forEach(callback => callback(data));
        });
    }

    /**
     * Позволяет подписаться на все события, вне зависимости от их имени
     * @param event - обработчик события
     * Использует метод on, передавая в качестве имени события строку "*". 
     * В методе emit такие подписчики вызываются для всех событий.
     */
    onAll(callback: (event: TEmitterEvent) => void) {
        this.on("*", callback);
    }

    /**
     * Сбросить все обработчики
     */
    offAll() {
        this._events = new Map<string, Set<TSubscriber>>();
    }

    /**
     * Удаляет всех подписчиков для всех событий
     * @param eventName - имя события
     * @param context - контекст, который будет передан в обработчик
     * Просто создаёт новый пустой Map, тем самым сбрасывая всё хранилище подписчиков.
     */
    trigger<T extends object>(eventName: string, context?: Partial<T>) {
        return (event: object = {}) => {
            this.emit(eventName, {
                ...(event || {}),
                ...(context || {})
            });
        };
    }
}
