import React from 'react';
import "./promo-banner.css";
import { PromoBannerData } from "../../../pages/HomePage/home.types";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { CtaLink } from "../Cta/CtaLink";

interface PromoBannerProps {
    data: PromoBannerData
}

export const PromoBanner: React.FC<PromoBannerProps> = ( { data } ) => {
    const { className, promoText, title, quote, ctaPrimary, cards, backgroundImage } = data;

    return (
        <section className={ `${ className ?? 'promo-banner' }` }>

            <div className={ `${ className }__wrapper` }>
                <Row>
                    <Column xs={ 12 } md={ 6 }>
                        <div className={ `${ className }__cards-wrapper` }>
                            <div className={ `${ className }__cards` }>
                                { cards && cards.length > 0 &&
                                    <>
                                        { cards.map( ( { src, srcset }, index ) => (
                                            <div key={ index } className={ `${ className }__promo-card` }>
                                                <ResponsiveImage src={ src } srcset={ srcset }/>
                                            </div>
                                        ) ) }
                                    </>
                                }
                            </div>
                        </div>
                    </Column>

                    <Column xs={ 12 } md={ 6 }>
                        <div className={ `${ className }__banner-wrapper` }
                             style={ { backgroundImage: `url(${ backgroundImage?.src })` } }>
                            <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                            { quote &&
                                <p className={ `${ className }__description` }>{ quote }</p>
                            }
                            { ctaPrimary?.label && ctaPrimary?.path &&
                                <CtaLink label={ ctaPrimary.label } path={ ctaPrimary.path }/>
                            }
                        </div>
                    </Column>
                </Row>
            </div>

        </section>
    );
}
