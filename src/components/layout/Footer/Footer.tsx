import React from 'react';
import "./footer.css";
import { Section } from "../Section/Section";
import { Logo } from "../../ui/Logo/Logo";
import { Social } from "./components/Social/Social";

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
                        <div className="footer__links">
                            <nav className="footer__column">
                                <h3 className="footer__title"></h3>
                                <ul className="footer__list">
                                    <li className="footer__list-item">
                                        <a href=""></a>
                                    </li>
                                </ul>
                            </nav>
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
