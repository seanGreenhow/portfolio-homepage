import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { Link } from "react-router-dom";
import { MdFace } from "react-icons/md";
import { mapCharsIntoSpans } from "../../functions";
import { Translate } from "react-localize-redux";
import * as ScrollMagic from 'scrollmagic'
import { TweenMax } from 'gsap'

export default class Home extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>
                        Sean Greenhow <br />
                        <Translate id="jobtitle" />.
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

    componentDidMount() {
        var controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        var scene = new ScrollMagic.Scene({ duration: '100%', offset: 1 })
            .addTo(controller)
            .setTween(TweenMax.to(".background", 0.5, { opacity: 0.3 }))
    }
}