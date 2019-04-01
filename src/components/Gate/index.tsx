import * as React from "react"
import './Gate.scss'

export default class Gate extends React.Component {
    render() {
        return (
            <div className="gate">
                <div className="door right"></div>
                <div className="door left"></div>
            </div>
        )
    }
}