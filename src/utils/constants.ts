import { Setting } from '../types/settings';

// api const
export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

// flag in dev code (off product code)
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

export const SETTINGS: Setting = {
    // ...
};
