import * as React from "react"
import { Link, Route } from "react-router-dom"
import './Navigation.scss'
import { MdHome, MdWork, MdPerson } from "react-icons/md"
import { Translate } from "react-localize-redux"
export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <MenuLink to="/" exact>
                    <MdHome size={24} /> <span className="text"><Translate id="home" /></span>
                </MenuLink>
                <MenuLink to="/projects">
                    <MdWork size={24} /> <span className="text"><Translate id="projects" /></span>
                </MenuLink>
                <MenuLink to="/contact">
                    <MdPerson size={24} /> <span className="text"><Translate id="contact" /></span>
                </MenuLink>
            </nav>
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