import React,{useState} from 'react'
import Header from './components/Header'
import Intro from './components/Intro' 
import Hi from './components/Hi' 
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import Feedback from './components/Feedback'
import './App.css'

const App = () => { 
  
  const[flag,setflag]=useState(0);


  return (
    <div> 
       {
         flag==0 && 
          
          <Hi flag={flag} setflag={setflag}/> 
}        
 {
          flag==1 &&
   
       <Intro flag={flag} setflag={setflag}/>
} 
{
  flag==2 &&
  <Intro1 flag={flag} setflag={setflag}/>
}

{
  flag==3 &&
  <Intro2  flag={flag}  setflag={setflag}/>
}

{
  flag==4 &&
  <Intro3  flag={flag}  setflag={setflag}/>
}
{
  flag==5 &&
  <Intro3  flag={flag}  setflag={setflag}/>
} 

{
  flag==6 &&
  <Feedback flag={flag}  setflag={setflag}/>
}

      
     
      
    </div>
  )
}

export default App
