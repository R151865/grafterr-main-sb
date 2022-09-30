import Image from "next/image";

// images
import EllipseYellow from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/EllipseYellow.png";
import RectangleGreen from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/RectangleGreen.png";
import VectorRed from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png";

import VectorThread from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorThread.png";
import LowCostpicture from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/LowCostpicture.png";

// styling
import styles from "../../../styles/pages/BusinessType/Takeaways/payments.module.css";

export default function Payments() {
  const getCardsSection = () => (
    <div className="mb-4 flex justify-center md:justify-start">
      <div
        className={`${styles.takeAwayCard}  flex flex-col justify-between items-center`}
      >
        <h1 className={`${styles.takeAwayCardHeading}`}>1.49%</h1>
        <p className={`${styles.takeAwayCardPara}`}>Card reader</p>
      </div>

      <div
        className={`${styles.takeAwayCard} flex flex-col justify-between items-center ml-10`}
      >
        <h1 className={`${styles.takeAwayCardHeading}`}>1.99%</h1>
        <p className={`${styles.takeAwayCardPara}`}>Online orders</p>
      </div>
    </div>
  );

  const getVectorThread = () => (
    <div className="">
      <div style={{ width: "30%" }}>
        <Image alt="vector thread" src={VectorThread} />
      </div>
    </div>
  );

  return (
    <div
      className={`${styles.takeAwayContainer} flex items-center justify-center`}
    >
      <div
        className={`${styles.takeAwayBody} py-5 md:py-10  flex flex-col justify-center items-center md:flex-row md:justify-between`}
      >
        {/* text section  */}
        <div
          className={`${styles.takeAwayTextContainer} relative  text-center md:text-left  `}
        >
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col  ">
              <h1 className={`${styles.takeAwayHeading}  text-left`}>
                Low cost payments
              </h1>

              {getVectorThread()}
            </div>
          </div>

          <h2 className={`${styles.takeAwaySubHeading} mb-4`}>
            Get paid faster with next day payouts
          </h2>
          <p className={`${styles.takeAwayPara} mb-4 `}>
            Payments made easy! Accept all payment types whether at tableside,
            on the phone, behind the counter or online using Grafterr’s secure
            payment options.
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
                Instant sign up with no paperwork
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
                No contracts or monthly fees
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
                Get your funds next working day
              </p>
            </div>
          </div>

          {getCardsSection()}
          <div className=" p-4">
            <a
              className={`${styles.takeAwayAnchorElement}  underline underline-offset-4`}
            >
              Learn more {" > "}
            </a>
          </div>
        </div>

        {/*image section */}

        <div className={`${styles.takeAwayImageContainer}`}>
          <div style={{ height: "100%", width: "100%" }}>
            <Image alt="streamlines orders" src={LowCostpicture} />
          </div>
        </div>
      </div>
    </div>
  );
}
