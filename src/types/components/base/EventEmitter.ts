export type TEventName = string | RegExp; // ключ события (само событие)
export type TSubscriber = Function; // функция при событии (подписщик события)
export type TEmitterEvent = {
    eventName: string,
    data: unknown
};

export interface IEvents {
    on<T extends object>(event: TEventName, callback: (data: T) => void): void;
    off(eventName: TEventName, callback: TSubscriber): void;
    emit<T extends object>(event: string, data?: T): void;
    onAll(callback: (event: TEmitterEvent) => void): void;
    offAll(): void;
    trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}
