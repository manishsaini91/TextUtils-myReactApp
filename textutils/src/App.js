
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
  
//   Route,
//   Routes,
  
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
          setAlert(null);
        },1500);
  }

      
         
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.background='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Navbar/> */}
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Textutils"/>
      <Alert alert={alert}/>
      <div className="container my-3" >
      {/* <Routes> */}
          {/* <Route exact path="/About" element= */}
             {/* {<About mode={mode} />}>   */}
          {/* </Route>  */}
          
          {/* <Route exact path="/" element={ */}
          <TextForm heading="Analyze Your Text Here" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
          
      {/* </Routes> */}
      </div>
    {/* </Router> */}
  
     
     
     
    </>
  );
}

export default App;
