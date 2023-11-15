// import React, {useState} from 'https://cdn.skypack.dev/react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';

import React, {useState} from "react";
import './Carousel.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';


const MAX_VISIBILITY = 3;
const Carousell = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active >= 0 && <button  onClick={() => setActive(i => i -1)}>
        <TiChevronLeftOutline/>
        <FontAwesomeIcon icon={faAngleLeft} />
    
        </button>}
        {/* <div>
                  <div className="button0">
                    <button id="prev" onClick={handleClickPrev}>
                    

                    </button>
                    <button id="next" onClick={handleClickNext}>

                     
                    </button>
                  </div>
                </div> */}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count-1 && <button onClick={() => setActive(i => i + 1)}>
        <TiChevronRightOutline/>
        <FontAwesomeIcon icon={faAngleRight} />
     
        </button>} 
    </div>
  );

};
export default Carousell;

