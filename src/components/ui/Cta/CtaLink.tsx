import React from 'react';
import { NavLink } from "react-router-dom";
import { NavItem } from "../../../features/navigation/types/navigationInterfaces";

interface CtaLinkProps extends NavItem {
    className?: string;
}

export const CtaLink: React.FC<CtaLinkProps> = ( { path, label, className = "cta-primary" } ) => {
    return (
        <NavLink to={ path } className={ className }>
            { label }
        </NavLink>
    );
}
