import { SlideData } from "../../components/ui/Slider/Slide/Slide";
import { InfoCardData } from "../../components/ui/InfoCards/InfoCard/InfoCard";
import { CardGridCardData } from "../../components/ui/CardGrid/CardGridCard/CardGridCard";
import { ProductCardData } from "../../components/ui/ProductCard";
import { SingleTestimonialsData } from "../../components/ui/TestimonialsSection/TestimonialsBlock";
import { FaqItemData } from "../../components/ui/FaqList/FaqItem";

export interface HeroBannerData {
    className?: string,
    infoMessage?: {
        text?: string,
        className?: string
    },
    title: string,
    description?: string,
    ctaButtons?: {
        ctaPrimary?: {
            path: string,
            label: string,
            className?: string
        },
    },
    videoButton?: {
        label: string,
        className?: string,
        path: string
    },
    counters?:
        {
            title: string,
            description?: string
        }[],
    sliderData: {
        slides: SlideData[]
    }
}

export interface PromoSectionData {
    className?: string,
    promoText: string
}

export interface InfoCardsData {
    className: string,
    promoText?: string,
    title?: string,
    quote?: string,
    cards: InfoCardData[]
}

export interface CardGridData {
    className: string
    promoText: string
    title: string
    cards: CardGridCardData[]
}

export interface ProductFilterData {
    className: string,
    promoText: string,
    title: string,
    quote: string,
    cards: ProductCardData[]
}

export interface PromoBannerCardData {
    src: string,
    srcset?: {
        src: string,
        media: string | null
    }[],
}

export interface PromoBannerData {
    className?: string,
    promoText: string,
    title: string,
    quote?: string,
    ctaPrimary?: {
        path: string,
        label: string,
        className?: string
    },
    backgroundImage?: PromoBannerCardData,
    cards: PromoBannerCardData[]
}

export interface ProductSliderData {
    className?: string,
    promoText: string,
    title: string,
    sliderData: {
        slides: ProductCardData[]
    }
}

export interface TestimonialsSectionData {
    className?: string,
    promoText: string,
    title: string,
    quote?: string,
    ctaPrimary?: {
        path: string,
        label: string,
        className?: string
    },
    testimonials: SingleTestimonialsData[]
}

export interface FaqSectionData {
    className?: string,
    promoText: string,
    title: string,
    faqs: FaqItemData[]
}

export interface SubscribeSectionData {
    className?: string,
    promoText: string,
    title: string,
    quote?: string
}
