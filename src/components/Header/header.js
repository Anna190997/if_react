import Background from '../../../public/images/castelbackground.png';
import Form from '../Form/form';
import Main from '../Main/main';
import Links from '../Links/links';
import '../HotelRender/hotelRender.css';

const Header = ({ onChange, showHotel }) => {
  return (
    <>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <div className="container">
          <Main />
          <Form onChange={onChange} showHotel={showHotel} />
          <Links />
        </div>
      </header>
    </>
  );
};

export default Header;
