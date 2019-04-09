import * as React from "react"
import './Content.scss'
//import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'
import * as SimpleBar from 'simplebar-react';
const Bar = SimpleBar.default ? SimpleBar.default : SimpleBar
import Navigation from "../Navigation";

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
        /*
         var controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
         var scene = new ScrollMagic.Scene({ duration: '50%', offset: 1 })
             .addTo(controller)
             .setTween(TweenMax.to("#background", 0.5, { opacity: 0.15 }))
 
         var scene = new ScrollMagic.Scene({ duration: '25%', offset: 1 })
             .addTo(controller)
             .setTween(TweenMax.to("h1", 0.25, { opacity: 0.0 }))
             */
    }
}