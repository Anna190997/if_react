import Location from '../Location/location';
import TitleBlock from '../TitleBlock/title_block';
import './hotel.css';
import SliderMore from '../SliderMore/sliderMore';
import SliderLess from '../SliderLess/sliderLess';
import { useState } from 'react';
import { useEffect } from 'react';

const Hotel = () => {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
      });
  }, []);
  const [sliderMin, setSliderMin] = useState(0);
  const [sliderMax, setSliderMax] = useState(4);

  const slideMore = () => {
    setSliderMax(sliderMax + 1);
    setSliderMin(sliderMin + 1);
  };
  const slideLess = () => {
    setSliderMax(sliderMax - 1);
    setSliderMin(sliderMin - 1);
  };

  return (
    <div className="hotel">
      <div className="container">
        <div className="homes_loves">
          <TitleBlock title="Homes guests loves" />
        </div>
        <div className="places">
          <div className="places_items">
            <SliderLess slide={slideLess} />
            {hotel.slice(sliderMin, sliderMax).map((item) => (
              <Location
                key={item.id}
                placeUrl={item.imageUrl}
                placeName={item.country}
                name={item.name}
                city={item.city}
                country={item.country}
              />
            ))}
            <SliderMore slide={slideMore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
