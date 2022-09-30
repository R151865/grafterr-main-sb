import React from 'react'
import {useState,useEffect,useRef} from 'react'
import Image from 'next/image'
// import dynamic from 'next/dynamic'

/* Customer imports */
import FAQCard from './FAQcomponent/FAQCard'
import {data} from '../../FAQData/FAQdata'

/* const FAQCard = dynamic(() => import('./FAQcomponent/FAQCard'), {
  suspense: true,
  ssr: false 
})
 */

import SearchIcon from '../../public/grafterrImage/FAQImages/SearchIcon.svg'
/* import imgOne from '../public/grafterrImage/FAQImages/imgOne.svg'
import imgTwo from '../public/grafterrImage/FAQImages/imgTwo.svg'
import imgThree from '../public/grafterrImage/FAQImages/imgThree.svg'
import imgFour from '../public/grafterrImage/FAQImages/imgFour.svg'
import imgFive from '../public/grafterrImage/FAQImages/imgFive.svg' */



import green from '../../public/grafterrImage/FAQImages/green.png'
import red from '../../public/grafterrImage/FAQImages/red.png'
import purple from '../../public/grafterrImage/FAQImages/purple.png'
import yellow from '../../public/grafterrImage/FAQImages/yello.png'
import blue from '../../public/grafterrImage/FAQImages/blue.png'


const FAQ = () => {
  const [query,setQuery] =useState('');
  const [inFrame,setinFrame] = useState();
  const myRef = useRef();

  useEffect(() => {
    const  observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setinFrame(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, []);

  return (
    <div className="FAQcontainer flex flex-col justify-center items-center">
      <div className="FAQTitleContainer">
        <h3 className="FAQTitle">
          Frequently asked questions
        </h3>
      </div>
      <div ref={myRef} className="FAQanimationBlock">
        <div className="cell">
            <div className= {inFrame==true ? 'circle bounce1' : 'circle'}>
              <div className="imgContainer relative w-8 h-8 md:w-16 md:h-16">
                <Image src={green} alt="image icon" objectFit='contain' layout='fill'></Image>
              </div>
            </div>
        </div>
        <div className="cell">
            <div className= {inFrame==true ? 'circle bounce2' : 'circle'}>
               <div className="imgContainer relative w-10 h-8 md:w-20 md:h-16">
                <Image src={red} alt="image icon" objectFit='contain' layout='fill'></Image>
              </div>
            </div>
        </div>
        <div className="cell">
            <div className= {inFrame==true ? 'circle bounce3' : 'circle'}>
              <div className="imgContainer relative w-12 h-8 md:w-32 md:h-20">
                <Image src={purple} alt="image icon" objectFit='contain' layout='fill'></Image>
              </div>
            </div>
        </div>
        <div className="cell">
            <div className= {inFrame==true ? 'circle bounce4' : 'circle'}>
              <div className="imgContainer relative w-8 h-8 md:w-16 md:h-16">
                <Image src={yellow} alt="image icon" objectFit='contain' layout='fill'></Image>
              </div>
            </div>
        </div>
        <div className="cell">
            <div className= {inFrame==true ? ' bounce5circle' : 'circle'}>
              <div className="imgContainer relative w-8 h-8 md:w-16 md:h-16">
                <Image src={blue} alt="image icon" objectFit='cover' layout='fill'></Image>
              </div>
            </div>
        </div>
      </div>
      <div className='FAQsearchInputContainer' style={{position:'relative'}}> 
        <div className="imageContainer absolute top-1/2 left-3 -translate-y-1/2" style={{width:'20px',height:'20px'}}>
          <Image src={SearchIcon} alt="search icon" object-fill="container" layout="fill"/>
        </div>
        <input className="searchQuestions" type="text" placeholder='search...' onChange={e=> setQuery(e.target.value)} />
      </div>

      <div className="lg:w-3/4 xl:w-1/2 FAQAccodianContainer">
        {data.filter(data => data.question.toLowerCase().includes(query.toLowerCase())).map((item,index)=>{
          return <FAQCard dataPassed = {item} key={index} /> 
        })}
      </div>
    </div>
  )
}

export default FAQ