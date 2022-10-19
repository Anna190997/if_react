import HotelRender from '../HotelRender/hotelRender';
import { useSelector } from 'react-redux';

const Available = () => {
  const hotelStatus = useSelector((state) => state.hotelReducer);

  return !!hotelStatus.url.length && <HotelRender title="Available hotels" hotel={hotelStatus.url} />;
};

export default Available;
