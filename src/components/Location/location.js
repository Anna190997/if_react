import PlacesIMG from '../PlacesIMG/placesIMG';
import './location.css';

const Location = (props) => {
  return (
    <div className="hotel_offer col-7">
      <PlacesIMG placeUrl={props.placeUrl} placeName={props.placeName} />
      <div className="name_hotel">
        <a href="#" className="hotel_links">
          {props.name}
        </a>
      </div>
      <div className="location">
        {props.city} {props.country}
      </div>
    </div>
  );
};

export default Location;
