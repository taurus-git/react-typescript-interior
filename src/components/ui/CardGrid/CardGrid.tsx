import React from 'react';
import "./card-grid.css";
import { cardGrid } from "../../../pages/HomePage/home.data"
import { Container } from "../../layout/Container/Container";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { Card } from "./Card";

interface CardGridProps {
    data: typeof cardGrid
}

export const CardGrid: React.FC<CardGridProps> = ( { data } ) => {
    const { className, promo, title } = data;
    const { cards } = cardGrid;
    const masonryClasses = [
        "masonry__card masonry__card--small masonry__card--left",
        "masonry__card masonry__card--small masonry__card--right",
        "masonry__card masonry__card--wide",
        "masonry__card masonry__card--large"
    ];

    return (
        <section className={ `${ className ?? 'card-grid' } ` }>
            <Container>
                <div className="card-grid__wrapper">
                    <div className={ `${ className }__promo` }>
                        { promo && title &&
                            <PromoTitle promo={ promo } heading={ { level: 2, children: title } }/>
                        }
                    </div>
                    <div className={ `${ className }__images-wrapper` }>
                        { cards && cards.length >= 0 &&
                            <div className="masonry">
                                { cards.map( ( data, index ) => (
                                    <Card key={index} data={ data } className={ masonryClasses[ index ] }/>
                                ) ) }
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
}
