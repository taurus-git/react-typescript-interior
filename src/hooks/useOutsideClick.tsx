import { RefObject, useEffect, useRef } from "react";

export const useOutsideClick = ( callback: () => void ): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>( null );

    useEffect( () => {
        const handleClick = ( event: MouseEvent ) => {
            const target = event.target as HTMLElement;

            if ( ref.current && !ref.current.contains( target ) ) {
                callback();
            }
        };

        document.addEventListener( 'click', handleClick, true );

        return () => {
            document.removeEventListener( 'click', handleClick, true );
        };
    }, [ callback ] );

    return ref;
};
