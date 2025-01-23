import { EnumAppStateModals } from './AppState';

// Для корректной обработки событий открытия и закрытия модальных окон
// нам нужно знать предыдущее и текущее состояние.
export type TModalChange = {
    previous: EnumAppStateModals;
    current: EnumAppStateModals;
}
