import React from 'react';
import { heroBanner } from "../../../../pages/HomePage/home.data";
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";
import { Link } from "react-router-dom";

interface SlideProps {
    slideData: typeof heroBanner.sliderData.slides[number];
}

export const Slide: React.FC<SlideProps> = ( { slideData } ) => {
    {
        console.log( slideData )
    }

    const imageData = {
        src: slideData.src,
        srcset: slideData.srcset ? slideData.srcset : undefined,
        className: 'image-responsive',
    };

    return (
        <div>
            <Link to={ slideData.link }>
                { <ResponsiveImage data={ imageData }/> }
                { slideData.title &&
                    <p>{ slideData.title }</p>
                }
                { slideData.description &&
                    <span>{ slideData.description }</span>
                }
            </Link>
        </div>
    );
}
