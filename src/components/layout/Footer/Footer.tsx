import React from 'react';
import { NavLink } from "react-router-dom";
import "./footer.css";
import { Section } from "../Section/Section";
import { Logo } from "../../ui/Logo/Logo";
import { Social } from "../../../features/navigation/components/Social/Social";
import { footerMenu } from "../../../features/navigation/components/Menu/menu";
import { NavItem } from "../../../features/navigation/types/navigationInterfaces";

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <Section>
                    <div className="footer__container">
                        <div className="footer__brand">
                            <Logo/>
                            <p className="footer__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <div className="footer__social">
                                <Social/>
                            </div>
                        </div>
                        <div className="footer__menu">
                            {
                                Object.keys( footerMenu ).length > 0 &&
                                (Object.entries( footerMenu ) as [keyof typeof footerMenu, NavItem[]][])
                                    .map( ( [ section, items ] ) => (
                                    <nav key={section} className="footer__column">
                                        <h3 className="footer__title">{ section }</h3>
                                        <ul className="footer__menu-items">
                                            { items.map( ( item: NavItem ) => (
                                                <li key={item.path} className="footer__menu-item">
                                                    <NavLink to={ item.path }>
                                                        { item.label }
                                                    </NavLink>
                                                </li>
                                            ) ) }
                                        </ul>
                                    </nav>
                                ) )
                            }
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__copyright">
                            <p className="copyright"></p>
                            <div className="footer__legal">
                                <a href="" className="footer__legal-link"></a>
                                <a href="" className="footer__legal-link"></a>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </footer>
    );
}
