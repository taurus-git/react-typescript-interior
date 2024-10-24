import React from 'react';
import { NavLink } from "react-router-dom";
import { NavItem } from "../../types/navigationInterfaces";

interface BaseLinkItemProps {
    item: NavItem,
    className?: string,
    children?: React.ReactNode
}

export const BaseLinkItem: React.FC<BaseLinkItemProps> = (
    {
        item,
        className,
        children
    } ) => {
    return (
        <li className={ className }>
            { children || (
                <NavLink to={ item.path }>
                    { item.label }
                </NavLink>
            ) }
        </li>
    );
}
