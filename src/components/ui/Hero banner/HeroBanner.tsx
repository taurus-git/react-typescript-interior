import React from 'react';
import { heroBanner } from "../../../pages/HomePage/home.data";
import { Heading } from "../Heading/Heading";

interface HeroBannerProps {
    data: typeof heroBanner,
}

export const HeroBanner: React.FC<HeroBannerProps> = ( { data } ) => {
    return (
        <section className="hero_banner">
            <div className="container">
                <Heading text={ data.title }/>
            </div>
        </section>
    );
}
