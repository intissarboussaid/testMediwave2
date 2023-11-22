import React, {useState} from "react";
import './Carousel.css';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';

const MAX_VISIBILITY = 3;
const Carousell = ({children}) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
    <div className='carousel'>
     
      {React.Children.map(children, (child, i) => (
        <><div className='card-container' style={{
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
        
          </>
      ))}     
    </div>
      {active >= 0 && <button className="left" onClick={() => setActive(i => i -1)}>
      <TiChevronLeftOutline/>    
      </button>}
     {active < count-1 && <button className="right" onClick={() => setActive(i => i + 1)}>
      <TiChevronRightOutline/>     
      </button>} 
      </>
  );

};
export default Carousell;

