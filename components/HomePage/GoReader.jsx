import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* custom Import */
import goreader from "../../public/grafterrImage/goReader/goReader-high-res.png";
// import goreader from '../public/grafterrImage/goReader.png'
import imageI from "../../public/grafterrImage/goReader/imageI.svg";
import imageII from "../../public/grafterrImage/goReader/imageII.svg";
import imageIII from "../../public/grafterrImage/goReader/imageIII.svg";
import topRight from "../../public/grafterrImage/goReader/topRight.svg";
import btnIcon from "../../public/grafterrImage/goReader/btnIcon.svg";
import plusIcon from "../../public/grafterrImage/goReader/plusIcon.svg";
import minusIcon from "../../public/grafterrImage/goReader/minusIcon.svg";
import deliveryIcons from "../../public/grafterrImage/goReader/freeDeliveryIcon.svg";

const GoReader = () => {
  const [goReaderQty, setGoReaderQty] = useState(1);
  let productID = 68;

  function minusQty() {
    if (goReaderQty <= 1) {
      return;
    } else {
      setGoReaderQty(goReaderQty - 1);
    }
  }
  
  function plusQty() {
    if (goReaderQty >= 2) {
      return;
    } else {
      setGoReaderQty(goReaderQty + 1);
    }
  }

  function redirectToCart() {
    window.location.href = `https://dev.eposhybrid.com/eposgo/cart/?pid=${productID}&q=${goReaderQty}`;
  }

  return (
    <div
      className="goReaderContainer py-0 xl:px-10 md:px-0 relative"
      id="goReaderSection"
    >
      <div className="grafterMmgContainer hidden sm:block absolute xl:right-14 xl:top-20 w-12 h-12 sm:right-0 md:top-0 ">
        <Image
          src={topRight}
          alt="image"
          objectFit="cover"
          layout="fill"
        ></Image>
      </div>
      <div className="goReaderSubContainer flex flex-col items-center sm:flex-row justify-center sm:item-center w-full h-full relative">
        <div
          className="goReaderLeft flex justify-end items-center w-3/4 lg:w-1/2 xl:w-1/2  h-1/2 sm:h-full"
          style={{ position: "relative" }}
        >
          <div className="goReaderImageContainer relative h-full w-full md:h-4/5 lg:h-4/5 lg:w-4/5">
            <Image
              src={goreader}
              alt="GO! Wireless Card Reader - take secure card payments wherever you are"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
        <div className="goReaderRight lg:p-10 flex flex-col justify-center item-center sm:items-start sm:w-2/3 lg:w-1/2 xl:w-1/2 relative">
          <div className="flex flex-col justify-center items-center sm:items-start xl:ml-10 md:ml-0">
            <div className="xl:mb-5 md:mb-3 flex flex-col justify-center items-center sm:items-start">
              <h3 className="goReaderTitle block sm:hidden">GO! Reader</h3>
              <span className="goReaderStockStatus mb-1 sm:mb-0">In Stock</span>
              <h3 className="goReaderTitle hidden sm:block">GO! Reader</h3>
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-center mb-0">
              <span className="goReaderPreviousPrice">Was £49.00</span>
              <span className="goReaderoffTag m-2 sm:mx-2 sm:my-0">
                67% off
              </span>
            </div>
            <div className="my-2 sm:my-0">
              <h3 className="goReaderCurrrentPrice">Now £14.00</h3>
            </div>
            <div className="flex flex-col justify-center items-start my-1 sm:my-0">
              <div className="flex justify-between items-center xl:my-2 md:my-1 goReaderInfoText">
                <div
                  className="imageContainer"
                  style={{
                    position: "relative",
                    marginRight: "15px",
                    width: "15px",
                    height: "15px",
                  }}
                >
                  <Image
                    src={imageI}
                    alt="Image shape"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                Works together with our free GO! app
              </div>
              <div className="flex justify-between items-center xl:my-2 md:my-1 goReaderInfoText">
                <div
                  className="imageContainer"
                  style={{
                    position: "relative",
                    marginRight: "15px",
                    width: "15px",
                    height: "15px",
                  }}
                >
                  <Image
                    src={imageII}
                    alt="Image shape"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className="block sm:hidden">
                  Connects wirelessly to your phone or tablet
                </span>
                <span className="hidden sm:block">
                  Connects wirelessly to your phone or tablet using bluetooth
                </span>
              </div>
              <div className="flex justify-between items-center xl:my-2 md:my-1 goReaderInfoText">
                <div
                  className="imageContainer"
                  style={{
                    position: "relative",
                    marginRight: "15px",
                    width: "15px",
                    height: "15px",
                  }}
                >
                  <Image
                    src={imageIII}
                    alt="Image shape"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <span className="block sm:hidden">
                  Accepts all forms of payment.
                </span>
                <span className="hidden sm:block">
                  Accepts all forms of payment including chip & pin and
                  contactless
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center sm:justify-start xl:my-4 md:mt-4 md:mb-2">
              <div className="flex justify-between items-center mr-8 sm:mr-7">
                <button
                  className="minusQuantity"
                  onClick={() => {
                    minusQty();
                  }}
                >
                  <Image src={minusIcon} alt="minu btn image" />
                </button>
                <span className="goReaderQuantity"> {goReaderQty}</span>
                <button
                  className="plusQuantity"
                  onClick={() => {
                    plusQty();
                  }}
                >
                  <Image src={plusIcon} alt="plus btn image" />
                </button>
              </div>
              <div>
                <button
                  className="goReaderBuyNowBtn relative"
                  onClick={() => {
                    redirectToCart();
                  }}
                >
                  Buy now - £14.00
                  <div className="hidden sm:block imgContainer absolute -right-12 -top-12 md:-right-14 md:-top-8 w-12 h-12 md:h-16 md:w-16">
                    <Image src={btnIcon} alt="arrow"></Image>
                  </div>
                </button>
              </div>
            </div>
            <div className="my-0 w-full mt-0 mb-5 hidden sm:block freeDeliveryTag">
              <Link href="/">
                <span className="freeDeliveryBtn my-1 w-full">
                  <div style={{ marginRight: "10px" }}>
                    <Image src={deliveryIcons} alt="delivery icon"></Image>
                  </div>
                  Free delivery (2 working days)
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoReader;
