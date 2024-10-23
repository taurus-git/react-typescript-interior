import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { NavItem } from "../../types/navigationInterfaces";
import { isExternal } from "../../utils/utils";
import { ExternalLink } from "./ExternalLink";
import { MainContext } from "../../../../context/MainContext";

interface NavLinkItemProps {
    item: NavItem,
    className: string,
}

export const NavLinkItem: React.FC<NavLinkItemProps> = ( { item, className } ) => {
    const { toggleMenu } = useContext( MainContext ).menu;
    const { isDesktop } = useContext( MainContext ).mediaQuery;

    if ( isExternal( item ) ) {
        return (
            <li className={ className }>
                <ExternalLink path={ item.path }>
                    { item.label }
                </ExternalLink>
            </li>
        )
    } else {
        return (
            <li className={ className }>
                <NavLink onClick={ isDesktop ? undefined : toggleMenu } to={ item.path }>
                    { item.label }
                </NavLink>
            </li>
        );
    }
}
