// типизация для настройки приложения

// export enum EnumClassProductCategory {
//     OTHER = 'card__category_other',
//     SOFT_SKILS = 'card__category_soft',
//     ADDITIONAL = 'card__category_additional',
//     BUTTON = 'card__category_button',
//     HARD_SKILS = 'card__category_hard'
// }

export interface ISETTINGS {
    cardTemplate: {
        title: string;
        image: string;
        category: string;
        price: string;
    }
}
