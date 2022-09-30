import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* custom import */
import topLeft from "../../public/grafterrImage/DesignedFor/Ellipse.png";
import topRight from "../../public/grafterrImage/DesignedFor/IntersectII.png";
import bottomLeft from "../../public/grafterrImage/DesignedFor/Intersect.png";
import bottomRight from "../../public/grafterrImage/DesignedFor/Union.png";
import bottomMiddle from "../../public/grafterrImage/DesignedFor/IntersectI.png";

const DesignedForEveryOne = () => {
  const [inFrame, setinFrame] = useState();
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setinFrame(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div
      className="SectionIII flex justify-center items-center lg:my-20 relative" /*  onMouseEnter = {()=> {setinFrame(true)}} */
    >
      <div className="w-full h-full absolute">
        <div
          className={
            inFrame === true
              ? "relative designedTopLeftSvgContainer animateI"
              : "relative designedTopLeftSvgContainer"
          }
        >
          <Image src={topLeft} alt="Image of a person" objectFit="fill"></Image>
        </div>
        <div
          className={
            inFrame === true
              ? "relative designedtopRightSvgContainer animateII"
              : "relative designedtopRightSvgContainer"
          }
        >
          <Image
            src={topRight}
            alt="background design element"
            objectFit="fill"
          ></Image>
        </div>
        <div
          className={
            inFrame === true
              ? "relative designedbottomLeftSvgContainer animateIII"
              : "relative designedbottomLeftSvgContainer"
          }
        >
          <Image
            src={bottomLeft}
            alt="background design element"
            objectFit="fill"
          ></Image>
        </div>
        <div
          className={
            inFrame === true
              ? "relative designedbottomRightSvgContainer animateIV"
              : "relative designedbottomRightSvgContainer"
          }
        >
          <Image
            src={bottomRight}
            alt="background design element"
            objectFit="fill"
          ></Image>
        </div>
        <div
          className={
            inFrame === true
              ? "relative designedbottomCenterSvgContainer animateV"
              : "relative designedbottomCenterSvgContainer"
          }
        >
          <Image
            src={bottomMiddle}
            alt="background design element"
            objectFit="fill"
          ></Image>
        </div>
      </div>

      <div
        className={
          inFrame === true
            ? "designedTags designedTagI animatetagI"
            : "designedTags designedTagI"
        }
      >
        Taxi drivers
      </div>
      <div
        className={
          inFrame === true
            ? "designedTags designedTagII animatetagII"
            : "designedTags designedTagII"
        }
      >
        Small businesses
      </div>
      <div
        className={
          inFrame === true
            ? "designedTags designedTagIII animatetagIII"
            : "designedTags designedTagIII"
        }
      >
        Entrepreneurs
      </div>
      <div
        className={
          inFrame === true
            ? "designedTags designedTagIV animatetagIV"
            : "designedTags designedTagIV"
        }
      >
        Services
      </div>
      <div
        className={
          inFrame === true
            ? "designedTags designedTagV animatetagV"
            : "designedTags designedTagV"
        }
      >
        Freelancers
      </div>
      <div
        className={
          inFrame === true
            ? "designedTags designedTagVI animatetagVI"
            : "designedTags designedTagVI"
        }
      >
        Trades people
      </div>
      <div
        className={
          inFrame === true
            ? "designedTags designedTagVII animatetagVII"
            : "designedTags designedTagVII"
        }
      >
        Retail
      </div>
      <h3 ref={myRef}>
        Designed for <br /> everyone
      </h3>
    </div>
  );
};

export default DesignedForEveryOne;
