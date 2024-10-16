import React from 'react';
import "./logo.css"
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="nav__image header__logo-link">
            <Icon id={ 'furniture-logo' }/>
            <span className="header__logo-text">
                Furniture
            </span>
        </Link>
    );
}
