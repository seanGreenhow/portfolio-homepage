import * as React from "react"
import variables from "../../variables"
import { SVGPath } from "./SVGPath";

type SafeAreaCoordinates = { x1: number, x2: number, y1: number, y2: number }

export default class CircuitBoard extends React.Component<{ width: number, height: number, callback: () => void }> {
    private readonly saferoomHeight: number = 100
    private readonly saferoomWidth: number = 300

    render() {
        const width = this.props.width
        const height = this.props.height
        const safeArea: SafeAreaCoordinates = {
            x1: width / 2 - this.saferoomWidth / 2,
            x2: width / 2 + this.saferoomWidth / 2,
            y1: height / 2 - this.saferoomHeight / 2,
            y2: height / 2 + this.saferoomHeight / 2
        }


        return (
            <svg id="circuit-board" xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'}>
                <path vectorEffect="non-scaling-vector" fill={variables.squaresColor} d="M901.3 180.8H888v-13h13.2v13m19.3 0h-13.1v-13h13.1v13m19.3 0h-13.1v-13h13.1v13m19.4 0H946v-13h13.2v13m19.3 0h-13.1v-13h13.1v13M52 90.6H38.8V77.4H52v13.2m19.3 0H58.2V77.4h13v13.2m19.4 0H77.5V77.4h13.1v13.2m19.4 0H96.8V77.4H110v13.2m19.3 0h-13.1V77.4h13v13.2m216-54.4h-13V23h13v13m19.4 0h-13.1v-13h13.1v13m19.3 0h-13v-13h13v13m19.4 0H390v-13h13.2v13m19.3 0h-13.1v-13h13.1v13M662 494.8h-13.2v-13.1H662v13.1m19.3 0h-13.1v-13.1h13.1v13.1m19.3 0h-13.1v-13.1h13.1v13.1m19.4 0h-13.2v-13.1H720v13.1m19.3 0h-13.2v-13.1h13.2v13.1m-550 123.6h-13.1V605h13.1v13.2m19.3 0h-13V605h13v13.2m19.4 0h-13.2V605H228v13.2m19.3 0h-13.1V605h13.1v13.2m19.3 0h-13V605h13v13.2M882 542h-13.1V529h13.1V542m19.4 0H888V529h13.2V542m19.3 0h-13.1V529h13.1V542m19.3 0h-13.1V529h13.1V542m19.4 0H946V529h13.2V542M32.6 456H19.5v-13.1h13.1v13.1m19.4 0H38.8v-13.1H52v13.1m19.3 0H58.2v-13.1h13v13.1m19.4 0H77.5v-13.1h13.1v13.1m19.4 0H96.8v-13.1H110v13.1m524.7-333.5h-13v-13.1h13v13.1m19.4 0h-13.2v-13.1h13.2v13.1m19.3 0h-13.1v-13.1h13.1v13.1m19.3 0h-13.1v-13.1h13.1v13.1m19.4 0h-13.2v-13.1h13.2v13.1" />
                <path vectorEffect="non-scaling-vector" fill={variables.bigBarsColor} d="M690.2 235.4h-2.5v-34h2.5v34m13.4 0H701v-34h2.6v34m6.6 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m7 0h-2.5v-34h2.6v34m5.2 0h-2.5v-34h2.5v34m21.4 0H748v-34h2.5v34m-12.6 0h-2.5v-34h2.5v34m18.8 0h-2.5v-34h2.5v34M441.8 577.5h-2.5v-33.9h2.5v33.9m13.4 0h-2.5v-33.9h2.5v33.9m6.6 0h-2.5v-33.9h2.5v33.9m6.6 0h-2.5v-33.9h2.5v33.9m7 0H473v-33.9h2.5v33.9m5.3 0h-2.6v-33.9h2.6v33.9m21.3 0h-2.5v-33.9h2.5v33.9m-12.5 0H487v-33.9h2.6v33.9m18.7 0h-2.5v-33.9h2.5v33.9m246-147.6h-2.6v-34h2.5v34m13.3 0H765v-34h2.5v34m6.7 0h-2.6v-34h2.6v34m6.6 0h-2.5v-34h2.5v34m7 0h-2.5v-34h2.6v34m5.2 0h-2.5v-34h2.5v34m21.4 0H812v-34h2.5v34m-12.6 0h-2.5v-34h2.5v34m18.8 0h-2.5v-34h2.5v34m-807.3 116H11V512h2.5v34m13.3 0h-2.5v-34h2.5v34m6.7 0h-2.6v-34h2.6v34m6.6 0h-2.5v-34H40v34m7 0h-2.5v-34H47v34m5.3 0h-2.5v-34h2.5v34m21.4 0h-2.5v-34h2.5v34m-12.6 0h-2.5v-34h2.5v34m18.8 0h-2.5v-34h2.5v34m590.4 89.2h-2.5v-33.9h2.5v34m13.4 0H681v-34h2.6v34m6.6 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m7 0h-2.5v-34h2.6v34m5.2 0h-2.5v-34h2.5v34m21.4 0h-2.5v-34h2.5v34m-12.6 0h-2.5v-34h2.5v34m18.8 0h-2.5v-34h2.5v34m171.6-226.7h-2.5v-33.9h2.5v34m13.3 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m7.1 0h-2.5v-34h2.5v34m5.3 0h-2.5v-34h2.5v34m21.4 0h-2.5v-34h2.5v34m-12.6 0h-2.5v-34h2.5v34m18.7 0h-2.5v-34h2.5v34M20.4 235.3h-2.6v-34h2.6v34m13.3 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34H47v34m7 0h-2.4v-34H54v34m5.3 0h-2.5v-34h2.5v34m21.4 0H78v-34h2.6v34m-12.6 0h-2.5v-34H68v34m18.7 0h-2.5v-34h2.5v34m27-41.5h-2.6v-34h2.6v34m13.3 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m7 0H145v-34h2.5v34m5.3 0h-2.5v-34h2.5v34m21.4 0h-2.6v-34h2.6v34m-12.6 0H159v-34h2.5v34m18.7 0h-2.5v-34h2.5v34M488.1 90.7h-2.5v-34h2.5v34m13.3 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m6.6 0h-2.5v-34h2.5v34m7.1 0h-2.5v-34h2.5v34m5.3 0h-2.5v-34h2.5v34m21.4 0h-2.5v-34h2.5v34m-12.6 0h-2.5v-34h2.5v34m18.7 0H552v-34h2.5v34" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallBarsColor} d="M888.4 100h-3.2v9.6h3.2V100m17.3 0h-3.3v9.5h3.3V100m8.5 0H911v9.5h3.2V100m8.6 0h-3.2v9.5h3.2V100m9.1 0h-3.2v9.5h3.2V100m6.9 0h-3.3v9.5h3.3V100m27.7 0h-3.3v9.5h3.3V100m-16.3 0h-3.3v9.5h3.3V100m24.2 0h-3.2v9.5h3.2V100M473.3 2.7H470v9.5h3.3V2.7m17.2 0h-3.2v9.5h3.2V2.7m8.6 0h-3.3v9.5h3.3V2.7m8.5 0h-3.2v9.5h3.2V2.7m9.2 0h-3.3v9.5h3.3V2.7m6.8 0h-3.2v9.5h3.2V2.7m27.7 0H548v9.5h3.3V2.7m-16.3 0h-3.2v9.5h3.2V2.7m24.3 0H556v9.5h3.3V2.7m-448 292H108v9.6h3.3v-9.6m17.2 0h-3.2v9.6h3.2v-9.6m8.6 0h-3.3v9.6h3.3v-9.6m8.6 0h-3.3v9.6h3.3v-9.6m9.1 0h-3.2v9.6h3.2v-9.6m6.8 0h-3.2v9.6h3.2v-9.6m27.7 0h-3.2v9.6h3.2v-9.6m-16.3 0h-3.2v9.6h3.2v-9.6m24.3 0H194v9.6h3.3v-9.6M824 34.1h-3.3v9.6h3.3V34m17.2 0h-3.2v9.6h3.2V34m8.6 0h-3.3v9.6h3.3V34m8.6 0h-3.3v9.6h3.3V34m9 0h-3.2v9.6h3.3V34m6.8 0h-3.2v9.6h3.2V34m27.7 0H899v9.6h3.2V34m-16.3 0h-3.2v9.6h3.2V34m24.3 0h-3.3v9.6h3.3V34M336 565.6h-3.3v9.5h3.2v-9.5m17.2 0H350v9.5h3.2v-9.5m8.6 0h-3.2v9.5h3.2v-9.5m8.6 0H367v9.5h3.3v-9.5m9.1 0h-3.2v9.5h3.2v-9.5m6.9 0H383v9.5h3.3v-9.5m27.6 0h-3.2v9.5h3.2v-9.5m-16.3 0h-3.2v9.5h3.2v-9.5m24.3 0h-3.3v9.5h3.3v-9.5m82.5-334h-3.3v9.5h3.3v-9.6m17.2 0h-3.2v9.6h3.2v-9.6m8.6 0H527v9.6h3.3v-9.6m8.6 0h-3.3v9.6h3.3v-9.6m9.1 0h-3.2v9.6h3.2v-9.6m6.8 0h-3.2v9.6h3.2v-9.6m27.7 0h-3.2v9.6h3.2v-9.6m-16.3 0H563v9.6h3.2v-9.6m24.3 0h-3.3v9.6h3.3v-9.6m92 116h-3.3v9.5h3.3v-9.5m17.2 0h-3.2v9.5h3.2v-9.5m8.6 0H705v9.5h3.3v-9.5m8.6 0h-3.3v9.5h3.3v-9.5m9.1 0h-3.2v9.5h3.2v-9.5m6.8 0h-3.2v9.5h3.2v-9.5m27.7 0h-3.2v9.5h3.2v-9.5m-16.3 0H741v9.5h3.2v-9.5m24.3 0h-3.3v9.5h3.3v-9.5m89 141.2h-3.3v9.6h3.3v-9.6m17.2 0h-3.2v9.6h3.2v-9.6m8.6 0H880v9.6h3.3v-9.6m8.6 0h-3.3v9.6h3.3v-9.6m9.1 0h-3.3v9.6h3.3v-9.6m6.8 0h-3.2v9.6h3.2v-9.6m27.7 0h-3.2v9.6h3.2v-9.6m-16.3 0H916v9.6h3.2v-9.6m24.3 0h-3.3v9.6h3.3v-9.6" />

                <path id="wire1" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d={new SVGPath()
                    .moveAbsolute(0, height * 0.5)
                    .drawHorizontalRelative(250)
                    .drawLineRelative(50, -50)
                    .drawHorizontalRelative(100)
                    .drawArcRelative(20, 0, 10, 10, 0, 1, 0)
                    .drawArcRelative(-20, 0, 10, 10, 0, 1, 0)
                    .end()} />
            </svg>
        )
    }


    componentDidMount() {
        this.props.callback()
    }

    renderOriginalSVG() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={650}>
                <path id="path5" vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M1000 470.7l-47.3-47.3h-47.3L887 441.7h-143l-45-45" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M686.3 391.7a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.bigLineColor} d="M736.1 441.5a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M1000 154.4H797.3l-35.5 35.4h-76.4L638 237.2" />
                <path vectorEffect="non-scaling-vector" fill={variables.bigLineColor} d="M626.7 240.7a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M1000 4H725.4l-22.7 22.7H465.4l-26.7 26.7H354l-20.3 20.3" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M321 77.6a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0zM0 21.4h200l24 24h28l56.7 56.7v23.3l17.7 17.7H408l18.5 18.5" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M423.7 166.3a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />
                <path id="path3" vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M0 41.4h193.4L314 162h84.6l25 25H520m0 0a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M0 62.7h177.4l85.3 85.3v25.4l30.7 30.7H312l42 42" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M351.4 250.4a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0zM0 122.7h64L91.3 150h96.9l92.7 92.7" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M277.7 248.2a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0zM0 474.7h37.4L62.7 500h34.7l123.3-123.3h60.1l74.5-74.5h22m0 0a7.8 7.8 0 1 1 15.7 0 7.8 7.8 0 0 1-15.6 0zM1000 614.7H766.7l-23.3-23.3h-178l-23 23h-241l-51.8-51.9h-36.3m-15.6 0a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0zM0 585.4h97.4l97.3-97.4h53.4l24-24h54.6l25.7 25.7" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M349.7 496a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M0 614.7h113.4l98-98h174l57-57h35l35.1-35.2v-39.1m-7.8-8a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0zm495.3 179H801.4l-32.5-32.6H565.4l-28-27.9h-72m-15.6 0a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.bigLineColor} d="M557.1 523.4a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M1000 526.1l-61-61H643.5l-49-49v-54.4m-7.7-7.8a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0zM1000 585.4H785.4L759.9 560H556l-30.7 30.7h-204L287 556.3" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M275 552.8a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.bigLineColor} d="M363.4 590.7a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0" />
                <path vectorEffect="non-scaling-vector" fill={variables.bigLineColor} d="M282.8 409a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M1000 62.7h-53.3l-27 27H796L771.2 65H744l-28.5 28.5H576l-29.7 29.8H500" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M486.2 123.2a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />
                <path id="path2" vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M1000 30.7h-66.6l-26 26h-98l-33.7-33.6h-38.3l-24.5 24.5H478.7l-34.2 34.2v32.4l38.5 38.6" />
                <path vectorEffect="non-scaling-vector" fill={variables.bigLineColor} d="M436.7 114.2a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.bigLineColor} strokeWidth={variables.bigStrokeWidth} d="M480.3 157.2a7.8 7.8 0 1 1 15.6 0 7.8 7.8 0 0 1-15.6 0z" />








                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M200.4 352.3a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0M20.9 371a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M34.1 371a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M47.3 371a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m-10 37.6a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M90.3 408.6a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M103.6 408.6a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0M784.2 233a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M797.4 233a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M810.7 233a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m38.5 399a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M902.2 632a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M915.4 632a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0M11 31.3a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M24.1 31.4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M37.3 31.4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0M256.8 4.1a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M270 4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M283.3 4a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0M323 4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m19.5 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M355.8 4a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M369 4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m257.1 163.7a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M679 167.7a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M692.3 167.7a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m-89.4 273.8a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M655.8 441.5a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M669 441.5a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0M845.5 71.4a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M858.7 71.4a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M872 71.4a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0m-562.5 26a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M362.4 97.4a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M375.6 97.4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M402.1 97.4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0zm13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M450.3 632a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M463.6 632a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M476.8 632a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M503.3 632a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0zm13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M210.8 449.3a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M224 449.3a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M237.3 449.3a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M263.8 449.3a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0zm13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M902.6 312.7a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M915.9 312.7a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M929 312.7a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.7 0m13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M955.6 312.7a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0zm13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M664.2 542.1a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M677.4 542.1a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M690.6 542.1a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0m13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M717.1 542.1a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0zm13.3 0a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M60.3 632a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M73.6 632a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0zm13.2 0a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M100 632a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.dotColor} strokeWidth={variables.smallStrokeWidth} d="M113.3 632a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0z" />
                <path vectorEffect="non-scaling-vector" fill={variables.dotColor} d="M126.6 632a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />





                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M0 106.4h180.2L300 226.1h185.7" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M482.9 226.1a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M0 4h225L340.7 120h68.7" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M406.1 119.9a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 115.9H786.6L759 88.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M755.7 88a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 226.1H894.7l-24.6 24.6H739.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M736 250.7a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 243.2H894.7L870.1 268H739.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M736 267.9a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 260.4H894.7L870.1 285H739.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M736 285a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 277.5H894.7L870.1 302H739.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M736 302.1a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 294.6H894.7l-24.6 24.7H739.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M736 319.3a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.8 0" />
                <path id="path4" vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 131H779.5l-67.2-67.2h-85.6" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M623.3 64a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M1000 16H647.5l-55.3 55.4" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M588.8 71.4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M0 142.3h52.7l38 38" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M87.3 180.2a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M860.8 669.3V523.5L823 485.7h-54.8" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M763 485.7a3.4 3.4 0 1 1 6.6 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M638 543.6v117.8" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M634.7 542.1a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path id="path6" vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M594.6 470.7l30.7 30.8v149.4" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M591.2 470.7a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M547.1 651l64.4-64.4V504l-49.8-49.7" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M558.2 454.3a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M0 433.7h409.5l26-26h45.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M477.4 407.7a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M-10.6 420.7h413l34.2-34.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M433.2 386.4a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M848.2 680.4V534.6l-37.7-37.7" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M807 496.9a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M-10.1 257.7h52l58 58h137.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M233.8 315.6a3.4 3.4 0 1 1 6.8 0 3.4 3.4 0 0 1-6.8 0" />
                <path id="path7" vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M-21.3 269.9h52l58 58H226" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M222.7 327.8a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M-32.4 282.1h52l58 58h137.3" />
                <path vectorEffect="non-scaling-vector" fill={variables.smallLineColor} d="M213 340a3.4 3.4 0 1 1 6.7 0 3.4 3.4 0 0 1-6.7 0" />
                <path vectorEffect="non-scaling-vector" fill="transparent" stroke={variables.smallLineColor} strokeWidth={variables.smallStrokeWidth} d="M-43.6 294.3h52l58 58h137.4" />
            </svg>
        )
    }
}