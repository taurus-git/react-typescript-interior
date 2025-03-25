import React from 'react';
import "./product-slider.css";
import { ProductSliderData } from "../../../pages/HomePage/home.types";
import { Container } from "../../layout/Container/Container";
import { Column } from "../../layout/Grid/Column/Column";
import { Row } from "../../layout/Grid/Row/Row";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard, { ProductCardData } from "../ProductCard";

interface ProductSliderProps {
    data: ProductSliderData;
}

export const ProductSlider: React.FC<ProductSliderProps> = ( { data } ) => {
    const { className, promoText, title, sliderData } = data;

    return (
        <section className={ `${ className ?? 'product-slider' }` }>
            <Container>
                <div className={ `${ className }__wrapper` }>
                    <Row className={ `${ className }__text-wrapper` }>
                        { promoText && title &&
                            <Column xs={ 12 } md={ 6 }>
                                <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                            </Column>
                        }
                    </Row>
                    <Row className={ `${ className }__slider-wrapper` }>
                        <div className={ `${ className }__slider` }>

                            <Swiper
                                modules={ [ Navigation ] }
                                breakpoints={ {
                                    320: { slidesPerView: 1, spaceBetween: 20 },
                                    768: { slidesPerView: 1, spaceBetween: 25 },
                                    992: { slidesPerView: 1.9, spaceBetween: 20 },
                                    1440: { slidesPerView: 2, spaceBetween: 20 },
                                } }
                                navigation>
                                { sliderData?.slides.map( ( slideData: ProductCardData, index: number ) => (
                                    <SwiperSlide key={ index }>
                                        <ProductCard key={ `${ data.title }` } data={ slideData } variant={ "full" }/>
                                    </SwiperSlide>
                                ) ) }
                            </Swiper>

                        </div>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
