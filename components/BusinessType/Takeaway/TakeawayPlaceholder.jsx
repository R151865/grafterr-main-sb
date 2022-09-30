import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ProgressBar from "./ProgressBar";

import takeawayvector2 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawayvector2.png";
import takeawaysubtract2 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawaysubtract2.png";
import takeawayellipse1 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawayellipse1.png";

import Styles from "../../../styles/pages/BusinessType/Takeaways/takeawayPlaceholder.module.css";

const TakeawayPlaceholder = () => {
  const [style, setStyle] = useState({});
  const [pvalue, setPvalue] = useState(20);

  const ProgressValue = (done) => {
    if (pvalue > 99) {
      setPvalue(100);
    } else {
      setPvalue(pvalue + done);
    }
    console.log(pvalue);
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${pvalue}%`,
      };

      setStyle(newStyle);
    }, 200);
  };

  return (
    <div className={`${Styles.takeawaysPlaceHolderContainer} flex`}>
      <div className={`${Styles.takeawayPlaceholderImageContainerI}`}>
        <Image
          src={takeawaysubtract2}
          alt="takeaway subtract2"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-center items-center">
        <h1 className={`${Styles.takeawayPlaceholderText}`}>
          Join 1000s takeaways across the world using grafterr to grow their
          business.
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className={`${Styles.placeholderHeading}`}>Placeholder</h1>
        <div className={`${Styles.progress}`}>
          <div className={`${Styles.progressDone}`} style={style}></div>
        </div>
        <p className={`${Styles.placeholderQuestion} mb-5`}>
          What type of business do you run?
        </p>
        <div>
          <div className={`${Styles.placeHolderAnswerContainerI} flex`}>
            <div className={`${Styles.selectedAnswer}`}></div>
            <p className={`${Styles.selectedAnswerText}`}>Takeaway</p>
          </div>
          <div className={`${Styles.placeHolderAnswerContainerII} flex`}>
            <div className={`${Styles.NonSelectedAnswer}`}></div>
            <p>Restaurant</p>
          </div>
          <div className={`${Styles.placeHolderAnswerContainerII} flex`}>
            <div className={`${Styles.NonSelectedAnswer}`}></div>
            <p>Bar</p>
          </div>
          <div className={`${Styles.placeHolderAnswerContainerII} flex`}>
            <div className={`${Styles.NonSelectedAnswer}`}></div>
            <p>Cafe</p>
          </div>
          <div className={`${Styles.placeHolderAnswerContainerII} flex`}>
            <div className={`${Styles.NonSelectedAnswer}`}></div>
            <p>Pop-up / Food truck</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className={`${Styles.placeHolderNextBtn} items-end`}
            onClick={() => ProgressValue(20)}
          >
            Next {"  >"}
          </button>
        </div>
      </div>
      <div className={`${Styles.takeawayPlaceholderImageContainerII}`}>
        <Image
          src={takeawayvector2}
          alt="takeaway vector2"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default TakeawayPlaceholder;
