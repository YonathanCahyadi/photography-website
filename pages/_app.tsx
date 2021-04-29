import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.css";
import "../styles/components/navbar.css";
import "../styles/components/footer.css";
import "../styles/components/sub-heading.css";

import "../styles/pages/home.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar logo="Photography" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
