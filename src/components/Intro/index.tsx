import * as React from "react"
import './Intro.scss'

export default ({ children, width = '100%', height = "calc(100% - 100px)" }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width, height }}>
        <div className="header">
            {children}
        </div>
    </div>
)