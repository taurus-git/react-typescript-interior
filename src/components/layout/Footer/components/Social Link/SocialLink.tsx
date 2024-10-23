import React from 'react';
import { Icon } from "../../../../ui/Icon/Icon";
import { Link } from "react-router-dom";
import { SocialLinkItem } from "../../types/footerInterfaces";

interface SocialLinkProps {
    item: SocialLinkItem,
}

export const SocialLink: React.FC<SocialLinkProps> = ( { item }  ) => {
    return (
        <Link to={ item.path } target="_blank" className="footer__social-link">
            <Icon id={ item.icon }/>
        </Link>
    );
}
