import TitleBlock from '../TitleBlock/title_block';
import '../Hotel/hotel.css';
import Location from '../Location/location';

const Available = ({ search }) => {
  return (
    <>
      {search.length && (
        <div className="hotel">
          <div className="container">
            <div className="homes_loves">
              <TitleBlock title="Available hotels" />
            </div>
            <div className="places">
              <div className="places_items">
                {search.map((item) => (
                  <Location
                    key={item.id}
                    placeUrl={item.imageUrl}
                    placeName={item.country}
                    name={item.name}
                    city={item.city}
                    country={item.country}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Available;
