import React from 'react';
import "./responsiveImage.css";

interface ResponsiveImageProps {
    data: {
        src: string;
        srcset?: {
            src: string,
            media: string | null
        }[];
        alt?: string;
        lazy?: boolean;
        className?: string;
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

    const extractFileName = ( src: string ): string => {
        return src.split( '/' ).pop()?.split( '.' ).shift() || '';
    }

    const getImageAlt = ( src: string, alt?: string ): string => {
        if ( alt ) return alt;

        return extractFileName( src );
    }

    return (
        <>
            <picture>
                { getSrcset( data ) }
                <img src={ data.src } className={ data.className } alt={ getImageAlt( data.src, data.alt ) }/>
            </picture>
        </>
    );
};
