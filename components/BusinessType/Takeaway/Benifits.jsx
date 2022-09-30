import Image from "next/image";

import styles from "../../../styles/pages/BusinessType/Takeaways/benifits.module.css";

// images
import Vector1 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit1.png";
import Vector2 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit2.png";
import Vector3 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit3.png";
import Vector4 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit4.png";
import Vector5 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit5.png";
import Vector6 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit6.png";
import Vector7 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit7.png";
import Vector8 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit8.png";
import Vector9 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorBenifit9.png";

const listData = [
  {
    data: "POS and online ordering",
    imageUrl: Vector8,
  },
  {
    data: "Delivery management",
    imageUrl: Vector9,
  },
  {
    data: "Payment processing",
    imageUrl: Vector1,
  },
  {
    data: "Customer & table management",
    imageUrl: Vector2,
  },
  {
    data: "Stock control & Ops management",
    imageUrl: Vector3,
  },
  {
    data: "Marketing & loyalty",
    imageUrl: Vector4,
  },
  {
    data: "Staff management",
    imageUrl: Vector5,
  },
  {
    data: "Reports & takeaway insights",
    imageUrl: Vector6,
  },
  {
    data: "Multi-locaiton management",
    imageUrl: Vector7,
  },
];

export default function Benifits() {
  const getItem = (cardData) => {
    const { data, imageUrl } = cardData;
    return (
      <div
        key={data}
        className={`${styles.takeAwayCard} flex flex-col items-center justify-around`}
      >
        <div className={`${styles.takeAwayCardImage}`}>
          <div>
            <Image height="30%" width="30%" alt="icons" src={imageUrl} />
          </div>
        </div>
        <p className={`${styles.takeAwayCardPara} text-center`}>{data}</p>
      </div>
    );
  };

  return (
    <div className={`${styles.takeAwayContainer} flex items-center justify-center`}>
      <div
        className={` ${styles.takeAwayBody}  flex flex-col md:flex-row items-center justify-center`}
      >
        <div
          className={`${styles.takeAwayTextContainer} text-center md:text-left`}
        >
          <h1 className={`${styles.takeAwayHeading} mb-4`}>
            Power your takeaway from a single award winning platform{" "}
          </h1>
          <button className={`${styles.takeAwayButton} my-4`}>
            Talk to a specialist today
          </button>
        </div>

        {/* items section */}
        <div
          className={`${styles.takeAwayCardList} mt-4 flex  flex-wrap  justify-center items-center`}
        >
          {listData.map((each) => getItem(each))}
        </div>
      </div>
    </div>
  );
}
