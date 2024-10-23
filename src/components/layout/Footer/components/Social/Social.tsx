import React from 'react';
import "./social.css";
import { SocialLink } from "../Social Link/SocialLink";
import { SocialLinkItem } from "../../types/footerInterfaces";
import {socialLinks} from "./socialLinks";

export const Social = () => {
    return (
        <>
            {
                socialLinks.map( ( item: SocialLinkItem ) => (
                    <SocialLink key={item.icon} item={item}/>
                ) )
            }
        </>
    );
}
