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

window.onload = () => ReactDOM.render(<BrowserRouter basename={config.basepath}><Root /></BrowserRouter>, document.getElementById("root"))