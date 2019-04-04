import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { Link } from "react-router-dom";
import { MdFace } from "react-icons/md";
import { mapCharsIntoSpans } from "../../functions";



export default class Home extends React.Component {
    render() {
        return (
            <Content>
                <Intro height="calc(100% - 150px)">
                    <h1>
                        <span className="anim-text-flow">
                            {mapCharsIntoSpans("Sean Greenhow")} <br />
                            {mapCharsIntoSpans("Full Stack Developer.")}
                        </span>
                    </h1>
                </Intro>
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <div className="spacer" />
                <Link to="/attribution">
                    <MdFace size={18} /> <span>Attribution</span>
                </Link>
            </Content >
        )
    }
}
