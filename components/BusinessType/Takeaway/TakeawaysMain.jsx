import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";

//Components
import StreamlinesYourOrder from "./StreamlinesYourOrder";
import CutTheComission from "./CutTheComission";
import DeliveryManagement from "./DeliveryManagement";
import TakeawayPlaceholder from "./TakeawayPlaceholder";
import TakeawayService from "./TakeawayService";
import DataCapture from "./DataCapture";
import Kiosks from "./Kiosks";
import GrafterKDS from "./GrafterKDS";
import EmpowerYourBusiness from "./EmpowerYourBusiness";
import Payments from "./Payments";
import Benifits from "./Benifits";
import TakeawaySlider from "./TakeawaySlider";
import CompactPricingPage from "./CompactPricingPage";

import Foot from "./Foot"

//Images
import takeawayheadertop from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawayheadertop.png";
import takewayvector1 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takewayvector1.png";
import takewayvector5 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawayvector5.png";
import takeawaysubtract from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawaysubtract.png";
import takeawayellipse6 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takewayellipse6.png";
import takeawayrectangle2 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawayrectangle2.png";
import takeawayellipse2 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawayellipse2.png";

//Styled CSS
import styles from "../../../styles/pages/BusinessType/Takeaways/takeaways.module.css";
import cardStyles from "../../../styles/pages/BusinessType/Takeaways/takeawaySlider.module.css";

const TakeawaysMain = () => {
  const [windowSize, setWindowSize] = useState(0);
  let screenWidth = windowSize;

  useLayoutEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={`${styles.takeawayHeroContainerI}`}>
      <div className={`${styles.takeawayHeroSectionPartI}`}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
        <Image
          className={styles.takeawayHeroImage}
          alt="takeaway header top"
          layout="fill"
          objectFit="cover"
          src={takeawayheadertop}
          priority
        />
        <div className={styles.heroHIContainer}>
          <h1 className={styles.heroHI}>Takeaway</h1>
          <p className={`${styles.takeawayHeroCaption} text-white`}>
            The award winning platform that streamlines multi-channel orders
          </p>
          <Link href="/">
            <a
              className={`${styles.takeawayHeroOrderNowBtn} py-2 mt-12 inline-block px-2 bg-blue-50 text-blue`}
            >
              Placeholder with more
            </a>
          </Link>
        </div>
      </div>
      <div className={`flex flex-col items-center mt-20`}>
        <h1 className={`${styles.takeawayHeroCaptionII}`}>
          One platform to manage everything
        </h1>
        <div
          className={`${styles.takeawayItemContainer} flex flex-wrap justify-center mt-15`}
        >
          <div
            className={`${styles.takeawaySaleContainerI} flex flex-col items-center`}
          >
            <div>
              <Image
                src={takeawaysubtract}
                alt="takeaway subtract"
                width={50}
                height={50}
              />
            </div>
            <p className={styles.takeawayCardHeadingI}>Point of sale</p>
            <p className={styles.takeawayCardContentI}>
              An all-in-one POS system that keeps you on top of your orders
            </p>
            <button className={styles.takeawayDiscoverBtnI}>
              Discover More
            </button>
          </div>
          <div
            className={`${styles.takeawaySaleContainerII} flex flex-col items-center`}
          >
            <div>
              <Image
                src={takewayvector1}
                alt="takeaway vector1"
                width={50}
                height={50}
              />
            </div>
            <p className={styles.takeawayCardHeadingII}>Online ordering</p>
            <p className={styles.takeawayCardContentII}>
              An all-in-one POS system that keeps you on top of your orders
            </p>
            <button className={styles.takeawayDiscoverBtnII}>
              Discover More
            </button>
          </div>
          <div
            className={`${styles.takeawaySaleContainerIII} flex flex-col items-center`}
          >
            <div>
              <Image
                src={takeawayrectangle2}
                alt="takeaway rectangle2"
                width={50}
                height={50}
              />
            </div>
            <p className={styles.takeawayCardHeadingIII}>Delivery management</p>
            <p className={styles.takeawayCardContentIII}>
              Multi-driver management with real time driver tracking and driver
              display
            </p>
            <button className={styles.takeawayDiscoverBtnIII}>
              Discover More
            </button>
          </div>
          <div
            className={`${styles.takeawaySaleContainerIV} flex flex-col items-center`}
          >
            <div>
              <Image
                src={takeawayellipse6}
                alt="takeaway ellipse6"
                width={50}
                height={50}
              />
            </div>
            <p className={styles.takeawayCardHeadingIV}>Grafterr KDS</p>
            <p className={styles.takeawayCardContentIV}>
              Bring calm to your kitchen with an automated kitchen display
            </p>
            <button className={styles.takeawayDiscoverBtnIV}>
              Discover More
            </button>
          </div>
          <div
            className={`${styles.takeawaySaleContainerV} flex flex-col items-center`}
          >
            <div>
              <Image
                src={takewayvector5}
                alt="takeaway vector5"
                width={50}
                height={50}
              />
            </div>
            <p className={styles.takeawayCardHeadingV}>Payments</p>
            <p className={styles.takeawayCardContentV}>
              Low cost, totally flexible payments fully integrated into your POS
              products
            </p>
            <button className={styles.takeawayDiscoverBtnV}>
              Discover More
            </button>
          </div>
        </div>
      </div>
      <StreamlinesYourOrder />
      <CutTheComission />
      <DeliveryManagement />
      <TakeawayPlaceholder />
      <TakeawayService screenWidth={screenWidth} />
      <DataCapture />
      <Kiosks />
      <GrafterKDS />
      <EmpowerYourBusiness />
      <Payments />
      <Benifits />
      
      <div
        className={`${cardStyles.cardPayments} mt-8 mb-8 sm:mt-0 w-screen flex flex-col justify-start lg:justify-center items-center lg:h-3/4 `}
      >
        <div className={`${cardStyles.ellipseImage}`}>
          <Image
            src={takeawayellipse2}
            alt="takeaway ellipse2"
            width={85}
            height={75}
          />
        </div>
        <h1 className={`${cardStyles.cardHeading} mt-7 mb-7`}>
          This is what our customers think about us
        </h1>
        <TakeawaySlider screenWidth={screenWidth} />
      </div>
      <CompactPricingPage />
      {/* <Foot/> */}
    </div>
  );
};

export default TakeawaysMain;
