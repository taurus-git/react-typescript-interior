import React from 'react';
import "./cta-button.css";
import { Icon, IconProps } from "../Icon/Icon";

interface CtaButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    icon?: IconProps;
}

export const CtaButton: React.FC<CtaButtonProps> = ( { label, onClick, className, icon } ) => {
    return (
        <button className={ className } onClick={ onClick }>
            { icon && <Icon { ...icon }/> }
            { label }
        </button>
    );
}
