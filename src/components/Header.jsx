import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-3 py-3 bg-white">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10" />
        <h1 className="text-xl font-bold text-purple-500">HERO.IO</h1>
      </Link>

      <nav className="flex gap-6">
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
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Contribution
      </a>
    </header>
    );
};

export default Header;