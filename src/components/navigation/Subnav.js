import React from "react";
import "./navbar.css";

const Subnav = () => {
  return (
    <nav className='nav nav-subbar'>
      <ul>
        <li>
          <a href='' className='text-orange'>
            About
          </a>
        </li>
        <li>
          <a href=''>Jobs</a>
        </li>
        <li>
          <a href=''>Apprenticeships</a>
        </li>
      </ul>
    </nav>
  );
};

export default Subnav;
