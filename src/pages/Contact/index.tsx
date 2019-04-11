import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { Translate } from "react-localize-redux";
import { MdMail } from "react-icons/md"
import './Contact.scss'
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'
import { clearMessages, showMessage } from "../../Chat";

export default class Contact extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <h1>Contact</h1>
                </Intro>
                <div id="contact">
                    <div className="spacer" />
                    <div className="chat">
                        <div id="contact-message" className="message">
                            <div className="text">
                                <Translate id="contactText" /> <br />
                                <Translate id="contactText2" />

                                <a href="mailto:sean@profil6.com">
                                    <MdMail /> sean@profil6.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Content >
        )
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 0, offset: 1 })
            .on('leave', clearMessages(controller))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, offset: 1 })
            .on('enter', showMessage(controller, '#contact-message'))
            .addTo(controller)
    }
}