import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

/* Import Images */
import arrowUp from '../../../public/grafterrImage/arrowUp.svg'
import arrowDown from '../../../public/grafterrImage/arrowDown.svg'

const FAQCard = (props) => {
  let dataRecieved = props.dataPassed;
  const [clicked,setClicked] = useState(false);

  const toggleAccordian = (index)=>{
    if(clicked === index) {
        setClicked(false)
    }
    else {
        setClicked(index);
    }
  }

  return (
    <div className='FAQCardContainer border-2 py-1 px-3 lg:py-3 lg:px-4 my-4' style={{borderRadius:'20px'}}>
        <div className="accordianQuestionContainer flex justify-between" onClick={()=>toggleAccordian(dataRecieved.id)} key={dataRecieved.id}>
            <h3 className='accordianQuestion py-2 text-xl font-normal'>
                {dataRecieved.question}
            </h3>
            <Image src={clicked === dataRecieved.id ? arrowUp : arrowDown} alt="arrow"/>
        </div>
        {clicked === dataRecieved.id ? (
            <div className="accordianAnswerContainer pt-1 pb-2 accordianAnswer text-sm font-normal">
                {/* <p className="accordianAnswer text-sm font-normal"> */}
                    <p>{dataRecieved.answer}</p> 
                {/* </p> */}
            </div>
        ) : false}

    </div>
  )
}

export default FAQCard