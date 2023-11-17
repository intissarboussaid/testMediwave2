import React from "react";
import './OurPartenaire.css'
import enis from "../../../assets/images/enis.png";
import threedwave from "../../../assets/images/3dwave.png";
import fms from "../../../assets/images/fms_logo.png";
import actia from "../../../assets/images/ACTIA.png";
import cims from "../../../assets/images/CIMS.png";
import fmm from "../../../assets/images/FMM.jpg";
import tim from "../../../assets/images/TIM.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import bgPartner from "../../../assets/images/bgpartenaire.jpg";
const slideWidth = 30;

const _items = [
  {
    player: {
      image: enis,
      height: '40%'
    }
  },
  {
    player: {
      image: threedwave,
      height: '40%'
    }
  },
  {
    player: {
      image: fms,
      height: '40%'
    }
  },
  {
    player: {
      image: fmm,
      height: '40%'
    }
  },
  {
    player: {
      image: actia,
      height: '20%', top: '10%'
    }
  },

  {
    player: {
      image: tim,
      height: '40%'
    }
  },
];
const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
      marginTop: '0%',
      // background:'white'
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }
  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);
  return (


    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} style={{ height: item.player.height, marginTop: item.player.top }} />
      </div>
    </li>
  );
};
const keys = Array.from(Array(_items.length).keys());
const OurPartenaires = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map(
          (_, i) => prev[(i - jump + bigLength) % bigLength],
        );
      });
    }
  };
  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length)
  }, [items]);
  const bgPartenaire = {
    backgroundImage: `url(${bgPartner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'70vh'
  };
  const { t } = useTranslation();
  return (

    <div id="Partenaires">
      <div class="container">
        <div class="row" style={{ marginTop: "2%" }}>

          <div class="title-section">
            <h1>{t("our")}<a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> Partenaires</a></h1>
          </div>
          <div className="col-lg-12 col-md-12 col-ls-12 " 
          style={bgPartenaire}
          >           
            <div className="carousel" >
              <div className="carousel__wrap" >
                <div className="carousel__inner">
                  <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                  </button>
                  <div className="carousel__container">
                    <ul className="carousel__slide-list">
                      {items.map((pos, i) => (
                        <CarouselSlideItem
                          key={i}
                          idx={i}
                          pos={pos}
                          activeIdx={activeIdx}
                        />
                      ))}
                    </ul>
                  </div>
                  <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ReactDOM.render(<Carousel />, document.getElementById('root'));
export default OurPartenaires