import React from 'react';
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";
import "./cardGridCard.css";
import { Icon } from "../../Icon/Icon";

export interface CardGridCardData {
    link: string,
    src: string,
    srcset?: {
        src: string,
        media: string | null
    }[],
    title?: string,
    description?: string
}

interface CardProps {
    data: CardGridCardData;
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
