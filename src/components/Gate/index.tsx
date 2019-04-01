import * as React from "react"
import './Gate.scss'

export default class Gate extends React.Component {
    render() {
        return (
            <div className="gate fill">

                <div className="door right"></div>
                <div className="door left"></div>

                <div className="lock">
                    <div className="seal right"></div>
                    <div className="seal left"></div>
                </div>
            </div>
        )
    }
}