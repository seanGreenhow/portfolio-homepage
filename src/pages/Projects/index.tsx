import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";

export default class Projects extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>
                        Projects &amp;<br />
                        Work Samples.
                    </h1>
                </Intro>
            </Content>
        )
    }
}