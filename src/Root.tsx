import * as React from "react"
import Router from "./Router";
import Gate from "./components/Gate";
import { LocalizeProvider } from "react-localize-redux";

export default class Root extends React.Component {
    render() {
        return <div className="fill">
            <LocalizeProvider>
                <Router />
            </LocalizeProvider>

        </div>
    }
}

//<Gate/>