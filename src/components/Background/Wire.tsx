import * as React from "react"
import uuid = require("uuid")
import Electron from "./Electron";

export default class Wire extends React.Component<{
    path: string,
    electrons?: number,
    fill?: string,
    stroke?: string,
    width?: number
}, { id: string, electrons: React.ReactElement[] }> {
    static defaultProps = {
        electrons: 1,
        fill: 'none',
        stroke: 'none',
        width: 1
    }
    state = {
        id: undefined,
        electrons: []
    }

    render() {
        return (<g>
            <path id={this.state.id}
                fill={this.props.fill}
                stroke={this.props.stroke}
                strokeWidth={this.props.width}
                d={this.props.path}
            />
            {this.state.electrons}
        </g>)
    }

    componentDidMount() {
        let id = `wire_${uuid.v4()}`
        this.setState({
            id: id,
            electrons: [...Array(this.props.electrons)].map((_, index) => <Electron key={index} wireID={id} size={this.props.width} />)
        })
    }
}