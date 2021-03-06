import * as React from "react";

export interface PApplayEmpty {
    title?: string;
}

export class NappLayout extends React.Component<PApplayEmpty, {}> {

    public render() {

        return <html lang="mn" >
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{this.props.title || "System operator"}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <body>
                <section className="section ">
                    <div className="container">{this.props.children}</div>
                </section>
                <script type="text/javascript" src="https://cdn.ckeditor.com/4.8.0/full/ckeditor.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            </body>
        </html>;
    }
}
