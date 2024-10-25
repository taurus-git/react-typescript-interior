import { NavItem } from "../../types/navigationInterfaces";
import React from "react";
import { ListItem } from "../../../../components/ui/ListItem/ListItem";
import { ExternalLink } from "./ExternalLink";
import { BaseLinkItem } from "./BaseLinkItem";

export interface NavigationItemProps {
    item: NavItem;
    className?: string;
}

export interface WithChildrenProps extends NavigationItemProps {
    children: React.ReactNode;
}

export const ExternalComponent: React.FC<NavigationItemProps> = ( { item, className } ) => {
    return (
        <ListItem className={ className }>
            <ExternalLink path={ item.path }>
                { item.label }
            </ExternalLink>
        </ListItem>
    )
}

export const NavLinkWithChildren: React.FC<WithChildrenProps> = ( { item, className, children } ) => {
    return (
        <ListItem className={ className }>
            <BaseLinkItem item={ item }>
                { children }
            </BaseLinkItem>
        </ListItem>
    )
}

export const DefaultNavItem: React.FC<NavigationItemProps> = ( { item, className } ) => {
    return (
        <ListItem className={ className }>
            <BaseLinkItem item={ item }/>
        </ListItem>
    )
}
