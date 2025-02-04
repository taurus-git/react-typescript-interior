import React from 'react';
import "./responsiveImage.css";
import { getSrcset, getImageAlt } from "./responsiveImage.utils";

export type srcSetItem = {
    src: string,
    media: string | null
}

interface ResponsiveImageProps {
    src: string;
    srcset?: srcSetItem[];
    alt?: string;
    lazy?: boolean;
    className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ( { src, srcset, alt, lazy = true, className } ) => {
    return (
        <picture>
            { getSrcset( srcset ) }
            <img
                src={ src }
                className={ className }
                alt={ getImageAlt( src, alt ) }
                loading={ lazy ? "lazy" : undefined }/>
        </picture>
    );
};
