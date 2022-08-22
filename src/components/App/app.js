import Location from '../Location/location';
import Title from '../Title/title';
import data from '../../data';
import './app.css';

const App = () => {
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
    <div className="container">
      <div className="homes_loves">
        <Title title="Homes guests loves" />
      </div>
      <div className="places">
        <div className="places_items">{place}</div>
      </div>
    </div>
  );
};

export default App;
