export interface ISETTINGS {
    // page
    pageSettings: {
        counter: string;
        gallery: string;
        wrapper: string;
        locked: string;
        basket: string;
    }

    // modal
    modalContainer: string;
    modalSettings: {
        activeClass: string;
        close: string;
        content: string;
    }

    // product-card
    productCardPreviewTemplate: string;
    productCardMainTemplate: string;
    productSettings: {
        title: string;
        image: string;
        category: string;
        price: string;
        button: string;
        text: string;
    }
}
