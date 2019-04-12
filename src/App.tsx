import * as React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./pages/Home"

import Background from "./components/Background"
import Projects from "./pages/Projects"
import Error404 from "./pages/Error/404";
import Contact from "./pages/Contact";
import './Chat.scss'

export default class App extends React.Component {
    render() {
        return <div className="page fill">
            <Background />
            <div className="content fill">
                <Switch>
                    <Route path="/projects" component={() => <Projects />} />
                    <Route path="/contact" component={() => <Contact />} />
                    <Route path="/" exact component={() => <Home />} />
                    <Route component={() => <Error404 />} />
                </Switch>
            </div>
        </div>
    }
}