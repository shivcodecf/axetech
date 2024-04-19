import React, { useEffect, useState } from 'react'; 
import Hi from './Hi';

const Header = ({flag,setflag,handleClick,progress,setprogress}) => {
    
    

    
    const getcolor=()=>{
      
          return "rgb(20 184 166)"
      
    }

  return (
    <div className="ml-4 md:ml-40"> {/* Adjust the margin-left as needed for different screen sizes */}
    {/* <h1 className="text-3xl font-bold underline text-blue-500 mt-10 ml-20">
    Hello !
  </h1> */}
    <div className="w-full md:w-[70rem] h-1.5 bg-zinc-300 mt-10 text-center rounded-md mx-4 md:mx-10"> {/* Adjust the margin and width as needed */}
      <div className='h-full bg-green-500 transition-width duration-500 ease-out rounded-md' style={{ width: `${progress}%`, backgroundColor: getcolor() }}>
      </div>
    </div>
    {/* <div>
      {progress} %
     </div> */}
    {/* <button className='bg-slate-100 my-40'  >Continue</button> */} 

</div>
      
  );
}

export default Header;
