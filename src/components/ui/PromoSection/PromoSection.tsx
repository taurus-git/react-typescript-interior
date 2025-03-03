import React from 'react';
import './promoSection.css';
import { PromoSectionData } from '../../../pages/HomePage/home.types';
import { Icon } from "../Icon/Icon";
import { Container } from "../../layout/Container/Container";

interface PromoSectionProps {
    data: PromoSectionData
}

export const PromoSection: React.FC<PromoSectionProps> = ( { data } ) => {
    const { className, promoText } = data;

    return (
        <section className={ `${ className ?? 'promo-section' }` }>
            <Container>
                <div className={ `${ className }__wrapper` }>
                    <Icon id={ 'promo-label' }/>
                    { promoText &&
                        <span className={ `${ className }__text` }>
                            { promoText }
                        </span>
                    }
                </div>
            </Container>
        </section>
    );
}
