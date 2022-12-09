import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='nav nav__main'>
      <ul>
        <li>
          <a href=''>logo</a>
        </li>
        <li>
          <a href=''>live</a>
        </li>
        <li>
          <a href=''>push</a>
        </li>
        <li>
          <a href=''>note</a>
        </li>
        <li>
          <a href=''>link</a>
        </li>
        <li>
          <a href=''>shop</a>
        </li>
        <li>
          <a href=''>packs</a>
        </li>
        <li>
          <a href=''>help</a>
        </li>
        <li className='flex-grow'>
          <a href='' className='text-orange'>
            more +
          </a>
        </li>
        <li>
          <a href='' className='text-blue'>
            Try Live for free
          </a>
        </li>
        <li>
          <a href=''>Log in or register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
