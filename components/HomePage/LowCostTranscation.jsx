import React from "react";
import Image from "next/image";

/* custom import */
import humanLowCostTransaction from "../../public/grafterrImage/humanLowCostTransaction.svg";
import iOS from "../../public/grafterrImage/iOSApp.svg";
import android from "../../public/grafterrImage/androidApp.svg";
import textIcon from "../../public/grafterrImage/lowCostTransactions/textIcon.svg";
import textIconII from "../../public/grafterrImage/lowCostTransactions/textIconII.svg";

const LowCostTranscation = () => {
  return (
    <div className="lowCostTranscationContainer flex justify-center items-center md:flex w-full">
      <div className="lowCostTransactionSub flex justify-center items-center w-5/6 xl:w-3/4 h-3/4">
        <div className="lowCostLeft flex flex-col justify-center sm:justify-start items-center sm:items-start w-full sm:w-3/5 lg:w-1/2 text-left relative overflow-hidden">
          <h3 className="lowCostTitle relative">
            Just low cost <br className="block sm:hidden" /> transactions
            <div className="imageContainer absolute -bottom-8 left-1/4 -translate-x-1/2 hidden xl:block">
              <Image src={textIcon} alt="design icon" objectFit="cover" />
            </div>
            <div className="imageContainer absolute bottom-1/2 sm:bottom-1/4 translate-y-1/2 left-1/2 sm:left-1/4 -translate-x-1/2 block xl:hidden">
              <Image src={textIconII} alt="design icon" objectFit="cover" />
            </div>
          </h3>
          <span className="LowCostTagLine md:mt-1 xl:mt-6">
            Get paid faster with{" "}
            <span style={{ fontWeight: "700" }}>
              next day <br className="block sm:hidden" /> payouts
            </span>
          </span>
          <div className="lowCostPercentage flex justify-center items-center my-5">
            <div className="lowCostPayment flex flex-col justify-between items-center p-3 mr-5">
              <span>Card reader</span>
              <span>1.49%</span>
              <span>per transaction</span>
            </div>
            <div className="lowCostCardReader flex flex-col justify-between items-center p-3">
              <span>Payment Links</span>
              <span>1.99%</span>
              <span>per transaction</span>
            </div>
            <div className="h-full w-full block sm:hidden absolute top-0 left-20 -z-50">
              <Image
                src={humanLowCostTransaction}
                object-fit="contain"
                alt="human Logo"
                layout="fill"
              />
            </div>
          </div>
          <div className="lowCostApplinksContainer flex justify-start items-center xl:my-4 md:my-2">
            <div className="lowCostiOSContainer xl:mr-5 md:mr-4 relative mr-2">
              <Image
                src={iOS}
                object-fit="cover"
                alt="iOS link"
                objectFit="contain"
              />
            </div>
            <div className="lowCostAndroidContainer relative">
              <Image
                src={android}
                object-fit="cover"
                alt="android link"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div
          className="lowCostRight h-full  w-2/5  lg:w-1/2 hidden sm:flex justify-center items-center"
          style={{ position: "relative" }}
        >
          <Image
            src={humanLowCostTransaction}
            object-fit="contain"
            alt="Enjoy low-fee transactions and next day payouts with Grafterr GO!"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default LowCostTranscation;
