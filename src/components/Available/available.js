import Title from '../Title/title';
import '../Hotel/hotel.css';
import Location from '../Location/location';

const Available = ({ search }) => {
  const placeSearch = search.map((places) => (
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
    <div className="hotel" style={{ display: 'none' }} id="hotel">
      <div className="container">
        <div className="homes_loves">
          <Title title="Available hotels" />
        </div>
        <div className="places">
          <div className="places_items">{placeSearch}</div>
        </div>
      </div>
    </div>
  );
};

export default Available;
