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

    const className = "footer";

    return (
        <footer>
            <div className={ `${ className }` }>
                <Section>
                    <div className={ `${ className }__container` }>
                        <div className={ `${ className }__brand` }>
                            <Logo/>
                            <p className={ `${ className }__description` }>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div className={ `${ className }__social` }>
                                <Social/>
                            </div>
                        </div>
                        <div className={ `${ className }__menu` }>
                            {
                                Object.keys( footerMenu ).length > 0 &&
                                (Object.entries( footerMenu ) as [ keyof typeof footerMenu, NavItem[] ][])
                                    .map( ( [ section, items ] ) => (
                                        <nav key={ section } className={ `${ className }__column` }>
                                            <h3 className={ `${ className }__title` }>{ section }</h3>
                                            <ul className={ `${ className }__menu-items` }>
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
                    <div className={ `${ className }__bottom` }>
                        <div className={ `${ className }__copyright` }>
                            <p className="copyright">
                                Copyright © { new Date().getFullYear() } Furnituredot. All Rights Reserved.
                            </p>
                            <div className={ `${ className }__legal` }>
                                <a href="" className={ `${ className }__legal-link` }>User Terms &amp; Conditions</a>
                                <a href="" className={ `${ className }__legal-link` }>Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            <Overlay/>

        </footer>
    );
}
