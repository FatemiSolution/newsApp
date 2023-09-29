import "./App.css";

import React, { Component  } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
 state = {
  search : '',
  progress: 0,
  clicked: false,
 }
 setProgress=(progress)=>{
  this.setState({progress: progress})
 }

  setSearch = (search)=>{
    this.setState({search: search})
  }
  render() {
    console.log(this.state.search)
    console.log(this.state.clicked)
    return (
      <div>
        <Router>
          <Navbar setSearch={this.setSearch}  />
          <LoadingBar
            height= {3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
          
           <Route exact path="/" element={ <News setProgress ={this.setProgress} key = "general" pageSize={ 15} country={"us"} category="general" search={this.state.search} />}/>
           <Route exact path="/general" element={ <News setProgress ={this.setProgress}key = "home" pageSize={ 15} country={"us"} category="general" search={this.state.search} />}/>
           <Route exact path="/business" element={ <News setProgress ={this.setProgress}key = "business" pageSize={15} country={"us"} category="business" search={this.state.search}/>}/>
           <Route exact path="/entertainment" element={ <News setProgress ={this.setProgress}key = "entertainment" pageSize={15} country={"us"} category="entertainment" search={this.state.search}/>}/>
           <Route exact path="/health" element={ <News setProgress ={this.setProgress}key = "health" pageSize={15} country={"us"} category="health" search={this.state.search}/>}/>
           <Route exact path="/science" element={ <News setProgress ={this.setProgress}key = "science" pageSize={15} country={"us"} category="science" search={this.state.search}/>}/>
           <Route exact path="/sports" element={ <News setProgress ={this.setProgress}key = "sports" pageSize={15} country={"us"} category="sports" search={this.state.search}/>}/>
           <Route exact path="/technology" element={ <News setProgress ={this.setProgress}key = "technology" pageSize={15} country={"us"} category="technology" search={this.state.search}/>}/>
           <Route exact path="/sports" element={ <News setProgress ={this.setProgress}key = "sports" pageSize={15} country={"us"} category="sports" search={this.state.search}/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
