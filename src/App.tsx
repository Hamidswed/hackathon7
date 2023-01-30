/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './Components/header/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Filters from './pages/Filters';
import Dashboards from './pages/Dashboards';
import Users from './pages/Users';
import Applications from './pages/Applications';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>  
      <Route path='/' element={<Home/>}/> /* show only if user not sign up */
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/projects' element={<Projects/>}/>
        {/* <Route path='/projects/:id' element={}/> */}
        <Route path='/filters' element={<Filters/>}/>
        <Route path='/dashboards' element={<Dashboards/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/applications' element={<Applications/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
