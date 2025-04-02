import React from 'react';
import "./subscribe-section.css";
import { SubscribeSectionData } from "../../../pages/HomePage/home.types";
import { PromoTitle } from "../PromoTitle/PromoTitle";
import { SubscribeForm } from "../SubscribeForm/SubscribeForm";

interface SubscribeSectionProps {
    data: SubscribeSectionData;
}

export const SubscribeSection: React.FC<SubscribeSectionProps> = ( { data } ) => {
    const { className, promoText, title, quote } = data;

    return (
        <section className={ `${ className ?? 'subscribe-section' }` }>
            <div className={ `${ className }__wrapper` }>
                { promoText && title &&
                    <div className={ `${ className }__promo` }>
                        <PromoTitle promo={ promoText } heading={ { level: 2, children: title } }/>
                        { quote && <p>{ quote }</p> }
                    </div>
                }
                <SubscribeForm />
            </div>
        </section>
    );
}
