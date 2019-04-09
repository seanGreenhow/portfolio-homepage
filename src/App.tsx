import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { renderToStaticMarkup } from "react-dom/server"
import Home from "./pages/Home"

import Background from "./components/Background"
import Projects from "./pages/Projects"
import { withLocalize, LocalizeContextProps, LocalizeProvider } from "react-localize-redux"

import * as en_translation from '../lang/en.localization.json'
import * as de_translation from '../lang/en.localization.json'


class App extends React.Component<LocalizeContextProps> {

    constructor(props) {
        super(props)
        this.props.addTranslationForLanguage(en_translation, 'en');
        this.props.addTranslationForLanguage(de_translation, 'de');
    }

    render() {
        return <LocalizeProvider initialize={{
            languages: [
                { name: "English", code: "en" },
                { name: "German", code: "de" }
            ],
            translation: en_translation,
            options: {
                renderToStaticMarkup
            }
        }}>
            <div className="page fill">
                <Background />
                <div className="content fill">
                    <Switch>
                        <Route path="/projects" component={() => <Projects />} />
                        <Route component={() => <Home />} />
                    </Switch>
                </div>
            </div>
        </LocalizeProvider>
    }
}

export default withLocalize(App)