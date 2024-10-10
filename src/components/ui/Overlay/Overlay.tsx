import "./overlay.css"
import React, { useContext } from 'react';
import { MainContext } from "../../../context/MainContext";

export const Overlay = () => {
    const { isMenuOpen } = useContext( MainContext ).menu;

    return (
        <div
            id="overlay"
            className={ isMenuOpen ? 'open' : '' }>
        </div>
    );
}
