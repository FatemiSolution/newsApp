import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
 state = {
  search : ""
 }
  setSearch = (search)=>{
    this.setState({search: search})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar setSearch={this.setSearch}  />
          <Routes>
          
           <Route exact path="/" element={ <News key = "general" pageSize={ 15} country={"us"} category="general" search={this.state.search} />}/>
           <Route exact path="/general" element={ <News key = "home" pageSize={ 15} country={"us"} category="general" search={this.state.search} />}/>
           <Route exact path="/business" element={ <News key = "business" pageSize={15} country={"us"} category="business" search={this.state.search}/>}/>
           <Route exact path="/entertainment" element={ <News key = "entertainment" pageSize={15} country={"us"} category="entertainment" search={this.state.search}/>}/>
           <Route exact path="/health" element={ <News key = "health" pageSize={15} country={"us"} category="health" search={this.state.search}/>}/>
           <Route exact path="/science" element={ <News key = "science" pageSize={15} country={"us"} category="science" search={this.state.search}/>}/>
           <Route exact path="/sports" element={ <News key = "sports" pageSize={15} country={"us"} category="sports" search={this.state.search}/>}/>
           <Route exact path="/technology" element={ <News key = "technology" pageSize={15} country={"us"} category="technology" search={this.state.search}/>}/>
           <Route exact path="/sports" element={ <News key = "sports" pageSize={15} country={"us"} category="sports" search={this.state.search}/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
