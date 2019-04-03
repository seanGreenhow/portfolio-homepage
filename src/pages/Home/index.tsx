import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";
import { MdFace } from "react-icons/md";

export default class Home extends React.Component {
    render() {
        return (
            <Content>
                <Intro height="calc(100% - 150px)">
                    <h1>
                        Sean Greenhow <br />
                        Full Stack Developer.
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