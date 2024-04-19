import React,{useState} from 'react' 
import Header from './Header'
import stat1 from '../assets/stat1.png'
import stat2 from '../assets/stat2.png'
import stat3 from '../assets/stat3.png'
import stat4 from '../assets/stat4.png'
import stat5 from '../assets/stat5.png' 
import { LiaLessThanSolid } from "react-icons/lia";
import { list1 } from './Amazon'
import './style.css'


const Intro = ({flag,setflag}) => { 
    const[progress,setprogress]=useState(40);  
    const[check,setcheck]=useState(false);

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

    const backhandler =()=>{
      setflag(flag=>flag-1); 
    }
    const manageHandler =()=>{
      setcheck(true);
      window.scrollTo(0, document.body.scrollHeight);
    }
  return (
    <div className='h-screen'>
  <div className=' head relative flex flex-col md:flex-row md:items-center'>
  <LiaLessThanSolid className=" absolute mt-[42px]  ml-[180px]  cursor-pointer " id="res1" onClick={backhandler} />
  <Header handleClick={handleClick} progress={progress} setprogress={setprogress} /> 
 </div>  






  <div className="descripe text-center mt-10"> 
    <div className='mt-10'>
      <h1 className='font-bold text-3xl'>Which are you most interested in ? </h1> 
      <p className='mt-5 text-slate-500'>Choose just one. This will help us get you started (but won't limit your experience)</p>
    </div>
  </div>  
  <div className='grid grid-cols-1 gap-5 mb-10 font-medium mx-auto max-w-screen-md sm:w-full mt-[20px] p-[10px]'>
    {list1.map((item) => ( 
      <div className='w-full border border-slate-500 h-20 flex justify-start gap-5 items-center  transition duration-300 ease-in-out transform hover:border-amber-400 hover:scale-101 hover:shadow-md cursor-pointer rounded-lg' onClick={manageHandler}>
        {item.id === '2' && <img src={item.img} alt="" style={{ marginLeft: "15px", width: "40px", height: "30px" }}/>}
        {item.id !== '2' && <img src={item.img} alt="" style={{ marginLeft: "15px" }}/>}
        <p>{item.title}</p> 
      </div>
    ))}
  </div>
  <div className="flex items-center justify-center relative h-[100px]">
    <button className={`border rounded w-40 text-white ${!check ? 'bg-stone-200' : 'bg-black'} h-10 text-center`} onClick={handleClick} disabled={!check} style={{ marginTop: "2px" }}>
      Continue
    </button>
  </div>
</div>

  )
}

export default Intro
