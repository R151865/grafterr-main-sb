import dynamic from "next/dynamic";
import { Suspense } from "react";

import Navbar from "../components/Navbar";
// import Footer from '../components/Footer'

const Footer = dynamic(() => import("../components/Footer"), {
  suspense: true,
  ssr: false,
});

import "../styles/globals.css";
/* custom css */
import "../styles/componentcss/navbar.css";
import "../styles/componentcss/heroSection.css";
import "../styles/componentcss/cardPayment.css";
import "../styles/componentcss/footer.css";
import "../styles/componentcss/FAQ.css";
import "../styles/componentcss/lowCostTransaction.css";
import "../styles/componentcss/contactSales.css";
import "../styles/componentcss/goReader.css";
import "../styles/componentcss/contactUs.css";
import "../styles/componentcss/freeForever.css";
import "../styles/componentcss/JustInOneApp.css";
import "../styles/componentcss/multiPayment.css";
import "../styles/componentcss/Designed.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />

      <Suspense fallback={`Loading...`}>
        <Footer />
      </Suspense>
    </>
  );
}

export default MyApp;
