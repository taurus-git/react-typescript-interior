import React from 'react';
import { heroBanner, promoSection } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { PromoSection } from "../../components/ui/PromoSection/PromoSection";

const HomePage = () => {

    return (
        <>
            <HeroBanner data={ heroBanner }/>
            <PromoSection data={ promoSection }/>
        </>
    );
}

export default HomePage;
