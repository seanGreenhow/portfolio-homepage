import * as React from "react"
import './Background.scss'
import variables from "../../variables"
import uuid = require("uuid")

export default class Chip extends React.Component<{ x: number, y: number, width: number, height: number }, { id: string }> {
    state = { id: `chip_${uuid.v4()}` }
    private readonly nodeSize: number = 10
    private readonly nodePadding: number = 8
    private readonly nodeGutter: number = 8
    private readonly nodeConnectorSize: number = this.nodeSize / 2 + this.nodeGutter

    render() {
        let nodes = []

        let verticalSpace = this.props.height - this.nodePadding * 2
        let verticalAmount = Math.floor(verticalSpace / this.nodeConnectorSize)
        let verticalFreeSpace = verticalSpace % this.nodeConnectorSize

        for (let i = 0; i < verticalAmount; i++) {
            nodes.push(<rect
                key={`${this.state.id}_left_connector_${i + 1}`}
                x={-this.nodeSize / 2}
                y={i * this.nodeConnectorSize + this.nodeGutter / 2 + verticalFreeSpace / 2 + this.nodePadding}
                height={this.nodeSize / 2} width={this.nodeSize}
                fill={variables.chipConnectorColor}
            />)
            nodes.push(<rect
                key={`${this.state.id}_left_rod_${i + 1}`}
                x={-this.nodeSize * 2}
                y={i * this.nodeConnectorSize + this.nodeGutter / 2 + verticalFreeSpace / 2 + this.nodePadding + this.nodeSize / 8}
                height={this.nodeSize / 4} width={this.nodeSize * 2}
                fill={variables.chipConnectorColor}
            />)
        }

        for (let i = 0; i < verticalAmount; i++) {
            nodes.push(<rect
                key={`${this.state.id}_right_connector_${i + 1}`}
                x={this.props.width - this.nodeSize / 2}
                y={i * this.nodeConnectorSize + this.nodeGutter / 2 + verticalFreeSpace / 2 + this.nodePadding}
                height={this.nodeSize / 2} width={this.nodeSize}
                fill={variables.chipConnectorColor}
            />)
            nodes.push(<rect
                key={`${this.state.id}_right_rod_${i + 1}`}
                x={this.props.width}
                y={i * this.nodeConnectorSize + this.nodeGutter / 2 + verticalFreeSpace / 2 + this.nodePadding + this.nodeSize / 8}
                height={this.nodeSize / 4} width={this.nodeSize * 2}
                fill={variables.chipConnectorColor}
            />)
        }

        let horizontalSpace = this.props.width - this.nodePadding * 2
        let horizontalAmount = Math.floor(horizontalSpace / this.nodeConnectorSize)
        let horizontalFreeSpace = horizontalSpace % this.nodeConnectorSize
        for (let i = 0; i < horizontalAmount; i++) {
            nodes.push(<rect
                key={`${this.state.id}_top_connector_${i + 1}`}
                y={-this.nodeSize / 2}
                x={i * this.nodeConnectorSize + this.nodeGutter / 2 + horizontalFreeSpace / 2 + this.nodePadding}
                width={this.nodeSize / 2} height={this.nodeSize}
                fill={variables.chipConnectorColor}
            />)
            nodes.push(<rect
                key={`${this.state.id}_top_rod_${i + 1}`}
                y={-this.nodeSize * 2}
                x={i * this.nodeConnectorSize + this.nodeGutter / 2 + horizontalFreeSpace / 2 + this.nodePadding + this.nodeSize / 8}
                width={this.nodeSize / 4} height={this.nodeSize * 2}
                fill={variables.chipConnectorColor}
            />)
        }

        for (let i = 0; i < horizontalAmount; i++) {
            nodes.push(<rect
                key={`${this.state.id}_bottom_connector_${i + 1}`}
                y={this.props.height - this.nodeSize / 2}
                x={i * this.nodeConnectorSize + this.nodeGutter / 2 + horizontalFreeSpace / 2 + this.nodePadding}
                width={this.nodeSize / 2} height={this.nodeSize}
                fill={variables.chipConnectorColor}
            />)
            nodes.push(<rect
                key={`${this.state.id}_bottom_rod_${i + 1}`}
                y={this.props.height}
                x={i * this.nodeConnectorSize + this.nodeGutter / 2 + horizontalFreeSpace / 2 + this.nodePadding + this.nodeSize / 8}
                width={this.nodeSize / 4} height={this.nodeSize * 2}
                fill={variables.chipConnectorColor}
            />)
        }


        return (
            <g transform={`translate(${this.props.x} ${this.props.y})`}>
                <rect id={this.state.id} fill={variables.chipColor} filter="url(#chipshadow)"
                    rx="2" ry="2" x={0} y={0} width={this.props.width} height={this.props.height} />
                {nodes}
            </g>
        )
    }
}