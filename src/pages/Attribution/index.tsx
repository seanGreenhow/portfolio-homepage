import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";

export default class Attribution extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>
                        Credits
                    </h1>
                </Intro>
                <h2>Background Image</h2>
                <a href="https://www.freepik.com/free-vector/technology-background_4116831.htm">Original background created by freepik - www.freepik.com</a>
            </Content>
        )
    }
}