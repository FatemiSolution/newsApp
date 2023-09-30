import "./App.css";

import React, { useState  } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App=()=> {
   const apiKey = process.env.REACT_APP_NEWS_API
    const [search, setSearch] = useState('')
    const [progress, setProgress] = useState(0)

    console.log(search)

    return (
      <div>
        <Router>
          <Navbar setSearch={setSearch}  />
          <LoadingBar
            height= {3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
          
           <Route exact path="/" element={ <News setProgress ={setProgress} apiKey={apiKey}  key = "general" pageSize={ 15} country={"in"} category="general" search={search} />}/>
           <Route exact path="/general" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "home" pageSize={ 15} country={"in"} category="general" search={search} />}/>
           <Route exact path="/business" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "business" pageSize={15} country={"in"} category="business" search={search}/>}/>
           <Route exact path="/entertainment" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "entertainment" pageSize={15} country={"in"} category="entertainment" search={search}/>}/>
           <Route exact path="/health" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "health" pageSize={15} country={"in"} category="health" search={search}/>}/>
           <Route exact path="/science" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "science" pageSize={15} country={"in"} category="science" search={search}/>}/>
           <Route exact path="/sports" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "sports" pageSize={15} country={"in"} category="sports" search={search}/>}/>
           <Route exact path="/technology" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "technology" pageSize={15} country={"in"} category="technology" search={search}/>}/>
           <Route exact path="/sports" element={ <News setProgress ={setProgress} apiKey={apiKey} key = "sports" pageSize={15} country={"in"} category="sports" search={search}/>}/>
          </Routes>
        </Router>
      </div>
    );
  
}
export default App;
