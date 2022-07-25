
import { useState } from 'react';
import { Link } from 'react-router-dom'
import sections from '../data/sections.json'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function AppNav(props) {

  const [ navItems, setNavItems ] = useState(sections)

  const getNavItems = navItems.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <div className="nav-link active py-0 px-3">
          <Link to={`/sections/${item.value}`}>
            {item.label}
          </Link>
        </div>
      </li>
    )
  })

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a href="/#/" className="navbar-brand border border-white px-1 rounded">
          Code Platoon NEWS
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            { getNavItems }
          </ul>
          <InputGroup>
            <FormControl placeholder="Search by Title" onChange={(e) => props.handleSearch(e)}/>
          </InputGroup>
        </div>
      </div>
    </nav>
  )
}

export default AppNav;


// navItems = {navItems} 
// handleNavClick = {handleNavClick} 