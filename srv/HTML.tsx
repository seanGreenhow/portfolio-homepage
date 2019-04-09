import * as React from "react"

export default class HTML extends React.Component {
    render() {
        return <html lang="en">
            <head>
                <title>Sean Greenhow - Full Stack Web!</title>
                <link rel="stylesheet" href="bundle.css" />
                <script src="bundle.js"></script>
                <noscript>
                    <style>
                        [data-simplebar] {"{"} overflow: auto; {"}"}
                    </style>
                </noscript>
            </head>
            <body>
                <div id="root" className="fill">{this.props.children}</div>
            </body>
        </html>
    }
}