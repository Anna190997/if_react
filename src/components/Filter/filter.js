import './filter.css';
import CategoryFilter from '../CategoryFilter/categoryFilter';
import CountFilter from '../CountFilter/countFilter';


const Filter = ({ filter, handleMinusAdults, changeAdults, handlePlusAdults, handleMinusChildren, changeChildren,
                  handlePlusChildren, handleMinusRooms, changeRooms,handlePlusRooms }) => {
  return (
   filter && (
        <form className="filter">
          <div className="filter_wrapper">
            <div className="criteria_filter">
              <CategoryFilter nameFilter="Adults" />
              <CategoryFilter nameFilter="Children" />
              <CategoryFilter nameFilter="Rooms" />
            </div>
            <div className="change_filter">
              <CountFilter
                handleMinus={handleMinusAdults}
                amount={changeAdults}
                handlePlus={handlePlusAdults}
                disabledPlus={changeAdults === 30 }
                disabledMinus={changeAdults === 0}
              />
              <CountFilter
                handleMinus={handleMinusChildren}
                amount={changeChildren}
                handlePlus={handlePlusChildren}
                disabledPlus={changeChildren === 10 }
                disabledMinus={changeChildren === 0}
              />
              <CountFilter
                handleMinus={handleMinusRooms}
                amount={changeRooms}
                handlePlus={handlePlusRooms}
                disabledPlus={changeRooms === 30 }
                disabledMinus={changeRooms === 0}
              />
            </div>
          </div>
        </form>
      )
  );
};

export default Filter;
