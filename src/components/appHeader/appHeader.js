import React from "react";
import ThemeContext from "../../contexts/themeContext";
import "./appHeader.scss";

function Header({onThemeToggled}) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="header">
                    <span className="header-span">TODO</span>
                    <button
                        className={`toggle-theme-btn ${theme}`}
                        onClick={onThemeToggled}
                    />
                </div>
            )}
        </ThemeContext.Consumer>

    );
}

export default Header;