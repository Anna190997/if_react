import './form.css';
import Button from '../Button/button';

const Form = ({ onChange, showHotel }) => {
  const handleWishChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <form className="informations">
      <div className="form_label">
        <label className="label_form">
          Your destination or hotel name
        </label>
        <label className="label_form">
          Check-in — Check-out
        </label>
      </div>
      <div className="informations_items">
        <input
          type="text"
          className="destination col-1"
          placeholder="New York"
          onChange={handleWishChange}
        />
        <input
          type="text"
          className="date col-2"
          placeholder="Tue 15 Sept — Sat 19 Sept"
        />
        <input
          type="text"
          className="number col-3"
          placeholder="2 Adults — 0 Children — 1 Room"
        />
        <Button buttonText="Search" showHotel={showHotel} />
      </div>
    </form>
  );
};

export default Form;
