import React from "react";
import Image from "next/image";

/* custom import */
import imgZero from "../../../../public/grafterrImage/justOneApp/imgZero.png";
import imgOne from "../../../../public/grafterrImage/justOneApp/imgOne.png";
import imgTwo from "../../../../public/grafterrImage/justOneApp/imgTwo.png";
import imgThree from "../../../../public/grafterrImage/justOneApp/imgThree.png";
import imgFour from "../../../../public/grafterrImage/justOneApp/imgFour.png";

/* Image import for tablets */

import checkoutTab from "../../../../public/grafterrImage/justOneApp/checkoutTab.png";
import cartTab from "../../../../public/grafterrImage/justOneApp/cartTab.png";
import productTab from "../../../../public/grafterrImage/justOneApp/productTab.png";
import salesTab from "../../../../public/grafterrImage/justOneApp/salesTab.png";
import imgZeroTab from "../../../../public/grafterrImage/justOneApp/imgZeroTab.png";

const AppScreen = (props) => {
  /* value received from props */
  let valueRecieved = props.value;
  let screenWidth = props.screenWidth;
  const altTags = [
    "Grafterr Go! - Sell anything, anywhere.",
    "Track your sales, identify best-sellers and recognise trends with powerful reporting features",
    "Easily create promotions, apply discounts and suggest tip amounts at checkout",
    "Create variants based on any product characteristic, then easily up-sell or cross-sell to your customers",
    "Add other team members and track their sales with built-in multi-user selling features",
  ];

  /* current active images container */
  let currentActive;
  /* image collectionI - Desktop */
  const imageCollectionI = [
    {
      number: imgZero,
    },
    {
      number: imgOne,
    },
    {
      number: imgTwo,
    },
    {
      number: imgThree,
    },
    {
      number: imgFour,
    },
  ];

  const imageCollectionII = [
    {
      number: imgZeroTab,
    },
    {
      number: salesTab,
    },
    {
      number: checkoutTab,
    },
    {
      number: productTab,
    },
    {
      number: cartTab,
    },
  ];

  // console.log(windowSize);
  if (valueRecieved === undefined) {
    valueRecieved = 0;
  }
  let currentActiveAlt = altTags[valueRecieved];

  /* Desktop test*/
  if (screenWidth > 1240) {
    if (valueRecieved === undefined) {
      valueRecieved = 0;
    }
    currentActive = imageCollectionI[valueRecieved].number;
  }
  if (screenWidth < 550) {
    if (valueRecieved === undefined) {
      valueRecieved = 0;
    }
    currentActive = imageCollectionI[valueRecieved].number;
  }
  /* Tab test */
  if (screenWidth > 550 && screenWidth < 1240) {
    if (valueRecieved === undefined) {
      valueRecieved = 0;
    }
    currentActive = imageCollectionII[valueRecieved].number;
  }

  return (
    <div className="justOneAppScreen h-full w-full relative lg:overflow-hidden">
      <Image
        className="xl:-right-20 appScreenImage"
        src={currentActive}
        alt={`${currentActiveAlt}`}
        objectFit="contain"
        layout="fill"
      />
    </div>
  );
};

export default AppScreen;
