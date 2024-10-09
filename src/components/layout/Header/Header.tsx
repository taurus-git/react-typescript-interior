import { Navigation } from "../../../features/navigation/Navigation";
import "./header.css";

export const Header: React.FC = () => {

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header__logo"></div>
                <Navigation/>
                <div className="header__actions"></div>
                <div className="header__auth-buttons"></div>
            </div>
        </header>
    );
};
