import React from 'react';
import "./footer.css";
import { Section } from "../Section/Section";
import { Logo } from "../../ui/Logo/Logo";
import { Social } from "../../ui/Social/Social";
import { footerMenu } from "../../../features/navigation/components/Menu/menu";
import { NavItem } from "../../../features/navigation/types/navigationInterfaces";
import { RenderNavLink } from "../../../features/navigation/components/RenderNavLink/RenderNavLink";
import { Styles } from "../../../constants/constants";
import { Overlay } from "../../ui/Overlay/Overlay";

export const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <Section>
                    <div className="footer__container">
                        <div className="footer__brand">
                            <Logo/>
                            <p className="footer__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div className="footer__social">
                                <Social/>
                            </div>
                        </div>
                        <div className="footer__menu">
                            {
                                Object.keys( footerMenu ).length > 0 &&
                                (Object.entries( footerMenu ) as [ keyof typeof footerMenu, NavItem[] ][])
                                    .map( ( [ section, items ] ) => (
                                        <nav key={ section } className="footer__column">
                                            <h3 className="footer__title">{ section }</h3>
                                            <ul className="footer__menu-items">
                                                { items.map( ( item: NavItem ) => (
                                                    <RenderNavLink
                                                        key={ item.label }
                                                        item={ item }
                                                        className={ Styles.footerMenuItem }/>
                                                ) ) }
                                            </ul>
                                        </nav>
                                    ) )
                            }
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__copyright">
                            <p className="copyright">
                                Copyright © { new Date().getFullYear() } Furnituredot. All Rights Reserved.
                            </p>
                            <div className="footer__legal">
                                <a href="" className="footer__legal-link">User Terms &amp; Conditions</a>
                                <a href="" className="footer__legal-link">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            <Overlay />

        </footer>
    );
}
