import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Styles from "../../../styles/pages/BusinessType/Takeaways/takeawaySlider.module.css";

import PImage1 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/PImage1.png";
import PImage2 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/PImage2.png";
import PImage3 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/PImage3.png";

const TakeawaySlider = (props) => {
  const screenWidthScreenWidth = props.screenWidth;
  const [noOfDots, setNoOfDots] = useState([]);

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

  /* Screen width evaluation*/
  useEffect(() => {
    if (screenWidthScreenWidth === 0) {
      return;
    } else if (screenWidthScreenWidth > 1401) {
      // setNoOfDots([...Array(instanceRef.current.track.details.slides.length).keys()].slice(0,3)])
      setNoOfDots([0, 1, 2]);
      console.log("screen test");
    } else if (screenWidthScreenWidth > 600 && screenWidthScreenWidth < 1401) {
      setNoOfDots([0, 1, 2, 3]);
    } else {
      setNoOfDots([0, 1, 2, 3, 4]);
    }
  }, [screenWidthScreenWidth]);

  return (
    <>
      <div
        className={`${Styles.navigationWrapper} w-4/5 sm:w-3/4 md:w-4/5 lg:w-3/4 xl:4/5 h-full lg:h-3/4`}
      >
        <div ref={sliderRef} className={`keen-slider`}>
          <div
            className={`keen-slider__slide ${Styles.cardPaymentsMainCard} ${Styles.cardPaymentBgI} w-1/4 flex flex-col`}
          >
            <div
              className={`${Styles.cardPaymentsTextContainer} py-4 px-4 text-left`}
            >
              <h3
                className={`${Styles.cardPaymentsCardTitleI} ${Styles.cardPaymentContentColorI} pb-5`}
              >
                Logo of company
              </h3>
              <p className={`${Styles.cardPaymentsCardContentI}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sit ultricies consequat tincidunt montes. Metus tellus
                mauris mi blandit.
              </p>
            </div>
            <div
              className={`${Styles.cardPaymentsImageContainer} flex items-center px-3 mb-5`}
            >
              <Image
                className="CardpaymentCardImg"
                width={60}
                height={60}
                alt="Avatar"
                src={PImage1}
              />
              <div>
                <p className={`${Styles.avatarName}`}>Karla Rojas</p>
                <p className={`${Styles.avatarDesignation}`}>
                  Founder & CEO of Italian express
                </p>
              </div>
            </div>
          </div>
          <div
            className={`keen-slider__slide ${Styles.cardPaymentsMainCard} ${Styles.cardPaymentBgII} w-1/4 flex flex-col`}
          >
            <div
              className={`${Styles.cardPaymentsTextContainer} py-4 px-4 text-left`}
            >
              <h3
                className={`${Styles.cardPaymentsCardTitleI} ${Styles.cardPaymentContentColorI} pb-5`}
              >
                Logo of company
              </h3>
              <p className={`${Styles.cardPaymentsCardContentI}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sit ultricies consequat tincidunt montes. Metus tellus
                mauris mi blandit.
              </p>
            </div>
            <div
              className={`${Styles.cardPaymentsImageContainer} flex items-center px-3 mb-5`}
            >
              <Image
                className="CardpaymentCardImg"
                width={60}
                height={60}
                alt="Avatar"
                src={PImage2}
              />
              <div>
                <p className={`${Styles.avatarName}`}>Karla Rojas</p>
                <p className={`${Styles.avatarDesignation}`}>
                  Founder & CEO of Italian express
                </p>
              </div>
            </div>
          </div>
          <div
            className={`keen-slider__slide ${Styles.cardPaymentsMainCard} ${Styles.cardPaymentBgIII} w-1/4 flex flex-col`}
          >
            <div
              className={`${Styles.cardPaymentsTextContainer} py-4 px-4 text-left`}
            >
              <h3
                className={`${Styles.cardPaymentsCardTitleI} ${Styles.cardPaymentContentColorI} pb-5`}
              >
                Logo of company
              </h3>
              <p className={`${Styles.cardPaymentsCardContentI}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sit ultricies consequat tincidunt montes. Metus tellus
                mauris mi blandit.
              </p>
            </div>
            <div
              className={`${Styles.cardPaymentsImageContainer} flex items-center px-3 mb-5`}
            >
              <Image
                className="CardpaymentCardImg"
                width={60}
                height={60}
                alt="Avatar"
                src={PImage3}
              />
              <div>
                <p className={`${Styles.avatarName}`}>Karla Rojas</p>
                <p className={`${Styles.avatarDesignation}`}>
                  Founder & CEO of Italian express
                </p>
              </div>
            </div>
          </div>
          <div
            className={`keen-slider__slide ${Styles.cardPaymentsMainCard} ${Styles.cardPaymentBgI} w-1/4 flex flex-col`}
          >
            <div
              className={`${Styles.cardPaymentsTextContainer} py-4 px-4 text-left`}
            >
              <h3
                className={`${Styles.cardPaymentsCardTitleI} ${Styles.cardPaymentContentColorI} pb-5`}
              >
                Logo of company
              </h3>
              <p className={`${Styles.cardPaymentsCardContentI}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sit ultricies consequat tincidunt montes. Metus tellus
                mauris mi blandit.
              </p>
            </div>
            <div
              className={`${Styles.cardPaymentsImageContainer} flex items-center px-3 mb-5`}
            >
              <Image
                className="CardpaymentCardImg"
                width={60}
                height={60}
                alt="Avatar"
                src={PImage1}
              />
              <div>
                <p className={`${Styles.avatarName}`}>Karla Rojas</p>
                <p className={`${Styles.avatarDesignation}`}>
                  Founder & CEO of Italian express
                </p>
              </div>
            </div>
          </div>
          <div
            className={`keen-slider__slide ${Styles.cardPaymentsMainCard} ${Styles.cardPaymentBgI} w-1/4 flex flex-col`}
          >
            <div
              className={`${Styles.cardPaymentsTextContainer} py-4 px-4 text-left`}
            >
              <h3
                className={`${Styles.cardPaymentsCardTitleI} ${Styles.cardPaymentContentColorI} pb-5`}
              >
                Logo of company
              </h3>
              <p className={`${Styles.cardPaymentsCardContentI}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sit ultricies consequat tincidunt montes. Metus tellus
                mauris mi blandit.
              </p>
            </div>
            <div
              className={`${Styles.cardPaymentsImageContainer} flex items-center px-3 mb-5`}
            >
              <Image
                className="CardpaymentCardImg"
                width={60}
                height={60}
                alt="Avatar"
                src={PImage1}
              />
              <div>
                <p className={`${Styles.avatarName}`}>Karla Rojas</p>
                <p className={`${Styles.avatarDesignation}`}>
                  Founder & CEO of Italian express
                </p>
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
        <div className={`${Styles.dots}`}>
          {noOfDots.map((idx) => {
            return (
              <p
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`${Styles.dot} ${
                  currentSlide === idx ? Styles.active : ""
                }`}
                // className={"dot" + (currentSlide === idx ? " active" : "")}
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

export default TakeawaySlider;
