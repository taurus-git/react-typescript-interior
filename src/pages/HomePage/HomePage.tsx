import React from 'react';
import { heroBanner } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { Heading } from "../../components/ui/Heading/Heading";
import { Row } from "../../components/layout/Grid/Row/Row";
import { Column } from "../../components/layout/Grid/Column/Column";

const HomePage = () => {
    return (
        <>
            <HeroBanner>
                <Row>
                    <Column xs={ 12 } md={ 6 }>
                        <Heading text={ heroBanner.title }/>
                    </Column>
                    <Column>
                        2 column text value
                    </Column>
                </Row>
            </HeroBanner>
        </>
    );
}

export default HomePage;
