import React from 'react';
import "./social.css";
import { socialLinks } from "./socialLinks";
import { ExternalLink } from "../NavItem/ExternalLink";
import { Icon } from "../../../../components/ui/Icon/Icon";

export const Social = () => {
    return (
        <>
            {
                socialLinks.map( ( item: any ) => (
                    <ExternalLink key={ item.path } path={ item.path }>
                        <Icon id={ item.icon }/>
                    </ExternalLink>
                ) )
            }
        </>
    );
}
