import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>



          
          <link
            href="//db.onlinewebfonts.com/c/c0c7e262b07e8f7d2bd87777a47e362f?family=Iskry+Regular"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="//db.onlinewebfonts.com/c/8f2a9d487bbbc60974cd132fc3a63862?family=Aeonik"
            rel="stylesheet"
            type="text/css"
          />{" "}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
