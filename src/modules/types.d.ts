declare global {
    interface Window {
        Shopify: Shopify;
    }
    var theme: {
        strings: Strings;
    };
}

export interface Shopify {
    shop: string;
    locale: string;
    currency: Currency;
    country: string;
    theme: Theme;
    cdnHost: string;
    routes: Routes;
    previewMode: boolean;
    featureAssets: FeatureAssets;
    ce_forms: CeForms;
    captcha: Captcha;
    PaymentButton: PaymentButton;
    analytics: Analytics;
    modules: boolean;
    SignInWithShop: SignInWithShop;
    isHotReloadInstalled: boolean;
}

export interface Currency {
    active: string;
    rate: string;
}

export interface Theme {
    name: string;
    id: number;
    schema_name: string;
    schema_version: string;
    theme_store_id: number;
    role: string;
    handle: string;
    style: Style;
}

export interface Style {
    id: any;
    handle: any;
}

export interface Routes {
    root: string;
}

export interface FeatureAssets {
    'shop-js': ShopJs;
}

export interface ShopJs {
    'shop-cart-sync': string[];
    'init-fed-cm': string[];
    'shop-button': string[];
    'init-windoid': string[];
    avatar: string[];
    'init-shop-email-lookup-coordinator': string[];
    'shop-cash-offers': string[];
    'init-shop-cart-sync': string[];
    'pay-button': string[];
    'shop-toast-manager': string[];
    'checkout-modal': string[];
    'init-customer-accounts-sign-up': string[];
    'shop-login-button': string[];
    'init-shop-for-new-customer-accounts': string[];
    'shop-follow-button': string[];
    'init-customer-accounts': string[];
    'lead-capture': string[];
    'payment-terms': string[];
}

export interface CeForms {
    q: any[];
}

export interface Captcha {}

export interface PaymentButton {
    isStorefrontPortableWallets: boolean;
}

export interface Analytics {
    replayQueue: any[];
}

export interface SignInWithShop {}

export interface Strings {
    addToCart: string;
    unavailable: string;
    addressError: string;
    addressNoResults: string;
    addressQueryLimit: string;
    authError: string;
    addingToCart: string;
    addedToCart: string;
    productPreorder: string;
    addedToCartPopupTitle: string;
    addedToCartPopupItems: string;
    addedToCartPopupSubtotal: string;
    addedToCartPopupGoToCart: string;
    cartTermsNotChecked: string;
    searchLoading: string;
    searchMoreResults: string;
    searchNoResults: string;
    priceFrom: string;
    quantityTooHigh: string;
    onSale: string;
    soldOut: string;
    in_stock: string;
    low_stock: string;
    only_x_left: string;
    single_unit_available: string;
    x_units_available: string;
    unitPriceSeparator: string;
    close: string;
    cart_shipping_calculator_hide_calculator: string;
    cart_shipping_calculator_title: string;
    cart_general_hide_note: string;
    cart_general_show_note: string;
    previous: string;
    next: string;
}
