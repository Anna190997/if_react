import './main.css';
import TitleMain from '../TitleMain/title_main';
import NavigatePanel from '../NavigatePanel/navigatePanel';
import SignOut from '../SignOut/signOut';
import { useState } from 'react';

const Main = () => {
  const [signOut, setSignOut] = useState(false);

  return (
    <>
      <NavigatePanel logoImg="../../images/logo.svg" onClick={() => setSignOut(!signOut)} />
      <SignOut showButton={signOut} />
      <div className="block_text">
        <TitleMain
          mainText="Discover stays
            to live, work or just relax"
        />
      </div>
    </>
  );
};

export default Main;
