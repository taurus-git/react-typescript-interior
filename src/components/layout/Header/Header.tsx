import "./header.css";
import { Navigation } from "../../../features/navigation/Navigation";
import { Overlay } from "../../ui/Overlay/Overlay";

export const Header: React.FC = () => {

    return (
        <header className="header">
            <Overlay/>
            <div className="header-wrapper">
                <div className="header__logo"></div>
                <Navigation/>
                <div className="header__actions"></div>
                <div className="header__auth-buttons"></div>
            </div>
        </header>
    );
};
