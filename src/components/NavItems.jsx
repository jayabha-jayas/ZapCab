/* eslint-disable react/prop-types */
import React from 'react';
import NavGroup from './NavGroup';

const NavItems = (props) => {
  const { items } = props;
  return (
    <div className="flex items-center">
      <div>
        <NavGroup items={items} />
      </div>
    </div>
  );
};

export default NavItems;
