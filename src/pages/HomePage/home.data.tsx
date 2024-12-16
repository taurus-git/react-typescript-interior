// home.data.ts
import { WidthMediaQueries } from "../../constants/constants";

const pathToImages = '/assets/images/';

export const heroBanner = {
    className: "hero-banner",
    infoMessage: {
        text: "Award Wining Furniture Store",
        className: "info-message-primary"
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
        className: "video-btn"
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
                link: "",
                src: `${ pathToImages }interior/interior_19.jpeg`,
                srcset: [
                            {
                                src: `${ pathToImages }interior/interior_19.webp`,
                                media: WidthMediaQueries.sm
                            },
                            {
                                src:`${ pathToImages }interior/interior_19-small.webp`,
                                media: null
                            }
                ],
                title: "Living Room",
                description: "250+ Items"
            },
            {
                id: 2,
                link: "",
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
                link: "",
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

export const infoBlocks = [
    {
        className: "features",
        infoMessage: {
            text: "Наши преимущества",
            className: "info-message-secondary"
        },
        title: "Почему выбирают нас",
        blocks: [
            {
                icon: "/icons/quality.svg",
                title: "Качество",
                description: "Гарантия качества на все товары"
            }
        ]
    }
];
