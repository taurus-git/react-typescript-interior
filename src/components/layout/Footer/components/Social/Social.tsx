import React from 'react';
import "./social.css";
import { socialLinks } from "./socialLinks";
import { ExternalLink } from "../../../../../features/navigation/components/NavItem/ExternalLink";
import { Icon } from "../../../../ui/Icon/Icon";

export const Social = () => {
    return (
        <>
            {
                socialLinks.map( ( item: any ) => (
                    <ExternalLink path={ item.path }>
                        <Icon id={ item.icon }/>
                    </ExternalLink>
                ) )
            }
        </>
    );
}
