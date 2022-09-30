import React from "react";
import Image from "next/image";

import DoYouNeedAdvice from "./DoYouNeedAdvice";

// images
import EllipseSkyBlue from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseSkyBlue.png";
import EllipseYellow from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseYellowBig.png";
import VectorBlue from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBlueHalfBig.png";
import VectorRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png";

// styling
import styles from "../../../styles/pages/BusinessType/Takeaways/compactPricingPage.module.css";

const cardsData = [
  {
    title: "Free",
    offer: "300 order per month",
    subHead: "Free forever",
    listData1: "Includes 1 terminal",
    listData2: "In-person, online and telephone payments",
    buttonText: "Try for free",
  },

  {
    title: "Starter",
    offer: "Unlimited orders",
    subHead: "£25 / per month",
    listData1: "Includes 4 terminals",
    listData2: "In-person, online and telephone payments",
    buttonText: "Get started",
  },

  {
    title: "Standard",
    offer: "Unlimited orders",
    subHead: "£34 / per month",
    listData1: "Includes 4 terminals",
    listData2: "In-person, online and telephone payments",
    buttonText: "Get started",
  },
  {
    title: "Pro",
    offer: "Unlimited orders",
    subHead: "£35 / per month",
    listData1: "Includes 4 terminals",
    listData2: "In-person, online and telephone payments",
    buttonText: "Go Pro",
  },

  {
    title: "Ultimate",
    offer: "Unlimited orders",
    subHead: "£75 / per month",
    listData1: "Includes 4 terminals",
    listData2: "In-person, online and telephone payments",
    buttonText: "Get started",
  },

  {
    title: "Enterprise",
    offer: "Unlimited orders",
    subHead: "Speak to an expert",
    listData1: "Placeholder",
    listData2: "Placeholder Placeholder",
    buttonText: "Get started",
  },
];

export default function CompactPricingPage() {
  const getCard = (cardData) => {
    const { title, offer, subHead, listData1, listData2, buttonText } =
      cardData;
    return (
      <div
      key={title}
       className={`${styles.takeAwayCard} flex flex-col`}>
        <h1 className={`${styles.takeAwayHeading} relative`}>
          {title}

          <span className={`${styles.takeAwayOffer} absolute `}>
            {offer}
          </span>
        </h1>

        <h2 className={`${styles.takeAwaySubHeading} mt-3 mb-3`}>{subHead}</h2>

        <div className="">
          <div className="flex items-center mb-2">
            <div>
              <Image
                height="12"
                width="12"
                alt="stream line icons"
                src={VectorRed}
              />
            </div>
            <p className={`${styles.takeAwayListText}  ml-2  `}>{listData1}</p>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <Image
                height="15"
                width="15"
                alt="stream line icons"
                src={EllipseSkyBlue}
              />
            </div>
            <p className={`${styles.takeAwayListText}  ml-2  `}>{listData2}</p>
          </div>
        </div>

        <button className={`${styles.takeAwayButton} mt-auto`}>
          {buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className={`${styles.takeAwayContainer } relative flex items-center justify-center`}>
      <div className={`${styles.takeAwayBody} `}>
        <div className={`${styles.takeAwayLeftTopImage} absolute top-0 left-0`}>
        <Image alt="left icons" src={VectorBlue} />
      </div>
      <div>
        <div className={`${styles.takeAwayRightTopImage} absolute top-0 right-0`}>
          <Image alt="left icons" src={EllipseYellow} />
        </div>
      </div>

        <div className="flex flex-wrap justify-center ">
          {cardsData.map((each) => getCard(each))}
        </div>

        <DoYouNeedAdvice />
      </div>
    </div>
  );
}
