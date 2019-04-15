import * as React from "react"
import Intro from "../../components/Intro"
import Content from "../../components/Content"
import './Projects.scss'
import { Translate } from "react-localize-redux"
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { showMessage, clearMessages } from "../../Chat";
import Scrollbar from 'react-custom-scrollbars'

const monthScaling = 20

export default class Projects extends React.Component {
    render() {
        const projects: Project[] = []
        projects.push(new Project(new Date(2010, 9), new Date(2012, 9), "Abi", "left"
        ))

        projects.push(new Project(new Date(2012, 9), new Date(2014, 9), "TUHH", "left"
        ))

        projects.push(new Project(new Date(2014, 9), new Date(2016, 9), "HAW", "left"
        ))

        projects.push(new Project(new Date(2016, 11), new Date(2017, 11), "topConcepts", "left",
            ["0"],
            [
                ['https://www.topconcepts.de', 'website'],
                ['https://www.gartenmoebel.de', 'example']
            ]
        ))

        projects.push(new Project(new Date(2017, 11), new Date(), "Honestas", "left",
            ["0", "1"],
            [
                ['https://mein.fo-vermoegensverwalterfonds.de', 'FOwebsite'],
                ['https://play.google.com/store/apps/details?id=xyz.eoffice.si.app', 'SIAppGooglePlay'],
                ['https://itunes.apple.com/de/app/honestas-smartinsight/id1453142699?ls=1', 'SIAppAppleStore']
            ]
        ))



        projects.push(new Project(new Date(2014, 1), new Date(2015, 2), "Latupo", "right",
            ["0"]
        ))

        projects.push(new Project(new Date(2015, 3), new Date(2016, 10), "HonestasStudent", "right",
            ["0", "1", "2"],
            [
                ['https://www2.honestas-finanzmanagement.de', 'website'],
                ['https://www2.honestas-family-office.de', 'FamilyOfficeWebsite'],
                ['https://mein.fo-vermoegensverwalterfonds.de', 'FOwebsite']
            ]
        ))

        projects.push(new Project(new Date(2018, 10), new Date(2019, 3), "ReactMultilayer", "right",
            [],
            [
                ['https://github.com/seanGreenhow/react-multilayer', 'GitHub'],
                ['https://github.com/seanGreenhow/react-multilayer-contextmenu', 'GitHub']
            ]
        ))


        let maxDate = projects.reduce((prev, current) => (prev.getTime() > current.end.getTime()) ? prev : current.end, new Date(1970, 0))
        let minDate = projects.reduce((prev, current) => (prev.getTime() < current.start.getTime()) ? prev : current.start, new Date())
        let monthAmount = getMonthDifference(minDate, maxDate)
        let height = monthAmount * monthScaling

        let yearAmount = getYearDifference(minDate, maxDate)
        let years = []
        for (let i = 1; i < yearAmount; i++) {
            years.push(minDate.getFullYear() + i)
        }

        let secondYear = new Date(minDate.getFullYear() + 1, 0)
        let lastYear = new Date(maxDate.getFullYear(), 0)

        return (
            <Content>
                <Intro>
                    <h1><Translate id="projectsIntro" options={{ renderInnerHtml: true } as any} /></h1>
                </Intro>
                <div id="resume">
                    <div id="timeline">
                        <div id="yearline" style={{ height }}>
                            <div className="year" style={{
                                height: getMonthDifference(minDate, secondYear) * monthScaling
                            }}>{minDate.getFullYear()}</div>

                            {years.map((year, index) => <div key={index} className="year" style={{
                                height: 12 * monthScaling
                            }}>{year}</div>)}

                            <div className="year" style={{
                                height: getMonthDifference(lastYear, maxDate) * monthScaling
                            }}>{lastYear.getFullYear()}</div>
                        </div>
                        <div className="projectList left" style={{ height }} >
                            {projects.map(p => <ProjectComponent key={p.id} project={p} monthOffset={getMonthDifference(minDate, p.start)} />)}
                        </div>
                        <div className="projectList right" style={{ height }} >
                            {projects.filter(p => p.position == "right").map(p => <ProjectComponent key={p.id} project={p} monthOffset={getMonthDifference(minDate, p.start)} />)}
                        </div>
                    </div>
                    <div id="more">
                        <Translate id="project.more" />
                    </div>

                    <div id="project-message-trigger" className="spacer" />
                    <div className="chat">
                        <div id="project-message1" className="message">
                            <div className="text" >
                                <Translate id="project.more2" />
                            </div>
                        </div>
                        <div id="project-message2" className="message">
                            <div className="text" >
                                <Translate id="project.more3" />
                                <Link to="/contact"><Translate id="contact" /></Link>
                            </div>
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
            .setTween(TweenMax.to("#timeline", 0.25, { opacity: 1 }))

        new ScrollMagic.Scene({ duration: 0, triggerElement: '#project-message-trigger', triggerHook: "onEnter" })
            .on('leave', clearMessages(controller))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, triggerElement: '#project-message-trigger', triggerHook: "onEnter" })
            .on('enter', showMessage(controller, '#project-message1'))
            .addTo(controller)

        new ScrollMagic.Scene({ duration: 0, triggerElement: '#project-message-trigger', triggerHook: "onEnter" })
            .on('enter', showMessage(controller, '#project-message2', 1.5))
            .addTo(controller)
    }
}

function getMonthDifference(from: Date, to: Date) {
    return to.getMonth() - from.getMonth()
        + (12 * (to.getFullYear() - from.getFullYear()))
}

function getYearDifference(from: Date, to: Date) {
    return to.getFullYear() - from.getFullYear()
}

class ProjectComponent extends React.Component<{ project: Project, monthOffset: number }> {
    render() {
        return <div onClick={() => {
            let element = document.getElementById(this.props.project.id)
            if (hasClass(element, 'active')) {
                removeClass(element, 'active')
                addClass(element, 'closing')
            }
            else {
                for (let elem of (document.getElementsByClassName('closing') as any)) removeClass(elem, 'closing')
                for (let elem of (document.getElementsByClassName('active') as any)) removeClass(elem, 'active')
                addClass(element, 'active')
            }
        }} id={this.props.project.id} className={`project ${this.props.project.position}`} style={{ height: this.props.project.duration * monthScaling, top: this.props.monthOffset * monthScaling }}>
            <div className="inner">
                <div className="title"><Translate id={`project.${this.props.project.id}.title`} /></div>
                <div className="extra">
                    <div className="extra-inner">
                        <div className="extra-mobile-background">
                            <Scrollbar style={{ height: '100%' }}>
                                <div className="description"><Translate id={`project.${this.props.project.id}.description`} /></div>
                                <ul>
                                    {this.props.project.dutieIDs && this.props.project.dutieIDs.map(id => <li key={id}><Translate id={`project.${this.props.project.id}.duties.${id}`} /></li>)}
                                </ul>
                                {this.props.project.links && this.props.project.links.map((link, index) => <a key={index} href={link[0]}><FaExternalLinkAlt size={10} /> <Translate id={link[1]} /></a>)}
                            </Scrollbar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

class Project {
    constructor(
        public start: Date,
        public end: Date,
        public id: string,
        public position: "left" | "right",
        public dutieIDs?: string[],
        public links?: [string, string][]
    ) { }

    get duration() {
        return getMonthDifference(this.start, this.end)
    }
}

function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}