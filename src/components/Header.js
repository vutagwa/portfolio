import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">[Your Name]'s Portfolio</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/projects" className="mr-4">Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
