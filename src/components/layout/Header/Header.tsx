import "./header.css";
import { Navigation } from "../../../features/navigation/Navigation";
import { Icon } from "../../ui/Icon/Icon";
import { Container } from "../Container/Container";

export const Header: React.FC = () => {
    const className = "header";

    return (
        <header className={ `${ className }` }>
            <div className={ `${ className }__wrapper` }>
                <Container>
                    <div className={ `${ className }__elements` }>
                        <Navigation/>
                        <div className={ `${ className }__actions` }>
                            <div className={ `${ className }__search nav__image` }>
                                <Icon id={ "search" }/>
                            </div>
                            <div className={ `${ className }__cart nav__image` }>
                                <Icon id={ "basket-shopping" }/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};
