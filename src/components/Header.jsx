import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-3 py-3 bg-white">
      <Link to="/" className="flex flex-col md:flex-row lg:flex-row items-center gap-2">
        <img src={logo} alt="logo" className="w-10" />
        <h1 className="text-xl font-bold text-purple-500">HERO.IO</h1>
      </Link>

      <nav className="flex flex-col md:flex-row lg:flex row md:gap-6 lg:gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Apps
        </NavLink>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-700"
          }
        >
          Installation
        </NavLink>
      </nav>

      <a
        href="https://github.com/ISA-RUHULLA"
        target="_blank"
        className="bg-blue-500 text-white md:px-4 py-2 rounded-lg w-24 md:w-auto hover:bg-blue-600"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" className='md:mr-3'/>
        Contribution
      </a>
    </header>
    );
};

export default Header;