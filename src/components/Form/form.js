import './form.css';
import Button from '../Button/button';

const Form = ({ onChange }) => {
  const handleWishChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <form className="informations">
      <div className="form_label">
        <label htmlFor="destination" className="label_form">
          Your destination or hotel name
        </label>
        <label htmlFor="date" className="label_form">
          Check-in — Check-out
        </label>
      </div>
      <div className="informations_items">
        <input
          type="text"
          className="destination col-1"
          id="destination"
          placeholder="New York"
          onChange={handleWishChange}
        />
        <input
          type="text"
          className="date col-2"
          id="date"
          placeholder="Tue 15 Sept — Sat 19 Sept"
        />
        <input
          type="text"
          className="number col-3"
          id="number"
          placeholder="2 Adults — 0 Children — 1 Room"
        />
        <Button buttonText="Search" />
      </div>
    </form>
  );
};

export default Form;
