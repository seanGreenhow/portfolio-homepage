import * as React from "react"
import * as ReactDOMServer from 'react-dom/server'

const Noscript = props => {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children);
    return <noscript dangerouslySetInnerHTML={{ __html: staticMarkup }} />;
};

export default class HTML extends React.Component<{ defaultLanguage: string }> {
    render() {
        return <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sean Greenhow - Full Stack Web!</title>
                <link rel="stylesheet" href="bundle.css" />
                <script src="bundle.js"></script>
                <script dangerouslySetInnerHTML={{ __html: `var defaultLanguage = "${this.props.defaultLanguage}"` }}></script>
                <Noscript>
                    {/** Replace with <link /> and a new css file. */}
                    <style>
                        #resume #more {"{"}
                        margin-bottom: 50px;
                        {"}"}
                        #resume #timeline {"{"}
                        opacity: 1;
                        {"}"}
                        #resume #timeline .project:not(.active) .inner .extra {"{"}
                        background-color: #7c0a04B0;
                        {"}"}


                        #resume #timeline #yearline .year {"{"}
                        background-color: rgba(125, 125, 125, 0.5);
                        {"}"}

                        @media screen and (max-width: 700px) {"{"}
                        #resume #timeline .project:not(.active) .inner .title {"{"}
                        background-color: #7c0a04;
                        {"}"}
                        #resume #timeline .project:not(.active) .inner:before {"{"}
                        border-color: transparent transparent transparent #7c0a04;
                        {"}"}
                        {"}"}

                        #home .chat {"{"}
                        margin-top: -33.333%;
                        {"}"}


                        #home .chat, #resume .chat {"{"}
                        position: relative;
                        {"}"}
                        .chat .message {"{"}
                        height: auto;
                        opacity: 1;
                        {"}"}
                        .spacer {"{"}
                        display: none;
                        {"}"}

                        .simplebar-content {"{"}
                        overflow-y: auto;
                        overflow-x: hidden;
                        {"}"}

                        #background {"{"}
                        opacity: 0.85;
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