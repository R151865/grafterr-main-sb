import React from "react";
import Image from "next/image";
import Link from "next/link";

/* custom import */
import backgroundImage from "../../public/grafterrImage/FreeForlife/Group.png";
import cardIcon from "../../public/grafterrImage/FreeForlife/cardIcon.svg";
import textIcon from "../../public/grafterrImage/FreeForlife/textIcon.svg";
import textIconII from "../../public/grafterrImage/FreeForlife/textIconII.svg";
import iOS from "../../public/grafterrImage/iOSApp.svg";
import android from "../../public/grafterrImage/androidApp.svg";

const FreeForever = () => {
  return (
    <div className="freeForeverContainer w-full" id="pricingSection">
      <Image
        src={backgroundImage}
        alt="Elevate your business with Grafterr's free-forever plan: no hidden fees, no contracts, cancel anytime"
        objectFit="cover"
        layout="fill"
      ></Image>
      <div className="freeForeverContainer flex flex-col justify-center items-center w-full">
        <h3 className="freeForeverContainerTitle relative">
          No monthly fees, no fixed costs <br className="hidden lg:block" /> and
          certainly <br className="hidden sm:block lg:hidden" /> no contracts
          <div className="hidden sm:block absolute sm:-left-12 sm:-top-8 w-12 h-12">
            <Image src={textIcon} alt="icon" objectFit="cover" layout="fill" />
          </div>
          <div className="block sm:hidden absolute right-6 -top-4 w-8 h-8">
            <Image
              src={textIconII}
              alt="icon"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </h3>

        <div className="freeForeverCard flex flex-col justify-between items-center relative">
          <div className="absolute -right-10 -top-10 md:-right-10 md:-top-10  xl:-right-14 xl:-top-14 cardIcon">
            <Image src={cardIcon} alt="icon" objectFit="cover" layout="fill" />
          </div>
          <h3>Free forever</h3>
          <span className="">£0/month</span>
          <p className="freeForeverCardInfo">1.49% per transaction</p>

          <p>
            No hidden fees, no lock-in contracts. <br />
            Cancel any time.
          </p>

          <div className="w-3/4">
            <ul className="freeForeverList">
              <li>Free unlimited support</li>
              <li>Free POS app</li>
              <li>Get funds next working day</li>
              <li>We cover PCI compliance</li>
            </ul>
          </div>
          <Link href="/">
            <a className="py-2 mt-4 inline-block px-2 bg-zinc-50 text-black freeForeverbutton">
              Download for free
            </a>
          </Link>
        </div>

        <p className="mobileAppFreeContainer text-center mt-4 sm:hidden">
          Now available on
        </p>
        <div className="mt-4 lowCostApplinksContainer sm:hidden flex justify-start items-center xl:my-4 md:my-2">
          <div className="lowCostiOSContainer mx-3 relative mr-2">
            <Image
              src={iOS}
              object-fit="cover"
              alt="iOS link"
              objectFit="cover"
            />
          </div>
          <div className="lowCostAndroidContainer mx-3 relative">
            <Image
              src={android}
              object-fit="cover"
              alt="android link"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeForever;
