import React from 'react';
import "./social.css";
import { SocialLink } from "../Social Link/SocialLink";
import { SocialLinkItem } from "../../types/footerInterfaces";

const socialLinks: SocialLinkItem[] = [
    { path: "https://facebook.com/", icon: "facebook" },
    { path: "https://www.youtube.com/", icon: "youtube" },
    { path: "https://x.com/", icon: "twitter" },
    { path: "https://www.instagram.com/", icon: "instagram" },
];

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
