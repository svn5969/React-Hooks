import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink class="nav-link" to="/">Home</NavLink>
            </li>

            <li class="nav-item active">
              <NavLink class="nav-link" to="/about">About </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink class="nav-link" to="/index">Index </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink class="nav-link" to="/login">Login </NavLink>
            </li>
        
          </ul>
          
        </div>
      </nav>
        </>
      
            )
        }


            export default Navbar;