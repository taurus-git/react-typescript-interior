import React from 'react';
import './infoCards.css';
import { infoCards } from "../../../pages/HomePage/home.data";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";
import { Container } from "../../layout/Container/Container";

interface InfoCardsProps {
    data: typeof infoCards
}

export const InfoCards: React.FC<InfoCardsProps> = ( { data } ) => {
    const { className, promo, heading, description, cards } = data;

    return (
        <section className={ `${ className || 'info-cards' } ` }>
            <Container>
                <div className={ `${ className }__wrapper` }>
                    <Row className={ `${ className }__text-wrapper` }>
                        <Column xs={ 12 } md={ 6 }>
                            { promo &&
                                <span className={ `${ className }__promo` }>{ promo }</span>
                            }
                            { heading &&
                                <Heading className={ `${ className }__heading` } level={ 2 }>{ heading }</Heading>
                            }
                        </Column>
                        <Column xs={ 12 } md={ 6 }>
                            { description &&
                                <div className={ `${ className }__description` }>{ description }</div>
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
