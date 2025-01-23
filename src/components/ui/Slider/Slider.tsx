import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
/*import 'swiper/css/pagination';
import 'swiper/css/scrollbar';*/
import { heroBanner } from "../../../pages/HomePage/home.data";
import { Slide } from "./Slide/Slide";

interface SliderProps {
    data: typeof heroBanner.sliderData
}

export const Slider: React.FC<SliderProps> = ( { data } ) => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={50}
            navigation >
            { data.slides.map( ( slideData, index ) => (
                <SwiperSlide key={ index }>
                    <Slide slideData={ slideData }/>
                </SwiperSlide>
            ) ) }
        </Swiper>
    );
}
