import Hotel from '../Hotel/hotel';
import Available from '../Available/available';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const [value, setValue] = useState('');

  const searchHotel = useSelector((state) => state.hotelReducer);
  searchHotel.search = value;

  const handleWishChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <Header onChange={handleWishChange} />
      <Available />
      <Hotel />
      <Footer />
    </>
  );
};

export default MainPage;
