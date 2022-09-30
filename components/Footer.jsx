import React from "react";
import Link from "next/link";
import Image from "next/image";

/* Images */
import FooterLogo from "../public/grafterrImage/footerLogo.svg";
import Insta from "../public/grafterrImage/insta.svg";
import Facebook from "../public/grafterrImage/facebook.svg";
import Twitter from "../public/grafterrImage/twitter.svg";
import Linkedin from "../public/grafterrImage/linkedin.svg";
import scrollToTop from "../public/grafterrImage/Footer/scrollToTop.svg";

const Footer = () => {
  return (
    <div className="footerMainContainer flex justify-center items-center">
      <div className="footerSubContainer px-8 sm:px-8 w-full xl:w-4/5 flex justify-center items-start lg:items-center flex-col relative">
        <div className="footerGrafterrLogo flex flex-col justify-start items-start lg:hidden">
          <Image
            src={FooterLogo}
            alt="Logo image"
            width={500} // automatically provided
            height={100} // automatically provided
          />
        </div>
        <div className="footerSubContainerI mt-8 sm:my-8 w-full lg:w-4/5 grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          <div className=" mt-2 footerGrafterrLogo flex-col justify-start items-start hidden lg:flex">
            <Image
              src={FooterLogo}
              alt="Logo image"
              width={500} // automatically provided
              height={100} // automatically provided
            />
          </div>
          <div className="footerLinksContainerI flex flex-col justify-center items-start">
            <h3 className="footerLinksTitle my-2">App downlaod</h3>
            {/* <span className='footerLinks my-2 hover:cursor-pointer'> */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer"> iOS App</a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer" > */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                Android App
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer"> */}
            <Link className="" href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Release Notes
              </a>
            </Link>
            {/* </span> */}
          </div>
          <div className="footerLinksContainerII flex flex-col justify-center items-start">
            <h3 className="footerLinksTitle my-2">Policy</h3>
            {/* <span className="footerLinks my-2 hover:cursor-pointer"> */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Terms & Conditions{" "}
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer"> */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                Refund Policy
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer"> */}
            <Link className="" href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Complaint Procedure{" "}
              </a>
            </Link>
            {/* </span> */}
          </div>
          <div className="footerLinksContainerIII flex flex-col justify-center items-start">
            <h3 className="footerLinksTitle my-2">Grafterr</h3>
            {/* <span className="footerLinks my-2 hover:cursor-pointer'"> */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Our story{" "}
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer" > */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Contact us{" "}
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer"> */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Refer a Friend{" "}
              </a>
            </Link>
            {/* </span> */}
          </div>
          <div className=" mt-2 footerLinksContainerIV flex sm:hidden flex-col justify-start items-start">
            {/* <span className="footerLinks my-2 hover:cursor-pointer'"> */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Privacy Policy{" "}
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer" > */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Terms of use{" "}
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="footerLinks my-2 hover:cursor-pointer"> */}
            <Link href="/">
              <a className="footerLinks my-2 hover:cursor-pointer">
                {" "}
                Copyrights{" "}
              </a>
            </Link>
            {/* </span> */}
            <div className="footerSocialIcons flex md:justify-between lg:justify-end items-center">
              {/* <span  className="mr-1 lg:mx-3 hover:cursor-pointer flex items-center"> */}
              <Link href="/">
                <a className="mr-1 lg:mx-3 hover:cursor-pointer flex items-center">
                  <Image src={Insta} alt="Instagram" />
                </a>
              </Link>
              {/* </span> */}
              {/* <span  > */}
              <Link href="/">
                <a className="mx-1 lg:mx-3 hover:cursor-pointer flex items-center">
                  <Image src={Facebook} alt="Facebook" />
                </a>
              </Link>
              {/* </span> */}
              {/* <span className="mx-1 lg:mx-3 hover:cursor-pointer flex items-center"> */}
              <Link href="/">
                <a className="mx-1 lg:mx-3 hover:cursor-pointer flex items-center">
                  <Image src={Twitter} alt="Twitter" />
                </a>
              </Link>
              {/* </span> */}
              {/* <span  className="mx-1 lg:mx-3 hover:cursor-pointer flex items-center"> */}
              <Link href="/">
                <a className="mx-1 lg:mx-3 hover:cursor-pointer flex items-center">
                  <Image src={Linkedin} alt="Linkedin" />
                </a>
              </Link>
              {/* </span> */}
            </div>
          </div>
        </div>
        <div className="footerSubContainerII w-full lg:w-2/3 hidden sm:flex justify-evenly items-center mt-5">
          <div className="footerSocialIcons flex md:justify-between lg:justify-end items-center">
            {/* <span  className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center"> */}
            <Link href="">
              <a className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center">
                <Image src={Insta} alt="Instagram" />
              </a>
            </Link>
            {/* </span> */}
            {/* <span  className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center"> */}
            <Link href="/">
              <a className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center">
                <Image src={Facebook} alt="Facebook" />
              </a>
            </Link>
            {/* </span> */}
            {/* <span className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center"> */}
            <Link href="/">
              <a className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center">
                <Image src={Twitter} alt="Twitter" />
              </a>
            </Link>
            {/* </span> */}
            {/* <span  className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center"> */}
            <Link href="/">
              <a className="mx-2 lg:mx-3 hover:cursor-pointer flex items-center">
                <Image src={Linkedin} alt="Linkedin" />
              </a>
            </Link>
            {/* </span> */}
          </div>
          <div className="footerCopyRightsSection flex justify-around items-center">
            <Link href="/">
              <a className="footerLinksCopyright my-2 mx-3">Copyrights</a>
            </Link>
            <Link href="/">
              <a className="footerLinksCopyright my-2 mx-3"> Terms of use</a>
            </Link>
            <Link href="/">
              <a className="footerLinksCopyright my-2 mx-3">Privacy Policy</a>
            </Link>
            <Link href="/">
              <a className="footerLinksCopyright my-2 mx-3">2022 Grafterr</a>
            </Link>
          </div>
        </div>
        {/* <div className='scrollToTop absolute -top-2 right-8 sm:right-8 sm:top-0  lg:right-0 lg:top-0 hover:cursor-pointer'> */}
        <Link href="/">
          <a className="scrollToTop absolute -top-2 right-8 sm:right-8 sm:top-0  lg:right-0 lg:top-0 hover:cursor-pointer">
            <Image
              src={scrollToTop}
              alt="scroll to top"
              width={75}
              height={75}
            ></Image>
          </a>
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
