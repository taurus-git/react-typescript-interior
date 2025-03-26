import React from 'react';
import { TestimonialsSectionData } from "../../../pages/HomePage/home.types";
import { Container } from "../../layout/Container/Container";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { CtaLink } from "../Cta/CtaLink";
import { TestimonialsBlock } from "./TestimonialsBlock";

interface TestimonialsSectionProps {
    data: TestimonialsSectionData
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ( { data } ) => {
    const { className, promoText, title, quote, ctaPrimary, testimonials } = data;

    return (
        <section className={ `${ className ?? 'testimonials-section' }` }>
            <Container>
                <Row>
                    <Column xs={ 12 } md={ 6 }>
                        <div className={ `${ className }__text-wrapper` }>
                            { promoText && title &&
                                <div className={ `${ className }__promo` }>
                                    <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                                </div>
                            }
                            { quote && <p>{ quote }</p> }
                            { ctaPrimary?.label && ctaPrimary?.path &&
                                <CtaLink label={ ctaPrimary.label } path={ ctaPrimary.path }/>
                            }
                        </div>
                    </Column>
                    <Column xs={ 12 } md={ 6 }>
                        { testimonials.length > 0 &&
                            <div className={ `${ className }__testimonials-wrapper` }>
                                <TestimonialsBlock data={ testimonials }/>
                            </div>
                        }
                    </Column>
                </Row>
            </Container>
        </section>
    );
}
