import React,{useState,} from 'react' 
import {useRef} from 'react'
import Header from './Header' 
import check1 from '../assets/check1.png'
import check2 from '../assets/check2.png'
import check3 from '../assets/check3.png'
import check4 from '../assets/check5.png'
import check6 from '../assets/check6.png'
import check7 from '../assets/check7.png'
import {list} from './Amazon'

const Hi = ({flag,setflag}) => {  
    const[progress,setprogress]=useState(20); 
    const[check,setcheck]=useState(false); 
    const containerRef = useRef(null);

    const handleClick =()=>{
      setflag(flag=>flag+1); 
      if(progress<120)
      {
          setprogress(progress + 20);
      }   
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Add smooth scrolling behavior
      });
     
    } 

    const manageHandler =()=>{
      setcheck(true);
      window.scrollTo(0, document.body.scrollHeight);
    }
  return (
    <div className='h-screen'> 
    <div className='head'>
    <Header handleClick={handleClick} progress={progress} setprogress={setprogress}  />
    </div>
  
  <div className="descripe text-center mt-10">
    <div className='mt-10'>
      <h1 className='font-bold text-3xl'>Which describes you best ?</h1> 
      <p className='mt-5 text-slate-500 ml-[10px]'>This will help us personalize your experience.</p>
    </div>
  </div>  
  <div className='grid grid-cols-1 gap-5 mb-10 font-medium mx-auto max-w-screen-md sm:w-full mt-[50px] px-[10px] '>
    {list.map(item => (
      <div
        key={item.id}
        className='w-full p-x-[80px] ml-[-1px] border border-slate-500 h-20 flex justify-start items-center rounded-lg transition duration-300 ease-in-out transform hover:border-amber-400 hover:scale-101 hover:shadow-md cursor-pointer '
        onClick={manageHandler}
      >
        {
          item.id==2 &&
          <img src={item.img} alt="" className="ml-5" style={{ width: "50px", height: "50px" }} />

        }
        { item.id!=2 && 
           <img src={item.img} alt="" className="ml-5" style={{ width: "60px", height: "60px" }} />
        }
       
        <p className='ml-[20px]'>{item.title} <span className='text-slate-500'>{item.subtitle}</span></p>
      </div>
    ))}
  </div>
  <div className="text-center mt-[20px] h-[100px] ">
    <button className={`border rounded w-40 text-white ${!check ? 'bg-stone-200' : 'bg-black'} h-10 text-center `} onClick={handleClick} disabled={!check}>
      Continue
    </button>
  </div>
</div>

  
  )
}

export default Hi
