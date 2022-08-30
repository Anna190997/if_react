import { useState } from 'react';

import Hotel from '../Hotel/hotel';
import Available from '../Available/available';
import Header from '../Header/header';
import data from '../../data';

const App = () => {
  const [value, setValue] = useState('');
  const handleWishChange = (value) => {
    setValue(value);
  };
  const [search, setSearch] = useState([]);
  const showHotel = () => {
    const resultHotel = data.filter((location) => Object.values(location).includes(value));
    setSearch(resultHotel);
  };

  return (
    <>
      <Header onChange={handleWishChange} showHotel={showHotel} />
      <Available search={search} />
      <Hotel />
    </>
  );
};

export default App;
