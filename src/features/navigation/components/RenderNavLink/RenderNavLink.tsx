import React from 'react';
import { NavItem, SubmenuNav } from "../../types/navigationInterfaces";
import { isSubmenu } from "../../utils/navigationTypeGuards";
import { NavLinkType } from "../../../../constants/constants";
import { Submenu } from "../NavItem/Submenu";
import { isExternal } from "../../utils/utils";
import { ExternalComponent, NavLinkWithChildren, DefaultNavItem } from "../NavItem/ListItems";

export const componentsMap = {
    [ NavLinkType.External ]: ExternalComponent,
    [ NavLinkType.WithChildren ]: NavLinkWithChildren,
    [ NavLinkType.Default ]: DefaultNavItem
} as const;

const getType = (
    item: NavItem,
    children?: React.ReactNode
): keyof typeof componentsMap => {
    if ( isExternal( item ) ) return NavLinkType.External;
    if ( children ) return NavLinkType.WithChildren;
    return NavLinkType.Default;
}

interface RenderNavLinkProps {
    item: NavItem | SubmenuNav,
    className?: string,
    children?: React.ReactNode,
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
