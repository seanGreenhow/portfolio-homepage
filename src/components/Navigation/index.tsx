import * as React from "react"
import { Link, Route } from "react-router-dom"
import './Navigation.scss'
import { MdHome, MdWork, MdPerson, MdGrade } from "react-icons/md"
import { Translate } from "react-localize-redux"
import LanguageSelector from "./LanguageSelector";
export default class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation">
                <div className="left"></div>
                <nav>
                    <MenuLink to="/" exact>
                        <MdHome size={24} /> <span className="text"><Translate id="home" /></span>
                    </MenuLink>
                    <MenuLink to="/projects">
                        <MdWork size={24} /> <span className="text"><Translate id="projects" /></span>
                    </MenuLink>
                    <MenuLink to="/skills">
                        <MdGrade size={24} /> <span className="text"><Translate id="skills" /></span>
                    </MenuLink>
                    <MenuLink to="/contact">
                        <MdPerson size={24} /> <span className="text"><Translate id="contact" /></span>
                    </MenuLink>
                </nav>
                <div className="right">
                    <LanguageSelector />
                </div>
            </div>

        )
    }
}

function MenuLink({ children, to, exact = undefined }) {
    return (
        <Route
            path={to}
            exact={exact}
            children={({ match }) => <Link className={match ? " active" : ""} to={to}>{children}</Link>}
        />
    );
}