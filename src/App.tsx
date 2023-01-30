import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Issues from './pages/Issues';
import Meetings from './pages/Meetings';
import Projects from './pages/Projects';
import Risks from './pages/Risks';
import Tasks from './pages/Tasks';
import Timesheet from './pages/Timesheet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        {/* <Route path='/projects/:id' element={}/> */}
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/meetings' element={<Meetings/>}/>
        <Route path='/timesheet' element={<Timesheet/>}/>
        <Route path='/issues' element={<Issues/>}/>
        <Route path='/risks' element={<Risks/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
