import React,{useState} from 'react'
import Header from './Header'; 
import formula1 from '../assets/formula1.png'
import formula2 from '../assets/formula2.png'
import formula3 from '../assets/formula3.png'
import formula4 from '../assets/formula4.png'
import { LiaLessThanSolid } from "react-icons/lia";
import { list2 } from './Amazon';

const Intro2 = ({flag,setflag}) => { 
    const[progress,setprogress]=useState(80);   
    const[check,setcheck]=useState(false);
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
      const handleCheck =()=>{
        setcheck(true); 
        window.scrollTo(0, document.body.scrollHeight);


      }
  return (
    <div>  

       <div className='relative flex flex-col md:flex-row md:items-center head'>
  <LiaLessThanSolid className='res2  ml-[180px] mt-[42px] absolute  cursor-pointer' id="res3" onClick={backHandler}/>
  <Header handleClick={handleClick} progress={progress} setprogress={setprogress} /> 
</div>

<div className='text-center'>
  <p className='text-5xl mt-20'>What is your match comfort level?</p>  
  <p className='mt-10 font-normal text-2xl'>Choose the highest level you feel confident in - you can always adjust later.</p>
</div> 

<div className='flex flex-wrap justify-center gap-5 mt-20 cursor-pointer p-[20px]'>
  {list2.map((item, id) => (
    <div key={id} className='w-full md:w-[320px] h-[240px] p-x-[42px] border border-stone-400 rounded-md text-center hover:shadow-md hover:border-lime-300 hover:border-[2px] cursor-pointer' onClick={handleCheck}>
      {item.id == 2 ? 
        <>
        <img src={item.img} alt="" style={{ height: "50px", width: "100px", marginLeft: "auto", marginRight: "auto", marginTop: "25px" }} /> 
        <p className='text-2xl font-semibold mt-[68px]'>{item.title1}</p> 
        </>
        : 
        <>
        <img src={item.img} alt="" style={{ height: "80px", width: "150px", marginLeft: "auto", marginRight: "auto",marginTop: "25px" }} /> 
        <p className='text-2xl font-semibold mt-10'>{item.title1}</p> 
        </>
      }
     
      <p className='text-2xl text-slate-500 mt-2'>{item.title2}</p>
    </div> 
  ))}
</div>

        <div className="flex items-center justify-center relative mb-[-10px] ">
  <button className={`border  rounded w-40 text-white ${!check ? 'bg-stone-200' : 'bg-black'} h-10 bottom-10 text-center mb-38`} onClick={handleClick}
    disabled={!check} // Disable the button if check is false 
    style={{ marginTop: "30px" }} // Adjust the position from the bottom
  >
    Continue
  </button>
</div>
    </div>
  )
}

export default Intro2
