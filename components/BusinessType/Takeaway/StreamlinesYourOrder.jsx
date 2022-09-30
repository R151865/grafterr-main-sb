import React from "react";
import Image from "next/image";

// images
import EllipseYellow from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseYellow.png";
import RectangleGreen from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/RectangleGreen.png";
import VectorRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png";
import StreamLineCompImage from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/StreamLineCompImage.png";

//styling
import styles from "../../../styles/pages/BusinessType/Takeaways/streamlinesYourOrder.module.css";

export default function StreamlinesYourOrder() {
  return (
    <div className={`${styles.takeAwayContainer} relative`}>
      <div
        className={`${styles.takeAwayBody} py-5 md:py-10  flex flex-col md:flex-row md:items-center`}
      >
        <div
          className={`${styles.takeAwayTextContainer}  text-center md:text-left `}
        >
          <h1 className={`${styles.takeAwayHeading} mb-4 `}>
            An POS that streamlines your order management
          </h1>
          <p className={`${styles.takeAwayPara} mb-4 `}>
            All your ordering channels seamlessly consolidated onto a single
            screen. In-person, online, telephone, Deliveroo, JustEat & more!
            Easily manage all your orders in one place!
          </p>
          <div className="mb-4  flex flex-col items-center md:items-start">
            <div className="flex items-center mb-1 lg:mb-3 xl:mb-4 ">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={RectangleGreen}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Gain instant control of multi-channel orders
              </p>
            </div>

            <div className="flex items-center mb-1 lg:mb-3 xl:mb-4 ">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={VectorRed}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Prep and deliver every order quicker than before
              </p>
            </div>

            <div className="flex items-center  mb-1 lg:mb-3 xl:mb-4 ">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={EllipseYellow}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Sync 3rd party orders via Deliverect
              </p>
            </div>
          </div>
          <button
            className={`${styles.takeAwayButton} px-2 py-2 text-sm md:text-normal md:px-2.5 md:py-3 mt-2  mb-10 md:mb-0 `}
          >
            Discover more
          </button>
        </div>

        {/* image section  */}
        <div className={`${styles.takeAwayImageContainer} `}>
          <Image alt="streamlines orders" src={StreamLineCompImage} />
        </div>
      </div>
    </div>
  );
}
