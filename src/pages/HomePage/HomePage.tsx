import React from 'react';
import { heroBanner } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";

const HomePage = () => {

    return (
        <>
            <HeroBanner data={ heroBanner }/>
        </>
    );
}

export default HomePage;
