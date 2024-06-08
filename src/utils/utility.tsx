export const addResizeListener = ( callback: () => void ) => {
    window.addEventListener( 'resize', callback );
}

export const removeResizeListener = ( callback: () => void ) => {
    window.removeEventListener( 'resize', callback );
}

export const isMobileDevice = ( breakpoint: number = 768 ) => {
    return window.innerWidth <= breakpoint;
}
