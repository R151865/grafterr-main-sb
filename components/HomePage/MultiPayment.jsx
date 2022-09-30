import React from 'react'
import Image from 'next/image'
import {useState,useEffect,useRef} from 'react'

/* custom Imports */
import imgOne from '../../public/grafterrImage/MultipaymentCards/imgOne.svg'
import imgTwo from '../../public/grafterrImage/MultipaymentCards/imgTwo.svg'
import imgThree from '../../public/grafterrImage/MultipaymentCards/imgThree.svg'
import imgFour from '../../public/grafterrImage/MultipaymentCards/imgFour.svg'
// import imgOneMobile from '../public/grafterrImage/MultipaymentCards/imgOneMobile.svg'
// import imgTwoMobile from '../public/grafterrImage/MultipaymentCards/imgTwoMobile.svg'
// import imgThreeMobile from '../public/grafterrImage/MultipaymentCards/imgThreeMobile.svg'
// import imgFourMobile from '../public/grafterrImage/MultipaymentCards/imgFourMobile.svg'
// import backImage from '../public/grafterrImage/MultipaymentCards/squareBottom.svg'
import textIcon from '../../public/grafterrImage/MultipaymentCards/textIcon.svg'

const MultiPayment = (props) => {
  const [inFrame,setinFrame] = useState();
  const myRef = useRef();

  const screenWidth = props.screenWidth;
  

  useEffect(() => {
    const  observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
    // console.log('.log',entry)
      setinFrame(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, []);

  return (
    <div className='multiPaymentContainer flex flex-col justify-center sm:justify-end lg:justify-center items-center w-full' style={{position:'relative'}} id="multiPaymentSection">
        <h3 ref={myRef} className='multiPaymentTitle py-2 px-6 sm:py-4 sm:px-8 bg-black text-white relative'>
            Multiple ways to <br className='block sm:hidden' />get paid
            <div className='textIconContainer absolute -top-8 sm:-top-12 right-1 sm:-right-12 w-18 h-18 md:w-20 md:h-16'>
                <Image src={textIcon} alt ="icon" objectFit='cover' layout='fill' />
            </div>
        </h3>
        <p className='mt-5 multPaymentCaption'>
            Sell in person, in-store or remotely using GO!
        </p>
        {/* <div className='bottomImage'>
            <Image src={backImage} alt="background design shapes" layout="fill" objectFit='cover'/>
        </div> */}
        <div className="multiPaymentsAnimationContainer flex-col flex sm:flex-row justify-between items-center h-1/2">
            <div className="flex justify-between items-center">
                {/* <div  className="imageI"  className={inFrame === true ? 'imageI show' : 'imageI'}> */}
                    <div className={`multiPaymentsImageContainer relative ${inFrame=== true ? 'imageI show' : 'imageI'}`}>
                        <Image src={/* screenWidth < 600 ? imgOneMobile : */ imgOne } objectFit="contain" layout='fill' alt="Start accepting chip & pin card payments" />
                    </div>
                {/* </div> */}
                {/* <div className={inFrame===true? 'imageII show' : 'imageII'}> */}
                    <div className={`multiPaymentsImageContainer relative ${inFrame=== true ? 'imageII show' : 'imageII'}`}>
                        <Image src={/* screenWidth < 600 ? imgTwoMobile : */ imgTwo} objectFit="cover" layout='fill' alt="Start accepting contactless card & phone payments" />
                    </div>
                {/* </div> */}
            </div>
            <div className='flex justify-between items-center mt-0'>
                {/* <div className={inFrame===true? 'imageIII show' : 'imageIII'}> */}
                    <div className={`multiPaymentsImageContainer relative ${inFrame=== true ? 'imageIII show' : 'imageIII'}`}>
                        <Image src={/* screenWidth < 600 ? imgThreeMobile: */imgThree} objectFit="contain" layout='fill' alt="Send secure payment links via e-mail"/>
                    </div>
                {/* </div> */}
                {/* <div className={inFrame===true? 'imageIV show' : 'imageIV'}> */}
                    <div className={`multiPaymentsImageContainer relative ${inFrame=== true ? 'imageIV show' : 'imageIV'}`}>
                        <Image src={/* screenWidth < 600 ? imgFourMobile: */imgFour} objectFit="contain" layout='fill' alt="Send secure payment links via text message"/>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default MultiPayment