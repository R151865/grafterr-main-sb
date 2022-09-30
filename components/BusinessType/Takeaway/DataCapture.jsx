import Image from "next/image";

import styles from "../../../styles/pages/BusinessType/Takeaways/dataCapture.module.css";

// images
import DataFeatures from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/DataFeatures.png";

export default function DataCapture() {
  return (
    <div className={`${styles.takeAwayContainer}`}>
      <div
        className={`${styles.takeAwayBody} md:py-4 flex flex-col md:flex-row  justify-center items-center`}
      >
        {/* image section */}
        <div
          className={`${styles.takeAwayImageContainer} flex items-center justify-center  `}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <Image alt="data capture" src={DataFeatures} />
          </div>
        </div>

        {/* text section */}
        <div
          className={`${styles.takeAwayTextContainer}  text-center md:text-left mt-5 p-4`}
        >
          <h1 className={`${styles.takeAwayHeading} mb-4`}>Digital ordering</h1>
          <p className={`${styles.takeAwayPara} mb-4 `}>
            Automate your customer ordering flow and have less staff behind the
            counter with Grafterr’s Mobile Order & Pay app. Deliver convenience
            to customers whilst driving revenue and reducing queues.
          </p>

          <div className="my-4 ">
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
