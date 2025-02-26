import React from 'react';
import { heroBanner, promoSection, infoCards, cardGrid } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { PromoSection } from "../../components/ui/PromoSection/PromoSection";
import { InfoCards } from "../../components/ui/InfoCards/InfoCards";
import { CardGrid } from "../../components/ui/CardGrid/CardGrid";

const HomePage = () => {

    return (
        <>
            <HeroBanner data={ heroBanner }/>
            <PromoSection data={ promoSection }/>
            <InfoCards data={ infoCards }/>
            <CardGrid data={ cardGrid }/>
        </>
    );
}

export default HomePage;
