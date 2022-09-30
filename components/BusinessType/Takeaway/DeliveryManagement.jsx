import React from "react";
import Image from "next/image";

// images
import EllipseYellow from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseYellow.png";
import RectangleGreen from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/RectangleGreen.png";
import VectorRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png";

import GroupPhoto from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/GroupPhoto.png";
import RectangleGreenBig from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/RectangleGreenBig.png";
import VectorProfile from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorProfile.png";
import VectorTick from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorTick.png";

// styling
import styles from "../../../styles/pages/BusinessType/Takeaways/deliveryManagement.module.css";

export default function DeliveryManagement() {
  const getPopupSection = () => (
    <div className={`${styles.takeAwayPopupSection}  absolute `}>
      <div
        className={`${styles.takeAwayPopupBody} flex justify-center items-center mb-3`}
      >
        <div
          className={`${styles.takeAwayPopupIconBody} flex justify-center items-center`}
        >
          <div style={{ width: "60%", height: "60%", position: "relative" }}>
            <Image
              alt="popup icon"
              src={VectorProfile}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="ml-2">
          <h1 className={`${styles.takeAwayPopupHeading}`}>Driver assigned</h1>
          <p className={`${styles.takeAwayPopupPara}`}>
            Order 205 assigned to Joe
          </p>
        </div>
      </div>

      <div
        className={`${styles.takeAwayPopupBody} flex justify-center items-center mb-3`}
      >
        <div
          className={`${styles.takeAwayPopupTickBody} flex justify-center items-center`}
        >
          <div style={{ width: "60%", height: "60%", position: "relative" }}>
            <Image
              alt="popup icon"
              src={VectorTick}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="ml-2">
          <h1 className={`${styles.takeAwayPopupHeading}`}>Order delivered</h1>
          <p className={`${styles.takeAwayPopupPara}`}>
            Order 205 has been delivered
          </p>
        </div>
      </div>

      <div
        className={`${styles.takeAwayPopupBody} flex justify-center items-center`}
      >
        <div
          className={`${styles.takeAwayPopupIconBody} flex justify-center items-center`}
        >
          <div style={{ width: "60%", height: "60%", position: "relative" }}>
            <Image
              alt="popup icon"
              src={VectorProfile}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="ml-2">
          <h1 className={`${styles.takeAwayPopupHeading}`}>Driver assigned</h1>
          <p className={`${styles.takeAwayPopupPara}`}>
            Order 205 assigned to Mark
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${styles.takeAwayContainer}`}>
      <div
        className={`${styles.takeAwayBody} py-5 md:py-10   relative flex flex-col md:flex-row justify-center items-center`}
      >
        {/* text section  */}
        <div
          className={`${styles.takeAwayTextContainer}  text-center md:text-left  sm:p-5`}
        >
          <h1 className={`${styles.takeAwayHeading} mb-4 `}>
            Take the stress out of delivery management
          </h1>
          <p className={`${styles.takeAwayPara} mb-4 `}>
            Easily manage your delivery orders with Grafterr’s intelligent
            delivery order hub and driver app.
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
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Manage the progress of delivery orders from one screen
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
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Know where your drivers are with real time tracking
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
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Group & assign orders based on delivery location
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
        <div className={`${styles.takeAwayImageContainer} relative `}>
          <Image alt="streamlines orders" src={GroupPhoto} />

          {getPopupSection()}

          <div
            className={`${styles.takeAwayImageIconRight}  absolute `}
          >
            <Image alt="streamlines orders" src={RectangleGreenBig} />
          </div>
        </div>
      </div>
    </div>
  );
}
