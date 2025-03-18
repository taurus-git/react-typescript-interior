export enum Sizes {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
    xxl = 'xxl',
}

export const WidthMediaQueries: Record<Sizes, string> = {
    [ Sizes.xs ]: '(min-width: 480px)',
    [ Sizes.sm ]: '(min-width: 576px)',
    [ Sizes.md ]: '(min-width: 768px)',
    [ Sizes.lg ]: '(min-width: 992px)',
    [ Sizes.xl ]: '(min-width: 1200px)',
    [ Sizes.xxl ]: '(min-width: 1400px)',
}

export enum Styles {
    headerMenuItem = 'header__menu-item',
    footerMenuItem = 'footer__menu-item'
}

export enum NavLinkType {
    External = 'external',
    WithChildren = 'withChildren',
    Default = 'default',
}

export const CurrencySymbols: Record<string, string> = {
    USD: "$",
    EUR: "€"
}

export const PRODUCT_TITLE_MAX_LENGTH = 50;
export const PRODUCT_DESCRIPTION_MAX_LENGTH = 150;

export const UI_TEXTS = {
    BUY_NOW: "Buy now",
    ADD_TO_CART: "Add to cart"
} as const;

export const DEFAULT_FILTER_CATEGORY = 'All';
