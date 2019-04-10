import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";

export default class Error404 extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>
                        ERROR 404 <br />
                        Please don't panic!
                    </h1>
                </Intro>
            </Content>
        )
    }
}