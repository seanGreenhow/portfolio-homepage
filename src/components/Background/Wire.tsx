import * as React from "react"
import uuid = require("uuid")
import { Path } from "./Path"
import anime from 'animejs'

export default class Wire extends React.Component<{
    path: Path,
    fill?: string,
    stroke?: string,
    width?: number,
    animated?: boolean
}, { id: string }> {
    static defaultProps = {
        fill: 'none',
        stroke: 'none',
        width: 1,
        animated: true
    }
    state = { id: undefined }
    animation: any

    render() {
        return (<path
            id={this.state.id}
            fill={this.props.fill}
            stroke={this.props.stroke}
            strokeWidth={this.props.width}
            d={this.props.path.toString()}
        />)
    }

    private spawnAnimation() {
        console.log('animation spawned')
        this.animation = anime({
            targets: `#${this.state.id}`,
            stroke: [this.props.stroke, '#AA0000'],
            duration: Math.random() * 5000 + 1000,
            easing: 'linear',
            direction: 'alternate',
            loop: true
        })
    }

    createAnimation() {
        if (!this.state.id) {
            this.setState({
                id: `wire_${uuid.v4()}`
            }, () => this.spawnAnimation())
        } else {
            this.spawnAnimation()
        }

    }

    removeAnimation() {
        if (this.animation) this.animation.pause()
        this.animation = null
        console.log('animation removed')
    }
    componentDidMount() {
        if (this.props.animated) this.createAnimation()

    }
    componentDidUpdate() {
        if (this.props.animated) this.removeAnimation()
        if (this.props.animated) this.createAnimation()
    }
    componentWillUnmount() {
        if (this.props.animated) this.removeAnimation()
    }
}