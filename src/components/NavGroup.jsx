/* eslint-disable react/prop-types */
import React from 'react';

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
export default NavGroup;
