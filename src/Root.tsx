import * as React from "react"
import Router from "./pages/Router";

export default class Root extends React.Component {
    render() {
        return <div className="fill">

            <Router />
        </div>
    }
}

//<Gate/>