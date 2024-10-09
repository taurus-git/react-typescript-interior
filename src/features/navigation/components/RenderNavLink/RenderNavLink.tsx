import React from 'react';
import { NavItem, SubmenuNav } from "../../types/navigationInterfaces";
import { isSubmenu } from "../../utils/navigationTypeGuards";
import { NavLinkItem } from "../NavItem/NavLinkItem";
import { Submenu } from "../NavItem/Submenu";

interface RenderNavLinkProps {
    item: NavItem | SubmenuNav,
}

export const RenderNavLink: React.FC<RenderNavLinkProps> = ( { item} ) => {

    if ( isSubmenu( item ) ) {
        return (
            <Submenu submenu={ item } />
        )
    } else {
        return (
            <NavLinkItem item={ item } />
        );
    }
}
