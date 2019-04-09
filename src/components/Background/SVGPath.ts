export class SVGPath {
    commands: SVGPathCommand[] = []

    moveAbsolute(x: number, y: number): SVGPath {
        this.createOrAppend('M', [x, y])
        return this
    }

    moveRelative(x: number, y: number): SVGPath {
        this.createOrAppend('m', [x, y])
        return this
    }

    drawLineAbsolute(x: number, y: number): SVGPath {
        this.createOrAppend('L', [x, y])
        return this
    }

    drawLineRelative(x: number, y: number): SVGPath {
        this.createOrAppend('l', [x, y])
        return this
    }

    drawHorizontalAbsolute(x: number): SVGPath {
        this.createOrAppend('H', [x])
        return this
    }

    drawHorizontalRelative(x: number): SVGPath {
        this.createOrAppend('h', [x])
        return this
    }

    drawVerticalAbsolute(y: number): SVGPath {
        this.createOrAppend('V', [y])
        return this
    }

    drawVerticalRelative(y: number): SVGPath {
        this.createOrAppend('v', [y])
        return this
    }

    drawArcAbsolute(x: number, y: number, arcRadiusX: number, arcRadiusY: number, rotation: number, longarc: (0 | 1) = 0, sweep: (0 | 1) = 0): SVGPath {
        this.createOrAppend('A', [arcRadiusX, arcRadiusY, rotation, longarc, sweep, x, y])
        return this
    }

    drawArcRelative(x: number, y: number, arcRadiusX: number, arcRadiusY: number, rotation: number, longarc: (0 | 1) = 0, sweep: (0 | 1) = 0): SVGPath {
        this.createOrAppend('a', [arcRadiusX, arcRadiusY, rotation, longarc, sweep, x, y])
        return this
    }


    drawCircle(directionX: (-1 | 0 | 1), directionY: (-1 | 0 | 1), diameter: number): SVGPath {
        const size = directionX != 0 && directionY != 0
            ? Math.sqrt(Math.pow(diameter, 2) / 2)
            : diameter

        this.drawArcRelative(directionX * size, directionY * size, diameter / 2, diameter / 2, 0, 1, 0)
        this.drawArcRelative(- directionX * size, - directionY * size, diameter / 2, diameter / 2, 0, 1, 0)
        return this
    }

    endpoint(directionX: (-1 | 0 | 1), directionY: (-1 | 0 | 1), diameter: number): string {
        this.drawCircle(directionX, directionY, diameter)
        return this.end()
    }

    close(): string {
        this.createOrAppend('z')
        return this.end()
    }

    end(): string {
        return this.toString()
    }

    toString(): string {
        return this.commands.join("")
    }

    private createOrAppend(type: string, data: number[] = []) {
        if (this.commands.length == 0) return this.create(type, data)
        const [last] = this.commands.slice(-1)
        if (last.type == type) last.data.push(...data)
        else return this.create(type, data)
    }

    private create(type: string, data: number[] = []) {
        this.commands.push(new SVGPathCommand(type, data))
    }
}

class SVGPathCommand {
    constructor(
        public type: string,
        public data: number[] = []
    ) { }

    toString(): string {
        return this.type + this.data.join(" ")
    }
}