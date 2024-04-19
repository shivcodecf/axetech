import React,{useState} from 'react' 
import ring from '../assets/ring.png' 
import popular from '../assets/popular.png' 
import popular2 from '../assets/popular2.png'

const Feedback = ({flag,setflag}) => { 

   
  return (
    <div> 
        <div className='flex justify-center align-center direction-column'>
        <img src={ring} alt="" className='mt-[200px] w-[100px] h-[100px]' />
       
        </div> 
        <p className='text-center text-2xl font-bold mt-10'>Finding learning path recommendations  for your based on</p>
        <p className='text-center text-2xl font-bold '>  your responses</p> 


        <div className='mt-72 text-center'>
  <p className='font-bold text-3xl md:text-4xl'>Learning paths based on your answers</p> 
  <p className='mt-6 text-slate-600'>Choose one to get started. You can switch anytime.</p>  
  <div className='flex flex-col md:flex-row gap-8 justify-center items-center mt-8'>
    <img src={popular} alt="" className='w-full md:w-auto md:max-w-xs' /> 
    <img src={popular2} alt="" className='w-full md:w-auto md:max-w-xs mt-8 md:mt-0' />
  </div>
</div>

       
      
    </div> 

    
  )
}

export default Feedback
