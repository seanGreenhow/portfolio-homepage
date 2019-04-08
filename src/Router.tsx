import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { renderToStaticMarkup } from "react-dom/server"
import Home from "./pages/Home"
import * as config from "../config.json"
import Background from "./components/Background"
import Projects from "./pages/Projects"
import { withLocalize, LocalizeContextProps } from "react-localize-redux"

import * as en_translation from '../lang/en.localization.json'
import * as de_translation from '../lang/en.localization.json'

class Main extends React.Component<LocalizeContextProps> {

    constructor(props) {
        super(props)
        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "German", code: "de" }
            ],
            options: { renderToStaticMarkup }
        });

        this.props.addTranslationForLanguage(en_translation, 'en');
        this.props.addTranslationForLanguage(de_translation, 'de');

    }


    render() {
        return <Router basename={config.basepath}>
            <div className="page fill">
                <Background />
                <div className="content fill">
                    <Switch>
                        <Route path="/projects" component={() => <Projects />} />
                        <Route component={() => <Home />} />
                    </Switch>
                </div>
            </div>
        </Router>
    }
}

export default withLocalize(Main);

/*

*/