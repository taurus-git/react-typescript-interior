import React from 'react';
import {
    heroBanner,
    promoSection,
    infoCards,
    cardGrid,
    productFilter,
    promoBanner,
    productSlider,
    testimonialsSection,
    faqSection
} from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { PromoSection } from "../../components/ui/PromoSection/PromoSection";
import { InfoCards } from "../../components/ui/InfoCards/InfoCards";
import { CardGrid } from "../../components/ui/CardGrid/CardGrid";
import ProductFilter from "../../components/ui/ProductFilter";
import { PromoBanner } from "../../components/ui/PromoBanner/PromoBanner";
import { ProductSlider } from "../../components/ui/ProductSlider/ProductSlider";
import { TestimonialsSection } from "../../components/ui/TestimonialsSection/TestimonialsSection";
import { FaqList } from "../../components/ui/FaqList/FaqList";

const HomePage = () => {
    return (
        <>
            <HeroBanner data={ heroBanner }/>
            <PromoSection data={ promoSection }/>
            <InfoCards data={ infoCards }/>
            <CardGrid data={ cardGrid }/>
            <ProductFilter data={ productFilter }/>
            <PromoBanner data={ promoBanner }/>
            <ProductSlider data={ productSlider }/>
            <TestimonialsSection data={ testimonialsSection }/>
            <FaqList data={ faqSection }/>
        </>
    );
}

export default HomePage;
