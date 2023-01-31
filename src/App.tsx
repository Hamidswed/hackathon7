import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './Components/header/Header';
import Home from './pages/Home';
import Issues from './pages/Issues';
import Meetings from './pages/Meetings';
import Projects from './pages/Projects';
import Risks from './pages/Risks';
import Tasks from './pages/Tasks';
import Timesheet from './pages/Timesheet';
// import { AuthProvider } from './provider/AuthProvider';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPages';
import { initializeApp } from 'firebase/app'
import {config} from './config/config'
import AuthRoute from './Components/auth/AuthRoute';

initializeApp(config.firebaseConfig)

export interface IApplicationProps {}

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
        {/* <Route path='/login' element={<AuthProvider/>}/> */}
        <Route path='/login' element={<AuthRoute><LoginPage /></AuthRoute>} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
