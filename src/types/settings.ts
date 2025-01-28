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

    // basket
    basketTemplate: string;
    basketSettings: {
        button: string;
        total: string;
        list: string;
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
    productBasketSettings: {
        id: string;
        buttonDelete: string;
    }
}
