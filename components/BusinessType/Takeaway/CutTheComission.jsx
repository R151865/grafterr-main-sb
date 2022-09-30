import React from "react";
// import Link from "next/link";
import Image from "next/image";

// images
import EllipseYellow from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseYellow.png";
import RectangleGreen from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/RectangleGreen.png";
import VectorRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png";

import EllipseGreenRound from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseGreenRound.png";
import PhoneCompGroup from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/PhoneCompGroup.png";
import VectorHalfGreen from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorHalfGreen.png";

// styling
import styles from "../../../styles/pages/BusinessType/Takeaways/cutTheComission.module.css";

export default function CutTheComission() {
  return (
    <div className={`${styles.takeAwaytakeAwayContainer} relative`}>
      <div className={`${styles.takeAwayImageIconLeft}  absolute left-0 top-1/2`}>
        <Image alt="streamlines orders" src={VectorHalfGreen} />
      </div>

      <div
        className={`${styles.takeAwayBody} py-5 md:py-10    flex flex-col justify-center md:flex-row md:justify-between   items-center`}
      >
        <div className={`${styles.takeAwayImageContainer} `}>
          <Image alt="streamlines orders" src={PhoneCompGroup} />
        </div>

        {/* text section  */}
        <div
          className={`${styles.takeAwayTextContainer}  text-center md:text-left  lg:ml-10`}
        >
          <h1 className={`${styles.takeAwayHeading} mb-4 `}>
            Cut the commission & 
            <br className="hidden xl:block"/>
            generate your own
            <br className="hidden xl:block "/>
             online orders
          </h1>
          <p className={`${styles.takeAwayPara} mb-4 `}>
            Everything you need to take online orders directly from your
            customers without using 3rd parties. Grow your business with digital
            ordering, marketing and loyalty campaigns.
          </p>
          <div className="mb-4  flex flex-col items-center md:items-start">
            <div className="flex items-center mb-1 lg:mb-3 xl:mb-4">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={RectangleGreen}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2`}>
                Interactive website builder with online ordering platform
              </p>
            </div>

            <div className="flex items-center mb-1 lg:mb-3 xl:mb-4">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={VectorRed}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2`}>
                Automatically sync online orders to your POS + Kitchen
              </p>
            </div>

            <div className="flex items-center mb-1 lg:mb-3 xl:mb-4">
              <div>
                <Image
                  // objectFit="cover"
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={EllipseYellow}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2`}>
                Marketing suite with email, SMS and push noticfications
              </p>
            </div>
          </div>
          <button
            className={`${styles.takeAwayButton} px-2 py-2 text-sm md:text-normal md:px-2.5 md:py-3 mt-2  mb-10 md:mb-0 `}
          >
            Discover more
          </button>
        </div>
      </div>

      <div className={`${styles.takeAwayImageIconRight}  absolute bottom-0 right-0 `}>
        <Image alt="streamlines orders" src={EllipseGreenRound} />
      </div>
    </div>
  );
}
