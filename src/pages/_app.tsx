import type { AppProps } from "next/app";
import { GlobalStyle } from "@styles/ GlobalStyle";
import { Navbar } from "@molecules/Navbar";
import Head from "next/head";
import { Footer } from "@molecules/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
