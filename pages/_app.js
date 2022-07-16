import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return (
    <>
  
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
