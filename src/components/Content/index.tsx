import * as React from "react"
import './Content.scss'
import * as SimpleBar from 'simplebar-react';
const Bar = SimpleBar.default ? SimpleBar.default : SimpleBar
import Navigation from "../Navigation";
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'

export default class Content extends React.Component {
    render() {
        return (
            <Bar style={{ height: '100%' }}>
                <Navigation />
                {this.props.children}
            </Bar>
        )
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 0, offset: 1 })
            .addTo(controller)
            .setTween(TweenMax.to("#background", 0.5, { opacity: 0.15 }))
    }
}