import TitleBlock from '../TitleBlock/title_block';
import '../Hotel/hotel.css';
import Location from '../Location/location';
import Slider from '../Slider/slider';
import { useState } from 'react';

const Available = ({ search }) => {
  const [sliderMax, setSliderMax] = useState(4);
  const [sliderMin, setSliderMin] = useState(0);

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
                <Slider
                  arrowImg="../../images/less.svg"
                  changeSlide={slideLess}
                  changeClass="less"
                  sliderMin={sliderMin}
                />
                {search.slice(sliderMin, sliderMax).map((item) => (
                  <Location
                    key={item.id}
                    placeUrl={item.imageUrl}
                    placeName={item.country}
                    name={item.name}
                    city={item.city}
                    country={item.country}
                  />
                ))}
                <Slider
                  arrowImg="../../images/more.svg"
                  changeSlide={slideMore}
                  changeClass="more"
                  sliderMax={sliderMax}
                  arrayLength={search.length}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Available;
