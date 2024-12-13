import React from 'react';
import NavItems from './components/NavItems';
import logo from './images/logo.png';
import '../index.css';

const Logo = () => {
  return <img src={logo} className="w-24 mr-5"></img>;
};

const Header = () => {
  const leftItems = ['Ride', 'Drive', 'About'];
  const rightItems = ['Help', 'Login', 'Signup'];
  return (
    <div className="flex justify-between  border border-black bg-gradient-to-r from-indigo-500 to-blue-500 ">
      <div className="flex">
        <Logo />
        <NavItems items={leftItems} />
      </div>

      <NavItems items={rightItems} />
    </div>
  );
};

export default Header;
