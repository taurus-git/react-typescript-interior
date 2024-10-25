import React from 'react';
import { NavItem, SubmenuNav } from "../../types/navigationInterfaces";
import { isSubmenu } from "../../utils/navigationTypeGuards";
import { Submenu } from "../NavItem/Submenu";
import { isExternal } from "../../utils/utils";
import { ExternalComponent, NavLinkWithChildren, DefaultNavItem } from "../NavItem/ListItems";

export const componentsMap = {
    external: ExternalComponent,
    withChildren: NavLinkWithChildren,
    default: DefaultNavItem
} as const;

interface RenderNavLinkProps {
    item: NavItem | SubmenuNav,
    className?: string,
    children?: React.ReactNode,
}

const getType = (
    item: NavItem,
    children?: React.ReactNode
): keyof typeof componentsMap => {
    if ( isExternal( item ) ) return 'external';
    if ( children ) return 'withChildren';
    return 'default';
}

export const RenderNavLink: React.FC<RenderNavLinkProps> = ( props ) => {
    const { item, className, children } = props;

    if ( isSubmenu( item ) ) {
        return <Submenu submenu={ item } className={ className }/>;
    }

    const type = getType( item, children );
    const Component = componentsMap[ type ];

    return <Component item={ item as NavItem } className={ className }>{ children }</Component>;
}
