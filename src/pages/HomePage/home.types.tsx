import { SlideData } from "../../components/ui/Slider/Slide/Slide";

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

export interface promoSectionData {
    className?: string,
    promoText: string
}
