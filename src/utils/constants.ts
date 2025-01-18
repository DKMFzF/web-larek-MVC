import { Settings } from '../types/settings';

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

// Настройка приложения
export const SETTINGS: Settings = {
    // ...Буду дополнять в реализации...
};
