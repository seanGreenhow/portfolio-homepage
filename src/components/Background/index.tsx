import * as React from "react"
import CircuitBoard from "./CircuitBoard";

export default class Background extends React.Component {
    render() {
        return (<CircuitBoard height={1080} width={1920} electronCount={0} />
        )
    }
}