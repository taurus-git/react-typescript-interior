import React, { useContext } from 'react';
import { heroBanner } from '../../../pages/HomePage/home.data'
import { Column } from "../../layout/Grid/Column/Column";
import { Icon } from "../Icon/Icon";
import { Heading } from "../Heading/Heading";
import { CtaLink } from "../Cta/CtaLink";
import { CtaButton } from "../Cta/CtaButton";
import { Popup } from "../Popup/Popup";
import { Row } from "../../layout/Grid/Row/Row";
import { MainContext } from "../../../context/MainContext";

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
                            <div className={ `hero-banner__info-wrapper ${ data.infoMessage.className }` }>
                            <span className="hero-banner__icon">
                                <Icon id={ "chair" }/>
                            </span>
                                <p className="hero-banner__info-message">
                                    { data.infoMessage.text }
                                </p>
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
                                    some text inside popup
                                </Popup>
                            </div>
                        </Column>
                        <Column>
                            2 column text value
                        </Column>
                    </Row>
                </div>
            </div>
        </section>
    );
}
