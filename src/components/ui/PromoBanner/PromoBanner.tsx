import React from 'react';
import { PromoBannerData } from "../../../pages/HomePage/home.types";
import { promoSection } from "../../../pages/HomePage/home.data";
import { Container } from "../../layout/Container/Container";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { Quote } from "../Quote/Quote";
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
                            { cards && cards.length > 0 &&
                                <>
                                    { cards.map( ( { src, srcset }, index ) => (
                                        <div className={ `${ className }__promo-card` }>
                                            <ResponsiveImage key={ index } src={ src } srcset={ srcset }/>
                                        </div>
                                    ) ) }
                                </>
                            }
                        </div>
                    </Column>
                    <Column xs={ 12 } md={ 6 }>
                        <div className={ `${ className }__banner-wrapper` }
                             style={ { backgroundImage: `url(${ backgroundImage?.src })` } }>
                            <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                            { quote &&
                                <Quote text={ quote }/>
                            }
                            { ctaPrimary?.label && ctaPrimary?.path &&
                                <CtaLink label={ ctaPrimary.label } path={ ctaPrimary.path }/>
                            }
                            { backgroundImage?.src && backgroundImage?.srcset &&
                                <ResponsiveImage src={ backgroundImage.src } srcset={ backgroundImage.srcset }/>
                            }
                        </div>
                    </Column>
                </Row>
            </div>

        </section>
    )
        ;
}
