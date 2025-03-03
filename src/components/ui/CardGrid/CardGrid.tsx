import React from 'react';
import "./card-grid.css";
import { CardGridData } from "../../../pages/HomePage/home.types"
import { Container } from "../../layout/Container/Container";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { CardGridCard } from "./CardGridCard/CardGridCard";

interface CardGridProps {
    data: CardGridData
}

export const CardGrid: React.FC<CardGridProps> = ( { data } ) => {
    const { className, promo, title, cards } = data;
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
                    { promo && title &&
                        <div className={ `${ className }__promo` }>
                            <PromoTitle promo={ promo } heading={ { level: 2, children: title } }/>
                        </div>
                    }
                    { cards && cards.length >= 0 &&
                        <div className={ `${ className }__images-wrapper` }>
                            <div className="masonry">
                                { cards.map( ( data, index ) => (
                                    <CardGridCard key={ index } data={ data } className={ masonryClasses[ index ] }/>
                                ) ) }
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </section>
    );
}
