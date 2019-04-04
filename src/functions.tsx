import * as React from "react"

export function mapCharsIntoSpans(text: string) {
    var i = 0
    return text.split("").map(char => <span key={i++}>{char}</span>)
}