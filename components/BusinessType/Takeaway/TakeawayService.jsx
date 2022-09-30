import React, { useState } from "react";
import Image from "next/image.js";

/* custom Import */
import AppScreen from "./TakeawayServiceReport/AppScreen.jsx";
import AppFeatures from "./TakeawayServiceReport/AppFeatures";
import takeawaysubtract3 from "../../../public/grafterrImage/BusinessType/TakeAwaysImages/takeawaysubtract3.png";

const TakeawayService = (props) => {
  const [value, setValue] = useState();

  return (
    <div
      className="justInOneAppContainer flex flex-col justify-center items-center h-screen relative"
      id="posFeaturesSection"
    >
      <div className="imageContainer absolute right-0 hidden sm:block top-0">
        <Image
          src={takeawaysubtract3}
          alt="takeawaysubtract3"
          width={550}
          height={450}
        />
      </div>
      <div className="justInoneAppSubContainer flex flex-col-reverse sm:flex-row justify-center items-center md:h-full lg:h-full xl:h-4/5 w-full">
        <div className="justInOneLeft flex justify-center items-center h-4/5">
          <AppFeatures setValue={setValue} />
        </div>
        <div className="justInOneRight flex justify-center items-center h-full">
          <AppScreen value={value} screenWidth={props.screenWidth} />
        </div>
      </div>
    </div>
  );
};

export default TakeawayService;
