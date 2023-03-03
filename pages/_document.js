import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Crack New Games: Denuvo Games Hacking Status</title>
          <meta name="description" content="Don't miss the information about new crack for games from Skidrow, CPY, Codex. On Game Status, you will find the crack status of more than 15 thousand PC ..." />
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
