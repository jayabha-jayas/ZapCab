/* eslint-disable react/prop-types */
import React from 'react';
import NavGroup from './NavGroup';

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

export default NavItems;
