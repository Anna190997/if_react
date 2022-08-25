import { useState } from 'react';

import Hotel from '../Hotel/hotel';
import Header from '../Header/header';
import Available from '../Available/available';
import Form from '../Form/form';
import Links from '../Links/links';
import Background from '../../../public/images/castelbackground.png';
import '../Hotel/hotel.css';

const App = () => {
  const [wish, setWish] = useState('');
  const handleWishChange = (wish) => {
    setWish(wish);
  };
  return (
    <div>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <div className="container">
          <Header />
          <Form onChange={handleWishChange} />
          <Links />
        </div>
      </header>
      <Available wish={wish} />
      <Hotel />
    </div>
  );
};

export default App;
