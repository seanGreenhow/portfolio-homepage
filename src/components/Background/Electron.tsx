import * as React from "react"
import uuid = require("uuid")
import anime from 'animejs'

export default class Electron extends React.Component<{ wireID: any, size: number }, { id: string }> {
    state = {
        id: `electron_${uuid.v4()}`
    }
    animation: any

    render() {
        return (<rect id={this.state.id} fill="#FF0000"
            x={-this.props.size} y={-this.props.size / 2} width={this.props.size * 2} height={this.props.size}
            filter="url(#electronglow)"
        />)
    }

    createAnimation() {
        const duration = Math.random() * 7000 + 3000
        const delay = Math.random() * 5000
        const endDelay = Math.random() * 5000

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
                    x: path('x'),
                    y: path('y'),
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