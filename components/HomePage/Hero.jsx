import React from "react";
import Image from "next/image";
import Link from "next/link";

/* custom imports */
// import HeroImg from '../public/grafterrImage/heroImage.png';
import HeroImgI from "../../public/grafterrImage/heroImageI.webp";
// import HeroImgI from '../public/grafterrImage/heroImageI.avif';
import iOSImg from "../../public/grafterrImage/iOSApp.svg";
import androidImg from "../../public/grafterrImage/androidApp.svg";
import heroiPhone from "../../public/grafterrImage/heroSectionIphone.png";
import topLeft from "../../public/grafterrImage/HeroSection/topLeft.svg";
import topRight from "../../public/grafterrImage/HeroSection/topRight.svg";
import bottomLeft from "../../public/grafterrImage/HeroSection/bottomLeft.svg";
import bottomRight from "../../public/grafterrImage/HeroSection/bottomRight.svg";
import textIcon from "../../public/grafterrImage/HeroSection/textIcon.svg";
import mobile from "../../public/grafterrImage/HeroSection/heroSectionMobile.png";
import topRightMobile from "../../public/grafterrImage/HeroSection/topRightMobile.svg";
import bottomRightMobile from "../../public/grafterrImage/HeroSection/bottomRightMobile.svg";

const Hero = ({ heading, message }) => {
  return (
    <div className="h-screen custom-img heroSection">
      <div
        className="grafterrHeroSectionPartI"
        style={{
          width: "100%",
          height: "48%",
          position: "relative",
          top: "8vh",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
        <Image
          className="grafterrHeroImage"
          alt="grafterr Go background Image"
          layout="fill"
          objectFit="cover"
          src={HeroImgI}
          priority
        />
        <div className="heroHIContainer">
          <h1 className="heroHI">
            Introducing,
            <br className="block sm:hidden" /> GO!
          </h1>
          <p className=" sm:mt-3 text-white grafterHeroCaption">
            Take payments directly from your phone or tablet
          </p>
          <Link href="/">
            <a className="py-2 mt-12 inline-block px-2 bg-zinc-50 text-black grafterHeroOrderNowBtn">
              {" "}
              Order now
            </a>
          </Link>
        </div>
      </div>

      {/* Overlay */}

      <div className="grafterrHeroSectionPartII flex">
        <div className="pr-6 pt-6 pl-6 pb-0 p-6 sm:w-2/3 md:w-1/2 lg:w-4/6 flex flex-col justify-center items-center text-left lg:pl-32 relative grafterrHeroSectionPartIISub">
          <div className="heroSectionImgContainer heroSectionImgContainerI">
            <Image
              src={topLeft}
              alt="icon here"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="heroSectionImgContainer heroSectionImgContainerII hidden lg:block">
            <Image
              src={topRight}
              alt="icon here"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="heroSectionImgContainer heroSectionImgContainerIII">
            <Image
              src={bottomLeft}
              alt="icon here"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="heroSectionImgContainer heroSectionImgContainerIV">
            <Image
              src={bottomRight}
              alt="icon here"
              objectFit="cover"
              layout="fill"
            />
          </div>

          <div className="block sm:hidden heroSectionImgContainer heroSectionImgContainerV right-0 top-0">
            <Image
              src={topRightMobile}
              alt="background image icon"
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>

          <div className="block sm:hidden heroSectionImgContainer heroSectionImgContainerVI right-0 bottom-0">
            <Image
              src={bottomRightMobile}
              alt="background image icon"
              objectFit="cover"
              layout="fill"
            ></Image>
          </div>

          <div className="heroSellContainer sm:mb-8">
            <h2 className="grafterheroSellH1 mb-0 relative">
              Sell anything, <br className="block sm:hidden" /> anywhere
              <div className="iconDiv hidden md:block">
                <Image
                  src={textIcon}
                  alt="background design element"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </h2>
            <p className="grafterheroSellP my-2 xl:w-5/6 2xl:w-3/4">
              From freelancers to tradespeople, dog walkers to hairdressers, GO!
              allows you to instantly take payments for anything using a
              smartphone or tablet.
            </p>
            <div className="grafterHeroSellpButtons flex w-full sm:pt-0 sm:mt-0 py-2 lg:mt-6">
              <div className="imgContainerParent flex sm:w-100 mr-2">
                <div className="imageContainer sm:mr-3">
                  <Link
                    href="https://apps.apple.com/us/app/jkm-restro-l/id1594803920"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <Image
                        className="mx-3"
                        src={iOSImg}
                        alt="Download Grafterr GO! from Apple AppStore"
                      />
                    </a>
                  </Link>
                </div>
                <div className="imageConatiner sm:ml-3">
                  <Link href="https://play.google.com/store/apps/details?id=com.eposhybrid.jkmrestrol">
                    <a target="_blank" rel="noopener noreferrer">
                      <Image
                        src={androidImg}
                        alt="Get Grafterr GO! on Google Play"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mobileImageHero sm:hidden relative">
                <Image
                  src={mobile}
                  alt="Take cash & card payments directly from your phone or tablet with Grafterr GO!"
                  objectFit="contain"
                  layout="fill"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-2/5 md:w-1/2 h-full relative sm:flex sm:items-center sm:justify-center">
          <div className="flex sm:h-4/5 lg:h-[110%] absolute lg:-mt-12 xl:-mt-24 z-40">
            <Image
              src={heroiPhone}
              className="h-full"
              alt="Take cash & card payments directly from your phone or tablet with Grafterr GO!"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
