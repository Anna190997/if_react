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
  const [changeAdults, setChangeAdults] = useState(2);
  const handleMinusAdults = () => {
    setChangeAdults(changeAdults - 1);
    setText(`${changeAdults} Adults — ${changeChildren} Children — ${changeRooms} Rooms`);
  };
  const handlePlusAdults = () => {
    setChangeAdults(changeAdults + 1);
    setText(`${changeAdults} Adults — ${changeChildren} Children — ${changeRooms} Rooms`);
  };

  const [changeChildren, setChangeChildren] = useState(0);
  const handleMinusChildren = () => {
    setChangeChildren(changeChildren - 1);
    setText(`${changeAdults} Adults — ${changeChildren} Children — ${changeRooms} Rooms`);
  };
  const handlePlusChildren = () => {
    setChangeChildren(changeChildren + 1);
    setText(`${changeAdults} Adults — ${changeChildren} Children — ${changeRooms} Rooms`);
  };

  const [changeRooms, setChangeRooms] = useState(1);
  const handleMinusRooms = () => {
    setChangeRooms(changeRooms - 1);
    setText(`${changeAdults} Adults — ${changeChildren} Children — ${changeRooms} Rooms`);
  };
  const handlePlusRooms = () => {
    setChangeRooms(changeRooms + 1);
    setText(`${changeAdults} Adults — ${changeChildren} Children — ${changeRooms} Rooms`);
  };
  const [textInput, setText] = useState('');
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <div className="container">
          <Main />
          <Form onChange={onChange} showHotel={showHotel} onClick={() => setFilter(!filter)} changeInput={textInput}
          changeText={(e) => onChangeText(e)}/>
          <Filter
            filter={filter}
            handleMinusAdults={handleMinusAdults}
            changeAdults={changeAdults}
            handlePlusAdults={handlePlusAdults}
            handleMinusChildren={handleMinusChildren}
            changeChildren={changeChildren}
            handlePlusChildren={handlePlusChildren}
            handleMinusRooms={handleMinusRooms}
            changeRooms={changeRooms}
            handlePlusRooms={handlePlusRooms}
          />
          <ChildrenAge changeChildren={changeChildren} filter={filter} />
          <Links />
        </div>
      </header>
    </>
  );
};

export default Header;
