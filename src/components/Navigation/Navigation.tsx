import React from "react";
import { MenuItem } from "../../interface";
import { MenuItemComponent } from "../MenuItemComponent/MenuItemComponent";

interface NavigationProps {
    menuItems: MenuItem[];
    toggleMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ( { menuItems, toggleMenu } ) => {
    return (
        <nav>
            <ul className="menu">
                { menuItems.map( ( item, index ) => (
                    <MenuItemComponent key={ `${index}${item.label} ` } item={ item } toggleMenu={toggleMenu}/>
                ) ) }
            </ul>
        </nav>
    );
}


