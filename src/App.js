import "./App.css";

import React, { useState  } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App=()=> {
   const apiKey = process.env.REACT_APP_NEWS_API
   let dark = '#343a40'
    const [search, setSearch] = useState('')
    const [progress, setProgress] = useState(0)
    const [mode, setMode] = useState('light')
    console.log(search)
    const removeClass = ()=>{
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-light')
    }
const toggleMode=()=>{
if( mode ==='dark'){
  removeClass();
  setMode('light')
document.body.style.backgroundColor ='white'
// document.body.classList.add('bg-light')
}else{

  setMode('dark')
  document.body.style.backgroundColor =  dark 
  // document.body.classList.add('bg-dark')

}
}
    return (
      <div>
        <Router >
          <Navbar setSearch={setSearch} toggleMode={toggleMode} Mode={mode}  />
          <LoadingBar 
            height= {3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
          
           <Route exact path="/" element={ <News setProgress ={setProgress} apiKey={apiKey}  key = "general" pageSize={ 15} country={"in"} category="general" search={search}  Mode={mode}  />}/>
           <Route exact path="/general" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "home" pageSize={ 15} country={"in"} category="general" search={search}  Mode={mode}  />}/>
           <Route exact path="/business" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "business" pageSize={15} country={"in"} category="business" search={search}  Mode={mode} />}/>
           <Route exact path="/entertainment" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "entertainment" pageSize={15} country={"in"} category="entertainment" search={search}  Mode={mode} />}/>
           <Route exact path="/health" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "health" pageSize={15} country={"in"} category="health" search={search}  Mode={mode} />}/>
           <Route exact path="/science" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "science" pageSize={15} country={"in"} category="science" search={search}  Mode={mode} />}/>
           <Route exact path="/sports" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "sports" pageSize={15} country={"in"} category="sports" search={search}  Mode={mode} />}/>
           <Route exact path="/technology" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "technology" pageSize={15} country={"in"} category="technology" search={search}  Mode={mode} />}/>
           <Route exact path="/sports" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "sports" pageSize={15} country={"in"} category="sports" search={search}  Mode={mode} />}/>
          </Routes>
        </Router>
      </div>
    );
  
}
export default App;
