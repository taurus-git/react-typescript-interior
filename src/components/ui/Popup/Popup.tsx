import React from 'react';
import "./popup.css";
import { Icon } from "../Icon/Icon";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Popup: React.FC<PopupProps> = ( { isOpen = false, onClose, children, className = '' } ) => {
    const onContentClick = ( e: React.MouseEvent ) => {
        e.stopPropagation();
    }

    if(!isOpen) return null;

    return (
        <div className={ `popup ${ isOpen ? 'open' : '' } ${ className }` }>

            <span className="popup__button" onClick={ onClose }>
                <Icon id={ 'menu-close' }/>
            </span>

            <div className="popup__content" onClick={ onContentClick }>
                { children }
            </div>
        </div>
    );
}
