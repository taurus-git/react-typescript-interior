import React, { useState } from 'react';
import { TESTIMONIALS_MAX_LENGTH } from "../../../constants/constants";
import { ResponsiveImage } from "../ResponsiveImage/ResponsiveImage";
import { Icon } from "../Icon/Icon";
import { trimText } from "../../../utils/trimText";

export interface SingleTestimonialsData {
    id: number;
    author: string,
    position?: string,
    rate?: number,
    text?: string,
    src: string,
    srcset?: {
        src: string,
        media: string | null
    }[],
}

interface TestimonialsBlockProps {
    data: SingleTestimonialsData[];
    className?: string
}

const getInitialTestimonial = ( testimonials: SingleTestimonialsData[] ) => {
    const middleIndex = Math.floor( testimonials.length / 2 );
    return testimonials[ middleIndex ].id;
}

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = ( { data, className = 'testimonials-block' } ) => {
    const testimonialsList = data?.slice( 0, TESTIMONIALS_MAX_LENGTH ) ?? [];
    const [ activeTestimonialId, setActiveTestimonialId ] = useState<number>( () => getInitialTestimonial( testimonialsList ) );

    const handleTestimonialsToggle = ( id: number ) => {
        setActiveTestimonialId( prev => prev ? id : 1 );
    }

    const getActiveTestimonial = ( id: number ) => {
        return testimonialsList.find( array => array.id === activeTestimonialId );
    }

    const activeTestimonial = (getActiveTestimonial( activeTestimonialId ));

    const getStarRating = ( rating: number ) => {
        return Array.from( { length: rating } ).map( ( _, index ) => <Icon key={ index } id={ 'star' }/> )
    }

    return (
        <div className={ `${ className }` }>
            <div className={ `${ className }__wrapper` }>
                {/*Images*/ }
                <div className={ `${ className }__images` }>
                    { testimonialsList.map( ( item, index ) => (
                        <button key={ `${ index }` }
                                onClick={ () => handleTestimonialsToggle( item.id ) } //Todo: add change on hover
                                className={ `${ className }__image` }>
                            <ResponsiveImage src={ item.src } srcset={ item.srcset } alt={ `${ item.author } photo` }/>
                        </button>
                    ) ) }
                </div>

                { activeTestimonial &&
                    <div className={ `${ className }__text` }>
                        <p className={ `${ className }__author-name` }>{ activeTestimonial.author }</p>
                        { activeTestimonial.position &&
                            <p className={ `${ className }__author-position` }>{ activeTestimonial.position }</p>
                        }
                        { activeTestimonial.rate &&
                            <div className={ `${ className }__author-rating` }>
                                { getStarRating( activeTestimonial.rate ) }
                            </div>
                        }
                        { activeTestimonial.text &&
                            <p className={ `${ className }__author-text` }>
                                { trimText( activeTestimonial.text ) }
                            </p>
                        }
                    </div>
                }
            </div>
        </div>
    );
}
