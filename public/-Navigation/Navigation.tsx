import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { headerMenuItems as menuItems } from "./headerMenuItems";
import { Icon } from "../Icon/Icon";
import { MenuItem } from "../../types/interface";
import { RenderNavLink } from "./RenderNavLink";

export const Navigation: React.FC = () => {
    const [ isMenuOpen, setMenuOpen ] = useState<boolean>( false );
    const ref = useRef<HTMLDivElement>( null );

    const toggleMenu = () => {
        setMenuOpen( ( prevState ) => !prevState );
    };

    useEffect( () => {
        const handler = ( event: MouseEvent ) => {
            if (
                isMenuOpen &&
                ref.current &&
                !ref.current.contains( event.target as Node )
            ) {
                setMenuOpen( false );
            }
        };

        document.addEventListener( 'mousedown', handler );

        return () => {
            document.removeEventListener( 'mousedown', handler );
        };
    }, [ isMenuOpen ] );



    /*  const renderLink = ( item: MenuItem ) => {
          switch ( true ) {
              case item.external :
                  return <NavLink to={item.path} onClick={ toggleMenu } target="_blank" rel="noopener noreferrer"></NavLink>
              default:
                  return <NavLink
                          to={ item.path }
                          onClick={ toggleMenu }>
                          { item.label }
                         </NavLink>
          }
      }*/

    return (
        <div ref={ ref } className="header__navigation">
            <button className="header__menu-icon" onClick={ toggleMenu }>
                <Icon id={ `menu${ isMenuOpen ? '-close' : '' }` }/>
            </button>

            <div className={ `header__menu ${ isMenuOpen ? 'open' : '' }` }>
                <nav>
                    <ul className="menu">
                        { menuItems.map( ( item: MenuItem, index ) => (
                            <li key={ `${ index }${ item.label }` }>
                                <RenderNavLink item={ item } toggleMenu={ toggleMenu }/>
                            </li>
                        ) ) }
                    </ul>
                </nav>
                <div className="theme-switcher" data-no-close>Switch Theme</div>
                <div className="language-switcher" data-no-close>Switch Language</div>
            </div>
        </div>
    );
}


