import React,{useState} from 'react' 
import Header from './Header'
import img2 from '../assets/pully.png' 
import { LiaLessThanSolid } from "react-icons/lia"; 
import './style.css'


const Intro1 = ({flag,setflag}) => { 
    const[progress,setprogress]=useState(60);  
    const handleClick =()=>{
        setflag(flag=>flag+1); 
        if(progress<120)
        {
            setprogress(progress + 20);
        }  
       
      }

      const backHandler = ()=>{
        setflag(flag=>flag-1); 
      }
  return (
    <div> 
   <div className='relative flex flex-col md:flex-row md:items-center head'>
    
  <LiaLessThanSolid   className=' absolute  mt-[40px] ml-[180px]  cursor-pointer'   id="res2" onClick={backHandler}/>
  <Header handleClick={handleClick} progress={progress} setprogress={setprogress} /> 
</div>




<div className='flex flex-col mx-4 justify-center items-center md:flex-row md:mr-[80px] gap-10 mt-[80px]'>
  <div className="mx-auto mt-10 md:mt-40 md:ml-520px">
    <img src={img2} alt="" className="w-full md:max-w-screen-md md:max-h-[480px]" style={{ width: "100%" }} />  
  </div>
  <div className="mt-10 md:mt-250px md:ml-280px md:mr-[70px]  max-w-[800px] md:w-full">
    <p className="text-5xl font-medium mb-5">You're in the right place</p>  
    <div className="w-full md:w-700px">
      <p className="text-2xl font-normal line-clamp-3">
        Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
      </p>
    </div>
  </div>
</div>

   <div className=' flex align-center justify-center mt-[20px] ml-[118px] h-[100px]'>
  <button className='border border-sky-500 rounded w-40 text-white bg-black ml-[-250px]  h-10 mb-[140px]' onClick={handleClick}>Continue</button>
  </div>
  </div>
  )
}

export default Intro1
