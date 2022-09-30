import Image from "next/image";

// images
import EllipseYellow from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseYellow.png";
import RectangleGreen from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/RectangleGreen.png";
import VectorRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png";
import EllipseRoundBlue from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseRoundBlue.png";

import System from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/System.png";

// styling
import styles from "../../../styles/pages/BusinessType/Takeaways/empowerYourBusiness.module.css";

export default function EmpowerYourBusiness() {
  return (
    <div className={`${styles.takeAwayContainer}`}>
      <div
        className={`${styles.takeAwayBody} pt-4  flex flex-col md:flex-row justify-center items-center`}
      >
        {/* text section  */}
        <div
          className={`${styles.takeAwayTextContainer} p-4 relative  text-center md:text-left  `}
        >
          <h1 className={`${styles.takeAwayHeading} mb-4 `}>
            Power your business with next
            <br className="hidden xl:block" />
            generation hardware.
          </h1>

          <div className="mb-4  flex  flex-wrap items-center ">
            <div className="flex items-center  m-2">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={EllipseRoundBlue}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                24/7 support
              </p>
            </div>

            <div className="flex items-center m-2">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={RectangleGreen}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Same day dispatch
              </p>
            </div>

            <div className="flex items-center  m-2">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={VectorRed}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                7 day money back guarantee
              </p>
            </div>

            <div className="flex items-center m-2">
              <div>
                <Image
                  height={13}
                  width={13}
                  alt="stream line icons"
                  src={EllipseYellow}
                />
              </div>
              <p className={`${styles.takeAwayListText}  ml-2  `}>
                Warranty on all products
              </p>
            </div>
          </div>
          <button
            className={`${styles.takeAwayButton} px-2 py-2 text-sm md:text-normal md:px-2.5 md:py-3 mt-2  mb-10 md:mb-0 `}
          >
            Buy today
          </button>
        </div>

        {/* image section  */}
        <div className={`${styles.takeAwayImageContainer}`}>
          <div style={{ height: "100%", width: "100%" }}>
            <Image alt="streamlines orders" src={System} />
          </div>
        </div>
      </div>
    </div>
  );
}
