import React, { useContext } from 'react';
import "./hero-banner.css";
import { heroBanner } from '../../../pages/HomePage/home.data'
import { MainContext } from "../../../context/MainContext";
import { Column } from "../../layout/Grid/Column/Column";
import { Icon } from "../Icon/Icon";
import { Heading } from "../Heading/Heading";
import { CtaLink } from "../Cta/CtaLink";
import { CtaButton } from "../Cta/CtaButton";
import { Popup } from "../Popup/Popup";
import { Row } from "../../layout/Grid/Row/Row";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "../Slider/Slide/Slide";
import 'swiper/css';
import 'swiper/css/navigation';

interface HeroBannerProps {
    data: typeof heroBanner;
}

export const HeroBanner: React.FC<HeroBannerProps> = ( { data } ) => {
    const { isPopupOpen, openPopup, closePopup } = useContext( MainContext ).popup

    const { className, infoMessage, title, description, ctaButtons, videoButton, counters, sliderData } = data;

    return (
        <section className={ `${ className || '' }` }>
            <div className="container">
                <div className="hero-banner__content">
                    <Row>
                        <Column xs={ 12 } md={ 6 }>
                            <div className="hero-banner_info-wrapper">
                                <div className={ `hero-banner-message ${ infoMessage.className }` }>
                                    <span className="hero-banner-message__icon">
                                        <Icon id={ "chair" }/>
                                    </span>
                                    <span className="hero-banner__text">
                                        { infoMessage.text }
                                    </span>
                                </div>
                                <Heading className={"m-0"} text={ title }/>
                                <div className="hero-banner__description">
                                    { description }
                                </div>
                                <div className="hero-banner__cta-buttons">
                                    <CtaLink path={ ctaButtons.ctaPrimary.path }
                                             label={ ctaButtons.ctaPrimary.label }/>
                                    <CtaButton label={ videoButton.label }
                                               className={ videoButton.className }
                                               onClick={ openPopup }
                                               icon={ { id: "play" } }/>
                                    <Popup isOpen={ isPopupOpen } onClose={ closePopup }>
                                        <iframe width="560" height="315"
                                                src={ videoButton.path }
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                        </iframe>
                                    </Popup>
                                </div>

                                { counters && counters.length > 0 &&
                                    <div className="hero-banner__counters">
                                        { counters.map( ( counter, index ) => (
                                            <div key={ index } className="hero-banner__counter-data">
                                                <div className="hero-banner__counter-title">
                                                    { counter.title }
                                                </div>
                                                <p className="hero-banner__counter-description m-0">
                                                    { counter.description }
                                                </p>
                                            </div>
                                        ) ) }
                                    </div>
                                }
                            </div>
                        </Column>
                        <Column xs={ 12 } md={ 6 }>
                            <div className="hero-banner_slider-wrapper">

                                <Swiper
                                    modules={ [ Navigation ] }
                                    breakpoints={{
                                        320: { slidesPerView: 1, spaceBetween: 20 },
                                        768: { slidesPerView: 1, spaceBetween: 25 },
                                        992: { slidesPerView: 1.60, spaceBetween: 20 },
                                        1440: { slidesPerView: 2, spaceBetween: 50 },
                                    }}
                                    navigation>
                                    { sliderData.slides.map( ( slideData, index ) => (
                                        <SwiperSlide key={ index }>
                                            <Slide slideData={ slideData }/>
                                        </SwiperSlide>
                                    ) ) }
                                </Swiper>

                            </div>
                        </Column>
                    </Row>
                </div>


            </div>


        </section>
    );
}
