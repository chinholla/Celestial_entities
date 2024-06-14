import React from 'react';
import '../App.css';
import { useState } from 'react';


function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }
  return (
    <div>
        <div className="navBar">
        
      
            <h1>Celestial Entities</h1>
            <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn">Explore</button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <a href="/obs">Obs Tech</a>
                <a href="/gal">Galaxy</a>
                <a href="/star">Star</a>
                <a href="/planet">Planet</a>
                <a href="/moon">Moon</a>
              </div>
            )}
          </div>
        </li>
        <li><a href="/login">Logout</a></li>
        
      </ul>
    </nav>
        </div>
    </div>
  )
}

export default Navbar
