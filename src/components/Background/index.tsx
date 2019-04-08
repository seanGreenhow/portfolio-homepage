import * as React from "react"
import './Background.scss'
import CircuitBoard from "./CircuitBoard";

export default class Background extends React.Component {
    render() {
        return (
            <div id="background">
            <CircuitBoard height={1080} width={1920} />
                <div className="wrapper">
                    
                </div>
            </div>
        )
    }
}