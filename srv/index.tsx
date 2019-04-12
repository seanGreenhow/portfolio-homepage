import * as express from "express"
import * as HTTP from "http"
import * as React from "react"
import * as ReactDOMServer from 'react-dom/server'
import Root from "../src/Root"
import { StaticRouter } from "react-router"
import HTML from "./HTML"
import * as helmet from 'helmet'

import { LocalizeProvider } from 'react-localize-redux'
import { renderToStaticMarkup } from "react-dom/server"
import * as en_translation from '../lang/en.localization.json'
import * as de_translation from '../lang/de.localization.json'

const server = express()
const http = HTTP.createServer(server)

server.use(helmet())
server.use(express.static('public'))

function getLangCodeFromLocale(locale: string): string {
    switch (locale) {
        case 'de':
        case 'de-DE':
            return 'de'

        case 'en':
        case 'en-US':
        case 'en-GB':
        default:
            return 'en'
    }
}

function getTranslationFromLangCode(lang: string): any {
    switch (lang) {
        case 'de':
            return de_translation

        case 'en':
        default: return en_translation
    }
}

server.get('/*', (req: express.Request, res: express.Response) => {
    let lang = 'en'
    let locale = req.acceptsLanguages(['de', 'de-DE', 'en', 'en-US', 'en-GB'])
    if (locale) lang = getLangCodeFromLocale(locale)

    const html = ReactDOMServer.renderToString(<HTML defaultLanguage={lang}>
        <LocalizeProvider initialize={{
            languages: [
                { name: "English", code: "en" },
                { name: "Deutsch", code: "de" }
            ],
            translation: getTranslationFromLangCode(lang),
            options: {
                renderToStaticMarkup,
                defaultLanguage: lang
            }
        }}>
            <StaticRouter location={req.url} ><Root /></StaticRouter>
        </LocalizeProvider>
    </HTML>)

    res.send(`<!DOCTYPE html>${html}`)
})
//


http.listen(8080, () => {
    console.log('Server started')
})