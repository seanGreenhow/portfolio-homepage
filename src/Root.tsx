import * as React from "react"
import Router from "./Router";
import Gate from "./components/Gate";

export default class Root extends React.Component {
    render() {
        return <div className="fill">
            <Router />
        </div>
    }
}

//<Gate/>