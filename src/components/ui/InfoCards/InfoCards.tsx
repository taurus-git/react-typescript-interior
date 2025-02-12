import React from 'react';
import './infoCards.css';
import { infoCards } from "../../../pages/HomePage/home.data";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { Icon } from "../Icon/Icon";
import { Container } from "../../layout/Container/Container";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { Quote } from "../Quote/Quote";

interface InfoCardsProps {
    data: typeof infoCards
}

export const InfoCards: React.FC<InfoCardsProps> = ( { data } ) => {
    const { className, promo, title, quote, cards } = data;

    return (
        <section className={ `${ className || 'info-cards' } ` }>
            <Container>
                <div className={ `${ className }__wrapper` }>
                    <Row className={ `${ className }__text-wrapper` }>
                        <Column xs={ 12 } md={ 6 }>
                            { promo && title &&
                                <PromoTitle promo={ promo } heading={ { level: 2, children: title } }/>
                            }
                        </Column>
                        <Column xs={ 12 } md={ 6 }>
                            { quote &&
                                <Quote text={ quote }/>
                            }
                        </Column>
                    </Row>
                    <Row className={ `${ className }__cards-wrapper` }>
                        { cards && cards.length > 0 &&
                            <>
                                { cards.map( ( card, index ) => (
                                    <Column key={ index } xs={ 12 } md={ 4 }>
                                        <div className={ `${ className }__card` }>
                                            { card.icon &&
                                                <span className={ `${ className }__card-image` }><Icon
                                                    id={ card.icon }/></span>
                                            }
                                            { card.title &&
                                                <p className={ `${ className }__card-title` }>{ card.title }</p>
                                            }
                                            { card.description &&
                                                <div className={ `${ className }__card-description` }>
                                                    { card.description }
                                                </div>
                                            }
                                        </div>
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
