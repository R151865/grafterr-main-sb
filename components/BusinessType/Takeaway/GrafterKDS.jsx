import Image from "next/image";

// images
import EllipseYellow from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseYellow.png";
import RectangleGreen from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/RectangleGreen.png";
import VectorRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png";

import KDSPicture from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/KDSPicture.png";
import EllipseRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseRedBig.png";

// styling
import styles from "../../../styles/pages/BusinessType/Takeaways/grafterKDS.module.css";

export default function GrafterKDS() {
  return (
    <div className={`${styles.takeAwayContainer} flex items-center justify-center`}>
    <div
      className={`${styles.takeAwayBody}    flex flex-col justify-center md:flex-row  items-center md:justify-between`}
    >
      <div className={`${styles.takeAwayImageContainer}`}>
        <div style={{ height: "100%", width: "100%" }}>
          <Image alt="streamlines orders" src={KDSPicture} />
        </div>
      </div>

      {/* text section  */}
      <div
        className={`${styles.takeAwayTextContainer} relative  text-center md:text-left `}
      >
        <h1 className={`${styles.takeAwayHeading} mb-4 `}>Grafterr KDS</h1>
        <p className={`${styles.takeAwayPara} mb-4 `}>
          Keep your front-of-house and your kitchen in total in sync with
          automated ticket management.
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
              Instantly send orders to your kitchen or prep areas
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
              Manage all your orders from a single screen
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
              Track the status of orders as they’re prepped
            </p>
          </div>
        </div>
        <button
          className={`${styles.takeAwayButton} px-2 py-2 text-sm md:text-normal md:px-2.5 md:py-3 mt-2  mb-10 md:mb-0 `}
        >
          Discover more
        </button>

        <div className={`${styles.takeAwayImageIconRight}  absolute  `}>
          <Image alt="streamlines orders" src={EllipseRed} />
        </div>
      </div>
    </div>
    </div>
  );
}
