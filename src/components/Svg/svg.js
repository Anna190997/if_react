import React from 'react';

const Svg = ({ showSignOut }) => {
  return (
    <div className="account" onClick={showSignOut}>
      <svg className="logoAccount" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <g fill="#FFFFFF">
          <path d=" M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" />
        </g>
      </svg>
    </div>
  );
};

export default Svg;
