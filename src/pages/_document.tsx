import Document, { DocumentContext, Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic&display="
            rel="stylesheet"
          />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/logo/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/logo/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/logo/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/logo/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/logo/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/logo/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/logo/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon-180x180.png" />
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

          {/* <!-- /////// Meta tags /////// --> */}
          <meta name="application-name" content="NFTNest" />
          <meta name="description" content="Bringing your digital creations to life, at NFTNest." />
          <meta property="al:ios:app_name" content="NFTNest" />

          {/* <!-- /////// OG Config /////// --> */}
          <meta property="og:site_name" content="NFTNest" />
          <meta property="og:title" content="NFTNest" />
          <meta property="og:description" content="Bringing your digital creations to life, at NFTNest." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/logo/logo.webp" />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="1080" />

          {/* <!-- /////// Twitter Config /////// --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="NFTNest" />
          <meta name="twitter:description" content="Bringing your digital creations to life, at NFTNest." />
          <meta name="twitter:image" content="/logo/logo.webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
        </body>
      </Html>
    );
  }
}
