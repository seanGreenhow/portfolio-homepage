import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { Translate } from "react-localize-redux";
import { MdMail } from "react-icons/md"
import './Contact.scss'
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { clearMessages, showMessage } from "../../Chat";

export default class Contact extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1><Translate id="contactIntro" /></h1>
                </Intro>
                <div id="contact">
                    <div className="chat">
                        <div id="contact-message1" className="message">
                            <div className="text">
                                <Translate id="contactText" />
                            </div>
                        </div>
                        <div id="contact-message2" className="message">
                            <div className="text">
                                <Translate id="contactText2" />

                                <form action="mailto:sean@greenhow.dev" method="get">
                                    <button type="submit">
                                        <MdMail /> sean@greenhow.dev
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="spacer" />
                </div>
            </Content >
        )
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('leave', clearMessages(controller))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('enter', showMessage(controller, '#contact-message1'))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 50 })
            .on('enter', showMessage(controller, '#contact-message2', 1.5))
            .addTo(controller)
    }
}