import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../interface";
import { useIsMobile } from "../../hooks/useIsMobile";

interface MenuItemComponentProps {
    item: MenuItem;
    toggleMenu: () => void;
}

export const MenuItemComponent: React.FC<MenuItemComponentProps> = ( { item, toggleMenu } ) => {
    const isMobile = useIsMobile();
    const [ submenuOpen, setSubmenuOpen ] = useState( false );
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    const handleClick = () => {
        if ( isMobile && hasSubmenu ) {
            setSubmenuOpen( !submenuOpen );
        } else if ( isMobile && !hasSubmenu ) {
            toggleMenu();
        }
    };

    const handleMouseEnter = () => {
        if ( !isMobile ) {
            setSubmenuOpen( true );
        }
    };

    const handleMouseLeave = () => {
        if ( !isMobile ) {
            setSubmenuOpen( false );
        }
    };

    const getLiClassName = ( item: MenuItem ): string => {
        let className = 'menu-item';
        if ( hasSubmenu ) {
            className += ' has-submenu';
            if ( submenuOpen ) {
                className += ' show';
            }
        }
        ;

        return className
    }

    const renderSubmenu = ( item: MenuItem ) => {
        return (
            <>
                <a onClick={ handleClick }>{ item.label }</a>
                { submenuOpen &&
                    <ul className="menu submenu">
                        {
                            item.submenu && item.submenu.map( ( item, index ) => (
                                <MenuItemComponent key={ `${ index }${ item.label } ` }
                                                   item={ item }
                                                   toggleMenu={ toggleMenu }/>
                            ) )
                        }
                    </ul>
                }
            </>
        )
    }

    const renderLink = ( item: MenuItem ) => {
        switch ( true ) {
            case item.external :
                return <NavLink to={ item.path } target="_blank" rel="noopener noreferrer">{ item.label } </NavLink>;
            case item.submenu && item.submenu.length > 0:
                return (renderSubmenu( item ));
            default:
                return <NavLink to={ item.path }>{ item.label }</NavLink>;
        }
    }

    return (
        <li className={ getLiClassName( item ) }
            onMouseEnter={ handleMouseEnter }
            onMouseLeave={ handleMouseLeave }>
            { renderLink( item ) }
        </li>
    );
}
