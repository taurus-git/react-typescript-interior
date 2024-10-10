import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { SubmenuNav } from "../../types/navigationInterfaces";
import { NavLinkItem } from "./NavLinkItem";
import { MainContext } from "../../../../context/MainContext";

interface SubmenuProps {
    submenu: SubmenuNav,
}

export const Submenu: React.FC<SubmenuProps> = ( { submenu  } ) => {
    const { isSubMenuOpen, toggleSubmenu } = useContext( MainContext ).menu;

    const getSubmenuClass = () => {
        let className = "menu-item has-submenu";

        if ( isSubMenuOpen ) {
            className += ' open';
        }

        return className;
    }

    return (
        <li className={ getSubmenuClass() }
            onClick={ toggleSubmenu }>

            <NavLink to="">
                { submenu.label }
            </NavLink>

            <ul className="menu submenu">
                { submenu.submenu.map( ( item ) => (
                    <NavLinkItem key={ item.label } item={ item } />
                ) ) }
            </ul>
        </li>
    );
}
