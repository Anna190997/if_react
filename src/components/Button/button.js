import './button.css';

const Button = ({ showHotel, buttonText }) => {
  return (
    <button type="button" onClick={showHotel} className="submit col-4 col-4-s" >
      {buttonText}
    </button>
  );
};
export default Button;
