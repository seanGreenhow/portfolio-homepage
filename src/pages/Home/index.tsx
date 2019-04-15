import * as React from "react"
import Intro from "../../components/Intro"
import Content from "../../components/Content"
import { Translate } from "react-localize-redux"
import * as ScrollMagic from 'scrollmagic-with-ssr'
import './Home.scss'
import { Link } from "react-router-dom"
import { clearMessages, showMessage } from "../../Chat";

export default class Home extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>
                        Sean Greenhow <br />
                        <Translate id="jobtitle" />
                    </h1>
                </Intro>
                <div id="home">
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
                </div>

            </Content>
        )
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 1, offset: 50 })
            .on('leave', clearMessages(controller))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('enter', showMessage(controller, '#first', 0))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('enter', showMessage(controller, '#second', 1.5))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('enter', showMessage(controller, '#third', 3))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('enter', showMessage(controller, '#fourth', 4.5))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('enter', showMessage(controller, '#fifth', 6))
            .addTo(controller)

    }
}