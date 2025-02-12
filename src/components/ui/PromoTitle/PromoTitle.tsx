import React from 'react';
import "./promoTitle.css"
import { Heading, HeadingProps } from "../Heading/Heading";

interface PromoTitleProps {
    promo?: string,
    heading: HeadingProps,
    className?: string,
}

export const PromoTitle: React.FC<PromoTitleProps> = ( { promo = '', heading, className = 'promo-title' } ) => {
    return (
        <>
            { promo &&
                <span className={ `${ className }__promo` }>{ promo }</span>
            }
            { heading.children &&
                <Heading className={ `${ className }__heading` }
                         level={ heading.level }>{ heading.children }
                </Heading>
            }
        </>
    );
}
