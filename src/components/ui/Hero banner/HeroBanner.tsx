import React from 'react';

interface HeroBannerProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ( {  className, children } ) => {
    return (
        <section className={ `hero-banner ${ className || '' }` }>
            <div className="container">
                <div className="hero-banner__content">
                    { children }
                </div>
            </div>
        </section>
    );
}
