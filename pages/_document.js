import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='zxx'>
        <Head>
          <link rel='icon' type='image/png' href='/images/favicon.png'></link>
          <link rel='apple-touch-icon' sizes='180x180' href='images/favicon/apple-touch-icon.png'></link>
          <link rel='icon' type='image/png' sizes='32x32' href='images/favicon/favicon-32x32.png'></link>
          <link rel='icon' type='image/png' sizes='16x16' href='images/favicon/favicon-16x16.png'></link>
          <link rel='manifest' href='images/favicon/site.webmanifest'></link>
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
