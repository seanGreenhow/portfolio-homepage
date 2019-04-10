import * as React from "react"
import './Intro.scss'
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'

export default class Intro extends React.Component {
    render() {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'calc(100% - 100px)' }}>
            <div className="header">
                {this.props.children}
            </div>
        </div>
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 0, offset: 1 })
            .addTo(controller)
            .setTween(TweenMax.to("h1", 0.5, { opacity: 0.0 }))
    }
}






