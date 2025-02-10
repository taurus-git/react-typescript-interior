// home.data.ts
import { WidthMediaQueries } from "../../constants/constants";

const pathToImages = '/assets/images/';

export const heroBanner = {
    className: "hero-banner",
    infoMessage: {
        text: "Award Wining Furniture Store",
        className: ""
    },
    title: "Make Your Interior Minimalist & Modern",
    description: "Delivering Comfort as a Priority: Quick and Easy Access to a Wide Variety of Furniture.",
    ctaButtons: {
        ctaPrimary: {
            path: "/",
            label: "Get Started",
            className: "cta-primary"
        },
        ctaHero: {
            path: "/",
            label: "Explore Now",
            className: "cta-hero"
        }
    },
    videoButton: {
        onClick: "",
        label: "Watch Video",
        className: "video-btn",
        path: 'https://www.youtube.com/embed/gjPsdqSEvfs?si=moYithd-UKfJR08t'
    },
    counters: [
        {
            title: "450+",
            description: "Collections"
        },
        {
            title: "15K+",
            description: "Customers"
        },
        {
            title: "4.9+",
            description: "Review Rating"
        }
    ],
    sliderData: {
        slides: [
            {
                id: 1,
                link: "/",
                src: `${ pathToImages }interior/interior_19.jpeg`,
                srcset: [
                    {
                        src: `${ pathToImages }interior/interior_19.webp`,
                        media: WidthMediaQueries.sm
                    },
                    {
                        src: `${ pathToImages }interior/interior_19-small.webp`,
                        media: null
                    }
                ],
                title: "Living Room",
                description: "250+ Items"
            },
            {
                id: 2,
                link: "/",
                src: `${ pathToImages }/interior/interior_20.jpeg`,
                srcset: [
                    {
                        src: `${ pathToImages }/interior/interior_20.webp`,
                        media: WidthMediaQueries.sm
                    },
                    {
                        src: `${ pathToImages }/interior/interior_20-small.webp`,
                        media: null
                    }
                ],
                title: "Bedroom",
                description: "1250+ Items"
            },
            {
                id: 3,
                link: "/",
                src: `${ pathToImages }/interior/interior_24.jpeg`,
                srcset: [
                    {
                        src: `${ pathToImages }/interior/interior_24.webp`,
                        media: WidthMediaQueries.sm
                    },
                    {
                        src: `${ pathToImages }/interior/interior_24-small.webp`,
                        media: null
                    }
                ],
                title: "Bathroom",
                description: "700+ Items"
            },
        ]
    }
};

export const promoSection = {
    className: "promo-section",
    promoText: "Explore Now"
}

export const infoCards = {
    className: "info-cards",
    promo: "Benefits",
    heading: "What Makes Us the Preferred Choice?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cards: [
        {
            icon: "wallet-money",
            title: "Easy Payment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon: "percent",
            title: "Promo Offers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon: "delivery",
            title: "Free Delivery",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            icon: "cube",
            title: "Easy Return",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        }
    ]
};
