import React from 'react';
import { heroBanner } from "./home.data";
import { HeroBanner } from "../../components/ui/Hero banner/HeroBanner";
import { Heading } from "../../components/ui/Heading/Heading";
import { Row } from "../../components/layout/Grid/Row/Row";
import { Column } from "../../components/layout/Grid/Column/Column";
import { Icon } from "../../components/ui/Icon/Icon";
import { CtaLink } from "../../components/ui/Cta/CtaLink";
import { CtaButton } from "../../components/ui/Cta/CtaButton";

const HomePage = () => {

    const openPopup = () => {
        console.log("click");
    }

    return (
        <>
            <HeroBanner>
                <Row>
                    <Column xs={ 12 } md={ 6 }>
                        <div className={ `hero-banner__info-wrapper ${ heroBanner.infoMessage.className }` }>
                            <span className="hero-banner__icon">
                                <Icon id={ "chair" }/>
                            </span>
                            <p className="hero-banner__info-message">
                                { heroBanner.infoMessage.text }
                            </p>
                        </div>
                        <Heading text={ heroBanner.title }/>
                        <div className="hero-banner__description">
                            { heroBanner.description }
                        </div>
                        <div className="hero-banner__cta-buttons">
                            <CtaLink path={ heroBanner.ctaButtons.ctaPrimary.path }
                                label={ heroBanner.ctaButtons.ctaPrimary.label } />
                            <CtaButton label={heroBanner.videoButton.label}
                                       className={heroBanner.videoButton.className}
                                       onClick={ openPopup }
                                       icon={{id:"play"}}
                            />
                        </div>
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
