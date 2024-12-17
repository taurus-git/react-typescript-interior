export const extractFileName = ( src: string ): string => {
    return src.split( '/' ).pop()?.split( '.' ).shift() || '';
}

export const getImageAlt = ( src: string, alt?: string ): string => {
    if ( alt ) return alt;

    return extractFileName( src );
}
