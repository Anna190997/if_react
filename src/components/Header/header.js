import './header.css';
import Navigate from '../Navigate/navigate';
import Appelative from '../Appellative/appelative';

const Header = () => {
  return (
    <div>
      <Navigate />
      <div className="block_text">
        <Appelative
          appellativeText="Discover stays
            to live, work or just relax"
        />
      </div>
    </div>
  );
};

export default Header;
