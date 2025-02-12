import React from 'react';
import { heroBanner, promoSection, infoCards, imageGrid } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { PromoSection } from "../../components/ui/PromoSection/PromoSection";
import { InfoCards } from "../../components/ui/InfoCards/InfoCards";
import { ImageGrid } from "../../components/ui/ImageGrid/ImageGrid";

const HomePage = () => {

    return (
        <>
            <HeroBanner data={ heroBanner }/>
            <PromoSection data={ promoSection }/>
            <InfoCards data={ infoCards }/>
            <ImageGrid data={ imageGrid }/>
        </>
    );
}

export default HomePage;
