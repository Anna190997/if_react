import './sliderMore.css';
import React from "react";

const SliderMore = ({slide}) => {

    return (
        <img src="../../images/more.svg" className="more" alt="more" onClick={slide}/>
    )
}

export default SliderMore;