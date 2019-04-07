import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { mapCharsIntoSpans } from "../../functions";

export default class Projects extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>
                        <span className="anim-text-flow">
                            {mapCharsIntoSpans("Projects &")} <br />
                            {mapCharsIntoSpans("Work Samples.")}
                        </span>
                    </h1>
                </Intro>
            </Content>
        )
    }
}