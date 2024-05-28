import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <Router>
      <div>
      <NavBar/>
        <Routes>  
        {/* <News pageSize={this.pageSize} country="in" category="sports"/> */}
        <Route exact path="/" element={<News pageSize={this.pageSize} country="in" key="general" category="general"/>} />
        <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" key="business" category="business"/>} />
        <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" key="entertainment" category="entertainment"/>} />
        <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" key="general" category="general"/>} />
        <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" key="health" category="health"/>} />
        <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" key="science" category="science"/>} />
        <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" key="sports" category="sports"/>} />
        <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" key="technology" category="technology"/>} />
        </Routes>
      </div>
       </Router>
    )
  }
}

