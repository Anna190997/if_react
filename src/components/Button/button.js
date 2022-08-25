import './button.css';

const Button = (props) => {
  const showHotel = () => {
    const hotelActive = document.getElementById('hotel');
    if (hotelActive.style.display === 'none') {
      hotelActive.style.display = 'block';
    }
  };
  return (
    <button type="button" onClick={showHotel} className="submit col-4 col-4-s" id="submit">
      {props.buttonText}
    </button>
  );
};
export default Button;
