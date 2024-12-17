import React from 'react';
import "./responsiveImage.css";
import { extractFileName, getImageAlt } from "../../../utils/utils";

interface ResponsiveImageProps {
    data: {
        src: string;
        srcset?: {
            src: string,
            media: string | null
        }[];
        alt?: string;
        lazy?: boolean;
    }
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ( { data } ) => {

    console.log( data );

    const getSrcset = ( data: ResponsiveImageProps['data'] ) => {

        if ( data.srcset && data.srcset.length > 0 ) {
            return data.srcset.map( ( attr, index ) => (
                <source
                    key={ index }
                    type="image/webp"
                    srcSet={ attr.src }
                    { ...(attr.media ? { media: attr.media } : {}) }/>
            ) )
        }
    }

    return (
        <>
            <picture>
                { getSrcset( data ) }
                <img src={ data.src } alt={ getImageAlt( data.src, data.alt ) }/>
            </picture>
        </>
    );
};
