import React from 'react';
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { heroBanner } from "./home.data";

const HomePage = () => {
    return (
        <>
            <HeroBanner data={ heroBanner }/>
        </>
    );
}

export default HomePage;
