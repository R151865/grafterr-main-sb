import Head from 'next/head';
import {useState,useLayoutEffect} from 'react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image';


/* custom imports */
import Hero from '../components/HomePage/Hero';
import Cardpayments from '../components/HomePage/Cardpayments';
import Footer from '../components/Footer';
import Contact from '../components/HomePage/ContactUs'
import FAQ from '../components/HomePage/FAQ';
import LowCostTranscation from '../components/HomePage/LowCostTranscation';
import ContactSales from '../components/HomePage/ContactSales';
import GoReader from '../components/HomePage/GoReader';
import FreeForever from '../components/HomePage/FreeForever'
import JustInOneApp from '../components/HomePage/JustInOneApp';
import MultiPayment from '../components/HomePage/MultiPayment';
import DesignedForEveryOne from '../components/HomePage/DesignedForEveryOne';
import twitterImage from '../public/grafterrImage/grafterr-OG-image.jpg'



/* lazy loading component */

/* const DesignedForEveryOne = dynamic(() => import('../components/HomePage/DesignedForEveryOne'), {
  suspense: true,
  ssr: false 
}) */

/* const JustInOneApp = dynamic(() => import('../components/HomePage/JustInOneApp'), {
  suspense: true,
  ssr: false 
})
 */


export default function Home({ip}) {
  /* global windows size output */
  const [windowSize, setWindowSize] = useState(0);
  let screenWidth = windowSize;

  useLayoutEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize); 
    };

  }, []);
  
  return (
    <div>
      <Head>
        <title>Grafterr GO! - Sell anything, anywhere.</title>
        <meta name='description' content='Take payments instantly using your smartphone with Grafterr GO! point of sale app. No monthly fees, no set-up costs and certainly no contracts.' />
        <link rel='icon' href='/favicon.ico' sizes="16x16" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="go" />
        <meta name="author" content="Grafterr Go" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* open graph data */}
        
        <meta property="og:title" content="Grafterr GO! - Sell anything, anywhere." />
        <meta property="og:url" content="https://grafterr.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Take payments instantly using your smartphone with Grafterr GO! point of sale app. No monthly fees, no set-up costs and certainly no contracts." />
        <meta property="og:image" content="https://grafterr.vercel.app/_next/static/media/grafterr-OG-image.44386200.jpg" />
        <meta property="og:site_name" content="Grafterr Go!" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:tittle" content="Grafterr GO! - Sell anything, anywhere." />
        <meta name="twitter:description" content="Take payments instantly using your smartphone with Grafterr GO! point of sale app. No monthly fees, no set-up costs and certainly no contracts." />
        <meta name="twitter:url" content="https://grafterr.vercel.app/" />
        <meta name="twitter:image" content="https://grafterr.vercel.app/_next/static/media/grafterr-OG-image.44386200.jpg" />
        {/* <Link rel='preload' href={heroImage} as='image'/> */}
      </Head>
      
      <Hero heading='Grafterr Go!' message='Grafterr Go! - Sell anything, anywhere.' />
      <Cardpayments screenWidth = {screenWidth} />
      <MultiPayment screenWidth = {screenWidth} />
      {/* <Suspense fallback={`Loading...`}> */}
        <DesignedForEveryOne />
      {/* </Suspense> */}
      {/* <Suspense fallback={`Loading...`}> */}
        <JustInOneApp screenWidth = {screenWidth} />
      {/* </Suspense> */}
      <GoReader />
      <LowCostTranscation />
      <ContactSales />
      <FreeForever />
      {/* <Suspense fallback={`Loading...`}> */}
        <FAQ />
      {/* </Suspense> */}
      <Contact ip={ip} />
      {/* <Footer /> */}
    </div>
  );
}

/* Exporting IP to other components */
export async function getServerSideProps({ req }) {
  console.log(req.headers);
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;

  return {
    props: {
      ip,
    }, // will be passed to the page component as props
  };
}
