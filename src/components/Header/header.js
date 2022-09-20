import Background from '../../../public/images/castelbackground.png';
import Form from '../Form/form';
import Main from '../Main/main';
import Links from '../Links/links';
import '../HotelRender/hotelRender.css';
import Filter from '../Filter/filter';
import ChildrenAge from '../ChildrenAge/childrenAge';
import { useState } from 'react';

const Header = ({ onChange, showHotel }) => {
  const [filter, setFilter] = useState(false);
  const [parametrFilter, setParametrFilter] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });
  const handleChangePlus = (field) => {
    setParametrFilter((prevState) => ({ ...prevState, [field]: prevState[field] + 1 }));
  };
  const handleChangeMinus = (field) => {
    setParametrFilter((prevState) => ({ ...prevState, [field]: prevState[field] - 1 }));
  };
  const change = `${parametrFilter.adults} Adults — ${parametrFilter.children} Children — ${parametrFilter.rooms} Rooms`;

  return (
    <header style={{ backgroundImage: 'url(' + Background + ')' }}>
      <div className="container">
        <Main />
        <Form
          onChange={onChange}
          showHotel={showHotel}
          onClick={() => setFilter(!filter)}
          changeInput={change}
        />
        <Filter
          filter={filter}
          handleMinusAdults={() => handleChangeMinus('adults')}
          changeAdults={parametrFilter.adults}
          handlePlusAdults={() => handleChangePlus('adults')}
          handleMinusChildren={() => handleChangeMinus('children')}
          changeChildren={parametrFilter.children}
          handlePlusChildren={() => handleChangePlus('children')}
          handleMinusRooms={() => handleChangeMinus('rooms')}
          changeRooms={parametrFilter.rooms}
          handlePlusRooms={() => handleChangePlus('rooms')}
        />
        <ChildrenAge changeChildren={parametrFilter.children} filter={filter} />
        <Links />
      </div>
    </header>
  );
};

export default Header;
