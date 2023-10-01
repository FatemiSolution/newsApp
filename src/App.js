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
        <Router basename="/newsApps">
          <Navbar setSearch={setSearch} toggleMode={toggleMode} Mode={mode}  />
          <LoadingBar 
            height= {3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
          
           <Route exact path="/newsApps" element={ <News setProgress ={setProgress} apiKey={apiKey}  key = "general" pageSize={ 15} country={"in"} category="general" search={search}  Mode={mode}  />}/>
           <Route exact path="/newsApps/general" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "home" pageSize={ 15} country={"in"} category="general" search={search}  Mode={mode}  />}/>
           <Route exact path="/newsApps/business" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "business" pageSize={15} country={"in"} category="business" search={search}  Mode={mode} />}/>
           <Route exact path="/newsApps/entertainment" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "entertainment" pageSize={15} country={"in"} category="entertainment" search={search}  Mode={mode} />}/>
           <Route exact path="/newsApps/health" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "health" pageSize={15} country={"in"} category="health" search={search}  Mode={mode} />}/>
           <Route exact path="/newsApps/science" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "science" pageSize={15} country={"in"} category="science" search={search}  Mode={mode} />}/>
           <Route exact path="/newsApps/sports" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "sports" pageSize={15} country={"in"} category="sports" search={search}  Mode={mode} />}/>
           <Route exact path="/newsApps/technology" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "technology" pageSize={15} country={"in"} category="technology" search={search}  Mode={mode} />}/>
           <Route exact path="/newsApps/sports" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "sports" pageSize={15} country={"in"} category="sports" search={search}  Mode={mode} />}/>
          </Routes>
        </Router>
      </div>
    );
  
}
export default App;
