import React from "react";
import { MenuItem } from "../../interface";
import { MenuItemComponent } from "../MenuItemComponent/MenuItemComponent";

interface NavigationProps {
    menuItems: MenuItem[];
}

export const Navigation: React.FC<NavigationProps> = ( { menuItems } ) => {
    return (
        <nav>
            <ul className="menu">
                { menuItems.map( ( item, index ) => (
                    <MenuItemComponent key={ `${ index }${ item.label } ` } item={ item }/>
                ) ) }
            </ul>
        </nav>
    );
}


