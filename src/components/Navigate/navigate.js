import './navigate.css';

const Navigate = () => {
  return (
    <div className="header">
      <img className="logo fill" src="../../images/logo.svg" alt="TripHouse" />
      <nav className="header_items">
        <div className="links not_view_links">
          <a href="#" className="stays">
            Stays
          </a>
          <a href="#" className="attractions">
            Attraction
          </a>
        </div>
        <div className="header_icons">
          <img className="night" src="../../images/night.svg" alt="night" />
          <img className="account" src="../../images/account.svg" alt="account" />
          <img className="burger_menu" src="../../images/menu.svg" alt="menu" />
        </div>
      </nav>
    </div>
  );
};

export default Navigate;
