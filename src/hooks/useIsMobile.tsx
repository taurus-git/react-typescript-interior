import { useEffect, useState } from "react";
import { addResizeListener, removeResizeListener, isMobileDevice } from "../utils/utility";

export const useIsMobile = ( breakpoint: number = 768 ): boolean => {
    const [ isMobile, setIsMobile ] = useState( true );

    useEffect( () => {
        const handleResize = () => {
            setIsMobile( isMobileDevice( breakpoint ) );
        };

        addResizeListener( handleResize );
        return () => {
            removeResizeListener( handleResize );
        };
    }, [ breakpoint ] );

    return isMobile;
}
