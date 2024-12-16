import React from 'react';
import { heroBanner } from "../../../pages/HomePage/home.data";
import { Slide } from "./Slide/Slide";

interface SliderProps {
    data: typeof heroBanner.sliderData
}

export const Slider: React.FC<SliderProps> = ( { data } ) => {
    return (
        <>
            { data.slides.map( ( slideData ) => (
                <Slide slideData={ slideData }/>
            ) ) }
        </>
    );
}
