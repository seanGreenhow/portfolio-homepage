import * as React from "react"
import './Background.scss'
import SVG from './SVG'

export default class Background extends React.Component {
    render() {
        return (
            <div className="background">
                <SVG width="100%" height="100%" />
            </div>
        )
    }
}