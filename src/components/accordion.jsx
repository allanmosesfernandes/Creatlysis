"use client"
import React, { useState } from 'react'
import accordionQuestions from "../utils/accordionQuestions";
import { FaPlus, FaMinus } from "react-icons/fa6";
import BlackBtn from './buttons/blackBtn';

const Accordion = () => {
    const [active, setisActive] = useState(0);
    const [showMore, setShowMore] = useState(false);

  return (
    <>
        <div className='flex flex-col py-6'>
            {
                showMore ?             
                    accordionQuestions.map((question, index) => {
                            return (
                                <div className='flex flex-col border-b border-white py-6' key={index}>
                                    <div className='flex justify-between'>
                                        <h2 className='text-white text-xl font-bold'>
                                            {question["title"]}
                                        </h2>
                                        <button className='btn bg-createYellow w-[30px] h-[30px] text-black rounded-full' onClick={() => setisActive(question["index"] )}>
                                            {
                                                active === question["index"] ?  <FaMinus className='mx-auto'/> :  <FaPlus className='mx-auto'/> 
                                            }
                                        </button>        
                                    </div>
                                    <p className={active === question["index"] ? "text-white opacity-1 transition duration-200 ease-in" : "opacity-0"}>
                                        {question["subtitle"]}
                                    </p>
                                </div>
                            )
                    })
                    :                    
                    accordionQuestions.map((question, index) => {
                    if (index < 4) {
                        return (
                            <div className='flex flex-col border-b border-white py-6' key={index}>
                                <div className='flex justify-between'>
                                    <h2 className='text-white text-xl font-bold'>
                                        {question["title"]}
                                    </h2>
                                    <button className='btn bg-createYellow w-[30px] h-[30px] text-black rounded-full' onClick={() => setisActive(question["index"])}>
                                        {
                                            active === question["index"] ?  <FaMinus className='mx-auto'/> :  <FaPlus className='mx-auto'/> 
                                        }
                                    </button>        
                                </div>
                                <p className={active === question["index"] ? "text-white opacity-1 transition duration-200 ease-in" : "opacity-0"}>
                                    {question["subtitle"]}
                                </p>
                            </div>
                        )
                    }
                })
            }
            <div className='w-full flex flex-col items-center'>
                <button
                className='text-white border-white border-2 w-fit my-12'
                onClick={() => setShowMore(!showMore)}>
                    {showMore ? <BlackBtn text={"Show Less"} /> : <BlackBtn text={"Show More"} />}
                </button>
                {
                    showMore ? <p className='text-white'>Have more queries? Reach us on hello@creatalysis.com</p> : ""
                }
            </div>
        </div>
    </>
  )
}

export default Accordion