import React from 'react';
import { NavItem, SubmenuNav } from "../../types/navigationInterfaces";
import { isSubmenu } from "../../utils/navigationTypeGuards";
import { Submenu } from "../NavItem/Submenu";
import { isExternal } from "../../utils/utils";
import { ExternalLink } from "../NavItem/ExternalLink";
import { BaseLinkItem } from "../NavItem/BaseLinkItem";

interface RenderNavLinkProps {
    item: NavItem | SubmenuNav,
    className: string,
    children?: React.ReactNode,
}

export const RenderNavLink: React.FC<RenderNavLinkProps> = ( { item, className, children } ) => {

    if ( isSubmenu( item ) ) {
        return (
            <Submenu submenu={ item } className={ className }/>
        )
    }

    if ( isExternal( item ) ) {
        return (
            <li className={ className }>
                <ExternalLink path={ item.path }>
                    { item.label }
                </ExternalLink>
            </li>
        )
    }

    if ( children ) {
        return (
            <li className={ className }>
                <BaseLinkItem item={ item }>
                    { children }
                </BaseLinkItem>
            </li>
        );
    } else {
        return (
            <li className={ className }>
                <BaseLinkItem item={ item }/>
            </li>
        )
    }

}
