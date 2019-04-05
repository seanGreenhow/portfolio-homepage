import * as React from "react"
import './Content.scss'
import * as ScrollMagic from 'scrollmagic'
import { TweenMax } from 'gsap'
import SimpleBar from 'simplebar-react';
import Navigation from "../Navigation";

export default class Content extends React.Component {
    render() {
        return (
            <SimpleBar style={{ height: '100%' }}>
                <Navigation />
                {this.props.children}
            </SimpleBar>
        )
    }

    componentDidMount() {
        var controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        var scene = new ScrollMagic.Scene({ duration: '100%', offset: 1 })
            .addTo(controller)
            .setTween(TweenMax.to(".background", 0.5, { opacity: 0.3 }))
    }
}