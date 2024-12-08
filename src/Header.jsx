/* eslint-disable react/prop-types */
import React from 'react';
import logo from './images/logo.png';
import '../index.css';
const Logo = () => {
  return <img src={logo} className="w-24 mr-5"></img>;
};

const NavGroup = (props) => {
  const { items } = props;

  return (
    <div className="flex">
      {items?.map((item, index) => (
        <div
          key={index}
          className="py-3 px-5 text-white hover:cursor-pointer hover:bg-zinc-900 rounded-full "
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const NavItems = (props) => {
  const { rightItems, leftItems } = props;
  return (
    <div className="flex justify-between items-center">
      <div className="mr-60">
        <NavGroup items={leftItems} />
      </div>
      <div>
        <NavGroup items={rightItems} />
      </div>
    </div>
  );
};

const Header = () => {
  const leftItems = ['Ride', 'Drive', 'About'];
  const rightItems = ['Help', 'Login', 'Signup'];
  return (
    <div className="flex items-center border border-black bg-gradient-to-r from-indigo-500 to-blue-500 ">
      <Logo />
      <NavItems leftItems={leftItems} rightItems={rightItems} />
    </div>
  );
};

export default Header;
