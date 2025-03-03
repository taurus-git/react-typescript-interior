import React from 'react';
import './infoCards.css';
import { InfoCardsData } from "../../../pages/HomePage/home.types";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { Container } from "../../layout/Container/Container";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { Quote } from "../Quote/Quote";
import { InfoCard } from "./InfoCard/InfoCard";

interface InfoCardsProps {
    data: InfoCardsData
}

export const InfoCards: React.FC<InfoCardsProps> = ( { data } ) => {
    const { className, promoText, title, quote, cards } = data;

    return (
        <section className={ `${ className ?? 'info-cards' } ` }>
            <Container>
                <div className={ `${ className }__wrapper` }>
                    <Row className={ `${ className }__text-wrapper` }>
                        { promoText && title &&
                            <Column xs={ 12 } md={ 6 }>
                                <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                            </Column>
                        }
                        { quote &&
                            <Column xs={ 12 } md={ 6 }>
                                <Quote text={ quote }/>
                            </Column>
                        }
                    </Row>
                    <Row className={ `${ className }__cards-wrapper` }>
                        { cards && cards.length > 0 &&
                            <>
                                { cards.map( ( cardData, index ) => (
                                    <Column key={ index } xs={ 12 } md={ 4 }>
                                        <InfoCard key={ index } className={ className }
                                                  cardData={ cardData }/>
                                    </Column>
                                ) ) }
                            </>
                        }
                    </Row>
                </div>
            </Container>
        </section>
    );
}
