import "./overlay.css"
import React, { useContext } from 'react';
import { MainContext } from "../../../context/MainContext";

export interface OverlayProps {
    children?: React.ReactNode;
}

export const Overlay: React.FC<OverlayProps> = ( { children } ) => {
    const { isOverlayOpen, setOverlayOpen } = useContext( MainContext ).overlay;

    const onClick = () => {
        setOverlayOpen( false );
    }

    return (
        <div
            id="overlay"
            className={ isOverlayOpen ? 'open' : '' }
            onClick={ onClick }>
            { children }
        </div>
    );
}
