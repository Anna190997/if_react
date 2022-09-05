import TitleBlock from '../TitleBlock/title_block';
import '../Hotel/hotel.css';
import Location from '../Location/location';
import SliderMore from '../SliderMore/sliderMore';
import { useState } from 'react';
import SliderLess from '../SliderLess/sliderLess';

const Available = ({ search }) => {
  const [sliderMax, setSliderMax] = useState(0);
  const [sliderMin, setSliderMin] = useState(4);

  const slideMore = () => {
    setSliderMax(sliderMax + 1);
    setSliderMin(sliderMin + 1);
  };
  const slideLess = () => {
    setSliderMax(sliderMax - 1);
    setSliderMin(sliderMin - 1);
  };

  return (
    <>
      {search.length ? (
        <div className="hotel">
          <div className="container">
            <div className="homes_loves">
              <TitleBlock title="Available hotels" />
            </div>
            <div className="places">
              <div className="places_items">
                <SliderLess slide={slideLess} />
                {search.slice(sliderMax, sliderMin).map((item) => (
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
      ) : null}
    </>
  );
};

export default Available;
