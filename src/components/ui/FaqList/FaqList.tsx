import React, { useState } from 'react';
import "./faq.css";
import { FaqSectionData } from "../../../pages/HomePage/home.types";
import { Container } from "../../layout/Container/Container";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { FaqItem } from "./FaqItem";

interface FaqListProps {
    data: FaqSectionData
}

export const FaqList: React.FC<FaqListProps> = ( { data } ) => {
    const { className, promoText, title, faqs } = data;
    const [ activeId, setActiveId ] = useState<number | null>( null );

    const handleCallback = ( id: number ) => {
        setActiveId( prev => prev === id ? null : id );
    }

    return (
        <section className={ `${ className ?? 'faq-section' }` }>
            <Container>
                <div className={ `${ className }__content` }>
                    <Row>
                        <Column xs={ 12 } md={ 6 }>
                            <div className={ `${ className }__text-wrapper` }>
                                { promoText && title &&
                                    <div className={ `${ className }__promo` }>
                                        <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                                    </div>
                                }
                            </div>
                        </Column>
                        <Column xs={ 12 } md={ 6 }>
                            <div className={ `${ className }__faq-wrapper` }>
                                { faqs.length > 0 &&
                                    <div className={ `${ className }__faqs-items` }>
                                        { faqs.map( ( faq ) => (
                                            <FaqItem key={ faq.id }
                                                     data={ faq }
                                                     activeId={ activeId }
                                                     setActive={ handleCallback }/>
                                        ) ) }
                                    </div>
                                }
                            </div>
                        </Column>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
