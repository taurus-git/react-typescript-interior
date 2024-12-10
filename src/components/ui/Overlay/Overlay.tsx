import "./overlay.css"
import React, { useContext } from 'react';
import { MainContext } from "../../../context/MainContext";

export const Overlay: React.FC = () => {
    const { isOverlayOpen, handleOverlayClick } = useContext( MainContext ).overlay;

    if ( !isOverlayOpen ) return null;

    return (
        <div
            id="overlay"
            className={ isOverlayOpen ? 'open' : '' }
            onClick={ handleOverlayClick }>
        </div>
    );
}
