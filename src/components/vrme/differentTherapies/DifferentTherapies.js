
import React, { useRef, useEffect, useState } from "react";
import Carousell from '../carouselStyle/Carousell.js';
import "../differentTherapies/DifferentTherapies.css";
import claustrophobie from "../../../assets/images/claustrophobie.jpg";
import assenseur from "../../../assets/images/assenseur.jpg";
import acrophobiee from '../../../assets/images/acrophobia.jpg';
import acrophobieSolution from "../../../assets/images/achroSolution.png";
import arachrophobie from "../../../assets/images/aracrophobie.jpg";
import arachrophobieSolution from "../../../assets/images/arach.jpg";
import agora from "../../../assets/images/agoraphobie.jpg";
import agoraSol from "../../../assets/images/agora.jpg";
import social from "../../../assets/images/social.jpg";
import glossophobie from "../../../assets/images/glossophobie.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";



const DifferentTherapies = (props) => {
  const CARDS = 10;
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Card = ({ src, title, content, content1, content2, button, subContent1}) => (
    <div className='card'>
      <div>{src}</div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{content1}</p>
      <p>{content2}</p>
      <div >{button}</div>
      {subContent1}
    </div>
  );

  const slideRef = useRef(null);
  const windowDimensions = useResizeScreen();
  const [imageStyle1, setImageStyle1] = useState({
    width: '110%',
    height: '40%',
    marginTop: '0%',
    marginLeft: '-5%'
  });

  // const handleClickNext = () => {
  //   let items = slideRef.current.querySelectorAll(".item0");
  //   slideRef.current.appendChild(items[0]);
  // };
  
  const [imgSolution, setImgSolution] = useState({
    width: '50%',
    height: '40%',

  });

  // const [contentCarousel, setContentCarousel] = useState({
  //   width: '100%',
  //   marginLeft: '',
  //   marginTop: '140%',
  //   zIndex: '2',
  //   background: 'white'
  // })
  // const style = {
  //   width:
  //   {
  //     width: '50%',
  //     height: '100vh',
  //     marginLeft: '0px',
  //   },
  // }
  // const style1 = {
  //   position: 'absolute',
  //   width: '50%',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   alignItems: 'center',
  //   p: 4,
  // };

  // const handleClickPrev = () => {
  //   let items = slideRef.current.querySelectorAll(".item0");
  //   slideRef.current.prepend(items[items.length - 1]);
  // };
  const data = [
    {
      id: 1,
      imgUrl: <img src={claustrophobie} style={imageStyle1}></img>,
      text1: t("CLAUSTROPHOBIA_1"),
      text2: "",
      text3: t("CLAUSTROPHOBIA_2"),
      name: t("CLAUSTROPHOBIA"),
      // solution1: {
      //   img: <img src={assenseur} style={imgSolution}></img>,
      //   textt1: t("APPLICATIONS_1"),
      //   textt2: " ",
      //   textt3: "  ",
      //   namet: t("soll"),
      // },
    },
    {
      id: 3,
      imgUrl: <img src={acrophobiee} style={imageStyle1}></img>,
      text1: t("ACROPHOBIA_1"),
      // ,
      text2: t("ACROPHOBIA_2"),
      // ,
      text3: "  ",
      name: t("AGORAPHOBIA"),
      // solution1:
      // {
      //   id: 4,
      //   img: <img src={acrophobieSolution} style={imgSolution}></img>,
      //   text1: t("APPLICATIONS_2"),
      //   textt2: "  ",
      //   textt3: "  ",
      //   namet: t("soll")
      //   ,
      // },
    },
    {
      id: 5,
      imgUrl: <img src={arachrophobie} style={imageStyle1}></img>,
      text1: t("ARACHNOPHOBIA_1"),
      text2: t("ARACHNOPHOBIA_2"),
      text3: "  ",
      name: t("ARACHNOPHOBIA"),
      // solution1: {
      //   img: <img src={arachrophobieSolution} style={imgSolution}></img>,
      //   textt1: t("APPLICATIONS_3"),
      //   textt2: "",
      //   textt3: "  ",
      //   namet: t("soll"),
      // },
    },
    {
      id: 7,
      imgUrl: <img src={agora} style={imageStyle1}></img>,
      text1: t("AGORAPHOBIA_1"),
      // ,
      text2: t("AGORAPHOBIA_2"),
      //  
      text3: "  ",
      name: t("AGORAPHOBIA"),

      // solution1: {
      //   id: 8,
      //   img: <img src={agoraSol} style={imgSolution}></img>,
      //   textt1: t("APPLICATIONS_4_1"),
      //   textt2: t("APPLICATIONS_4_2"),
      //   textt3: "  ",
      //   name: t("soll")
      // },

    },
    {
      id: 9,
      imgUrl: <img src={social} style={imageStyle1}></img>,
      text1: t("SOCIAL_PHOBIA_1"),
      text2: t("SOCIAL_PHOBIA_2"),
      text3: "  ",
      name: t("SOCIAL_PHOBIA"),
      // solution1:

      // {
      //   id: 10,
      //   img: <img src={glossophobie} style={imgSolution}></img>,
      //   textt1: t('SOCIAL_PHOBIA_Soll_1'),
      //   textt2: t('SOCIAL_PHOBIA_Soll_2'),
      //   textt3: t('SOCIAL_PHOBIA_Soll_3'),
      //   namet: t("soll")
      // },

    },
  ];

  const data1 = [
    {
      id: 1,
      imgUrl: <img src={claustrophobie} style={imageStyle1} />,
      text1: t("CLAUSTROPHOBIA_1"),
      text2: "",
      text3: t("CLAUSTROPHOBIA_2"),
      name: t("CLAUSTROPHOBIA"),
      button: <button  onClick={() => { setOpenModal(true) }} >
        <div class="center-button">
          <a class="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,
      // img: <img src={assenseur} style={{ width: '20%' }} />,
      // textt1: t("APPLICATIONS_1"),
      // textt2: " ",
      // textt3: "  ",
      // namet: t("soll"),
      modal: <div>
      {openModal && <div className="modalBackground" >
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <img src={assenseur} style={{ width: '20%' }} />,
            </div>
          <div className="body">
            {t("soll")}
            {t("APPLICATIONS_1")}              
          </div>     
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
      }
    </div>

    },
    {
      id: 2,
      imgUrl: <img src={acrophobiee} style={imageStyle1} />,
      text1: t("ACROPHOBIA_1"),
      text2: t("ACROPHOBIA_2"),
      text3: "  ",
      name: t("AGORAPHOBIA"),
      button: <button onClick={() => { setOpenModal(true) }} >
        <div class="center-button">
          <a class="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,
      img: <img src={acrophobieSolution} style={{ width: '20%' }} />,
      text1: t("APPLICATIONS_2"),
      textt2: "  ",
      textt3: "  ",
      namet: t("soll"),

      modal: <div>
        {openModal && <div className="modalBackground" >
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
        

              <div className="title">
              <img src={acrophobieSolution} style={{ width: '20%' }} />
              </div>
              <div className="body">
              {t("soll")}
                {t("APPLICATIONS_2")}
                
              </div>
       
            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Continue</button>
            </div>
          </div>
        </div>
        }
      </div>


    },
    {
      id: 3,
      imgUrl: <img src={arachrophobie} style={imageStyle1} />,
      text1: t("ARACHNOPHOBIA_1"),
      text2: t("ARACHNOPHOBIA_2"),
      text3: "  ",
      name: t("ARACHNOPHOBIA"),
      button: <button >
        <div class="center-button">
          <a class="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,
      img: <img src={arachrophobieSolution} style={{ width: '20%' }} />,
      textt1: t("APPLICATIONS_3"),
      textt2: "",
      textt3: "  ",
      namet: t("soll"),

      modal: <div>
        {openModal && <div className="modalBackground" >
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
            <img src={arachrophobieSolution} style={{ width: '20%' }} />
            </div>
            <div className="body">
              
              {t("APPLICATIONS_3")}
              {t("soll")}
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Continue</button>
            </div>
          </div>
        </div>
        }
      </div>

    },
    {
      id: 4,
      imgUrl: <img src={agora} style={imageStyle1} />,
      text1: t("AGORAPHOBIA_1"),
      text2: t("AGORAPHOBIA_2"),
      text3: "  ",
      name: t("AGORAPHOBIA"),
      button: <button>
        <div class="center-button">
          <a class="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,


      modal: <div>
        {openModal && <div className="modalBackground" >
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
            <img src={agoraSol} style={{ width: '20%' }} />
            </div>
            <div className="body">
             
              {t("APPLICATIONS_4_1")},
              {t("APPLICATIONS_4_2")},

              {t("soll")},
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Continue</button>
            </div>
          </div>
        </div>
        }
      </div>


    },
    {
      id: 5,
      imgUrl: <img src={social} style={imageStyle1} />,
      text1: t("SOCIAL_PHOBIA_1"),
      text2: t("SOCIAL_PHOBIA_2"),
      text3: "  ",
      name: t("SOCIAL_PHOBIA"),
      button: <button>
        <div class="center-button">
          <a class="button-one">
            {t("Our-Solution")}
          </a>
        </div>
      </button>,

      textt1: t('SOCIAL_PHOBIA_Soll_1'),
      textt2: t('SOCIAL_PHOBIA_Soll_2'),
      textt3: t('SOCIAL_PHOBIA_Soll_3'),


      modal: <div>
        {openModal && <div className="modalBackground" >
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
            <img src={glossophobie} style={{ width: '20%' }} />
            </div>
            <div className="body">
             
              {t('SOCIAL_PHOBIA_Soll_1')}
              {t('SOCIAL_PHOBIA_Soll_2')}
              {t('SOCIAL_PHOBIA_Soll_3')}
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button>Continue</button>
            </div>
          </div>
        </div>
        }
      </div>


    },
  ];
  const [selectedData, setSelectedData] = useState(null);

  const dataSolutions = [

    {
      id: 2,
      imgUrl: <img src={assenseur} style={imgSolution} />,
      text1: t("APPLICATIONS_1"),
      text2: " ",
      text3: "  ",
      name: t("soll"),
    },

    {
      id: 4,
      img: <img src={acrophobieSolution} style={imgSolution} />,
      text1: t("APPLICATIONS_2"),
      textt2: "  ",
      textt3: "  ",
      namet: t("soll")
      ,
    },

    {
      id: '6',
      img: <img src={arachrophobieSolution} style={imgSolution} />,
      textt1: t("APPLICATIONS_3"),
      textt2: "",
      textt3: "  ",
      namet: t("soll"),
    },

    {
      id: 8,
      img: <img src={agoraSol} style={imgSolution} />,
      textt1: t("APPLICATIONS_4_1"),
      textt2: t("APPLICATIONS_4_2"),
      textt3: "  ",
      name: t("soll")
    },
    {
      id: 10,
      img: <img src={glossophobie} style={imgSolution} />,
      textt1: t('SOCIAL_PHOBIA_Soll_1'),
      textt2: t('SOCIAL_PHOBIA_Soll_2'),
      textt3: t('SOCIAL_PHOBIA_Soll_3'),
      namet: t("soll")
    },
  ];
  // useEffect(() => {
  //   if (windowDimensions.width < 1225) {
  //     setImageStyle1({
  //       width: '100%',
  //       marginLeft: '-33.4%',
  //       marginTop: '-80%',
  //     })
  //   }
  //   if (windowDimensions.width < 770) {
  //     setImageStyle1({
  //       width: '100%',
  //       marginLeft: '-60%',
  //       marginTop: '-80%',
  //     });
  //     setContentCarousel({
  //       marginTop: '170%',
  //       marginLeft: '-30%'
  //     })
  //   }
  // }, [windowDimensions.width,]);

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
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  contenttt'>
              <Carousell>
                {data1.map((i) => (
                  <>
                    <Card
                      src={i.imgUrl}
                      title={i.name}
                      content={i.text1}
                      content1={i.text2}
                      content2={i.text3}
                      button={i.button} 
                      subContent1={i.modal}  
                 
                    />

                  </>
                ))}
              </Carousell>

            </div>
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



