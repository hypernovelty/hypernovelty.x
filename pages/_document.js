import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <>
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/favicon.ico"></link>
                    <meta name="theme-color" content="#fff" />
                    <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet">
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
            </>
        )
    }
}

export default MyDocument