import React from 'react';
import { heroBanner, promoSection, infoCards } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { PromoSection } from "../../components/ui/PromoSection/PromoSection";
import { InfoCards } from "../../components/ui/InfoCards/InfoCards";

const HomePage = () => {

    return (
        <>
            <HeroBanner data={ heroBanner }/>
            <PromoSection data={ promoSection }/>
            <InfoCards data={ infoCards }/>
        </>
    );
}

export default HomePage;
