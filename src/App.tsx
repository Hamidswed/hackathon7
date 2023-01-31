/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import Header from './Components/header/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Filters from './pages/Filters';
import Dashboards from './pages/Dashboards';
import Users from './pages/Users';
import Applications from './pages/Applications';
// import { AuthProvider } from './provider/AuthProvider';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPages';
import { initializeApp } from 'firebase/app'
import {config} from './config/config'
import './App.css';
import Slide from './Components/slide/Slide';
import Footer from './Components/footer/Footer';

initializeApp(config.firebaseConfig)

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-page">
        <Slide />
      <Routes>  
      <Route path='/' element={<Home/>}/> /* show only if user not sign up */
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path="/board" element={<BoardPage />} />
        <Route path='/projects' element={<Projects/>}/>
        {/* <Route path='/projects/:id' element={}/> */}
        <Route path='/filters' element={<Filters/>}/>
        <Route path='/dashboards' element={<Dashboards/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/applications' element={<Applications/>}/>
        {/* <Route path='/login' element={<AuthProvider/>}/> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>

    </div>
    <Footer/>
    </div>
  );
}

export default App;
