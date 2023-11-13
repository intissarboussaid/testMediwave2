
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import vid from "../../../assets/video/vid-mediwave.mp4";
import { useTranslation } from "react-i18next";
import "./PhysioTherapist.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import candyNinja from '../../../assets/images/CandyNinja.jpg';
import physiotherapy5 from '../../../assets/images/physiotherapy5.jpg';
import cou from '../../../assets/images/kineCou.jpg';
function DifferentPhysiotherapies(props) {
  const { t } = useTranslation();
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { imgUrl, setImgUrl } = useState('');
  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item1");
    slideRef.current.appendChild(items[0]);
  };
  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item1");
    slideRef.current.prepend(items[items.length - 1]);
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const style = {
    width:
    {
      width: '100%',
      height: '100vh',
    },
    media: {
      '@media screen and (max-width: 587px)': {
        '.all1 .item1': {
          displau: 'none'
        }
      },
    }
  }
  const data = [
    {
      id: 1,
      imgUrl: <img src={candyNinja} style={{width:'50%'}}/>,
      text1: t("CANDY_NINJA_TEXT1"),
      text2: "",
      text3: "  ",
      name: t("CANDY_NINJA"),
    },
    {
      id: 2,
      imgUrl: <img src={cou} style={{width:'50%'}}/>  ,
      text1: t("Brick_Breaker_text1"),
      //  
      text2: " ",
      text3: "  ",
      name: t("Brick_Breaker"),
    },
    {
      id: 3,
      imgUrl:<img src={physiotherapy5} style={{width:'50%'}} /> ,
      text1: t("Shot_Put_text1"),
      // 
      text2: t("Shot_Put_text2"),
      //  
      text3: "  ",
      name: t("Shot_Put"),
    },
    // "/static/media/kineSide.508582e1dc74690aba37.jpg"

    {
      id: 4,
      imgUrl: "/static/media/kineSide.508582e1dc74690aba37.jpg",
      text1: t("Spear_text1"),
      // 
      text2: t("Spear_text2"),
      // 
      text3: "  ",
      name: t("Spear "),
    },
    {
      id: 5,
      imgUrl: "/static/media/SquatVr.28fd62ed0550d472e1ba.jpg"
      ,
      text1:t("kineSquat_text1"),
      //  
      text2:t("kineSquat_text2"), 
      // 
      text3: "  ",
      name: t("kineSquat"),
    },

    {
      id: 7,
      imgUrl:"/static/media/SquatVr.28fd62ed0550d472e1ba.jpg",
      text1:t("APPLE_EDEN_text1"), 
      // 
      text2:t("APPLE_EDEN_text2"),
      // 
      text3: "  ",
      name: t("APPLE_EDEN"),
    },


  ];
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:'70vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div
        class="container-fluid"
        style={{ marginLeft: "5%", marginTop: "-10%", marginBottom: "5%" }}
        id="physiotherapies-section">
        <section class="about-section" style={{ marginTop: "5%" }}>
          <div class="container-fluid">
            <div class="title-section">
              <motion.h1>
                {t("PHYSIOTHERAPY")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.8 }}
                style={{ textAlign: "justify", marginTop: "2%" }}
              >
                {t("PHYSIOTHERAPY_text")}
                {t("PHYSIOTHERAPY_text_2")}
              </motion.p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 all1">
              {/* <div className="container containerSlide" style={style.width}>
                <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
                <div id="slide" ref={slideRef}>
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="item1"
                      style={{ background: `url(${item.imgUrl})`, backgroundSize: 'cover' }}
                      >
                      <div className="content">
                        <div className="name">{item.name}</div>
                     
                        <Button onClick={handleOpen} style={{borderRadius: 'none', backgroundColor: 'none',width:'100%', marginLeft:'-30%', fontSize:'16px',color:'white'}}
                         >     
                          {t("Our-Solution")}
                          </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style1}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              {t("Our-Solution")} :
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: -2 }}>
                              <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                class="videoStyle"
                                style={{ width: "100%", position: "absolute", right:'0%',marginTop:'-20%'}}
                              >
                                <source src={vid} type="video/mp4" />
                              </video>
                            </Typography>
                          </Box>
                        </Modal>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="button1">
                <button id="prev" onClick={handleClickPrev}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button id="next" onClick={handleClickNext}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
              </div> */}
               <Carousel autoPlay>
              {data.map((item) => (
                <div key={item.id}>
                  <div className="col-md-12">
                    <div>
                    {item.imgUrl} 
                    </div>
                    <div style={{width:'50%' , marginLeft:'25%'}} >
                      <div style={{ color: '#333333', fontSize: '250%' }}>
                        {item.name}
                      </div>
                      <div >
                        <div className="des" style={{ zIndex: '50', background: 'none' }}>{item.text1}</div>
                        <div className="des" style={{ zIndex: '50', background: 'none' }}>{item.text2}</div>
                        <div className="des" style={{ zIndex: '50', background: 'none' }}>{item.text3}</div>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style1}>
                            <Typography id="modal-modal-description" sx={{ mt: 20 }}>
                            

                 </Typography>
                          </Box>
                        </Modal>
                      </div>
                    </div>
                    <Button onClick={handleOpen}
                      className=" Solution" style={{ background: 'none' }}>
                      <div class="center-button">
                        <a href="#doctor-section" class="button-one" >
                          {t("Our-Solution")}
                        </a>
                      </div>
                    </Button>


                  </div>
                </div>
              ))}
            </Carousel>
              <div>

              </div>

            </div>

          </div>
        </section>
      </div>
    </>
  );
};


export default DifferentPhysiotherapies