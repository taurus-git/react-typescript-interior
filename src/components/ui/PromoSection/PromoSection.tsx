import React from 'react';
import './promoSection.css';
import { promoSection } from '../../../pages/HomePage/home.data';
import { Icon } from "../Icon/Icon";

interface PromoSectionProps {
    data: typeof promoSection
}

export const PromoSection: React.FC<PromoSectionProps> = ( { data } ) => {
    const { className, promoText } = data;

    return (
        <section className={ `${ className ?? 'promo-section' }` }>
            <div className={ `${className}__wrapper` } >
                <Icon id={ 'promo-label' }/>
                { promoText &&
                    <span className={ `${className}__text` }>
                        { promoText }
                    </span>
                }
            </div>
        </section>
    );
}
