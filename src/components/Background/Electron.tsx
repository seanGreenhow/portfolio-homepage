import * as React from "react"
import uuid = require("uuid")
import anime from 'animejs'

export default class Electron extends React.Component<{ wireID: any, size: number }, { id: string }> {
    animation: any
    state = {
        id: `electron_${uuid.v4()}`
    }

    render() {
        return (
            <g id={this.state.id} filter="url(#shadow)">
                <rect filter="url(#shadow)"
                    rx={this.props.size / 2} ry={this.props.size / 2}
                    fill="#FF0000" x={-this.props.size} y={-this.props.size / 2}
                    width={this.props.size * 2} height={this.props.size}
                />
            </g>
        )
    }

    createAnimation() {
        const duration = Math.random() * 10000 + 5000
        const delay = Math.random() * 20000
        const endDelay = Math.random() * 20000

        
        const path = anime.path(`#${this.props.wireID}`)

        this.animation = anime({
            targets: `#${this.state.id}`,
            keyframes: [
                {
                    opacity: 0,
                    duration: 1
                },
                {
                    opacity: 1,
                    duration: 1,
                    delay
                },
                {
                    translateX: path('x'),
                    translateY: path('y'),
                    rotate: path('angle'),
                    duration
                },
                {
                    opacity: 0,
                    duration: 1,
                    endDelay
                }
            ],
            easing: 'linear',
            loop: true
        })
    }

    removeAnimation() {
        if (this.animation) this.animation.pause()
        this.animation = null
    }
    componentDidMount() {
        this.createAnimation()
    }
    componentDidUpdate() {
        this.removeAnimation()
        this.createAnimation()
    }
    componentWillUnmount() {
        this.removeAnimation()
    }
}