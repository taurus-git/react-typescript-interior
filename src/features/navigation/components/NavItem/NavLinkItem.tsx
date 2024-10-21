import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { NavItem } from "../../types/navigationInterfaces";
import { isExternal } from "../../utils/utils";
import { ExternalNavItem } from "./ExternalNavItem";
import { MainContext } from "../../../../context/MainContext";

interface NavLinkItemProps {
    item: NavItem,
}

export const NavLinkItem: React.FC<NavLinkItemProps> = ( { item } ) => {
    const { toggleMenu } = useContext( MainContext ).menu;
    const { isDesktop } = useContext( MainContext ).mediaQuery;

    if ( isExternal( item ) ) {
        return <ExternalNavItem item={ item }/>
    } else {
        return (
            <li className="header__menu-item">
                <NavLink onClick={ isDesktop ? undefined : toggleMenu } to={ item.path }>
                    { item.label }
                </NavLink>
            </li>
        );
    }
}
