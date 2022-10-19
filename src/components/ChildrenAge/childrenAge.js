import './childrenAge.css';
import Select from '../Select/select';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ChildrenAge = ({ changeChildren, filter }) => {
  const [valueSelect, setValueSelect] = useState('');
  const selectChange = (valueSelect) => {
    setValueSelect(valueSelect);
  };
  const children = useSelector((state) => state.hotelReducer);
  children.children = valueSelect;

  return (
    <>
      {!changeChildren ||
        (filter && (
          <form className="children_number">
            <div className="children_number_text">
              What is the age of the child you’re travelling with?
            </div>
            {[...Array(changeChildren)].map((item, index) => (
              <Select key={index} onChange={selectChange} />
            ))}
          </form>
        ))}
    </>
  );
};

export default ChildrenAge;
