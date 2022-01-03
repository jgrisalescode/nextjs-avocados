import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Julian Grisales</title>
          {/* favicon */}
          {/* Webfont */}
          {/* stylesheet */}
          {/* script/js */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
