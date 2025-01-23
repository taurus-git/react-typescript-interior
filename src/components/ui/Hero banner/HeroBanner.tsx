import React, { useContext } from 'react';
import "./hero-banner.css";
import { heroBanner } from '../../../pages/HomePage/home.data'
import { Column } from "../../layout/Grid/Column/Column";
import { Icon } from "../Icon/Icon";
import { Heading } from "../Heading/Heading";
import { CtaLink } from "../Cta/CtaLink";
import { CtaButton } from "../Cta/CtaButton";
import { Popup } from "../Popup/Popup";
import { Row } from "../../layout/Grid/Row/Row";
import { MainContext } from "../../../context/MainContext";
import { Slider } from "../Slider/Slider";

interface HeroBannerProps {
    data: typeof heroBanner;
    className?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ( { data, className } ) => {
    const { isPopupOpen, openPopup, closePopup } = useContext( MainContext ).popup


    return (
        <section className={ `hero-banner ${ className || '' }` }>
            <div className="container">
                <div className="hero-banner__content">
                    <Row>
                        <Column xs={ 12 } md={ 6 }>
                            <div className={ `hero-banner-message ${ data.infoMessage.className }` }>
                                <span className="hero-banner-message__icon">
                                    <Icon id={ "chair" }/>
                                </span>
                                <span className="hero-banner__text">
                                    { data.infoMessage.text }
                                </span>
                            </div>
                            <Heading text={ data.title }/>
                            <div className="hero-banner__description">
                                { data.description }
                            </div>
                            <div className="hero-banner__cta-buttons">
                                <CtaLink path={ data.ctaButtons.ctaPrimary.path }
                                         label={ data.ctaButtons.ctaPrimary.label }/>
                                <CtaButton label={ data.videoButton.label }
                                           className={ data.videoButton.className }
                                           onClick={ openPopup }
                                           icon={ { id: "play" } }/>
                                <Popup isOpen={ isPopupOpen } onClose={ closePopup }>
                                    <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/gjPsdqSEvfs?si=moYithd-UKfJR08t"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                    </iframe>
                                </Popup>
                            </div>
                        </Column>
                        <Column xs={ 12 } md={ 6 }>
                            <Slider data={ data.sliderData }/>
                        </Column>
                    </Row>
                </div>


            </div>


        </section>
    );
}
