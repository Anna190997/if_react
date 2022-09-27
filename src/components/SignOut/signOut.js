import './signOut.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = ({ showButton }) => {
  const navigate = useNavigate();
  return (
    showButton && (
      <>
        <img
          className="signOut"
          src="../../images/sign.svg"
          alt="sign"
          onClick={() => navigate('/')}
        />
      </>
    )
  );
};

export default SignOut;
