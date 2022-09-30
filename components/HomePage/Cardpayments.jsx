import React from "react";
import Image from "next/image";

/* custom imports */
import Slider from "./Slider";
import topLeft from "../../public/grafterrImage/cardpaymentsSvgs/topLeft.svg";
import bottomLeft from "../../public/grafterrImage/cardpaymentsSvgs/bottomLeft.svg";
import topRight from "../../public/grafterrImage/cardpaymentsSvgs/topRight.svg";
import textIcon from "../../public/grafterrImage/cardpaymentsSvgs/textIcon.svg";
import textIconMobile from "../../public/grafterrImage/cardpaymentsSvgs/textIconMobile.svg";

const Cardpayments = (props) => {
  const { screenWidth } = props;
  return (
    <div
      className="cardPaymentContainer flex flex-col justify-center sm:justify-around items-center w-screen h-screen bg-white relative my-16 sm:my-0"
      id="cardPaymentSection"
    >
      <div className="topLeftSvgContainer hidden sm:block">
        <Image src={topLeft} alt="background design element"></Image>
      </div>
      <div className="topRightSvgContainer hidden sm:block">
        <Image src={topRight} alt="background design element"></Image>
      </div>
      <div className="bottomLeftSvgContainer hidden sm:block">
        <Image src={bottomLeft} alt="background design element"></Image>
      </div>
      <div className="cardPaymentTitleContainer hidden sm:block text-center sm:mt-12">
        <h2 className="cardPaymentTitle mb-2 relative">
          The easiest way to take card payments
          <div className="textImageContainer absolute -top-8 -right-16 w-16 h-16 hidden lg:block">
            <Image src={textIcon} alt="icon" layout="fill" objectFit="cover" />
          </div>
        </h2>
        <span className="cardPaymentSubTitle">
          Sign up for free, start selling instantly
        </span>
      </div>

      <div className="block sm:hidden cardPaymentTitleContainer text-center sm:mt-12">
        <h2 className="cardPaymentTitle mb-2 relative">
          Get all the benefits <br className="block sm:hidden" /> from one app
          <div className="textImageContainer absolute -top-6 -right-10 w-12 h-8">
            <Image
              src={textIconMobile}
              alt="icon"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </h2>
        <span className="cardPaymentSubTitle">
          Flip the card and learn more about benefits
        </span>
      </div>

      <div className="mt-8 sm:mt-0 cardPayments w-screen flex flex-col justify-start lg:justify-center items-center lg:h-3/4 ">
        <Slider screenWidth={screenWidth} />
      </div>
    </div>
  );
};

export default Cardpayments;
