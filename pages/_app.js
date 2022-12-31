import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,minimum-scale=1height=device-height,viewport-fit=cover, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#3A563E"></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
