import React from 'react';
import { Link } from "react-router-dom";
import { heroBanner } from "../../../../pages/HomePage/home.data";
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";
import { Icon } from "../../Icon/Icon";

interface SlideProps {
    slideData: typeof heroBanner.sliderData.slides[number];
}

export const Slide: React.FC<SlideProps> = ( { slideData } ) => {
    return (
        <>
            <Link to={ slideData.link }>
                <ResponsiveImage{ ...slideData }/>
                { slideData.title &&
                    <p>{ slideData.title }
                        <span>
                            <Icon id={ "arrow-next" }/>
                        </span>
                    </p>
                }
                { slideData.description &&
                    <span>{ slideData.description }</span>
                }
            </Link>
        </>
    );
}
