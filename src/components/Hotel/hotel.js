import Location from '../Location/location';
import TitleBlock from '../TitleBlock/title_block';
import data from '../../data';
import './hotel.css';

const Hotel = () => {
  const place = data.map((places) => (
    <Location
      key={places.id}
      placeUrl={places.imageUrl}
      placeName={places.country}
      name={places.name}
      city={places.city}
      country={places.country}
    />
  ));

  return (
    <div className="hotel">
      <div className="container">
        <div className="homes_loves">
          <TitleBlock title="Homes guests loves" />
        </div>
        <div className="places">
          <div className="places_items">{place}</div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
