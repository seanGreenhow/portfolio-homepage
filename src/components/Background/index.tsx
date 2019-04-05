import * as React from "react"
import './Background.scss'
import anime from 'animejs'
import * as uuid from 'uuid'
import CircuitBoard from "./CircuitBoard";

export default class Background extends React.Component<{}, { width: number, height: number }> {
    ref = React.createRef<HTMLDivElement>()
    state = {
        width: 0,
        height: 0
    }

    render() {
        return (
            <div id="background" ref={this.ref} >
                {this.state.height && this.state.width &&
                    <CircuitBoard height={this.state.height} width={this.state.width} callback={() => {
                        this.animateWire('wire1', true)
                    }} />
                }
            </div>
        )
    }

    animateWire(wireID: string, loop: boolean = false, duration: number = Math.random() * 9000 + 1000) {
        const path = anime.path(`#circuit-board #${wireID}`);
        const delay = Math.random() * 5000
        const endDelay = Math.random() * 5000

        anime({
            targets: this.createElectron(),
            keyframes: [
                {
                    opacity: 0,
                    duration: 0
                },
                {
                    opacity: 1,
                    duration: 0,
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
                    duration: 0,
                    endDelay
                }
            ],
            easing: 'linear',
            loop
        });
    }

    updateDimensions() {
        var body = document.getElementsByTagName('body')[0],
            width = window.innerWidth || document.documentElement.clientWidth || body.clientWidth,
            height = window.innerHeight || document.documentElement.clientHeight || body.clientHeight;

        this.setState({ width, height })
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", () => this.updateDimensions());
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => this.updateDimensions());
    }

    createElectron(): string {
        const electronID = `electron_${uuid.v4()}`
        const electron = document.createElement("div")
        electron.setAttribute("class", "electron")
        electron.setAttribute("id", electronID)
        document.getElementById('background').appendChild(electron)
        return `#${electronID}`
    }
}