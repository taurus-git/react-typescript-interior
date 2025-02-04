import React from 'react';
import "./responsiveImage.css";

type srcSetItem = {
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

const getSrcset = ( srcset?: srcSetItem[] ) => {
    if ( srcset?.length ) {
        return srcset.map( ( attr, index ) => (
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

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ( { src, srcset, alt, lazy = true, className } ) => {
    return (
        <>
            <picture>
                { getSrcset( srcset ) }
                <img
                    src={ src }
                    className={ className }
                    alt={ getImageAlt( src, alt ) }
                    loading={ lazy ? "lazy" : undefined } />
            </picture>
        </>
    );
};
