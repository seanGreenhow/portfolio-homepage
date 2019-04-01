import * as React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Error404 from "./Error/404";
import * as config from "../../config.json"
import './Router.scss'

export default class Main extends React.Component {
    render() {
        return <Router basename={config.basepath}>
            <div className="page fill">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects / Work</Link>
                </nav>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={() => <Home />} />
                        <Route path="/projects" component={() => <Projects />} />
                        <Route component={() => <Error404 />} />
                    </Switch>
                </div>
            </div>
        </Router>
    }
}