import React, { useContext } from 'react';
import { NavItem, SubmenuNav } from "../../types/navigationInterfaces";
import { isSubmenu } from "../../utils/navigationTypeGuards";
import { Submenu } from "../NavItem/Submenu";
import { isExternal } from "../../utils/utils";
import { ExternalLink } from "../NavItem/ExternalLink";
import { BaseLinkItem } from "../NavItem/BaseLinkItem";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../../../context/MainContext";

interface RenderNavLinkProps {
    item: NavItem | SubmenuNav,
    className: string,
    children?: React.ReactNode,
}

export const RenderNavLink: React.FC<RenderNavLinkProps> = ( { item, className, children } ) => {
    const { toggleMenu } = useContext( MainContext ).menu;
    const { isDesktop } = useContext( MainContext ).mediaQuery;

    if ( isSubmenu( item ) ) {
        return (
            <Submenu submenu={ item } className={ className }/>
        )
    } else if ( isExternal( item ) ) {
        return (
            <li className={ className }>
                <ExternalLink path={ item.path }>
                    { item.label }
                </ExternalLink>
            </li>
        )
    } else if ( children ) {
        return (
            <BaseLinkItem item={ item } className={ className }>
                <NavLink onClick={ isDesktop ? undefined : toggleMenu } to={ item.path }>
                    { children }
                </NavLink>
            </BaseLinkItem>
        );
    } else {
        return (
            <li className={ className }>
                <BaseLinkItem item={ item } className={className}/>
            </li>
        )
    }
}
