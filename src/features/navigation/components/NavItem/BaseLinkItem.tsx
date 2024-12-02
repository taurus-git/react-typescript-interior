import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { NavItem } from "../../types/navigationInterfaces";
import { isNavItem } from "../../utils/navigationTypeGuards";
import { MainContext } from "../../../../context/MainContext";

interface BaseLinkItemProps {
    item: NavItem;
    children?: React.ReactNode;
}

export const BaseLinkItem: React.FC<BaseLinkItemProps> = ( { item, children } ) => {
    const { toggleMenu } = useContext( MainContext ).menu;
    const { isDesktop } = useContext( MainContext ).mediaQuery;

    return children ? (
        <NavLink onClick={ isDesktop ? undefined : toggleMenu }
                 to={ isNavItem( item ) ? item.path : '' }>
            { children }
        </NavLink>
    ) : (
        <NavLink to={ item.path }>
            { item.label }
        </NavLink>
    )
}
