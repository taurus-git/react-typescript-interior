import "./overlay.css"
import React, { useContext } from 'react';
import { MainContext } from "../../../context/MainContext";

export const Overlay: React.FC = () => {
    const { isOverlayOpen, closeOverlay } = useContext( MainContext ).overlay;

    if ( !isOverlayOpen ) return null;

    return (
        <div
            id="overlay"
            className={ isOverlayOpen ? 'open' : '' }
            onClick={ closeOverlay }>
        </div>
    );
}
