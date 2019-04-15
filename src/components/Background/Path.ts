export class Path {
    commands: PathCommand[] = []

    position(x: number, y: number): Path {
        this.createOrAppend(CommandTypes.Position, [x, y])
        return this
    }

    drawLineRelative(x: number, y: number): Path {
        this.createOrAppend(CommandTypes.Line, [x, y])
        return this
    }

    drawHorizontalRelative(x: number): Path {
        this.createOrAppend(CommandTypes.Horizontal, [x])
        return this
    }

    drawVerticalRelative(y: number): Path {
        this.createOrAppend(CommandTypes.Vertical, [y])
        return this
    }

    drawArcRelative(x: number, y: number, arcRadiusX: number, arcRadiusY: number, rotation: number, longarc: (0 | 1) = 0, sweep: (0 | 1) = 0): Path {
        this.createOrAppend(CommandTypes.Arc, [arcRadiusX, arcRadiusY, rotation, longarc, sweep, x, y])
        return this
    }


    drawCircle(directionX: (-1 | 0 | 1), directionY: (-1 | 0 | 1), diameter: number): Path {
        const size = directionX != 0 && directionY != 0
            ? Math.sqrt(Math.pow(diameter, 2) / 2)
            : diameter

        this.drawArcRelative(directionX * size, directionY * size, diameter / 2, diameter / 2, 0, 1, 0)
        this.drawArcRelative(- directionX * size, - directionY * size, diameter / 2, diameter / 2, 0, 1, 0)
        return this
    }

    toString(): string {
        return this.commands.join("")
    }

    toKeyframes(): any[] {
        let result = []
        this.commands.forEach(cmd => {
            switch (cmd.type) {
                case CommandTypes.Horizontal:
                    result.push({
                        translateX: `+=${cmd.data[0]}`
                    })
                    break
                case CommandTypes.Vertical:
                    result.push({
                        translateY: `+=${cmd.data[0]}`
                    })
                    break
                case CommandTypes.Position:
                    result.push({
                        translateX: cmd.data[0],
                        translateY: cmd.data[1],
                        duration: 0
                    })
                    break
                case CommandTypes.Line:
                    result.push({
                        translateX: `+=${cmd.data[0]}`,
                        translateY: `+=${cmd.data[1]}`
                    })
                    break
                case CommandTypes.Arc:
                    //Not yet implemented
                    break
            }
        })

        return result
    }

    private createOrAppend(type: CommandTypes, data: number[] = []) {
        if (this.commands.length == 0) return this.create(type, data)
        const [last] = this.commands.slice(-1)
        if (last.type == type) last.data.push(...data)
        else return this.create(type, data)
    }

    private create(type: CommandTypes, data: number[] = []) {
        this.commands.push(new PathCommand(type, data))
    }
}

class PathCommand {
    constructor(
        public type: CommandTypes,
        public data: number[] = []
    ) { }

    toString(): string {
        return this.type + this.data.join(" ")
    }
}

enum CommandTypes {
    Arc = "a",
    Vertical = "v",
    Horizontal = "h",
    Line = "l",
    Position = "M"
}