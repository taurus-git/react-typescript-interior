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
                //Todo: change to image with keys - values
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
    promoText: "Benefits",
    title: "What Makes Us the Preferred Choice?",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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

export const cardGrid = {
    className: "card-grid",
    promoText: "Category",
    title: "Discover Our Unique Collection of Exclusive Categories.",
    cards: [
        {
            link: "/office",
            //Todo: change to image with keys - values
            src: `${ pathToImages }interior/interior_12.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_12.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_12-small.webp`,
                    media: null
                }
            ],
            title: "Office",
            description: "350+ Items"
        },
        {
            link: "/",
            src: `${ pathToImages }interior/interior_37.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_37.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_37-small.webp`,
                    media: null
                }
            ],
            title: "Bedroom",
            description: "400+ Items"
        },
        {
            link: "/",
            src: `${ pathToImages }interior/interior_7.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_7.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_7-small.webp`,
                    media: null
                }
            ],
            title: "Living Room",
            description: "150+ Items"
        },
        {
            link: "/kitchen",
            src: `${ pathToImages }interior/interior_26.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_26.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_26-small.webp`,
                    media: null
                }
            ],
            title: "Kitchen",
            description: "450+ Items"
        },

    ]
}

export const productFilter = {
    className: "product-filter",
    promoText: "Best Seller",
    title: "Our Best Seller Products",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cards: [
        {
            link: "/bedroom",
            //Todo: change to image with keys - values
            src: `${ pathToImages }furniture/furniture_12.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_12.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_12-small.webp`,
                    media: null
                }
            ],
            title: "Modern Bedroom",
            description: "280+ Items",
            price: "$349.99",
            rate: 4.7,
            category: "Beds"
        },
        {
            link: "/living-room",
            src: `${ pathToImages }interior/interior_5.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_5.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_5-small.webp`,
                    media: null
                }
            ],
            title: "Cozy Sofa",
            description: "210+ Items",
            price: "$699.00",
            rate: 4.9,
            category: "Sofas"
        },
        {
            link: "/dining",
            src: `${ pathToImages }furniture/furniture_33.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_33.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_33-small.webp`,
                    media: null
                }
            ],
            title: "Dining Set",
            description: "120+ Items",
            price: "$450.00",
            rate: 4.3,
            category: "Tables"
        },
        {
            link: "/office",
            src: `${ pathToImages }interior/interior_18.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_18.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_18-small.webp`,
                    media: null
                }
            ],
            title: "Ergonomic Chair",
            description: "175+ Items",
            price: "$289.50",
            rate: 4.5,
            category: "Chairs"
        },
        {
            link: "/lighting",
            src: `${ pathToImages }furniture/furniture_45.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_45.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_45-small.webp`,
                    media: null
                }
            ],
            title: "Floor Lamp",
            description: "95+ Items",
            price: "$129.99",
            rate: 4.0,
            category: "Lamps"
        },
        {
            link: "/storage",
            src: `${ pathToImages }interior/interior_27.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_27.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_27-small.webp`,
                    media: null
                }
            ],
            title: "Bookshelf",
            description: "150+ Items",
            price: "$199.00",
            rate: 4.2,
            category: "Storage"
        },
        {
            link: "/fireplace",
            src: `${ pathToImages }furniture/furniture_58.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_58.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_58-small.webp`,
                    media: null
                }
            ],
            title: "Modern Fireplace",
            description: "65+ Items",
            price: "$899.99",
            rate: 4.8,
            category: "Chimneys"
        },
        {
            link: "/kitchen",
            src: `${ pathToImages }interior/interior_33.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_33.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_33-small.webp`,
                    media: null
                }
            ],
            title: "Kitchen Set",
            description: "230+ Items",
            price: "$750.00",
            rate: 4.6,
            category: "Kitchen"
        },
        {
            link: "/garden",
            src: `${ pathToImages }furniture/furniture_22.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_22.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_22-small.webp`,
                    media: null
                }
            ],
            title: "Garden Furniture",
            description: "110+ Items",
            price: "$299.00",
            rate: 3.9,
            category: "Gardening"
        },
        {
            link: "/decor",
            src: `${ pathToImages }interior/interior_15.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_15.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_15-small.webp`,
                    media: null
                }
            ],
            title: "Home Accessories",
            description: "320+ Items",
            price: "$79.99",
            rate: 4.4,
            category: "Home"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }furniture/furniture_3.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_3.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_3-small.webp`,
                    media: null
                }
            ],
            title: "King Size Bed",
            description: "85+ Items",
            price: "$899.99",
            rate: 4.5,
            category: "Beds"
        },
        {
            link: "/livingroom",
            src: `${ pathToImages }interior/interior_8.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_8.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_8-small.webp`,
                    media: null
                }
            ],
            title: "Leather Sofa",
            description: "120+ Items",
            price: "$1250.00",
            rate: 4.7,
            category: "Sofas"
        },
        {
            link: "/office",
            src: `${ pathToImages }furniture/furniture_17.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_17.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_17-small.webp`,
                    media: null
                }
            ],
            title: "Office Chair",
            description: "220+ Items",
            price: "$349.50",
            rate: 4.3,
            category: "Chairs"
        },
        {
            link: "/dining",
            src: `${ pathToImages }interior/interior_22.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_22.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_22-small.webp`,
                    media: null
                }
            ],
            title: "Dining Table",
            description: "95+ Items",
            price: "$675.00",
            rate: 4.8,
            category: "Tables"
        },
        {
            link: "/lighting",
            src: `${ pathToImages }furniture/furniture_29.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_29.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_29-small.webp`,
                    media: null
                }
            ],
            title: "Ceiling Lamp",
            description: "135+ Items",
            price: "$179.99",
            rate: 4.0,
            category: "Lamps"
        },
        {
            link: "/storage",
            src: `${ pathToImages }interior/interior_11.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_11.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_11-small.webp`,
                    media: null
                }
            ],
            title: "Wardrobe",
            description: "70+ Items",
            price: "$499.99",
            rate: 4.6,
            category: "Storage"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }furniture/furniture_42.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_42.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_42-small.webp`,
                    media: null
                }
            ],
            title: "Nightstand",
            description: "110+ Items",
            price: "$149.00",
            rate: 4.2,
            category: "Beds"
        },
        {
            link: "/kitchen",
            src: `${ pathToImages }interior/interior_17.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_17.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_17-small.webp`,
                    media: null
                }
            ],
            title: "Kitchen Island",
            description: "45+ Items",
            price: "$850.00",
            rate: 4.9,
            category: "Kitchen"
        },
        {
            link: "/fireplace",
            src: `${ pathToImages }furniture/furniture_56.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_56.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_56-small.webp`,
                    media: null
                }
            ],
            title: "Electric Fireplace",
            description: "30+ Items",
            price: "$599.99",
            rate: 4.4,
            category: "Chimneys"
        },
        {
            link: "/garden",
            src: `${ pathToImages }interior/interior_35.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_35.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_35-small.webp`,
                    media: null
                }
            ],
            title: "Garden Table Set",
            description: "60+ Items",
            price: "$399.00",
            rate: 3.9,
            category: "Gardening"
        },
        {
            link: "/livingroom",
            src: `${ pathToImages }furniture/furniture_8.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_8.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_8-small.webp`,
                    media: null
                }
            ],
            title: "Coffee Table",
            description: "140+ Items",
            price: "$249.50",
            rate: 4.1,
            category: "Tables"
        },
        {
            link: "/office",
            src: `${ pathToImages }interior/interior_25.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_25.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_25-small.webp`,
                    media: null
                }
            ],
            title: "Bookcase",
            description: "85+ Items",
            price: "$329.99",
            rate: 4.3,
            category: "Storage"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }furniture/furniture_23.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_23.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_23-small.webp`,
                    media: null
                }
            ],
            title: "Dresser",
            description: "75+ Items",
            price: "$375.00",
            rate: 4.4,
            category: "Storage"
        },
        {
            link: "/dining",
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
            title: "Dining Chairs",
            description: "110+ Items",
            price: "$199.99",
            rate: 4.2,
            category: "Chairs"
        },
        {
            link: "/lighting",
            src: `${ pathToImages }furniture/furniture_37.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_37.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_37-small.webp`,
                    media: null
                }
            ],
            title: "Table Lamp",
            description: "150+ Items",
            price: "$89.99",
            rate: 3.8,
            category: "Lamps"
        },
        {
            link: "/kitchen",
            src: `${ pathToImages }interior/interior_30.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_30.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_30-small.webp`,
                    media: null
                }
            ],
            title: "Kitchen Cabinet",
            description: "65+ Items",
            price: "$549.00",
            rate: 4.5,
            category: "Kitchen"
        },
        {
            link: "/home",
            src: `${ pathToImages }furniture/furniture_52.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_52.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_52-small.webp`,
                    media: null
                }
            ],
            title: "Wall Decor",
            description: "195+ Items",
            price: "$59.99",
            rate: 4.0,
            category: "Home"
        },
        {
            link: "/garden",
            src: `${ pathToImages }interior/interior_14.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_14.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_14-small.webp`,
                    media: null
                }
            ],
            title: "Garden Bench",
            description: "40+ Items",
            price: "$199.50",
            rate: 4.3,
            category: "Gardening"
        },
        {
            link: "/livingroom",
            src: `${ pathToImages }furniture/furniture_15.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_15.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_15-small.webp`,
                    media: null
                }
            ],
            title: "Sectional Sofa",
            description: "55+ Items",
            price: "$1499.99",
            rate: 4.7,
            category: "Sofas"
        },
        {
            link: "/office",
            src: `${ pathToImages }interior/interior_38.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_38.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_38-small.webp`,
                    media: null
                }
            ],
            title: "Desk",
            description: "130+ Items",
            price: "$299.99",
            rate: 4.4,
            category: "Tables"
        },
        {
            link: "/lighting",
            src: `${ pathToImages }furniture/furniture_61.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_61.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_61-small.webp`,
                    media: null
                }
            ],
            title: "Wall Sconce",
            description: "80+ Items",
            price: "$129.50",
            rate: 4.1,
            category: "Lamps"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }interior/interior_3.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_3.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_3-small.webp`,
                    media: null
                }
            ],
            title: "Queen Bed",
            description: "95+ Items",
            price: "$799.00",
            rate: 4.6,
            category: "Beds"
        },
        {
            link: "/kitchen",
            src: `${ pathToImages }furniture/furniture_48.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_48.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_48-small.webp`,
                    media: null
                }
            ],
            title: "Bar Stools",
            description: "75+ Items",
            price: "$189.00",
            rate: 4.2,
            category: "Chairs"
        },
        {
            link: "/storage",
            src: `${ pathToImages }interior/interior_28.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_28.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_28-small.webp`,
                    media: null
                }
            ],
            title: "TV Stand",
            description: "115+ Items",
            price: "$279.99",
            rate: 4.3,
            category: "Storage"
        },
        {
            link: "/fireplace",
            src: `${ pathToImages }furniture/furniture_25.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_25.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_25-small.webp`,
                    media: null
                }
            ],
            title: "Gas Fireplace",
            description: "25+ Items",
            price: "$799.99",
            rate: 4.8,
            category: "Chimneys"
        },
        {
            link: "/livingroom",
            src: `${ pathToImages }interior/interior_6.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_6.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_6-small.webp`,
                    media: null
                }
            ],
            title: "Accent Chair",
            description: "105+ Items",
            price: "$299.50",
            rate: 4.0,
            category: "Chairs"
        },
        {
            link: "/office",
            src: `${ pathToImages }furniture/furniture_39.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_39.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_39-small.webp`,
                    media: null
                }
            ],
            title: "Filing Cabinet",
            description: "55+ Items",
            price: "$199.99",
            rate: 3.9,
            category: "Storage"
        },
        {
            link: "/dining",
            src: `${ pathToImages }interior/interior_24.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_24.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_24-small.webp`,
                    media: null
                }
            ],
            title: "Buffet Cabinet",
            description: "40+ Items",
            price: "$649.00",
            rate: 4.5,
            category: "Storage"
        },
        {
            link: "/garden",
            src: `${ pathToImages }furniture/furniture_7.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_7.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_7-small.webp`,
                    media: null
                }
            ],
            title: "Patio Chair",
            description: "85+ Items",
            price: "$149.50",
            rate: 4.2,
            category: "Gardening"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }interior/interior_16.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_16.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_16-small.webp`,
                    media: null
                }
            ],
            title: "Twin Bed",
            description: "65+ Items",
            price: "$499.00",
            rate: 4.1,
            category: "Beds"
        },
        {
            link: "/lighting",
            src: `${ pathToImages }furniture/furniture_54.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_54.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_54-small.webp`,
                    media: null
                }
            ],
            title: "Pendant Light",
            description: "95+ Items",
            price: "$139.99",
            rate: 4.4,
            category: "Lamps"
        },
        {
            link: "/kitchen",
            src: `${ pathToImages }interior/interior_21.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_21.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_21-small.webp`,
                    media: null
                }
            ],
            title: "Kitchen Cart",
            description: "50+ Items",
            price: "$229.00",
            rate: 4.3,
            category: "Kitchen"
        },
        {
            link: "/livingroom",
            src: `${ pathToImages }furniture/furniture_31.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_31.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_31-small.webp`,
                    media: null
                }
            ],
            title: "Recliner",
            description: "70+ Items",
            price: "$549.99",
            rate: 4.7,
            category: "Sofas"
        },
        {
            link: "/home",
            src: `${ pathToImages }interior/interior_36.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_36.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_36-small.webp`,
                    media: null
                }
            ],
            title: "Area Rug",
            description: "145+ Items",
            price: "$199.00",
            rate: 4.0,
            category: "Home"
        },
        {
            link: "/storage",
            src: `${ pathToImages }furniture/furniture_19.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_19.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_19-small.webp`,
                    media: null
                }
            ],
            title: "Shoe Rack",
            description: "60+ Items",
            price: "$79.99",
            rate: 3.7,
            category: "Storage"
        },
        {
            link: "/office",
            src: `${ pathToImages }interior/interior_9.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_9.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_9-small.webp`,
                    media: null
                }
            ],
            title: "Executive Desk",
            description: "35+ Items",
            price: "$699.00",
            rate: 4.6,
            category: "Tables"
        },
        {
            link: "/dining",
            src: `${ pathToImages }furniture/furniture_43.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_43.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_43-small.webp`,
                    media: null
                }
            ],
            title: "Counter Height Table",
            description: "45+ Items",
            price: "$429.99",
            rate: 4.2,
            category: "Tables"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }interior/interior_31.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_31.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_31-small.webp`,
                    media: null
                }
            ],
            title: "Bunk Bed",
            description: "30+ Items",
            price: "$699.00",
            rate: 4.4,
            category: "Beds"
        },
        {
            link: "/fireplace",
            src: `${ pathToImages }furniture/furniture_13.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_13.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_13-small.webp`,
                    media: null
                }
            ],
            title: "Stone Fireplace",
            description: "20+ Items",
            price: "$1299.99",
            rate: 4.9,
            category: "Chimneys"
        },
        {
            link: "/livingroom",
            src: `${ pathToImages }interior/interior_4.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_4.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_4-small.webp`,
                    media: null
                }
            ],
            title: "Loveseat",
            description: "50+ Items",
            price: "$599.00",
            rate: 4.5,
            category: "Sofas"
        },
        {
            link: "/lighting",
            src: `${ pathToImages }furniture/furniture_63.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_63.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_63-small.webp`,
                    media: null
                }
            ],
            title: "Chandelier",
            description: "35+ Items",
            price: "$349.99",
            rate: 4.6,
            category: "Lamps"
        },
        {
            link: "/kitchen",
            src: `${ pathToImages }interior/interior_13.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_13.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_13-small.webp`,
                    media: null
                }
            ],
            title: "Dining Set",
            description: "75+ Items",
            price: "$799.00",
            rate: 4.3,
            category: "Kitchen"
        },
        {
            link: "/garden",
            src: `${ pathToImages }furniture/furniture_27.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_27.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_27-small.webp`,
                    media: null
                }
            ],
            title: "Outdoor Sofa",
            description: "40+ Items",
            price: "$649.99",
            rate: 4.5,
            category: "Gardening"
        },
        {
            link: "/home",
            src: `${ pathToImages }interior/interior_29.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_29.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_29-small.webp`,
                    media: null
                }
            ],
            title: "Curtains",
            description: "120+ Items",
            price: "$89.00",
            rate: 3.8,
            category: "Home"
        },
        {
            link: "/storage",
            src: `${ pathToImages }furniture/furniture_59.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_59.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_59-small.webp`,
                    media: null
                }
            ],
            title: "Console Table",
            description: "65+ Items",
            price: "$249.99",
            rate: 4.1,
            category: "Storage"
        },
        {
            link: "/office",
            src: `${ pathToImages }interior/interior_37.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_37.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_37-small.webp`,
                    media: null
                }
            ],
            title: "Computer Desk",
            description: "85+ Items",
            price: "$259.00",
            rate: 4.2,
            category: "Tables"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }furniture/furniture_5.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_5.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_5-small.webp`,
                    media: null
                }
            ],
            title: "Platform Bed",
            description: "60+ Items",
            price: "$599.99",
            rate: 4.4,
            category: "Beds"
        },
        {
            link: "/livingroom",
            src: `${ pathToImages }interior/interior_20.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }interior/interior_20.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }interior/interior_20-small.webp`,
                    media: null
                }
            ],
            title: "Side Table",
            description: "110+ Items",
            price: "$149.00",
            rate: 4.0,
            category: "Tables"
        }
    ]
};

