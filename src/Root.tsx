import * as React from "react"
import App from "./App";
import './Root.scss'
import { LocalizeProvider, LocalizeContextProps, withLocalize } from "react-localize-redux";

import * as en_translation from '../lang/en.localization.json'
import * as de_translation from '../lang/de.localization.json'

class Root extends React.Component<LocalizeContextProps> {
    constructor(props) {
        super(props)

        this.props.addTranslationForLanguage(en_translation, 'en');
        this.props.addTranslationForLanguage(de_translation, 'de');
    }

    render() {
        return <App />

    }
}

export default withLocalize(Root)