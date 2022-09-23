import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HotelInformation from '../HotelInformation/hotelInformation';
import MainPage from '../MainPage/mainPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hotels/:id" element={<HotelInformation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
