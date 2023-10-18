import React from 'react'
import "../styles/navbar.css";
// import { Link } from 'react-router-dom';

const NavBar = ({ navigateHome, navigateCard }) => {
  return (
    <div className="nav_container">
      <div className="nav_logo_container">
        {/* <Link to="/" style={{ textDecoration: 'none', color: 'black'}}> */}
            <h1 className="logo" onClick={navigateHome}>Profile Card</h1>
        {/* </Link> */}
      </div>
      <div className="nav_menu_container">
        <ul className="nav_menu">
            {/* <Link to="/" style={{ textDecoration: 'none', color: 'black'}}> */}
                <li className="nav_item" onClick={navigateHome}>Home</li>
            {/* </Link> */}
            {/* <Link to="card" style={{ textDecoration: 'none', color: 'black'}}> */}
                <li className="nav_item" onClick={navigateCard}>Card</li>
            {/* </Link> */}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
