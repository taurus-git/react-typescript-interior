import React from 'react';
import { Icon } from "../../../../components/ui/Icon/Icon";

interface MenuButtonProps {
    isOpen: boolean,
    onClick: () => void,
}

export const MenuButton: React.FC<MenuButtonProps> = ( { isOpen, onClick } ) => {
    return (
        <button
            className="header__menu-icon"
            onClick={ onClick }>
            <Icon id={ `menu${ isOpen ? '-close' : '' }` }/>
        </button>
    );
}
