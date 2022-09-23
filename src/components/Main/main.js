import './main.css';
import Navigate from '../Navigate/navigate';
import TitleMain from '../TitleMain/title_main';

const Main = () => {
  return (
    <>
      <Navigate logoImg="../../images/logo.svg" />
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
