import * as React from "react"
import App from "./App";
import './Root.scss'
import { LocalizeProvider } from "react-localize-redux";

export default class Root extends React.Component {
    render() {
        return <div className="fill">
            <LocalizeProvider>
                <App />
            </LocalizeProvider>
        </div>
    }
}