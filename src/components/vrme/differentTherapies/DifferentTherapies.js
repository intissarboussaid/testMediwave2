
import React, { useRef, useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../differentTherapies/DifferentTherapies.css";
import claustrophobie from "../../../assets/images/claustrophobie.jpg";
import assenseur from "../../../assets/images/assenseur.jpg";
import acrophobiee from '../../../assets/images/acrophobia.jpg';
import acrophobieSolution from "../../../assets/images/achroSolution.png";
import arachrophobie from "../../../assets/images/aracrophobie1.jpg";
import arachrophobieSolution from "../../../assets/images/arach.jpg";
import agora from "../../../assets/images/agoraphobie.jpg";
import agoraSol from "../../../assets/images/agora.jpg";
import social from "../../../assets/images/social.jpg";
import glossophobie from "../../../assets/images/glossophobie.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import vid from "../../../assets/video/vid.mp4";
import useResizeScreen from "../../../utils/useResizeScreen";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Slider from 'react-slick';


const DifferentTherapies = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const { t } = useTranslation();
  const slideRef = useRef(null);
  const windowDimensions = useResizeScreen();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { imgUrl, setImgUrl } = useState('');


  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item0");
    slideRef.current.appendChild(items[0]);
  };
  const [imageStyle, setImageStyle] = useState({
    width: '50%',
    height: '100%',
  });
  const [imgSolution, setImgSolution] = useState({
    width: '0%',
    height: '40%',

  });

  const [textStyle, setTextStyle] = useState({
    fontSize: '2vh',
    width: '50%',
    marginLeft: '25%',
    marginTop: '-3%',
    background: 'rgba(255, 255, 255, 0.24)',
    backdropFilter: 'blur(20px)'
  })

  const style = {
    width:
    {
      width: '50%',
      height: '100vh',
      marginLeft: '0px',
    },
  }
  const style1 = {
    position: 'absolute',
    width: '50%',
    border: '2px solid #000',
    boxShadow: 24,
    alignItems: 'center',
    p: 4,
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item0");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: <img src={claustrophobie} style={imageStyle} />,
      text1: t("CLAUSTROPHOBIA_1"),
      text2: "",
      text3: t("CLAUSTROPHOBIA_2"),
      name: t("CLAUSTROPHOBIA"),

      img: <img src={assenseur} style={imgSolution}></img>,
      textt1: t("APPLICATIONS_1"),
      textt2: " ",
      textt3: "  ",
      namet: t("soll"),

    },
    {
      id: 3,
      imgUrl: <img src={acrophobiee} style={imageStyle} />,
      text1: t("ACROPHOBIA_1"),
      // ,
      text2: t("ACROPHOBIA_2"),
      // ,
      text3: "  ",
      name: t("AGORAPHOBIA"),

      img: <img src={acrophobieSolution} style={imgSolution}></img>,
      text1: t("APPLICATIONS_2"),
      textt2: "  ",
      textt3: "  ",
      namet: t("soll")

    },
    {
      id: 5,
      imgUrl: <img src={arachrophobie} style={imageStyle} />,
      text1: t("ARACHNOPHOBIA_1"),
      text2: t("ARACHNOPHOBIA_2"),
      text3: "  ",
      name: t("ARACHNOPHOBIA"),

      img: <img src={arachrophobieSolution} style={imgSolution}></img>,
      textt1: t("APPLICATIONS_3"),
      textt2: "",
      textt3: "  ",
      namet: t("soll"),

    },
    {
      id: 7,
      imgUrl: <img src={agora} style={imageStyle} />,
      text1: t("AGORAPHOBIA_1"),
      // ,
      text2: t("AGORAPHOBIA_2"),
      //  
      text3: "  ",
      name: t("AGORAPHOBIA"),
      img: <img src={agoraSol} style={imgSolution}></img>,
      textt1: t("APPLICATIONS_4_1"),
      textt2: t("APPLICATIONS_4_2"),
      textt3: "  ",
      name: t("soll")

    },
    {
      id: 9,
      imgUrl: <img src={social} style={imageStyle} />,
      text1: t("SOCIAL_PHOBIA_1"),
      text2: t("SOCIAL_PHOBIA_2"),
      text3: "  ",
      name: t("SOCIAL_PHOBIA"),
      img: <img src={glossophobie} style={imgSolution}></img>,
      textt1: t('SOCIAL_PHOBIA_Soll_1'),
      textt2: t('SOCIAL_PHOBIA_Soll_2'),
      textt3: t('SOCIAL_PHOBIA_Soll_3'),
      namet: t("soll")


    },
  ];
  const dataSolutions = [

    {
      id: 2,
      imgUrl: <img src={assenseur} style={imgSolution}></img>,
      text1: t("APPLICATIONS_1"),
      text2: " ",
      text3: "  ",
      name: t("soll"),
    },

    {
      id: 4,
      img: <img src={acrophobieSolution} style={imgSolution}></img>,
      text1: t("APPLICATIONS_2"),
      textt2: "  ",
      textt3: "  ",
      namet: t("soll")
      ,
    },

    {
      id: '6',
      img: <img src={arachrophobieSolution} style={imgSolution}></img>,
      textt1: t("APPLICATIONS_3"),
      textt2: "",
      textt3: "  ",
      namet: t("soll"),
    },

    {
      id: 8,
      img: <img src={agoraSol} style={imgSolution}></img>,
      textt1: t("APPLICATIONS_4_1"),
      textt2: t("APPLICATIONS_4_2"),
      textt3: "  ",
      name: t("soll")
    },
    {
      id: 10,
      img: <img src={glossophobie} style={imgSolution}></img>,
      textt1: t('SOCIAL_PHOBIA_Soll_1'),
      textt2: t('SOCIAL_PHOBIA_Soll_2'),
      textt3: t('SOCIAL_PHOBIA_Soll_3'),
      namet: t("soll")
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {



  }, [windowDimensions.width,]);

  return (
    <>
      <div
        class="container-fluid"
        style={{ marginLeft: "5%", marginTop: "-10%", marginBottom: "5%" }}
        id="therapies-section" >
        <section class="about-section" >
          <div class="container-fluid">
            <div class="title-section">
              <motion.h1>
                {t("THERAPY")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.8 }}
                style={{ textAlign: "justify", marginTop: "2%" }}
              >
                {t("THERAPY_text")}
                {t("THERAPY_text_2")}
              </motion.p>
            </div>
            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  all0">
              <div className="container-fluid containerslide" style={style.width}>
                <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
                <div id="slidee" ref={slideRef}>
                  {data.map((item) => (
                    <div key={item.id} className="item0" >
                      <div className="contentt" >
                        <div className="imgSlide"  >
                          {item.imgUrl}
                        </div>
                      </div>
                      <div className="contentCarousel" style={contentCarousel}>
                        <div className="name" style={{ zIndex: '50', marginLeft: '10%',background:'none' }}>{item.name}</div>
                        <div className="des" style={{ zIndex: '50' ,background:'none'}}>{item.text1}</div>
                        <div className="des" style={{ zIndex: '50',background:'none' }}>{item.text2}</div>
                        <div className="des" style={{ zIndex: '50',background:'none' }}>{item.text3}</div>
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
                  ))}
                </div>
                <div>
                  <div className="button0">
                    <button id="prev" onClick={handleClickPrev}>
                      <FontAwesomeIcon icon={faAngleLeft} />

                    </button>
                    <button id="next" onClick={handleClickNext}>

                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div> */}

            <Carousel autoPlay>
              {data.map((item) => (
                <div key={item.id}>
                  <div className="col-md-12">
                    <div>
                      {item.imgUrl}
                    </div>
                    <div style={textStyle}>
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
                            {item.textt2}

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
          </div>
        </section>

      </div>

      {/* <div class="about-box">
            <div class="row" style={{ marginTop: "5%" }}>
              <div class="col-md-6 ">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">1</a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("CLAUSTROPHOBIA")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("CLAUSTROPHOBIA_1")} <br />
                      {t("CLAUSTROPHOBIA_2")}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">
                    <i class="fa fa-thumbs-up"></i>
                  </a>
                  <div class="about-post-content">
                    <h2>
                      <a>{t("soll")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("APPLICATIONS_1")}{" "}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-6"
              >
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={claustrophobie}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>

              <div class="col-md-6 ">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={assenseur}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "7%" }}>
              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post "
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a>2</a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("AGORAPHOBIA")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("ACROPHOBIA_1")} <br />
                      {t("ACROPHOBIA_2")}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">
                    <i class="fa fa-thumbs-up"></i>
                  </a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("soll")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("APPLICATIONS_2")}{" "}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={acrophobie}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>

              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={acrophobieSolution}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "7%" }}>
              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a>3</a>
                  <div class="about-post-content">
                    <h2>
                      <a>{t("ARACHNOPHOBIA")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("ARACHNOPHOBIA_1")} <br />
                      {t("ARACHNOPHOBIA_2")}
                    </p>
                  </div>
                </motion.div>
              </div>
              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">
                    <i class="fa fa-thumbs-up"></i>
                  </a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("soll")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("APPLICATIONS_3")}{" "}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={arachrophobie}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>

              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={arachrophobieSolution}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "7%" }}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                class="col-md-6"
              >
                <div
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">4</a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("AGORAPHOBIA")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("AGORAPHOBIA_1")}
                      <br />
                      {t("AGORAPHOBIA_2")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">
                    <i class="fa fa-thumbs-up"></i>
                  </a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("soll")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("APPLICATIONS_4_1")} {t("APPLICATIONS_4_2")}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={agora}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>

              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={agoraSol}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "5%" }}>
              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">5</a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("SOCIAL_PHOBIA")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {t("SOCIAL_PHOBIA_1")}
                      <br />
                      {t("SOCIAL_PHOBIA_2")}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div class="col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="about-post"
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                >
                  <a href="#">
                    <i class="fa fa-thumbs-up"></i>
                  </a>
                  <div class="about-post-content">
                    <h2>
                      <a href="#">{t("soll")}</a>
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                       {t('SOCIAL_PHOBIA_Soll_1')} <br/>
                       {t('SOCIAL_PHOBIA_Soll_2')} <br/>
                       {t('SOCIAL_PHOBIA_Soll_3')} 
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={social}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>

              <div class="col-md-6">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={glossophobie}
                  alt=""
                  style={{ marginRight: "5%", marginLeft: "5%" }}
                  width={"90%"}
                  height={350}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "5%" }}>
              <div class="col-md-12">
                <div className="cen">
                  <iframe
                    width={"100%"}
                    height="400"
                    style={{ marginLeft: "", marginRight: "5%" }}
                    src="https://www.youtube.com/embed/-UBeh1SzN10"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>  */}


    </>
  );
};

export default DifferentTherapies;



