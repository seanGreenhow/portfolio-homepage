import * as React from "react"
import * as ReactDOMServer from 'react-dom/server'

const Noscript = props => {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children);
    return <noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />;
};

export default class HTML extends React.Component {
    render() {
        return <html lang="en">
            <head>
                <title>Sean Greenhow - Full Stack Web!</title>
                <link rel="stylesheet" href="bundle.css" />
                <script src="bundle.js"></script>
                <Noscript>
                    <style>
                        .chat {"{"}
                        position: relative;
                        {"}"}
                        .chat .message {"{"}
                        height: auto;
                        opacity: 1;
                        {"}"}
                        .simplebar-content {"{"}
                        overflow-y: auto;
                        overflow-x: hidden;
                        {"}"}
                    </style>
                </Noscript>
            </head>
            <body>
                <div id="root" className="fill">{this.props.children}</div>
            </body>
        </html>
    }
}