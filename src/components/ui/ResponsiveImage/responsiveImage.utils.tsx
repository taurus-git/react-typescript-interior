import React from "react";
import { srcSetItem } from "./ResponsiveImage";

export const getSrcset = ( srcset?: srcSetItem[] ) => {
    if ( srcset?.length ) {
        return srcset.map( ( attr, index ) => (
            <source key={ `${ attr.src }-${ index } ` }
                    type="image/webp"
                    srcSet={ attr.src }
                    { ...(attr.media ? { media: attr.media } : {}) }/>
        ) )
    }
}

export const extractFileName = ( src: string ): string => {
    return src.split( '/' ).pop()?.split( '.' ).shift() || '';
}

export const getImageAlt = ( src: string, alt?: string ): string => {
    if ( alt ) return alt;
    return extractFileName( src );
}
