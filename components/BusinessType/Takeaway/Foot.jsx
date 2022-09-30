import Image from "next/image";
import Link from "next/link";

// images
import FooterLogo from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/FooterLogo.png";
import VectorScrollUp from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorScrollUp.png";


import Insta from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/insta.svg";
import Facebook from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/facebook.svg";
import Twitter from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/twitter.svg";
import Linkedin from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/linkedin.svg";
// ../../../public/grafterrImage/BusinessType/TakeAwaysImages/VectorRed.png"
// import scrollToTop from "../../public/grafterrImage/Footer/scrollToTop.svg";

// style css
import styles from "../../styles/pages/BusinessType/foot.module.css";

const listLinkData = [
  {
    head: "Hardware",
    links: [
      { text: "shop", link: "#" },
      { text: "Pricing", link: "#" },
      { text: "F&Q's", link: "#" },
    ],
  },

  {
    head: "Products",
    links: [
      { text: "Kiosk", link: "#" },
      { text: "App", link: "#" },
      { text: "Online", link: "#" },
      { text: "Placeholder", link: "#" },
      { text: "Placeholder", link: "#" },
    ],
  },

  {
    head: "Industries",
    links: [
      { text: "Takeaway", link: "#" },
      { text: "Food trucks", link: "#" },
      { text: "Cafes", link: "#" },
      { text: "Full service", link: "#" },
      { text: "QRS + fast food", link: "#" },
      { text: "Placeholder", link: "#" },
      { text: "Placeholder", link: "#" },
    ],
  },

  {
    head: "Grafterr",
    links: [
      { text: "Our story", link: "#" },
      { text: "Contact us", link: "#" },
      { text: "Career", link: "#" },
    ],
  },
];

export default function Foot() {
  const getItem = (data) => {
    const { head, links } = data;
    return (
      <div className={`${styles.footItem} mr-5 mb-5`}>
        <h1 className={`${styles.footItemHead} mb-3`}>{head}</h1>
        {links.map((each) => (
          <p className={`${styles.footItemLink} mb-2 hover:text-blue-800 hover:underline`}>
            <Link href={each.link}>{each.text}</Link>
          </p>
        ))}
      </div>
    );
  };

  const getForm = () => (
    <form className="flex items-center">
      <input
        className={`${styles.footerInput}`}
        type="text"
        placeholder="Email address"
      />
      <button className={`${styles.footerFormButton} ml-5`} type="submit">
        Get Started
      </button>
    </form>
  );

  const getMediaSection = () => (
    <div className=" my-5 flex flex-col md:flex-row md:items-center">
      <div className="flex  justify-center items-center  md:mr-10">
        <div className="mr-5 hover:cursor-pointer">
          <Image alt="media icon" src={Insta} />
        </div>
        <div className="mr-5 hover:cursor-pointer">
          <Image alt="media icon" src={Facebook} />
        </div>

        <div className="mr-5 hover:cursor-pointer">
          <Image alt="media icon" src={Twitter} />
        </div>
        <div className="mr-5 hover:cursor-pointer">
          <Image alt="media icon" src={Linkedin} />
        </div>
      </div>

      <div className="my-2 flex flex-wrap justify-center items-center">
        <p className={`${styles.mediaSectionItem} mr-5 md:mr-10 `}>
          <Link href="#">Copyrights</Link>
        </p>

        <p className={`${styles.mediaSectionItem} mr-5 md:mr-10`}>
          <Link href="#">Terms of use</Link>
        </p>

        <p className={`${styles.mediaSectionItem} mr-5 md:mr-10`}>
          <Link href="#">Privacy Policy</Link>
        </p>

        <p className={`${styles.mediaSectionItem} mr-5 md:mr-10`}>
          <Link href="#">2022 Grafterr</Link>
        </p>
      </div>
    </div>
  );
  return (
    <div className={`${styles.body} my-8 mx-auto`}>
      <div className="flex  justify-between">
        <div className={`${styles.footerLogo}`}>
          <Image alt="footer logo" src={FooterLogo} />
        </div>

        <div
          className={`${styles.footerItemsList} flex flex-wrap items-start md:justify-around`}
        >
          {listLinkData.map((each) => getItem(each))}
        </div>

        <div
          className={`${styles.scrollupIcon} flex items-center justify-center`}
        >
          <Image alt="footer logo" src={VectorScrollUp} />
        </div>
      </div>

      <div className="mt-10 ">
        {getForm()}

        {getMediaSection()}
      </div>
    </div>
  );
}
