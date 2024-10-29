import React from 'react';
import { heroBanner } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { Heading } from "../../components/ui/Heading/Heading";

const HomePage = () => {
    return (
        <>
            <HeroBanner>
                <div className="hero-banner__left">
                    <Heading text={ heroBanner.title }/>
                </div>
                <div className="hero-banner__right">

                </div>
            </HeroBanner>
        </>
    );
}

export default HomePage;
