import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../types/interface";

interface RenderLinkProps {
    item: MenuItem,
    toggleMenu: () => void
}

export const RenderNavLink: React.FC<RenderLinkProps> = ( { item, toggleMenu } ) => {
    const [ submenuOpen, setSubmenuOpen ] = useState( false );
    const hasSubMenu = item.submenu && item.submenu.length > 0;

    const onMouseClick = () => {
        setSubmenuOpen( !submenuOpen );
    }

    const getClassName = ( item: MenuItem ) => {
        let className = "menu-item";

        if ( hasSubMenu ) {
            className += ' has-submenu';
        }

        if ( submenuOpen ) {
            className += ' show';
        }

        return className;
    }

    if ( item.external ) {
        return <NavLink
            to={ item.path }
            onClick={ toggleMenu }
            target="_blank"
            rel="noopener noreferrer">
        </NavLink>
    }

    console.log( hasSubMenu );

    if ( hasSubMenu ) {
        return (
            <>
                <NavLink to={ item.path }
                         onClick={ toggleMenu }>{ item.label }</NavLink>
                <ul className="menu submenu">
                    { item.submenu!.map( ( item: MenuItem, index ) => (
                        <li
                            key={ `${ index }${ item.label }` }
                            onClick={ onMouseClick }
                            className={ getClassName( item ) }>
                            <RenderNavLink item={ item } toggleMenu={ toggleMenu }></RenderNavLink>
                        </li>
                    ) ) }
                </ul>
            </>
        )
    }

    return (
        <NavLink
            to={ item.path }
            onClick={ toggleMenu }>
            { item.label }
        </NavLink>
    );
}
