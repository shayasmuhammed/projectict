import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const linkStyle = (path) =>
    ` capitalize px-4 py-2 rounded-md transition ${
      location.pathname === path
        ? 'bg-white text-black font-semibold'
        : 'hover:bg-blue-500 text-white'
    }`;

  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar className="flex justify-between">
        <div className="text-xl font-bold tracking-wide">📝 Blog App</div>
        <div className="flex gap-4">
          <Link to="/" className={linkStyle('/')}>
            Home
          </Link>
          <Link to="/add" className={linkStyle('/add')}>
            Add Blog
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
