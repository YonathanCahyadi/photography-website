import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.scss";
import "../styles/components/navbar.scss";
import "../styles/components/footer.scss";
import "../styles/components/heading.scss";
import "../styles/components/sub-heading.scss";
import "../styles/components/contact-icon.scss";
import "../styles/components/image-card.scss";

import "../styles/pages/home.scss";
import "../styles/pages/galleries.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="Photography" />
        <meta name="description" content="Providing the best photography images and services." />
        <meta name="keywords" content="Photography, Images" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Yonathan Cahyadi" />
        <title>Photography</title>
      </Head>
      <Navbar logo="Photography" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
