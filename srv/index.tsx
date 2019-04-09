import * as express from "express"
import * as HTTP from "http"
import * as path from "path"
import * as React from "react"
import * as ReactDOMServer from 'react-dom/server'
import Root from "../src/Root"
import { StaticRouter } from "react-router"
import HTML from "./HTML"
import * as helmet from 'helmet'


const server = express()
const http = HTTP.createServer(server)

server.use(helmet())
server.use(express.static('public'))

server.get('/*', (req: express.Request, res: express.Response) => {
    const html = ReactDOMServer.renderToString(<HTML><StaticRouter location={req.url} ><Root /></StaticRouter></HTML>)
    res.send(`<!DOCTYPE html>${html}`)
})

http.listen(8080, () => {
    console.log('Server started')
})