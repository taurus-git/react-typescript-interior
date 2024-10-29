// home.data.ts
export const heroBanner = {
    className: "main-hero",
    infoMessage: {
        text: "Award Wining Furniture Store",
        className: "info-message-primary"
    },
    title: "Make Your Interior Minimalist & Modern",
    description: "Delivering Comfort as a Priority: Quick and Easy Access to a Wide Variety of Furniture.",
    ctaButtons: [
        {
            path: "/",
            title: "Get Started",
            className: "cta-primary"
        },
        {
            path: "/",
            title: "Explore Now",
            className: "cta-hero"
        }
    ],
    videoButton: {
        path: "/",
        title: "Watch Video",
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
                image: "/",
                title: "Living Room",
                description: "250+ Items"
            },
            {
                id: 2,
                image: "/",
                title: "Bedroom",
                description: "1250+ Items"
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
