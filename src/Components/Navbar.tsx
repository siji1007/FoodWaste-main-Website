// Navbar.tsx

import React from 'react';

function Navbar() {
  return (
    <nav className='nav'>
        <div className="site-logo">
        <a href="/" className="logo-link">FoodWaste</a>
      </div>

      <ul className="navigation">
        <li className="link"><a href="/Home">Home</a></li>
        <li className="link"><a href="/About">About us</a></li>
        <li className="link"><a href="/Contact">Contact</a></li>
      </ul>

   
    </nav>
  );
}
export default Navbar;
