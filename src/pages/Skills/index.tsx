import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { Translate } from "react-localize-redux";
import './Skills.scss'

export default class Skills extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>
                        <Translate id="skills" />
                    </h1>
                </Intro>
                <div id="skills">

                </div>
            </Content>
        )
    }
}

class Skill {
    id: string
}