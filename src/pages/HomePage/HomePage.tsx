import React from 'react';
import { heroBanner } from "./home.data"
import { Heading } from "../../components/ui/Heading/Heading";

const HomePage = () => {
    return (
        <section className="hero_banner">
            <div className="container">
                <Heading text={ heroBanner.title }/>
            </div>
        </section>
    );
}

export default HomePage;
