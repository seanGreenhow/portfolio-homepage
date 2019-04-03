import * as React from "react"
import { Link, Route } from "react-router-dom";
import './Navigation.scss'
import { MdHome, MdWork } from "react-icons/md";
export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <MenuLink to="/" exact>
                    <MdHome size={18} /> <span>Home</span>
                </MenuLink>
                <MenuLink to="/projects">
                    <MdWork size={18} /> <span>Projects / Work</span>
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
            children={({ match }) => <Link className={match ? "active" : ""} to={to}>{children}</Link>}
        />
    );
}