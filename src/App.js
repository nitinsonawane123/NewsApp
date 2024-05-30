import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  const pageSize = 6;
  // apiKey = process.env.REACT_APP_NEWS_API
  const apiKey = "eeefdb8907484a7fbe2ec54774a63b10"
  
  const [progress, setProgress] = useState(0);

    return (
      <Router>
      <div>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>  
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="general" category="general"/>} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="business" category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="entertainment" category="entertainment"/>} />
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="general" category="general"/>} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="health" category="health"/>} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="science" category="science"/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="sports" category="sports"/>} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" key="technology" category="technology"/>} />
        </Routes>
      </div>
       </Router>
    )
}

export default App;
