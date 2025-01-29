export interface ISETTINGS {
    // page
    pageSettings: {
        counter: string;
        gallery: string;
        wrapper: string;
        locked: string;
        basket: string;
    }

    // product-card
    productCardPreviewTemplate: string;
    productCardMainTemplate: string;
    productCardBasketTemplate: string;
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

    formSettings: {
        error: string;
        buttonSubmit: string;
    }

    // order
    orderTemplate: string;
    orderSettings: {
        orderMethodPay: {
            card: string;
            cash: string;
            active: string;
        }
    }
}
