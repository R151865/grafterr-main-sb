import Image from "next/image";

import styles from "../../../styles/pages/BusinessType/Takeaways/kiosks.module.css";

// imagess

import Frame from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/Frame.png";
import VectorIcon1 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorIcon1.png";
import VectorIcon2 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorIcon2.png";
import VectorIcon3 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorIcon3.png";

export default function Kiosks() {
  const getItems = () => (
    <div className="flex flex-wrap items-start justify-center py-4 ">
      <div
        className={`${styles.takeAwayItemBody}  flex flex-col items-center justify-center  `}
      >
        <div
          className={`${styles.takeAwayItemIconBody} ${styles.takeAwayItemYellow}   flex items-center justify-center`}
        >
          <div style={{ height: "50%", width: "50%" }}>
            <Image alt="kiosks icon" src={VectorIcon3} />
          </div>
        </div>
        <p className={`${styles.takeAwayItemContent}  mt-3 text-center`}>
          Increase average order size by 30%
        </p>
      </div>

      <div
        className={`${styles.takeAwayItemBody}  flex flex-col items-center justify-center `}
      >
        <div
          className={`${styles.takeAwayItemIconBody} ${styles.takeAwayItemBlue} flex items-center justify-center`}
        >
          <div style={{ height: "50%", width: "50%" }}>
            <Image alt="kiosks icon" src={VectorIcon2} />
          </div>
        </div>
        <p className={`${styles.takeAwayItemContent} mt-3 text-center`}>
          Eliminate customer queues
        </p>
      </div>

      <div
        className={`${styles.takeAwayItemBody}  flex flex-col items-center justify-center `}
      >
        <div
          className={`${styles.takeAwayItemIconBody} ${styles.takeAwayItemRed} flex items-center justify-center`}
        >
          <div style={{ height: "50%", width: "50%" }}>
            <Image alt="kiosks icon" src={VectorIcon1} />
          </div>
        </div>
        <p className={`${styles.takeAwayItemContent} mt-3 text-center`}>
          Reduce staffing costs by 50%
        </p>
      </div>
    </div>
  );

  return (
    <div className={`${styles.takeAwayContainer} flex items-center justify-center`}>
      <div
        className={`${styles.takeAwayBody}  flex flex-col md:flex-row md:justify-between justify-center items-center`}
      >
        {/* image section */}
        <div
          className={`${styles.takeAwayImageContainer} flex items-center justify-center  `}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <Image alt="data capture" src={Frame} />
          </div>
        </div>

        {/* text section */}
        <div
          className={`${styles.takeAwayTextContainer}  text-center md:text-left  p-4`}
        >
          <h1 className={`${styles.takeAwayHeading} mb-4`}>
            Self-service kiosks
          </h1>
          <p className={`${styles.takeAwayPara} mb-4 `}>
            Discover the future of customer ordering. Combat staff shortages and
            increase revenue with Grafterr’s modern self-service kiosks.
          </p>

          {/* items section*/}
          {getItems()}

          <div className="my-4  ">
            <button className={`${styles.takeAwayBuyNowButton} mr-10`}>
              Buy now
            </button>
            <button className={`${styles.takeAwayLearnMoreButton}`}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
