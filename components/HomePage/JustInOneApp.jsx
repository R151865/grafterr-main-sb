import React, { useState } from 'react'
import Image from 'next/image.js'

/* custom Import */
import AppScreen from './JustInOneApp/AppScreen.jsx'
import AppFeatures from './JustInOneApp/AppFeatures'
import topLeft from '../../public/grafterrImage/justOneApp/topLeft.svg'
import topRight from '../../public/grafterrImage/justOneApp/topRight.svg'
import bottomLeft from '../../public/grafterrImage/justOneApp/bottomLeft.svg'
import bottomCenter from '../../public/grafterrImage/justOneApp/bottomCenter.svg'

const JustInOneApp = (props) => {
  /* Extracting active accordian value from child */
  const [value,setValue] = useState();
  /* value from accordian recieved. Pass it to image preview */
  // console.log(value)


  return (
    <div className='justInOneAppContainer flex flex-col justify-center items-center h-screen relative' id="posFeaturesSection">
      <div className="imageContainer absolute left-12 top-12 hidden sm:block">
        <Image src={topLeft} alt="icon" />
      </div>
      <div className="imageContainer absolute right-0 top-10 hidden sm:block">
        <Image src={topRight} alt="icon" />
      </div>
      <div className="imageContainer absolute md:left-14 lg:left-6 md:bottom-8 lg:bottom-0 hidden sm:block">
        <Image src={bottomLeft} alt="icon" />
      </div>
      <div className="justInOneInAppbottomCenter imageContainer absolute left-2/4 -bottom-12 hidden sm:bottom-2 sm:block">
        <Image src={bottomCenter} alt="icon" />
      </div>
      <h3 className='hidden sm:block'>
        All the selling tools you need <br/> in one simple app
      </h3>
      <h3 className='block sm:hidden px-4'>
        Everything you need, in one App
      </h3>
        <div className='justInoneAppSubContainer flex flex-col-reverse sm:flex-row justify-center items-center md:h-full lg:h-full xl:h-4/5 w-full'>
            <div className="justInOneLeft flex justify-center items-center h-4/5">
                <AppFeatures setValue={setValue} />
            </div>
            <div className="justInOneRight flex justify-center items-center h-full">
                <AppScreen value={value} screenWidth = {props.screenWidth} />
            </div>

        </div>
    </div>
  )
}

export default JustInOneApp