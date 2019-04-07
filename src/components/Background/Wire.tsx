import * as React from "react"
import uuid = require("uuid")
import anime from 'animejs'
import Electron from "./Electron";

export default class AnimatedWire extends React.Component<{
    path: string,
    electrons?: number,
    fill?: string,
    stroke?: string,
    width?: number
}, { id: string }> {
    state = {
        id: `wire_${uuid.v4()}`
    }
    static defaultProps = {
        electrons: 1,
        fill: 'none',
        stroke: 'none',
        width: 1
    }

    render() {


        return (<g>
            <path id={this.state.id}
                fill={this.props.fill}
                stroke={this.props.stroke}
                strokeWidth={this.props.width}
                d={this.props.path}
            />

            {[...Array(this.props.electrons)].map((_, id) => <Electron key={id} wireID={this.state.id} size={this.props.width} />)}

        </g>)
    }
}