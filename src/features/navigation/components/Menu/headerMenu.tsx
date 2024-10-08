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

