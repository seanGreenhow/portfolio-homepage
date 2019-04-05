import './index.scss'
import '../index.html'
import '../res/fonts'

import 'simplebar/dist/simplebar.min.css';
import 'scrollmagic'
import 'gsap'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

import * as React from "react"
import * as ReactDOM from "react-dom"
import Root from './Root';

window.onload = () => ReactDOM.render(<Root />, document.getElementById("root"))