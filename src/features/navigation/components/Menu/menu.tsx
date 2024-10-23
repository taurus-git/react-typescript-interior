import { NavItem, SubmenuNav } from "../../types/navigationInterfaces";

export const headerMenu: (NavItem | SubmenuNav) [] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    {
        label: "Shop", submenu: [
            { label: "Bed Room", path: "/bed-room" },
            { label: "Living Room", path: "/living-room" },
        ]
    },
    { label: "Testimonial", path: "/testimonial" },
    {
        label: "Design",
        path: "https://www.behance.net/gallery/177117851/Furniture-Store-Ecommerce-Website-Landing-Page-UI",
    },
    { label: "Blog", path: "/blog" },
    { label: "Contact us", path: "/contact-us" },
];

export const footerMenu: {
    company: NavItem[],
    shop: NavItem [],
    support: NavItem [],
    faq: NavItem [],
} = {
    company: [
        { label: "About Us", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Careers", path: "/careers" },
        { label: "Our Team", path: "/our-team" },
        { label: "Help Center", path: "/help-center" },
    ],
    shop: [
        { label: "Gift Cards", path: "/gift-cards" },
        { label: "Our Products", path: "/products" },
        { label: "My Account", path: "/my-account" },
        { label: "Shipping", path: "/shipping" },
        { label: "Returns", path: "/returns" },
    ],
    support: [
        { label: "Contact Us", path: "/contact-us" },
        { label: "Payment Options", path: "/payment-options" },
        { label: "Store Locator", path: "/store-locator" },
        { label: "Accessibility", path: "/accessibility" },
        { label: "Affiliates", path: "/affiliates" },
    ],
    faq: [
        { label: "Rewards FAQ", path: "/rewards-faq" },
        { label: "Product Care", path: "/product-care" },
        { label: "Size Guide", path: "/size-guide" },
    ],
}
