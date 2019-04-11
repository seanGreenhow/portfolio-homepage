import * as React from "react"
import variables from "../../variables"
import { SVGPath } from "./SVGPath"
import Wire from "./Wire"
import Chip from "./Chip"

export default class CircuitBoard extends React.Component<{ width: number, height: number }> {
    private readonly saferoomHeight: number = 100
    private readonly saferoomWidth: number = 300

    render() {
        const width = this.props.width
        const height = this.props.height

        return (
            <svg id="circuit-board" xmlns="http://www.w3.org/2000/svg"
                width={width} height={height} viewBox="0 0 1920 1080">
                <defs>
                    <filter id="chipshadow" x="-5px" y="-5px" width="calc(100% + 10px)" height="calc(100% + 10px)">
                        <feDropShadow dx="-1" dy="-1" stdDeviation="5" floodColor="#000000" />
                    </filter>
                    <filter id="shadow" x="-5px" y="-5px" width="calc(100% + 10px)" height="calc(100% + 10px)">
                        <feDropShadow dx="-1" dy="-1" stdDeviation="5" floodColor="#FF0000" />
                    </filter>
                </defs>


                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, height * 0.5 - 10)
                    .drawHorizontalRelative(300 - 5)
                    .drawLineRelative(150, -150)
                    .drawHorizontalRelative(100)
                    .endpoint(1, 0, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, height * 0.5)
                    .drawHorizontalRelative(300)
                    .drawLineRelative(100, -100)
                    .drawHorizontalRelative(250)
                    .endpoint(1, 0, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, height * 0.5 + 10)
                    .drawHorizontalRelative(300 + 5)
                    .drawLineRelative(100, -100)
                    .drawHorizontalRelative(200)
                    .drawLineRelative(25, 25)
                    .endpoint(1, 1, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, height * 0.5 + 20)
                    .drawHorizontalRelative(300 + 10)
                    .drawLineRelative(50, -50)
                    .drawHorizontalRelative(100)
                    .endpoint(1, 0, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width, height * 0.25)
                    .drawHorizontalRelative(-150)
                    .drawLineRelative(-50, -50)
                    .drawHorizontalRelative(-100)
                    .drawLineRelative(-50, -50)
                    .endpoint(-1, -1, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width, height * 0.25 + 10)
                    .drawHorizontalRelative(-150 - 5)
                    .drawLineRelative(-50, -50)
                    .drawHorizontalRelative(-200)
                    .endpoint(-1, 0, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width, height * 0.25 + 20)
                    .drawHorizontalRelative(-150 - 10)
                    .drawLineRelative(-50, -50)
                    .drawHorizontalRelative(-150)
                    .drawLineRelative(-50, 50)
                    .drawHorizontalRelative(-100)
                    .drawLineRelative(-50, 50)
                    .endpoint(-1, 1, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width, height * 0.25 - 10)
                    .drawHorizontalRelative(-150 + 5)
                    .drawLineRelative(-100, -100)
                    .endpoint(-1, -1, 10)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 - 30, 0)
                    .drawVerticalRelative(150 - 15)
                    .drawLineRelative(-45, 45)
                    .drawHorizontalRelative(-80)
                    .drawLineRelative(-20, 20)
                    .endpoint(-1, 0, 5)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 - 25, 0)
                    .drawVerticalRelative(150 - 12.5)
                    .drawLineRelative(-50, 50)
                    .drawHorizontalRelative(-50)
                    .drawLineRelative(-10, 10)
                    .endpoint(-1, 1, 5)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 - 20, 0)
                    .drawVerticalRelative(150 - 10)
                    .drawLineRelative(-97, 97)
                    .drawHorizontalRelative(-60)
                    .drawLineRelative(-10, 10)
                    .endpoint(-1, 1, 5)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 - 15, 0)
                    .drawVerticalRelative(150 - 7.5)
                    .drawLineRelative(-100, 100)
                    .drawHorizontalRelative(-50)
                    .drawLineRelative(-10, 10)
                    .endpoint(-1, 1, 5)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 - 10, 0)
                    .drawVerticalRelative(150 - 5)
                    .drawLineRelative(-60, 60)
                    .drawVerticalRelative(50)
                    .drawLineRelative(-15, 15)
                    .endpoint(-1, 1, 5)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 - 5, 0)
                    .drawVerticalRelative(150 - 2.5)
                    .drawLineRelative(-60, 60)
                    .drawVerticalRelative(50)
                    .drawLineRelative(-10, 10)
                    .endpoint(-1, 1, 5)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5, 0)
                    .drawVerticalRelative(150)
                    .drawLineRelative(-50, 50)
                    .drawVerticalRelative(50)
                    .drawLineRelative(50, 50)
                    .drawVerticalRelative(300)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 5, 0)
                    .drawVerticalRelative(150 + 2.5)
                    .drawLineRelative(-50, 50)
                    .drawVerticalRelative(50 - 5)
                    .drawLineRelative(58, 58)
                    .drawVerticalRelative(300)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 10, 0)
                    .drawVerticalRelative(150 + 5)
                    .drawLineRelative(-50, 50)
                    .drawVerticalRelative(50 - 10)
                    .drawLineRelative(66, 66)
                    .drawVerticalRelative(300)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 15, 0)
                    .drawVerticalRelative(150 + 7.5)
                    .drawLineRelative(-50, 50)
                    .drawVerticalRelative(50 - 15)
                    .drawLineRelative(74, 74)
                    .drawVerticalRelative(200)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 150, height * 0.5 - 32.5)
                    .drawHorizontalRelative(200 + 20)
                    .drawLineRelative(100, 100)
                    .drawHorizontalRelative(100)
                    .drawLineRelative(25, -25)
                    .drawHorizontalRelative(50)
                    .drawLineRelative(50, 50)
                    .endpoint(1, 1, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 150, height * 0.5 - 19.5)
                    .drawHorizontalRelative(200 + 15)
                    .drawLineRelative(100, 100)
                    .drawHorizontalRelative(100 + 10)
                    .drawLineRelative(25, -25)
                    .drawHorizontalRelative(50 - 10)
                    .drawLineRelative(50, 50)
                    .endpoint(1, 1, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 150, height * 0.5 - 6.5)
                    .drawHorizontalRelative(200 + 10)
                    .drawLineRelative(100, 100)
                    .drawHorizontalRelative(150 - 20)
                    .endpoint(1, 0, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 150, height * 0.5 + 6.5)
                    .drawHorizontalRelative(200 + 5)
                    .drawLineRelative(100, 100)
                    .drawHorizontalRelative(150)
                    .endpoint(1, 0, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 150, height * 0.5 + 19.5)
                    .drawHorizontalRelative(200)
                    .drawLineRelative(100, 100)
                    .drawHorizontalRelative(150 + 20)
                    .endpoint(1, 0, 10)
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(width * 0.5 + 150, height * 0.5 + 32.5)
                    .drawHorizontalRelative(200 - 5)
                    .drawLineRelative(100, 100)
                    .drawHorizontalRelative(100)
                    .drawLineRelative(50, 50)
                    .drawHorizontalRelative(75)
                    .endpoint(1, 0, 10)
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(700 - 15, height)
                    .drawVerticalRelative(-300 - 2.5)
                    .drawLineRelative(100, -100)
                    .drawVerticalRelative(-50 + 15)
                    .drawLineRelative(-30, -30)
                    .drawVerticalRelative(- 100)
                    .drawLineRelative(5, -5)
                    .drawHorizontalRelative(30)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(700 - 10, height)
                    .drawVerticalRelative(-300)
                    .drawLineRelative(100, -100)
                    .drawVerticalRelative(-50 + 10)
                    .drawLineRelative(-30, -30)
                    .drawVerticalRelative(- 84.5)
                    .drawLineRelative(5, -5)
                    .drawHorizontalRelative(30)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(700 - 5, height)
                    .drawVerticalRelative(-300 + 2.5)
                    .drawLineRelative(100, -100)
                    .drawVerticalRelative(-50 + 5)
                    .drawLineRelative(-30, -30)
                    .drawVerticalRelative(- 69)
                    .drawLineRelative(5, -5)
                    .drawHorizontalRelative(20)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(700, height)
                    .drawVerticalRelative(-300 + 5)
                    .drawLineRelative(100, -100)
                    .drawVerticalRelative(-50)
                    .drawLineRelative(-30, -30)
                    .drawVerticalRelative(- 53.5)
                    .drawLineRelative(5, -5)
                    .drawHorizontalRelative(20)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(700 + 5, height)
                    .drawVerticalRelative(-300 + 7.5)
                    .drawLineRelative(100, -100)
                    .drawVerticalRelative(-50 - 5)
                    .drawLineRelative(-30, -30)
                    .drawVerticalRelative(- 38)
                    .drawLineRelative(5, -5)
                    .drawHorizontalRelative(20)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(700 + 10, height)
                    .drawVerticalRelative(-300 + 10)
                    .drawLineRelative(100, -100)
                    .drawVerticalRelative(-50 - 10)
                    .drawLineRelative(-30, -30)
                    .drawVerticalRelative(- 22.5)
                    .drawLineRelative(5, -5)
                    .drawHorizontalRelative(10)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750, height - 200)
                    .drawCircle(0, 1, 10)
                    .drawVerticalRelative(-120)
                    .drawLineRelative(67, -67)
                    .drawVerticalRelative(-60)
                    .drawLineRelative(13.25, -13.25)
                    .drawVerticalRelative(-20)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 + 5, height - 170)
                    .drawCircle(-1, 1, 10)
                    .drawLineRelative(15, -15)
                    .drawVerticalRelative(-20)
                    .drawLineRelative(-10, -10)
                    .drawVerticalRelative(-100)
                    .drawLineRelative(67, -67)
                    .drawVerticalRelative(-60)
                    .drawLineRelative(16.25, -16.25)
                    .drawVerticalRelative(-25)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 + 30, height - 140)
                    .drawCircle(0, 1, 10)
                    .drawVerticalRelative(-69)
                    .drawLineRelative(-10, -10)
                    .drawVerticalRelative(-91)
                    .drawLineRelative(67, -67)
                    .drawVerticalRelative(-60)
                    .drawLineRelative(19.25, -19.25)
                    .drawVerticalRelative(-30)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(850, height - 145)
                    .drawCircle(0, 1, 10)
                    .drawVerticalRelative(-10)
                    .drawLineRelative(-70, -70)
                    .drawVerticalRelative(-81)
                    .drawLineRelative(67, -67)
                    .drawVerticalRelative(-60)
                    .drawLineRelative(22.25, -22.25)
                    .drawVerticalRelative(-30)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(118.5, 0)
                    .drawVerticalRelative(200)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(131.5, 0)
                    .drawVerticalRelative(200)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, 147.5)
                    .drawLineRelative(70, 70)
                    .drawHorizontalRelative(30)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, 162.5)
                    .drawLineRelative(68, 68)
                    .drawHorizontalRelative(30)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, 177.5)
                    .drawLineRelative(66, 66)
                    .drawHorizontalRelative(30)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, 192.5)
                    .drawLineRelative(64, 64)
                    .drawHorizontalRelative(35)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, 242.5)
                    .drawHorizontalRelative(35)
                    .drawLineRelative(27, 27)
                    .drawHorizontalRelative(35)
                    .end()
                } />

                <Wire stroke={variables.bigLineColor} width={variables.bigStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(0, 252.5)
                    .drawHorizontalRelative(30)
                    .drawLineRelative(30, 30)
                    .drawHorizontalRelative(35)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750, 0)
                    .drawVerticalRelative(250)
                    .drawLineRelative(197, 197)
                    .drawVerticalRelative(30)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 5, 0)
                    .drawVerticalRelative(250 + 2.5)
                    .drawLineRelative(197 - 8, 197 - 8)
                    .drawVerticalRelative(30 + 5)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 10, 0)
                    .drawVerticalRelative(250 + 5)
                    .drawLineRelative(197 - 16, 197 - 16)
                    .drawVerticalRelative(30 + 10)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 15, 0)
                    .drawVerticalRelative(250 + 7.5)
                    .drawLineRelative(197 - 24, 197 - 24)
                    .drawVerticalRelative(30 + 15)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 20, 0)
                    .drawVerticalRelative(250 + 10)
                    .drawLineRelative(197 - 32, 197 - 32)
                    .drawVerticalRelative(30 + 20)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 25, 0)
                    .drawVerticalRelative(250 + 12.5)
                    .drawLineRelative(197 - 40, 197 - 40)
                    .drawVerticalRelative(30 + 25)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 30, 0)
                    .drawVerticalRelative(250 + 15)
                    .drawLineRelative(197 - 48, 197 - 48)
                    .drawVerticalRelative(30 + 30)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 35, 0)
                    .drawVerticalRelative(250 + 17.5)
                    .drawLineRelative(197 - 56, 197 - 56)
                    .drawVerticalRelative(30 + 35)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 40, 0)
                    .drawVerticalRelative(250 + 20)
                    .drawLineRelative(197 - 64, 197 - 64)
                    .drawVerticalRelative(30 + 40)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(750 - 45, 0)
                    .drawVerticalRelative(250 + 22.5)
                    .drawLineRelative(197 - 72, 197 - 72)
                    .drawVerticalRelative(30 + 45)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(1200, 125)
                    .drawCircle(0, -1, 5)
                    .drawVerticalRelative(50)
                    .drawLineRelative(-100, 100)
                    .drawVerticalRelative(50)
                    .drawLineRelative(-88, 88)
                    .drawVerticalRelative(75)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(1213, 125)
                    .drawCircle(0, -1, 5)
                    .drawVerticalRelative(55)
                    .drawLineRelative(-100, 100)
                    .drawVerticalRelative(50)
                    .drawLineRelative(-88, 88)
                    .drawVerticalRelative(70)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(1226, 125)
                    .drawCircle(0, -1, 5)
                    .drawVerticalRelative(60)
                    .drawLineRelative(-100, 100)
                    .drawVerticalRelative(50)
                    .drawLineRelative(-88, 88)
                    .drawVerticalRelative(65)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(1239, 125)
                    .drawCircle(0, -1, 5)
                    .drawVerticalRelative(65)
                    .drawLineRelative(-100, 100)
                    .drawVerticalRelative(50)
                    .drawLineRelative(-88, 88)
                    .drawVerticalRelative(60)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(1252, 225)
                    .drawCircle(0, -1, 5)
                    .drawVerticalRelative(20)
                    .drawLineRelative(-188, 188)
                    .drawVerticalRelative(55)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(1300, 375)
                    .drawCircle(1, -1, 5)
                    .drawLineRelative(-25, 25)
                    .drawHorizontalRelative(-160)
                    .drawLineRelative(-38, 38)
                    .drawVerticalRelative(50)
                    .end()
                } />

                <Wire stroke={variables.smallLineColor} width={variables.smallStrokeWidth} electrons={this.getElectronCount()} path={new SVGPath()
                    .moveAbsolute(1350, 412)
                    .drawCircle(1, 0, 5)
                    .drawHorizontalRelative(-230)
                    .drawLineRelative(-30, 30)
                    .drawVerticalRelative(45)
                    .end()
                } />

                <Chip x={width * 0.5 - this.saferoomWidth / 2} y={height / 2 - this.saferoomHeight / 2}
                    width={this.saferoomWidth} height={this.saferoomHeight} />

                <Chip x={100} y={200} width={50} height={100} />

                <Chip x={width - 300} y={height - 100} width={150} height={50} />
            </svg>
        )
    }

    getElectronCount() {
        return 0
    }
}