import './button.css';
import { fetchHotel } from '../../actions/hotelActions';
import { useDispatch } from 'react-redux';

const Button = ({ buttonText }) => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(fetchHotel())} className="submit col-2">
      {buttonText}
    </button>
  );
};
export default Button;
