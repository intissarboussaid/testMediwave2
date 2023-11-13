import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Img from "../../../assets/images/steriIntrod.jpg";
import SubImg from "../../../assets/images/steriWaveSubImg.jpg";
import blog1 from "../../../assets/images/blog1.jpg";
import blog2 from "../../../assets/images/blog2.jpg";
import blog3 from "../../../assets/images/blog3.jpg";
import { motion } from "framer-motion";
import './introduction.css';

function Informations() {
    const windowDimensions = useResizeScreen();
    const { t } = useTranslation();
    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll(".item2");
        slideRef.current.appendChild(items[0]);
    };
    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll(".item2");
        slideRef.current.prepend(items[items.length - 1]);
    };
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [carouselStyle, setCarouselStyle] = useState({
        width: "100%",
        marginTop: "0%",
        marginRight: "20"
    });



    const [subImg, setSubImg] = useState({
        height: '30%',
        width: '30%',
        marginLeft: '85%',
        marginTop: '-20%',
        zIndex: '2',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',

    });
    const [show, setShow] = useState(false);
    const [img, setImg] = useState({
        width: '100%',
        height: '100%',


    });
    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const style = {
        width:
        {
            width: '100%',
            height: '100vh',
        },
    }
    const data = [
        {
            id: 1,
            imgUrl: "/static/media/steriIntrod.b6b0672553cce9e9b849.jpg",
            //   <img src={imgIntro} />,
            text1: t("steri-intro1"),
            text2: t("steri-intro2"),
            text3: "",
            text4: "",
            text5: "",
            name: "SteriWave:",
        },
        {
            id: 2,
            imgUrl: "/static/media/steriIntrod.b6b0672553cce9e9b849.jpg",
            text1: t("steri-useText1"),
            text2: t("steri-useText2"),
            text3: "",
            text4: "",
            text5: "",
            name: t("SteriWave-operation"),
        },
        ,
        {
            id: 3,
            imgUrl: "/static/media/steriIntrod.b6b0672553cce9e9b849.jpg",
            text1: t("steri-Step1"),
            text2: t("steri-Step2"),
            text3: t("steri-Step3"),
            text4: t("steri-Step4"),
            text5: t("steri-Step5"),
            name: t("SteriWave-operation"),
        },
    ];
    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: '70vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {

        if (windowDimensions.width > 1290) {
            setImg({
                width: '100%',
                height: '100%',
            });
            setSubImg({
                height: '30%',
                width: '30%',
                marginLeft: '85%',
                marginTop: '-20%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "0%",
                marginRight: "20"
            });

        } else if (windowDimensions.width < 1290 && windowDimensions.width > 1200) {
            setImg({
                width: '80%',
                height: '80%',
            });
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "0%",
                marginLeft: "-20%"
            });

        }
        else if (windowDimensions.width < 1200 && windowDimensions.width > 990) {
            setImg({
                width: '100%',
                height: '100%',
                marginLeft: '10%'
            });
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "-15%",
                marginLeft: "0%",
                height: '100%'
            });

        }
        else if (windowDimensions.width <= 990 && windowDimensions.width >= 768) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '80%',
                height: '80%',
                marginLeft: '10%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });

        } else if (windowDimensions.width < 768 && windowDimensions.width > 657) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '60%',
                height: '60%',
                marginLeft: '15%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });

        }
        else if (windowDimensions.width < 657 && windowDimensions.width > 612) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '60%',
                height: '60%',
                marginLeft: '15%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });
        }
        else if (windowDimensions.width < 612) {
            setSubImg({
                height: '20%',
                width: '20%',
                marginLeft: '-10%',
                marginTop: '50%',
                zIndex: '2',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                display: 'none'
            });
            setImg({
                width: '60%',
                height: '60%',
                marginLeft: '15%'
            });
            setCarouselStyle({
                width: "100%",
                marginTop: "10%",
                marginLeft: "-5%",
                height: '100%'
            });
        }
    }, [windowDimensions.width,]);
    const slideRef = useRef(null);

    return (
        <>
            <div id='DiscoverOurSolution'>
                <section class="about-section" style={{ marginTop: "-13%" }}>
                    <div class="container">
                        <div class="title-section">
                            <h1>{t("t-Solution")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>SteriWave</a></h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 all2 " style={{ background: 'white' }}>
                            <div className="container " >
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <img src={Img} style={img} />
                                    <img src={SubImg} style={subImg} />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " ref={slideRef} style={{ marginTop: '6%' }}>
                                    <div className="container " style={carouselStyle} >
                                        {data.map((item) => (
                                            <div
                                                key={item.id}
                                                className="item2"

                                            >
                                                <div className="contanier content2">
                                                    <div className="name" style={{ color: 'rgb(52, 152, 219)', fontSize: '25px' }}>{item.name}</div>
                                                
                                                        <div className="dess" style={{ marginTop: '5%' }}>{item.text1}</div>
                                                        <div className="dess">{item.text2}</div>
                                                        <div className="dess">{item.text3}</div>
                                                        <div className="dess">{item.text4}</div>
                                                        <div className="dess">{item.text5}</div>
                                               

                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" >
                                    <button id="prev" onClick={handleClickPrev}>
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </button>
                                    <button id="next" onClick={handleClickNext}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </button>
                                    {/* </div> */}
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>



                    </div>
                </section>

            </div></>
    )
}

export default Informations