import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import cardpaymentCardI from "../../public/grafterrImage/cardpaymentCardI.png";
import cardpaymentCardII from "../../public/grafterrImage/cardpaymentCardII.png";
import cardpaymentCardIII from "../../public/grafterrImage/cardpaymentCardIII.png";
import cardpaymentCardIV from "../../public/grafterrImage/cardpaymentsSvgs/cardpaymentCardIVn.png";
import cardpaymentCardV from "../../public/grafterrImage/cardpaymentsSvgs/cardpaymentCardVn.png";
import closeSlideUp from "../../public/grafterrImage/cardpaymentsSvgs/closeSlideUp.svg";
import arrowLeftBack from "../../public/grafterrImage/cardpaymentsSvgs/arrowLeftBack.svg";
import iconMobile from "../../public/grafterrImage/cardpaymentsSvgs/sliderIconMobile.svg";

const Slider = (props) => {
  const screenWidthscreenWidth = props.screenWidth;
  const [noOfDots, setNoOfDots] = useState([]);

  /* slide up state managment */
  const [cardshowI, setCardShowI] = useState(false);
  const [cardshowII, setCardShowII] = useState(false);
  const [cardshowIII, setCardShowIII] = useState(false);
  const [cardshowIV, setCardShowIV] = useState(false);
  const [cardshowV, setCardShowV] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 35,
    },
    // loop: true,
    breakpoints: {
      "(max-width: 1401px)": {
        /*   loop: true, */
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(min-width: 601px) and (max-width:1400px)": {
        /*     loop: true, */
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(max-width: 600px)": {
        // loop: true,
        slides: {
          perView: 1,
          spacing: 5,
        },
      },
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  /* cardShowI */
  const cardShowIF = () => {
    setCardShowI(true);
  };
  const cardShowIIF = () => {
    setCardShowII(true);
  };
  const cardShowIIIF = () => {
    setCardShowIII(true);
  };
  const cardShowIVF = () => {
    setCardShowIV(true);
  };
  const cardShowVF = () => {
    setCardShowV(true);
  };

  /* Screen width evaluation*/
  useEffect(() => {
    if (screenWidthscreenWidth === 0) {
      return;
    } else if (screenWidthscreenWidth > 1401) {
      // setNoOfDots([...Array(instanceRef.current.track.details.slides.length).keys()].slice(0,3)])
      setNoOfDots([0, 1, 2]);
      console.log("screen test");
    } else if (screenWidthscreenWidth > 600 && screenWidthscreenWidth < 1401) {
      setNoOfDots([0, 1, 2, 3]);
    } else {
      setNoOfDots([0, 1, 2, 3, 4]);
    }
  }, [screenWidthscreenWidth]);

  return (
    <>
      <div className="navigation-wrapper w-4/5 sm:w-3/4 md:w-4/5 lg:w-3/4 xl:4/5 h-full  lg:h-3/4">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide cardPaymentsMainCard w-1/4 flex flex-col h-1/2 lg:h-full">
            <div className="cardContainerSlider">
              <div className="py-4 px-6 text-center CardpaymentsTextContainer ">
                <h3 className="CardpaymentsCardTitle flex items-center mt-2">
                  <div className="mobileIconContainer relative flex justify-center items-center lg:hidden mr-1">
                    <Image
                      src={iconMobile}
                      alt="checkmark icon"
                      objectFit="contain"
                    ></Image>
                  </div>
                  Get paid in multiple ways
                </h3>
                <p className="mb-2">
                  GO! allows you to be flexible in how you take payments: cash
                  or card, in-person or online.
                </p>
                {/*    <Link href=""> */}
                <span
                  className="sm:mt-2 inline-block learnMoreBtn"
                  onClick={() => {
                    cardShowIF();
                  }}
                >
                  {" "}
                  learn more...
                </span>
                {/* </Link> */}
              </div>
              <div
                className="CardpaymentsImageContainer hidden lg:block"
                style={{ position: "relative" }}
              >
                <Image
                  className="CardpaymentCardImg"
                  objectFit="cover"
                  layout="fill"
                  alt="Start accepting chip & pin and contactless card payments with Grafterr GO!"
                  src={cardpaymentCardI}
                />
              </div>
              <div
                className={
                  cardshowI ? "slideUpCard slideUpCardI" : "slideUpCard"
                }
              >
                <div
                  className={
                    cardshowI
                      ? "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowI(false);
                  }}
                >
                  <Image
                    src={arrowLeftBack}
                    alt="arrow left button"
                    objectFit="contain"
                    width={15}
                    height={15}
                  ></Image>
                </div>
                {/* <div
                  className={
                    cardshowI
                      ? "hover:cursor-pointer crossBtn absolute right-4 top-4 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute right-4 top-4 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowI(false);
                  }}
                >
                  <Image
                    src={closeSlideUp}
                    alt="close button"
                    objectFit="contain"
                  ></Image>
                </div> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque modi obcaecati similique assumenda? Rerum saepe nulla vel suscipit tempore! Mollitia consequatur libero itaque, impedit inventore alias fuga illo minus.</p> */}
                <ul>
                  <li className="CardListTitle">Get paid in multiple ways</li>
                  <li>Any type of debit or credit card</li>
                  <li>Chip and pin</li>
                  <li>Contactless payments</li>
                  <li>NFC payments via Google and Apple pay</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide cardPaymentsMainCard w-1/4 flex flex-col h-1/2 lg:h-full">
            <div className="cardContainerSlider">
              <div className="py-4 px-6 text-center CardpaymentsTextContainer ">
                <h3 className="CardpaymentsCardTitle flex items-center mt-2">
                  <div className="mobileIconContainer relative flex justify-center items-center lg:hidden mr-1">
                    <Image
                      src={iconMobile}
                      alt="checkmark icon"
                      objectFit="contain"
                    ></Image>
                  </div>
                  Send payment links
                </h3>
                <p className="mb-2">
                  Let your customers pay online instantly by sending payment
                  links via e-mail and text.
                </p>
                {/*    <Link href=""> */}
                <span
                  className="sm:mt-2 inline-block learnMoreBtn"
                  onClick={() => {
                    cardShowIIF();
                  }}
                >
                  {" "}
                  learn more...
                </span>
                {/* </Link> */}
              </div>
              <div
                className="CardpaymentsImageContainer hidden lg:block"
                style={{ position: "relative" }}
              >
                <Image
                  className="CardpaymentCardImg"
                  objectFit="cover"
                  layout="fill"
                  alt="Send payment links and reminders to customers via e-mail or text"
                  src={cardpaymentCardII}
                />
              </div>
              <div
                className={
                  cardshowII ? "slideUpCard slideUpCardI" : "slideUpCard"
                }
              >
                <div
                  className={
                    cardshowII
                      ? "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowII(false);
                  }}
                >
                  <Image
                    src={arrowLeftBack}
                    alt="arrow left button"
                    objectFit="contain"
                    width={15}
                    height={15}
                  ></Image>
                </div>
                {/* <div
                className={
                  cardshowII ? "slideUpCard slideUpCardI" : "slideUpCard"
                }
              >
                <div
                  className={
                    cardshowII
                      ? "hover:cursor-pointer crossBtn absolute right-4 top-4 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute right-4 top-4 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowII(false);
                  }}
                >
                  <Image
                    src={closeSlideUp}
                    alt="close button"
                    objectFit="contain"
                  ></Image>
                </div> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque modi obcaecati similique assumenda? Rerum saepe nulla vel suscipit tempore! Mollitia consequatur libero itaque, impedit inventore alias fuga illo minus.</p> */}
                <ul>
                  <li className="CardListTitle">Pay by link</li>
                  <li>Send invoices for custom amounts or catalog products</li>
                  <li>Allow your customers to pay instantly online</li>
                  <li>Send a payment request via text message (SMS)</li>
                  <li>Send a payment request via email</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide cardPaymentsMainCard w-1/4 flex flex-col h-1/2 lg:h-full">
            <div className="cardContainerSlider">
              <div className="py-4 px-6 text-center CardpaymentsTextContainer ">
                <h3 className="CardpaymentsCardTitle flex items-center mt-2">
                  <div className="mobileIconContainer relative flex justify-center items-center lg:hidden mr-1">
                    <Image
                      src={iconMobile}
                      alt="checkmark icon"
                      objectFit="contain"
                    ></Image>
                  </div>
                  Charge custom amounts
                </h3>
                <p className="mb-2">
                  {/* If you don’t offer a fixed product catalog, you can charge custom amount at checkout */}
                  Offer a fixed-price product catalog or charge any custom
                  amount. Tips and discounts included.
                </p>
                {/*    <Link href=""> */}
                <span
                  className="sm:mt-2 inline-block learnMoreBtn"
                  onClick={() => {
                    cardShowIIIF();
                  }}
                >
                  {" "}
                  learn more...
                </span>
                {/* </Link> */}
              </div>
              <div
                className="CardpaymentsImageContainer hidden lg:block"
                style={{ position: "relative" }}
              >
                <Image
                  className="CardpaymentCardImg"
                  objectFit="cover"
                  layout="fill"
                  alt="Use fixed prices or charge completely custom amounts at checkout"
                  src={cardpaymentCardIII}
                />
              </div>
              <div
                className={
                  cardshowIII ? "slideUpCard slideUpCardI" : "slideUpCard"
                }
              >
                <div
                  className={
                    cardshowIII
                      ? "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowIII(false);
                  }}
                >
                  <Image
                    src={arrowLeftBack}
                    alt="arrow left button"
                    objectFit="contain"
                    width={15}
                    height={15}
                  ></Image>
                </div>
                {/* <div
                  className={
                    cardshowIII
                      ? "hover:cursor-pointer crossBtn absolute right-4 top-4 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute right-4 top-4 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowIII(false);
                  }}
                >
                  <Image
                    src={closeSlideUp}
                    alt="close button"
                    objectFit="contain"
                  ></Image>
                </div> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque modi obcaecati similique assumenda? Rerum saepe nulla vel suscipit tempore! Mollitia consequatur libero itaque, impedit inventore alias fuga illo minus.</p> */}
                <ul>
                  <li className="CardListTitle">Custom amounts</li>
                  <li>Enter any charge amount at checkout</li>
                  <li>Instantly name custom charge products</li>
                  <li>Instantly add tips or discounts to customer amounts</li>
                  <li>
                    Total flexibility in how much you charge your customers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide cardPaymentsMainCard w-1/4 flex flex-col h-1/2 lg:h-full">
            <div className="cardContainerSlider">
              <div className="py-4 px-6 text-center CardpaymentsTextContainer ">
                <h3 className="CardpaymentsCardTitle flex items-center mt-2">
                  <div className="mobileIconContainer relative flex justify-center items-center lg:hidden mr-1">
                    <Image
                      src={iconMobile}
                      alt="checkmark icon"
                      objectFit="contain"
                    ></Image>
                  </div>
                  Next day payouts
                </h3>
                <p className="mb-2">
                  {/* Unlike other payment companies, we don’t make you wait for your money! */}
                  Enjoy fast, next working day payouts directly to your bank
                  account. Never wait for your money again!
                </p>
                {/*    <Link href=""> */}
                <span
                  className="sm:mt-2 inline-block learnMoreBtn"
                  onClick={() => {
                    cardShowIVF();
                  }}
                >
                  {" "}
                  learn more...
                </span>
                {/* </Link> */}
              </div>
              <div
                className="CardpaymentsImageContainer hidden lg:block"
                style={{ position: "relative" }}
              >
                <Image
                  className="CardpaymentCardImg"
                  objectFit="cover"
                  layout="fill"
                  alt="Receive payouts next working day directly to your bank account"
                  src={cardpaymentCardIV}
                />
              </div>
              <div
                className={
                  cardshowIV ? "slideUpCard slideUpCardI" : "slideUpCard"
                }
              >
                <div
                  className={
                    cardshowIV
                      ? "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 opacity-1 transition-all"
                      : " hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowIV(false);
                  }}
                >
                  <Image
                    src={arrowLeftBack}
                    alt="arrow left button"
                    objectFit="contain"
                    width={15}
                    height={15}
                  ></Image>
                </div>
                {/* <div
                  className={
                    cardshowIV
                      ? "hover:cursor-pointer crossBtn absolute right-4 top-4 opacity-1 transition-all"
                      : " hover:cursor-pointer crossBtn absolute right-4 top-4 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowIV(false);
                  }}
                >
                  <Image
                    src={closeSlideUp}
                    alt="close button"
                    objectFit="contain"
                  ></Image>
                </div> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque modi obcaecati similique assumenda? Rerum saepe nulla vel suscipit tempore! Mollitia consequatur libero itaque, impedit inventore alias fuga illo minus.</p> */}
                <ul>
                  <li className="CardListTitle">Next day payouts</li>
                  <li>Get instant, next working day payouts</li>
                  <li>Don’t wait for your money</li>
                  <li>Send your funds to any nominated bank account</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide cardPaymentsMainCard w-1/4 flex flex-col h-1/2 lg:h-full">
            <div className="cardContainerSlider">
              <div className="py-4 px-6 text-center CardpaymentsTextContainer ">
                <h3 className="CardpaymentsCardTitle flex items-center mt-2">
                  <div className="mobileIconContainer relative flex justify-center items-center lg:hidden mr-1">
                    <Image
                      src={iconMobile}
                      alt="checkmark icon"
                      objectFit="contain"
                    ></Image>
                  </div>
                  Flexible POS setup
                </h3>
                <p className="mb-2">
                  {/* GO! is totally flexible. You can install the app onto a phone or tablet and even set it up as a full ePOS system.  */}
                  Let GO! app travel with you on a phone or tablet, or set it up
                  as a fully fledged stationary ePOS system.
                </p>
                {/*    <Link href=""> */}
                <span
                  className="sm:mt-2 inline-block learnMoreBtn"
                  onClick={() => {
                    cardShowVF();
                  }}
                >
                  {" "}
                  learn more...
                </span>
                {/* </Link> */}
              </div>
              <div
                className="CardpaymentsImageContainer hidden lg:block"
                style={{ position: "relative" }}
              >
                <Image
                  className="CardpaymentCardImg"
                  objectFit="cover"
                  layout="fill"
                  alt="Use the app on the go or set-up a fully fledged POS system in your premises"
                  src={cardpaymentCardV}
                />
              </div>
              <div
                className={
                  cardshowV ? "slideUpCard slideUpCardI" : "slideUpCard"
                }
              >
                <div
                  className={
                    cardshowV
                      ? "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute left-6 top-5 lg:top-6 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowV(false);
                  }}
                >
                  <Image
                    src={arrowLeftBack}
                    alt="arrow left button"
                    objectFit="contain"
                    width={15}
                    height={15}
                  ></Image>
                </div>
                {/* <div
                  className={
                    cardshowV
                      ? "hover:cursor-pointer crossBtn absolute right-4 top-4 opacity-1 transition-all"
                      : "hover:cursor-pointer crossBtn absolute right-4 top-4 transition-all opacity-0"
                  }
                  onClick={() => {
                    setCardShowV(false);
                  }}
                >
                  <Image
                    src={closeSlideUp}
                    alt="close button"
                    objectFit="contain"
                  ></Image>
                </div> */}
                <ul>
                  <li className="CardListTitle">Flexible setup</li>
                  <li>Available for Apple and Android</li>
                  <li>Use it on your mobile phone or tablet devices</li>
                  <li>
                    Connect it to a thermal printer and a cash drawer for a full
                    POS setup
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {noOfDots.map((idx) => {
            return (
              <p
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></p>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div className="arrowDiv hover:cursor-pointer" onClick={props.onClick}>
      <svg
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}

export default Slider;
