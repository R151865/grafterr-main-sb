import Image from "next/Image";

//images
import DoYouNeedAdvicePic from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/DoYouNeedAdvicePic.png";

// styling css
import styles from "../../../styles/pages/BusinessType/Takeaways/doYouNeedAdvice.module.css";

export default function DoYouNeedAdvice() {
  const getForm = () => (
    <form className={`${styles.formContainer}`}>
      <div className={`${styles.formInputContainer}`}>
        <label className={`${styles.formLabel} `}>Full name</label>
        <input
          className={`${styles.formInput}`}
          type="text"
          placeholder="Full Name"
        />
      </div>

      <div className={`${styles.formInputContainer}`}>
        <label className={`${styles.formLabel} `}>Company name</label>
        <input
          className={`${styles.formInput}`}
          type="text"
          placeholder="Company name"
        />
      </div>

      <div className={`${styles.formInputContainer}`}>
        <label className={`${styles.formLabel} `}>Email address</label>
        <input
          className={`${styles.formInput}`}
          type="text"
          placeholder="Email address"
        />
      </div>
      <button className={`${styles.formButton}`}>Send message</button>
    </form>
  );

  return (
    <div
      className={`${styles.takeAwayBody} flex flex-col md:flex-row justify-center items-center`}
    >
      <div className={`${styles.takeAwayTextContainer} text-center md:text-left`}>
        <h1 className={`${styles.takeAwayHeading} mb-4`}>Do you need some Advice?</h1>
        <p className={`${styles.takeAwayPara} mb-6`}>
          Our friendly team are on hand to answer any quesitons you may have, no
          hard sale, we promise!{" "}
        </p>

        {getForm()}
      </div>

      {/* image section */}
      <div className={`${styles.takeAwayImageContainer}`}>
        <div>
          <Image alt="do you need advice" src={DoYouNeedAdvicePic} />
        </div>
      </div>
    </div>
  );
}
