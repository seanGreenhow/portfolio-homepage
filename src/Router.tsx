import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import * as config from "../config.json"
import Background from "./components/Background";
import Projects from "./pages/Projects";
import Attribution from "./pages/Attribution";
export default class Main extends React.Component {
    render() {
        return <Router basename={config.basepath}>
            <div className="page fill">
                <div className="content fill">
                    <Background />
                    <Switch>
                        <Route path="/projects" component={() => <Projects />} />
                        <Route path="/attribution" component={() => <Attribution />} />
                        <Route component={() => <Home />} />
                    </Switch>
                </div>
            </div>
        </Router>
    }
}

/*
<Route exact path="/" component={() => <Home />} />
<Route path="/projects" component={() => <Projects />} />
<Route component={() => <Error404 />} />
*/