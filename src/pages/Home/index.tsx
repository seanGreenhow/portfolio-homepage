import * as React from "react"
import Intro from "../../components/Intro"
import Content from "../../components/Content"
import { Translate } from "react-localize-redux"
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'
import './Home.scss'
import { Link } from "react-router-dom"
import anime from 'animejs'

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
                <div className="chat">
                    <div id="first" className="message">
                        <div className="text">
                            <Translate id="paragraph.first" />
                        </div>
                    </div>
                    <div id="second" className="message">
                        <div className="text">
                            <Translate id="paragraph.second" />
                        </div>
                    </div>
                    <div id="third" className="message">
                        <div className="text">
                            <Translate id="paragraph.third" />
                        </div>
                    </div>
                    <div id="fourth" className="message">
                        <div className="text">
                            <Translate id="paragraph.fourth" />
                            <Link to="/projects"><Translate id="projects" /></Link>
                        </div>
                    </div>
                    <div id="fifth" className="message">
                        <div className="text">
                            <Translate id="paragraph.fifth" />
                            <Link to="/contact"><Translate id="contact" /></Link>
                        </div>
                    </div>
                </div>
                <div className="spacer" />
            </Content>
        )
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 1, offset: 1 })
            .on('leave', this.clearMessages(controller))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 1 })
            .on('enter', this.showMessage(controller, '#first'))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 100 })
            .on('enter', this.showMessage(controller, '#second'))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 200 })
            .on('enter', this.showMessage(controller, '#third'))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 300 })
            .on('enter', this.showMessage(controller, '#fourth'))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 400 })
            .on('enter', this.showMessage(controller, '#fifth'))
            .addTo(controller)

    }

    showMessage(controller, name) {
        return (e) => {
            if (e.type == "enter" && controller.info("scrollDirection") == "FORWARD") {
                TweenMax.set(name, {
                    height: "auto"
                });
                TweenMax.from(name, 0.5, {
                    height: 0
                });
                TweenMax.to(name, 0.5, {
                    opacity: 1
                }).delay(0.5)
            }

        }
    }

    clearMessages(controller) {
        return (e) => {
            if (e.type == "leave" && controller.info("scrollDirection") == "REVERSE") {
                TweenMax.to('.message', 0.5, {
                    height: 0,
                    opacity: 0
                })
            }
        }
    }
}