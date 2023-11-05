import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import acrophobie from "../../../assets/images/acrophobie.jpg";
import Steriwave from "../../../assets/images/Steriwave.jpg";
import Medilink from "../../../assets/images/medilink.jpg";
import solPhobia from "../../../assets/images/glossophobie.jpg";
import kine from "../../../assets/images/physiotherapy1.jpg";
import solKine from "../../../assets/images/kineVr.jpg";
import phobia from "../../../assets/images/agoraphobie.jpg";
import desinfect from "../../../assets/images/steriwaveProb.jpg";
import medilinkProb from "../../../assets/images/medilinkProb.jpg";
import { motion } from "framer-motion";


function DiscoverUs() {
    const windowDimensions = useResizeScreen();
    const { t } = useTranslation();


    const [ContanierRight, setContanierRight] = useState({
        background: 'white',
        height: '200%',
        marginTop: '15%'
    });


    const [teftText, setLeftTextt] = useState({
        marginLeft: '20%',
        width: '100%',
        textAlign: 'justify'
    });
    const [rightText, setRightText] = useState({
        marginLeft: '20%',
        width: '100%',
        textAlign: 'justify'
    });
    const [SubLeftImg, setSubLeftImg] = useState({

        width: '40%',
        height: '40%',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',
        marginLeft: '80%',
        marginTop: '-20%',
        position: 'relative'
    });
    const [leftimgStyle, setleftimgStyle] = useState({
        width: '100%',
        height: '100%',
    });
    const [SubRightImg, setSubRightImg] = useState({
        width: '40%',
        height: '40%',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',
        marginLeft: '80%',
        marginTop: '-20%',
        position: 'relative'
    });
    const [top, setTop] = useState('');





    const [RightImg, setRightImg] = useState({
        width: '100%',
        height: '100%',
    });
    const [SubkineImg, setSubkineImg] = useState({

        width: '40%',
        height: '40%',
        border: ' 5px solid white',
        boxShadow: ' 0 5px 10px #505050',
        marginLeft: '80%',
        marginTop: '-20%',
        position: 'relative'
    });

    const [kineImg, setkineImg] = useState({
        width: '100%',
        height: '100%',
    });
    const [buttonStyle, setButtonStyle] = useState({
        marginTop: '-10%',
    });
    const [ButtonLeftStyle,setButtonLeftStyle] =useState({
        marginTop: '-10%',
    });

    useEffect(() => {
        if (windowDimensions.width >= 992) {
            setSubLeftImg({
                width: '40%',
                height: '40%',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                marginLeft: '80%',
                marginTop: '-20%',
                position: 'relative'
            })         
            
            setSubkineImg({
                marginLeft: '170%',
                width: '40%',
                height: '40%',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                marginTop: '-20%',
                position: 'relative'
            });
            setkineImg({
                marginLeft: '190%',
                width: '100%',
                height: '100%',
            });
            setRightImg({
                marginLeft: '190%',
                width: '100%',
                height: '100%',
            });
            setSubRightImg({
                marginLeft: '170%',
                width: '40%',
                height: '40%',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                marginTop: '-20%',
                position: 'relative'
            });
            setLeftTextt({
                marginLeft: '-70%',
                width: '100%',
                textAlign: 'justify'
            });
            setRightText({ 
                marginLeft: '20%',
                width: '100%',
                textAlign: 'justify'
            })
            setButtonLeftStyle({
                marginLeft:'65%',
                width:'50%'
            });
            setButtonStyle({
                marginLeft:'-190%',
                width:'50%'
            })

        }

        if (windowDimensions.width < 992) {
            setSubkineImg({
                marginLeft: '170%',
                width: '40%',
                height: '40%',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                marginTop: '-20%',
                position: 'relative',
                display: 'none'
            });

            setSubRightImg({
                marginLeft: '170%',
                width: '40%',
                height: '40%',
                border: ' 5px solid white',
                boxShadow: ' 0 5px 10px #505050',
                marginTop: '-20%',
                position: 'relative',
                display: 'none'
            });
            setSubLeftImg({
                display: 'none'
            });
            setRightImg({
                width: '100%',
                height: '100%',
            });
            setLeftTextt({
                width: '100%',
    marginLeft: '0%',
            });
            setRightText({
                width: '100%',
                marginLeft: '0%',
            });
            setButtonLeftStyle({
                // marginLeft:'65%',
                alignItem:'center',
                width:'50%'
            });
            setButtonStyle({
                alignItem:'center',
                width:'50%'
            });
            setTop('5%')

        }

        // Presponsive Button
        if (windowDimensions.width < 400 && windowDimensions.width > 225) {
            setButtonLeftStyle({
                alignItem:'center',
                width:'100%',
            });
            setButtonStyle({
                alignItem:'center',
                width:'100%',
            });
            setTop('5%')

        }
        if (windowDimensions.width <  225) {
            setButtonLeftStyle({
                alignItem:'center',
                width:'100%',
                marginLeft:'-10%',
                display:'none'
            });
            setButtonStyle({
                alignItem:'center',
                width:'100%',
                marginLeft:'0%',
                display:'none'
            });
            setTop('5%')

        }
    }, [windowDimensions.width,]);


    return (
        <div id='DiscoverOurSolution'>
            <section class="about-section" style={{ marginTop: "5%" }}>
                <div class="container">
                    <div class="title-section" >
                        <h1>{t("t-Solution")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>{t("t-Our")}</a></h1>
                    </div>
                    <div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '1%' }}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                                <img src={solPhobia} style={leftimgStyle} />
                                <img src={phobia} style={SubLeftImg} />
                            </div>
                            <div className='col-lg-6 col-md-7 col-ms-8 col-s-12 ' style={{marginTop:top}}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={rightText}
                                >
                                    <p><a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>  {t("h_2")}</a> ,{t("t-phobia_1")}<br />{t("t-phobia_2")}</p>
                                </motion.p>

                                <div class="center-button">
                                    <a
                                        href="/VRme"
                                        class="button-one"
                                        style={ButtonLeftStyle}
                                    >
                                        {t("t-Solution")}{t("t-Our")}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={ContanierRight}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4'>
                                <img src={solKine} style={RightImg} />
                                <img src={kine} style={SubRightImg} />
                            </div>
                            <div className='col-lg-6 col-md-8 col-ms-8 col-s-12 ' style={{marginTop:top}} >
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={teftText}
                                >
                                    <p>  <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> {t("h_5")}</a>,{t("t-kine-vr-1")}<br />{t("t-kine-vr-2")}</p>
                                </motion.p>
                                <div class="center-button">
                                    <a
                                        href="/VRme"
                                        class="button-one"
                                        style={buttonStyle}
                                    >
                                        {t("t-Solution")}{t("t-Our")}
                                    </a>
                                </div>
                            </div>


                        </div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '15%' }}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                                <img src={Steriwave} style={leftimgStyle} />
                                <img src={desinfect} style={SubLeftImg} />
                            </div>
                            <div className='col-lg-6 col-md-7 col-ms-8 col-s-12 ' style={{marginTop:top}}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={rightText}
                                >
                                    <p > <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> Steriwave</a>,{t("t-Steriwave1")} <br />{t("t-Steriwave2")} </p>
                                </motion.p>
                                <div class="center-button">
                                    <a
                                        href="Steriwave#DiscoverOurSolution"
                                        class="button-one"
                                        style={ButtonLeftStyle}
                                    >
                                        {t("t-Solution")}{t("t-Our")}
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={ContanierRight}>
                            <div className='col-lg-4 col-md-4 col-ms-4 col-s-4' >
                                <img src={Medilink} style={RightImg} />
                                <img src={medilinkProb} style={SubRightImg} />
                            </div>

                            <div className='col-lg-6 col-md-6 col-ms-6 col-s-6 ' style={{marginTop:top}}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                    style={teftText}
                                >
                                    <p>  <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> Medilink</a>,{t("t-Medilink1")} <br />{t("t-Medilink2")} </p>
                                </motion.p>
                                <div class="center-button">
                                    <a
                                        href="/Medilink"
                                        class="button-one"
                                        style={buttonStyle}

                                    >
                                        {t("t-Solution")}{t("t-Our")}
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default DiscoverUs