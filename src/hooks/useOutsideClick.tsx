import { useRef, useEffect, RefObject } from "react";

type Handler = () => void;

export function useOutsideClick<T extends HTMLElement = HTMLElement> ( handler: Handler ): RefObject<T> {
    const ref = useRef<T>( null );

    useEffect( () => {
        console.log('useOutsideClick works');
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            };
        }

        document.addEventListener( "mousedown", handleClickOutside );

        return () => {
            document.removeEventListener( "mousedown", handleClickOutside );
        };

    }, [ handler ] );

    return ref;
}
