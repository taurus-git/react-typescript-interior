import React, { useEffect, useRef, useState } from 'react';
import './promoSection.css';
import { promoSection } from '../../../pages/HomePage/home.data';
import { Icon } from "../Icon/Icon";

interface PromoSectionProps {
    data: typeof promoSection
}

export const PromoSection: React.FC<PromoSectionProps> = ( { data } ) => {
    const { className, promoText } = data;
    const textRef = useRef<HTMLElement>( null );
    const [ width, setWidth ] = useState( 200 );

    const adjustWidth = () => {
        if ( textRef.current ) {
            const textWidth = textRef.current.getBoundingClientRect().width;
            const padding = 150;
            setWidth( textWidth + padding )
        }
    }

    useEffect( () => {
        adjustWidth();
        window.addEventListener( 'resize', adjustWidth );
        return window.removeEventListener( 'resize', adjustWidth );
    }, [ textRef ] );

    return (
        <section className={ `${ className || 'promo-section' }` }>
            <div className={ `${className}__wrapper` } style={ { width } }>
                <Icon id={ 'promo-label' }/>
                { promoText &&
                    <span ref={ textRef } className={ `${className}__text` }>
                        { promoText }
                    </span>
                }
            </div>
        </section>
    );
}
