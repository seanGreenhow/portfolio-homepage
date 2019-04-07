import * as React from "react"
import './Gate.scss'

export default class Gate extends React.Component<{}, { open: boolean }> {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    render() {
        return (
            <div className="gate fill">
            </div>
        )
    }
}