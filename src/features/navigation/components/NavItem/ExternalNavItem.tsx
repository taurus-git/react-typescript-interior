import React from "react";
import { NavItem } from "../../types/navigationInterfaces";

interface ExternalNavItemProps {
    item: NavItem,
}

export const ExternalNavItem: React.FC<ExternalNavItemProps> = ( { item } ) => {
    return (
        <li className="header__menu-item">
            <a href={ item.path } target="_blank" rel="noopener noreferrer">{ item.label }</a>
        </li>
    )
}
