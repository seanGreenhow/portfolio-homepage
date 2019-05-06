import * as React from "react"
import Intro from "../../components/Intro";
import Content from "../../components/Content";
import { Translate } from "react-localize-redux";
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'
import './Skills.scss'
import { clearMessages, showMessage, clearTween as clearMessage } from "../../Chat";
import { Link } from "react-router-dom";

export default class Skills extends React.Component {
    render() {
        const skills: Skill[] = []

        skills.push(new Skill("development", [
            "0", "1", "2", "3",
            new Skill("devops", [
                "0", "1", "2", "3", "4", "5", "6", "7"
            ])
        ]))

        skills.push(new Skill("backend", [
            new Skill("java", [
                "0", "1", "2"
            ]),
            new Skill("node", [
                "0", "1", "2", "3"
            ]),
            new Skill("scripting", [
                "0", "1"
            ])
        ]))

        skills.push(new Skill("frontend", [
            new Skill("javascript", [
                "0", "1", "2", "3", "4"
            ]),
            new Skill("html", []),
            new Skill("styles", [
                "0", "1"
            ])
        ]))

        skills.push(new Skill("other", [
            new Skill("humor", [
                "0", "1", "2"
            ]),
            "gamesystemdev",
            "roleplaying"
        ]))

        return (
            <Content>
                <Intro>
                    <h1>
                        <Translate id="skills" />
                    </h1>
                </Intro>

                <div className="chat static-chat">
                    <div id="skill-message1" className="message">
                        <div className="text" >
                            <Translate id="skill.chat1" />
                        </div>
                    </div>
                    <div id="skill-message2" className="message">
                        <div className="text" >
                            <Translate id="skill.chat2" />
                        </div>
                    </div>
                </div>

                <div id="skills">
                    <div id="skilllist">
                        {skills.map(skill =>
                            <div key={skill.id} className="category">
                                <SkillComponent skill={skill} />
                            </div>
                        )}
                    </div>
                </div>

                <div id="skill-message-trigger" className="spacer" />
                <div className="chat">
                    <div id="skill-message3" className="message">
                        <div className="text" >
                            <Translate id="skill.chat3" />
                            <Link to="/contact"><Translate id="contact" /></Link>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 200, offset: 1 })
            .addTo(controller)
            .setTween(TweenMax.to("#skills", 0.25, { opacity: 1 }))

        new ScrollMagic.Scene({ duration: 200, offset: 1 })
            .on('enter', showMessage(controller, '#skill-message1'))
            .on('leave', clearMessages(controller))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 200, offset: 1 })
            .on('enter', showMessage(controller, '#skill-message2', 0.5))
            .on('leave', clearMessages(controller))
            .addTo(controller)


        new ScrollMagic.Scene({ duration: 0, triggerElement: '#skill-message-trigger', triggerHook: "onEnter" })
            .on('enter', showMessage(controller, '#skill-message3'))
            .on('leave', clearMessage('#skill-message3', controller))
            .addTo(controller)
    }
}

class SkillComponent extends React.Component<{ skill: Skill, prefix?: string }>{
    static defaultProps = { prefix: "" }
    render() {
        return (
            <div className="skill">
                <div className="title"><Translate id={`${this.props.prefix}skill.${this.props.skill.id}.title`} /></div>
                {this.props.skill.subskillIDs.length > 0 &&
                    <div className="subskills">
                        {this.props.skill.subskillIDs.map(subskill => {
                            if (subskill instanceof Skill) return <SkillComponent key={subskill.id} skill={subskill} prefix={`${this.props.prefix}skill.${this.props.skill.id}.`} />
                            else return (
                                <div key={subskill} className="endskill skill">
                                    <div className="title">
                                        <Translate id={`${this.props.prefix}skill.${this.props.skill.id}.skill.${subskill}`} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

class Skill {
    constructor(
        public id: string,
        public subskillIDs: (string | Skill)[] = []
    ) {

    }
} 