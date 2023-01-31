import React from 'react'
import { Link } from "react-router-dom";

import "./header.css"

const Header = () => {
  return (
    <>
    <nav className="navigation">
        <Link to="" className="nav-link">
            Home page
        </Link>
        
        <Link to="projects" className="nav-link">
            Projects page
        </Link>
       
        <Link to="tasks" className="nav-link">
            Tasks page
        </Link>
        
        <Link to="meetings" className="nav-link">
            Meetings page
        </Link>

        <Link to="timesheet" className="nav-link">
            Timesheet page
        </Link>

        <Link to="issues" className="nav-link">
        Issues page
        </Link>

        <Link to="risks" className="nav-link">
            Risks page
        </Link>

        <Link to="login" className="nav-link">
            Login
        </Link>
    </nav>
    </>
  )
}

export default Header