import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { Translate } from "react-localize-redux";
import { MdPerson, MdMail } from "react-icons/md"
import './Contact.scss'

export default class Contact extends React.Component {
    render() {
        return (
            <Content>
                <Intro>
                    <div id="contact">
                        <div className="card">
                            <div className="text"><Translate id="contactText" /></div>
                            <div>
                                <div className="name"><MdPerson size={40} /> Sean Greenhow</div>
                                <div>
                                    <MdMail /> sean@profil6.com
                                </div>
                            </div>

                        </div>
                    </div>
                </Intro>
            </Content >
        )
    }
}