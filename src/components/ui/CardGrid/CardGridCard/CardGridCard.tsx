import React from 'react';
import { cardGrid } from "../../../../pages/HomePage/home.data";
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";
import "./cardGridCard.css";
import { Icon } from "../../Icon/Icon";

interface CardProps {
    data: typeof cardGrid.cards[number];
    className?: string
}

export const CardGridCard: React.FC<CardProps> = ( { data, className } ) => {
    const { link, src, srcset, title, description } = data;

    return (
        <a href={ link } className={ `${ className ?? 'masonry__card' } ` }>
            <div className="masonry__image">
                <ResponsiveImage src={ src } srcset={ srcset }/>
            </div>
            <div className="masonry__text">
                { title &&
                    <p className="masonry__title">{ title }</p>
                }
                { description &&
                    <span className="masonry__description">{ description }</span>
                }
                <span className="masonry__icon">
                    <Icon id={ "arrow-next" }/>
                </span>
            </div>
        </a>
    );
}
