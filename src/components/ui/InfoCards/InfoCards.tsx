import React from 'react';
import './infoCards.css';
import { infoCards } from "../../../pages/HomePage/home.data";
import { Row } from "../../layout/Grid/Row/Row";
import { Column } from "../../layout/Grid/Column/Column";
import { Heading } from "../Heading/Heading";
import { Icon } from "../Icon/Icon";

interface InfoCardsProps {
    data: typeof infoCards
}

export const InfoCards: React.FC<InfoCardsProps> = ( { data } ) => {
    const { className, promo, heading, description, cards } = data;

    return (
        <section className={ `${ className || 'info-cards' } ` }>
            <div className="container">
                <div className={ `${ className }__wrapper` }>
                    <Row>
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
                                <div className={ `${ className } __description` }>{ description }</div>
                            }
                        </Column>
                    </Row>
                    <Row>

                        { cards && cards.length > 0 &&
                            <div className={ `${ className }__cards` }>
                                { cards.map( ( card, index ) => (
                                    <Column xs={ 12 } md={ 3 }>
                                        <div className={ `${ className }__card` }>
                                            { card.icon && <Icon id={ card.icon }/> }
                                            { card.title &&
                                                <p className={ `${ className }__card-title` }>{ card.title }</p> }
                                            { card.description &&
                                                <div
                                                    className={ `${ className }__description` }>{ card.description }</div> }
                                        </div>
                                    </Column>

                                ) ) }
                            </div>
                        }
                    </Row>
                </div>
            </div>
        </section>
    );
}
