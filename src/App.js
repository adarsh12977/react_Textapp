import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="MyText" aboutText="About MyText" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div class="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>
      <About mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
