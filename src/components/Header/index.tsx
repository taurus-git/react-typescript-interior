import React from "react";
import styles from "./styles.module.css";

export const Header = () => {
    return (
        <header className={ styles['header'] }>
            <div className={ styles['header-wrapper'] }>
                <div className={ styles['header__logo'] }></div>
                <nav className={ styles['header__menu'] }></nav>
                <div className={ styles['header__actions'] }></div>
                <div className={ styles['header__auth-buttons'] }></div>
            </div>
        </header>
    )
}
