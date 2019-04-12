import '../res/fonts'

import 'simplebar/dist/simplebar.min.css';
import 'scrollmagic-with-ssr'
import 'gsap'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

import * as React from "react"
import * as ReactDOM from "react-dom"
import Root from './Root'
import * as config from "../config.json"
import { BrowserRouter } from 'react-router-dom'
import { LocalizeProvider } from 'react-localize-redux'
import { renderToStaticMarkup } from "react-dom/server"

import * as en_translation from '../lang/en.localization.json'
import * as de_translation from '../lang/de.localization.json'

declare var defaultLanguage: string;
function getTranslationFromLangCode(lang: string): any {
    switch (lang) {
        case 'de':
            return de_translation

        case 'en':
        default: return en_translation
    }
}

window.onload = () => ReactDOM.hydrate(
    <LocalizeProvider initialize={{
        languages: [
            { name: "English", code: "en" },
            { name: "Deutsch", code: "de" }
        ],
        translation: getTranslationFromLangCode(defaultLanguage ? defaultLanguage : 'en'),
        options: {
            renderToStaticMarkup,
            defaultLanguage: defaultLanguage ? defaultLanguage : 'en',
            renderInnerHtml: true
        }
    }}>
        <BrowserRouter basename={config.basepath}><Root /></BrowserRouter>
    </LocalizeProvider>
    , document.getElementById("root"))