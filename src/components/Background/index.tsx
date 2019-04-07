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
                    <CircuitBoard height={this.state.height} width={this.state.width} />
                }
            </div>
        )
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
}