import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Views/Home'
import Course from './Views/Course'
import FagervikHome from './Views/FagervikHome'
// import NccHome from './Views/NccHome'
import FagervikCourse from './Views/FagervikCourse';
import TestData from './Components/TestData'

function App() {
  console.log(TestData.Sticksjo)
  console.log(TestData.Fagervik)
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/sticksjo/course/:slug" element={<Course />} />
            <Route path="/fagervik" element={<FagervikHome />} />
              <Route path="/fagervik/course/:slug" element={<FagervikCourse />} />
            {/* <Route path="/ncc" element={<NccHome />} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
