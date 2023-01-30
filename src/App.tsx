import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Components/header/Header";
import Slide from "./Components/slide/Slide";
import Home from "./pages/Home";
import Issues from "./pages/Issues";
import Meetings from "./pages/Meetings";
import Projects from "./pages/Projects";
import Risks from "./pages/Risks";
import Tasks from "./pages/Tasks";
import Timesheet from "./pages/Timesheet";
import BoardPage from './pages/BoardPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-page">
        <Slide />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path='/projects/:id' element={}/> */}
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/timesheet" element={<Timesheet />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/risks" element={<Risks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
