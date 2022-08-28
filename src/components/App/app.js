import { useState } from 'react';

import Hotel from '../Hotel/hotel';
import Header from '../Header/header';
import Available from '../Available/available';
import Form from '../Form/form';
import Links from '../Links/links';
import Background from '../../../public/images/castelbackground.png';
import '../Hotel/hotel.css';
import data from '../../data';

const App = () => {
  const [wish, setWish] = useState('');
  const handleWishChange = (wish) => {
    setWish(wish);
  };
  const [search, setSearch] = useState([]);
  const showHotel = () => {
    const resultHotel = data.filter((location) => Object.values(location).includes(wish));
    setSearch(resultHotel);

    const hotelActive = document.getElementById('hotel');
    if (hotelActive.style.display === 'none') {
      hotelActive.style.display = 'flex';
    }
  };

  return (
    <div>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <div className="container">
          <Header />
          <Form onChange={handleWishChange} showHotel={showHotel} />
          <Links />
        </div>
      </header>
      <Available search={search} />
      <Hotel />
    </div>
  );
};

export default App;
