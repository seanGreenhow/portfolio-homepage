import './index.scss'
import '../index.html'

import * as React from "react"
import * as ReactDOM from "react-dom"
import Root from './Root';

window.onload = () => ReactDOM.render(<Root />, document.getElementById("root"))