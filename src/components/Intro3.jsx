import React,{useState} from 'react'
import Header from './Header' 
import cartoon from '../assets/cartoon.png'
import star from '../assets/star.png'
import { LiaLessThanSolid } from "react-icons/lia";
import './style.css'

const Intro3 = ({flag,setflag}) => { 

    // const[progress,setprogress]=useState(100);  
    const handleClick =()=>{
        setflag(flag=>flag+2); 

        // if(progress<120)
        // {
        //     setprogress(progress + 20);
        // }  
       
      }

      const backHandler =()=>{
        setflag(flag=>flag-1); 
      }
  return (
    <div> 
        <div className='relative flex flex-col md:flex-row md:items-center head'>
  <LiaLessThanSolid className='absolute  mt-[42px] ml-[180px]  cursor-pointer' id="res4" onClick={backHandler} />
  <Header handleClick={handleClick} className='md:mr-11' /> 
</div>


     
<div className='flex flex-col items-center justify-center gap-1 md:flex-row mt-10 md:mt-40 md:pl-[150px] md:mr-[180px]'>
  <div className='mx-auto md:mx-0 md:w-full md:max-w-screen-md md:mr-[120px]'>
    <img src={cartoon} alt="" className='w-full h-auto mr-[50px]' style={{maxHeight:"370px",maxWidth:"440px"}} />  
  </div>

  <div className='text-center md:text-left md:w-full md:max-w-md lg:max-w-none'>
    <p className='text-4xl md:text-6xl'>You're on your way!</p>
    <img src={star} alt="" className='w-64 h-auto md:w-90 md:h-auto mt-4 mx-auto md:mr-[360px]' /> 
    <p className='text-lg md:text-2xl font-semibold max-w-md md:max-w-none mt-4'>
      "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand.
      I now feel confident approaching both technical job interviews and real-world problem-solving situations."
    </p>
    <p className='font-bold text-xl md:text-3xl mt-4'>- Jacob S</p>
  </div> 
</div>

<div className="flex justify-center mt-[98px] ml-[50px] h-[100px]">
  <button className='border border-sky-500 rounded w-40 text-white bg-black h-10' onClick={handleClick}>Continue</button>
</div> 
</div>

  )
}

export default Intro3
