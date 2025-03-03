import { SlideData } from "../../components/ui/Slider/Slide/Slide";
import { InfoCardData } from "../../components/ui/InfoCards/InfoCard/InfoCard";
import { CardGridCardData } from "../../components/ui/CardGrid/CardGridCard/CardGridCard";
import { ProductFilterCardData } from "../../components/ui/ProductFilter/ProductFilterCard/ProductFilterCard";

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
    cards: ProductFilterCardData[]
}
