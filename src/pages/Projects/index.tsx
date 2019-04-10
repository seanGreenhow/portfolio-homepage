import * as React from "react"
import Intro from "../../components/Intro"
import Content from "../../components/Content"
import './Projects.scss'
import { Translate } from "react-localize-redux"
import * as ScrollMagic from 'scrollmagic-with-ssr'
import { TweenMax } from 'gsap'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";

const monthScaling = 17

export default class Projects extends React.Component {
    render() {
        const projects: Project[] = []
        projects.push(new Project(new Date(2010, 9), new Date(2012, 9), "Abi", "left"))
        projects.push(new Project(new Date(2012, 9), new Date(2014, 9), "TUHH", "left"))
        projects.push(new Project(new Date(2014, 9), new Date(2016, 9), "HAW", "left"))
        projects.push(new Project(new Date(2016, 11), new Date(2017, 11), "topConcepts", "left",
            ["0"],
            [
                ['https://www.topconcepts.de', 'website'],
                ['https://www.gartenmoebel.de', 'example']
            ])
        )
        projects.push(new Project(new Date(2017, 11), new Date(), "Honestas", "left",
            ["0", "1"],
            [
                ['https://www.fo-vermoegensverwalterfonds.de', 'FOwebsite'],
                ['https://www.e-office.xyz', 'eOfficeWebsite'],
                ['https://play.google.com/store/apps/details?id=xyz.eoffice.si.app', 'SIAppGooglePlay'],
                ['https://itunes.apple.com/de/app/honestas-smartinsight/id1453142699?ls=1', 'SIAppAppleStore']
            ])
        )
        projects.push(new Project(new Date(2014, 1), new Date(2015, 2), "Latupo", "right",
            ["0"])
        )
        projects.push(new Project(new Date(2015, 3), new Date(2016, 10), "HonestasStudent", "right",
            ["0", "1", "2"],
            [
                ['https://www.honestas-finanzmanagement.de', 'website'],
                ['https://www.honestas-family-office.de', 'FamilyOfficeWebsite'],
                ['https://www.fo-vermoegensverwalterfonds.de', 'FOwebsite']
            ])
        )




        let maxDate = projects.reduce((prev, current) => (prev.getTime() > current.end.getTime()) ? prev : current.end, new Date(1970, 0))
        let minDate = projects.reduce((prev, current) => (prev.getTime() < current.start.getTime()) ? prev : current.start, new Date())
        let monthAmount = getMonthDifference(minDate, maxDate)
        let height = monthAmount * monthScaling

        let yearAmount = getYearDifference(minDate, maxDate)
        let years = [minDate.getFullYear()]
        for (let i = 1; i <= yearAmount; i++) {
            years.push(minDate.getFullYear() + i)
        }

        return (
            <Content>
                <Intro>
                    <h1>
                        Projects &amp; <br />
                        Work Samples.
                    </h1>
                </Intro>
                <div id="projects">
                    <div id="timeline" style={{ height }}>
                        {/** TODO ADD YEAR NUMBERS */}
                    </div>
                    <div className="left" style={{ height }} >
                        {projects.filter(p => p.position == "left").map(p => <ProjectComponent key={p.id} project={p} monthOffset={getMonthDifference(minDate, p.start)} />)}
                    </div>
                    <div className="right" style={{ height }} >
                        {projects.filter(p => p.position == "right").map(p => <ProjectComponent key={p.id} project={p} monthOffset={getMonthDifference(minDate, p.start)} />)}
                    </div>
                </div>
                <div id="more">
                    <div>
                        <Translate id="project.more" />
                    </div>
                </div>
                <div className="project-message">
                    <div><Translate id="project.more2" /></div>
                    <div><Translate id="project.more3" /></div>
                    <Link to="/contact"><Translate id="contact" /></Link>
                </div>

            </Content>
        )
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller({ container: '.simplebar-content' });
        new ScrollMagic.Scene({ duration: 200, offset: 1 })
            .addTo(controller)
            .setTween(TweenMax.to("#projects", 0.25, { opacity: 1 }))
    }
}

function getMonthDifference(from: Date, to: Date) {
    return to.getMonth() - from.getMonth()
        + (12 * (to.getFullYear() - from.getFullYear()));
}

function getYearDifference(from: Date, to: Date) {
    return to.getFullYear() - from.getFullYear()
}

class ProjectComponent extends React.Component<{ project: Project, monthOffset: number }> {
    render() {
        return <div className="project" style={{ height: this.props.project.duration * monthScaling, top: this.props.monthOffset * monthScaling }}>
            <div className="inner">
                <div className="title"><Translate id={`project.${this.props.project.id}.title`} /></div>
                <div className="extra">
                    <div className="description"><Translate id={`project.${this.props.project.id}.description`} /></div>
                    <ul>
                        {this.props.project.dutieIDs && this.props.project.dutieIDs.map(id => <li key={id}><Translate id={`project.${this.props.project.id}.duties.${id}`} /></li>)}
                    </ul>
                    {this.props.project.links && this.props.project.links.map((link, index) => <a key={index} href={link[0]}><FaExternalLinkAlt size={10} /> <Translate id={link[1]} /></a>)}
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