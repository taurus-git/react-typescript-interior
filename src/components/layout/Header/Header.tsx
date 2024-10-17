import "./header.css";
import { Navigation } from "../../../features/navigation/Navigation";
import { Overlay } from "../../ui/Overlay/Overlay";
import { Icon } from "../../ui/Icon/Icon";
import { Section } from "../Section/Section";

export const Header: React.FC = () => {

    return (
        <header className="header">
            <Overlay/>
            <div className="header__wrapper">
                <Section>
                    <div className="header__elements">
                        <Navigation/>
                        <div className="header__actions">
                        <div className="header__search nav__image">
                            <Icon id={"search"}/>
                        </div>
                        <div className="header__cart nav__image">
                            <Icon id={"basket-shopping"}/>
                        </div>
                    </div>
                    </div>
                </Section>
            </div>
        </header>
    );
};
