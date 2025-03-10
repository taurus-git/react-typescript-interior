import React from 'react';
import { Link } from "react-router-dom";
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";
import { Icon } from "../../Icon/Icon";

export interface SlideData {
    id: number,
    link?: string,
    src: string,
    srcset?: {
            src: string,
            media: string | null
        }[],
    lazy?: boolean,
    title?: string,
    description?: string
};

interface SlideProps {
    slideData: SlideData;
};

export const Slide: React.FC<SlideProps> = ( { slideData } ) => {
    const { link, title, description } = slideData;

    const content = (
        <>
            <ResponsiveImage{ ...slideData }/>
            { title &&
                <p>{ title }
                    <span>
                        <Icon id={ "arrow-next" }/>
                    </span>
                </p>
            }
            { description && <span>{ description }</span> }
        </>
    );

    return (
        link ? <Link to={ link }>{ content }</Link> : <div>{ content }</div>
    );
}
