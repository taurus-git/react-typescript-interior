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
            description: "You’ll want to consider your space before choosing a bed frame. If your bedroom is small or you prefer a minimalist silhouette, you can’t get more streamlined than a platform bed frame that is, at its most basic, simply a base for your mattress supported by wooden slats — no box spring required. We’ve also categorized them by other defining characteristics like material and whether they have headboards, an overhead canopy, or storage, for example. Within these types, you’ll see them in updated mid-century modern styles, ones with more traditional iron work, and sleek contemporary options.",
            price: 349.99,
            rate: 4.7,
            category: "Beds",
            oldPrice: 449.38,
            currency: "USD"
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
            description: "Elegant and cozy sofa",
            price: 699.00,
            rate: 4.9,
            category: "Sofas",
            oldPrice: 830.68,
            currency: "USD"
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
            description: "Durable and modern table",
            price: 450.00,
            rate: 4.3,
            category: "Tables",
            oldPrice: 532.08,
            currency: "USD"
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
            description: "Ergonomic and stylish chair",
            price: 289.50,
            rate: 4.5,
            category: "Chairs",
            currency: "USD"
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
            description: "Bright and decorative lamp",
            price: 129.99,
            rate: 4.0,
            category: "Lamps",
            oldPrice: 161.91,
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 199.00,
            rate: 4.2,
            category: "Storage",
            oldPrice: 232.75,
            currency: "USD"
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
            description: "Elegant and warm fireplace",
            price: 899.99,
            rate: 4.8,
            category: "Chimneys",
            oldPrice: 1153.37,
            currency: "USD"
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
            description: "Functional and stylish kitchen furniture",
            price: 750.00,
            rate: 4.6,
            category: "Kitchen",
            currency: "USD"
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
            description: "Outdoor furniture for relaxation",
            price: 299.00,
            rate: 3.9,
            category: "Gardening",
            oldPrice: 378.5,
            currency: "USD"
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
            description: "Stylish home decor",
            price: 79.99,
            rate: 4.4,
            category: "Home",
            oldPrice: 99.48,
            currency: "USD"
        },
        {
            link: "/bedroom",
            src: `${ pathToImages }furniture/furniture_4.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_4.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_4-small.webp`,
                    media: null
                }
            ],
            title: "King Size Bed",
            description: "Comfortable and stylish bed",
            price: 899.99,
            rate: 4.5,
            category: "Beds",
            oldPrice: 1090.31,
            currency: "USD"
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
            description: "Elegant and cozy sofa",
            price: 1250.00,
            rate: 4.7,
            category: "Sofas",
            oldPrice: 1521.47,
            currency: "USD"
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
            description: "Ergonomic and stylish chair",
            price: 349.50,
            rate: 4.3,
            category: "Chairs",
            oldPrice: 433.53,
            currency: "USD"
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
            description: "Durable and modern table",
            price: 675.00,
            rate: 4.8,
            category: "Tables",
            oldPrice: 814.49,
            currency: "USD"
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
            description: "Bright and decorative lamp",
            price: 179.99,
            rate: 4.0,
            category: "Lamps",
            oldPrice: 226.28,
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 499.99,
            rate: 4.6,
            category: "Storage",
            oldPrice: 584.52,
            currency: "USD"
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
            description: "Comfortable and stylish bed",
            price: 149.00,
            rate: 4.2,
            category: "Beds",
            currency: "USD"
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
            description: "Functional and stylish kitchen furniture",
            price: 850.00,
            rate: 4.9,
            category: "Kitchen",
            currency: "USD"
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
            description: "Elegant and warm fireplace",
            price: 599.99,
            rate: 4.4,
            category: "Chimneys",
            currency: "USD"
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
            description: "Outdoor furniture for relaxation",
            price: 399.00,
            rate: 3.9,
            category: "Gardening",
            oldPrice: 455.6,
            currency: "USD"
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
            description: "Durable and modern table",
            price: 249.50,
            rate: 4.1,
            category: "Tables",
            oldPrice: 308.7,
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 329.99,
            rate: 4.3,
            category: "Storage",
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 375.00,
            rate: 4.4,
            category: "Storage",
            oldPrice: 453.49,
            currency: "USD"
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
            description: "Ergonomic and stylish chair",
            price: 199.99,
            rate: 4.2,
            category: "Chairs",
            currency: "USD"
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
            description: "Bright and decorative lamp",
            price: 89.99,
            rate: 3.8,
            category: "Lamps",
            currency: "USD"
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
            description: "Functional and stylish kitchen furniture",
            price: 549.00,
            rate: 4.5,
            category: "Kitchen",
            oldPrice: 606.13,
            currency: "USD"
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
            description: "Stylish home decor",
            price: 59.99,
            rate: 4.0,
            category: "Home",
            oldPrice: 67.87,
            currency: "USD"
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
            description: "Outdoor furniture for relaxation",
            price: 199.50,
            rate: 4.3,
            category: "Gardening",
            oldPrice: 234.04,
            currency: "USD"
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
            description: "Elegant and cozy sofa",
            price: 1499.99,
            rate: 4.7,
            category: "Sofas",
            oldPrice: 1845.64,
            currency: "USD"
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
            description: "Durable and modern table",
            price: 299.99,
            rate: 4.4,
            category: "Tables",
            oldPrice: 377.27,
            currency: "USD"
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
            description: "Bright and decorative lamp",
            price: 129.50,
            rate: 4.1,
            category: "Lamps",
            oldPrice: 144.77,
            currency: "USD"
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
            description: "Comfortable and stylish bed",
            price: 799.00,
            rate: 4.6,
            category: "Beds",
            currency: "USD"
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
            description: "Ergonomic and stylish chair",
            price: 189.00,
            rate: 4.2,
            category: "Chairs",
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 279.99,
            rate: 4.3,
            category: "Storage",
            currency: "USD"
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
            description: "Elegant and warm fireplace",
            price: 799.99,
            rate: 4.8,
            category: "Chimneys",
            currency: "USD"
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
            description: "Ergonomic and stylish chair",
            price: 299.50,
            rate: 4.0,
            category: "Chairs",
            oldPrice: 378.78,
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 199.99,
            rate: 3.9,
            category: "Storage",
            oldPrice: 248.21,
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 649.00,
            rate: 4.5,
            category: "Storage",
            oldPrice: 713.92,
            currency: "USD"
        },
        {
            link: "/garden",
            src: `${ pathToImages }furniture/furniture_9.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }furniture/furniture_9.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }furniture/furniture_9-small.webp`,
                    media: null
                }
            ],
            title: "Patio Chair",
            description: "Outdoor furniture for relaxation",
            price: 149.50,
            rate: 4.2,
            category: "Gardening",
            currency: "USD"
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
            description: "Comfortable and stylish bed",
            price: 499.00,
            rate: 4.1,
            category: "Beds",
            oldPrice: 643.02,
            currency: "USD"
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
            description: "Bright and decorative lamp",
            price: 139.99,
            rate: 4.4,
            category: "Lamps",
            oldPrice: 173.17,
            currency: "USD"
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
            description: "Functional and stylish kitchen furniture",
            price: 229.00,
            rate: 4.3,
            category: "Kitchen",
            oldPrice: 285.77,
            currency: "USD"
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
            description: "Elegant and cozy sofa",
            price: 549.99,
            rate: 4.7,
            category: "Sofas",
            oldPrice: 689.4,
            currency: "USD"
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
            description: "Stylish home decor",
            price: 199.00,
            rate: 4.0,
            category: "Home",
            oldPrice: 223.31,
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 79.99,
            rate: 3.7,
            category: "Storage",
            currency: "USD"
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
            description: "Durable and modern table",
            price: 699.00,
            rate: 4.6,
            category: "Tables",
            currency: "USD"
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
            description: "Durable and modern table",
            price: 429.99,
            rate: 4.2,
            category: "Tables",
            currency: "USD"
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
            description: "Comfortable and stylish bed",
            price: 699.00,
            rate: 4.4,
            category: "Beds",
            oldPrice: 862.94,
            currency: "USD"
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
            description: "Elegant and warm fireplace",
            price: 1299.99,
            rate: 4.9,
            category: "Chimneys",
            oldPrice: 1545.46,
            currency: "USD"
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
            description: "Elegant and cozy sofa",
            price: 599.00,
            rate: 4.5,
            category: "Sofas",
            currency: "USD"
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
            description: "Bright and decorative lamp",
            price: 349.99,
            rate: 4.6,
            category: "Lamps",
            oldPrice: 388.5,
            currency: "USD"
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
            description: "Functional and stylish kitchen furniture",
            price: 799.00,
            rate: 4.3,
            category: "Kitchen",
            oldPrice: 881.24,
            currency: "USD"
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
            description: "Outdoor furniture for relaxation",
            price: 649.99,
            rate: 4.5,
            category: "Gardening",
            oldPrice: 819.27,
            currency: "USD"
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
            description: "Stylish home decor",
            price: 89.00,
            rate: 3.8,
            category: "Home",
            oldPrice: 102.65,
            currency: "USD"
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
            description: "Spacious and modern storage",
            price: 249.99,
            rate: 4.1,
            category: "Storage",
            currency: "USD"
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
            description: "Durable and modern table",
            price: 259.00,
            rate: 4.2,
            category: "Tables",
            oldPrice: 292.99,
            currency: "USD"
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
            description: "Comfortable and stylish bed",
            price: 599.99,
            rate: 4.4,
            category: "Beds",
            oldPrice: 723.58,
            currency: "USD"
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
            description: "Durable and modern table",
            price: 149.00,
            rate: 4.0,
            category: "Tables",
            currency: "USD"
        }
    ]
};

export const promoBanner = {
    className: "promo-banner",
    promoText: "Offers",
    title: "Get Upto 50% Offer On Festival Season!",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaPrimary: {
        path: "/",
        label: "Redeem Now",
        className: "cta-primary"
    },
    backgroundImage: {
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
    },
    cards: [
        {
            //Todo: change to image with keys - values
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
        },
        {
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
        },
        {
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
        },
    ]
}

export const productSlider = {
    className: "product-slider",
    promoText: "Today Deals",
    title: "Unmissable Daily Deals Await: Shop Now and Save!",
    sliderData: {
        slides: [
            {
                link: "/",
                //Todo: change to image with keys - values
                src: `${ pathToImages }furniture/furniture_10.jpeg`,
                srcset: [
                    {
                        src: `${ pathToImages }furniture/furniture_10.webp`,
                        media: WidthMediaQueries.sm
                    },
                    {
                        src: `${ pathToImages }furniture/furniture_10-small.webp`,
                        media: null
                    }
                ],
                title: "Light Grey Chair",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                price: 250.00,
                rate: 4.8,
                category: "Chairs",
                oldPrice: 300.00,
                currency: "USD"
            },
            {
                link: "/",
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
                title: "Dark Grey Chair",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                price: 300.00,
                rate: 4.3,
                category: "Chairs",
                oldPrice: 350.00,
                currency: "USD"

            },
            {
                link: "/",
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
                title: "White Chair",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                price: 450.00,
                rate: 4.8,
                category: "Chairs",
                oldPrice: 530.00,
                currency: "USD"
            },

        ]
    }
}

export const testimonialsSection = {
    className: "testimonials-section",
    promoText: "Testimonials",
    title: "Our Customer Testimonials",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ctaPrimary: {
        path: "/",
        label: "Explore Products",
        className: "cta-primary"
    },
    testimonials: [
        {
            id: 1,
            author: "Ingredia Nutrisha",
            position: "Student, Digital Marketing",
            rate: 5,
            text: "Absolutely love my new sofa! The fabric is soft, the cushions are firm yet comfortable, and it fits perfectly in my living room. The quality exceeded my expectations, and the neutral color blends seamlessly with my decor. Highly recommend!",
            //Todo: change to image with keys - values
            src: `${ pathToImages }human/human_1.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }human/human_1.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }human/human_1.webp`,
                    media: null
                }
            ],
        },
        {
            id: 5,
            author: "Cecil Hipplington-Shoreditch",
            position: "Software Engineer",
            rate: 4,
            text: "The wooden coffee table I bought is fantastic! It has a sleek, modern design with a rustic touch that adds so much character to my space. The craftsmanship is top-notch, and it's super sturdy. Definitely worth every penny!",
            src: `${ pathToImages }human/human_2.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }human/human_2.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }human/human_2.webp`,
                    media: null
                }
            ],
        },
        {
            id: 7,
            author: "Hanson Deck",
            position: "UX/UI Designer",
            rate: 5,
            text: "I purchased a set of decorative wall shelves, and they transformed my living room! They’re minimalistic yet stylish, providing the perfect place to display my books and plants. Installation was easy, and the quality is great!",
            src: `${ pathToImages }human/human_3.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }human/human_3.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }human/human_3.webp`,
                    media: null
                }
            ],
        },
        {
            id: 9,
            author: "Brandon Guidelines",
            position: "Business Analyst",
            rate: 5,
            text: "This area rug is everything I was looking for! It’s soft, plush, and adds warmth to my home. The color and pattern are exactly as pictured, and it ties my furniture together beautifully. Couldn’t be happier with this purchase!",
            src: `${ pathToImages }human/human_4.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }human/human_4.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }human/human_4.webp`,
                    media: null
                }
            ],
        },
        {
            id: 12,
            author: "Niles Peppertrout",
            position: "Content Creator",
            rate: 4,
            text: "The bedside lamps I ordered are stunning! They have a simple, elegant design that creates a cozy atmosphere in my bedroom. The warm light is perfect for reading at night, and the build quality is impressive. Highly recommend for anyone looking to upgrade their bedroom decor!",
            src: `${ pathToImages }human/human_5.jpeg`,
            srcset: [
                {
                    src: `${ pathToImages }human/human_5.webp`,
                    media: WidthMediaQueries.sm
                },
                {
                    src: `${ pathToImages }human/human_5.webp`,
                    media: null
                }
            ],
        },
    ]
}

export const faqSection = {
    className: "faq-section",
    promoText: "FAQ",
    title: "Questions? Look here.",
    faqs: [
        {
            id: 1,
            question: "What materials are used in your furniture?",
            answer: "Our furniture is made from high-quality materials such as solid wood, metal, and premium upholstery fabrics. We ensure durability and style in every piece.",
        },
        {
            id: 2,
            question: "Do you offer free shipping?",
            answer: "Yes, we offer free standard shipping on all orders above $500. Expedited shipping options are also available at an additional cost.",
        },
        {
            id: 3,
            question: "Can I return an item if I don’t like it?",
            answer: "Absolutely! We offer a 30-day return policy. If you're not satisfied, simply return the item in its original condition for a full refund.",
        },
        {
            id: 4,
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive an email with a tracking link. You can also check your order status in your account dashboard.",
        },
        {
            id: 5,
            question: "Do you offer furniture assembly services?",
            answer: "Yes, we provide professional assembly services for select items. You can choose this option at checkout for an additional fee.",
        },
    ],
};

export const subscribeSection = {
    className: "subscribe-section",
    promoText: "Our Newsletter",
    title: "Subscribe to Our Newsletter to Get Updates to Our Latest Furniture",
    quote: "Get 20% off on your first order just by subscribing to our newsletter\n",
}
