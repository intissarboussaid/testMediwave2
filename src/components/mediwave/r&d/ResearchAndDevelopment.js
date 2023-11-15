import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ventilateur from "../../../assets/images/Ventilateur.jpg"
import CoeurArtificiel from "../../../assets/images/CoeurArtificiel.jpg"
import syringePump from "../../../assets/images/syringe.jpg"
import useResizeScreen from "../../../utils/useResizeScreen";

function ResearchAndDevelopment() {

const windowDimensions = useResizeScreen();
const { t } = useTranslation();


const [ContanierRight, setContanierRight] = useState({
    background: 'white',
    height: '200%',
    marginTop: '30%'
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
const [ButtonLeftStyle, setButtonLeftStyle] = useState({
    marginTop: '-10%',
});

useEffect(() => {
    if (windowDimensions.width >= 992) {
       
        setRightImg({
            marginLeft: '200%',
            width: '100%',
            height: '100%',
            marginTop: '-70%'
        });
        setLeftTextt({
            marginLeft: '-85%',
            width: '100%',
            textAlign: 'justify',
            marginTop: '-30%',
        });
        setRightText({
            marginLeft: '20%',
            width: '100%',
            textAlign: 'justify',
            marginTop: '-30%'
        })
        setleftimgStyle({
            marginTop: '-70%',
            width: '100%',
            height: '100%',
        });
     

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
            alignItem: 'center',
            width: '50%'
        });
        setButtonStyle({
            alignItem: 'center',
            width: '50%'
        });
        setTop('5%')

    }

    // Presponsive Button
    if (windowDimensions.width < 400 && windowDimensions.width > 225) {
        setButtonLeftStyle({
            alignItem: 'center',
            width: '100%',
        });
        setButtonStyle({
            alignItem: 'center',
            width: '100%',
        });
        setTop('5%')

    }
    if (windowDimensions.width < 225) {
        setButtonLeftStyle({
            alignItem: 'center',
            width: '100%',
            marginLeft: '-10%',
            display: 'none'
        });
        setButtonStyle({
            alignItem: 'center',
            width: '100%',
            marginLeft: '0%',
            display: 'none'
        });
        setTop('5%')

    }
}, [windowDimensions.width,]);


return (
    <div id='ResearchAndDevelopment' >
        <section class="about-section" style={{ marginTop: "-8%" }}>
            <div class="container">
            <div class="title-section">
             <h1 >R <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>&</a>  D</h1>
          </div>
                <div>
                    <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '17%' }}>
                        <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                            <img src={ventilateur} style={leftimgStyle} />
                        </div>
                        <div className='col-lg-5 col-md-5 col-ms-8 col-s-12 ' style={{ marginTop: top }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={rightText}
                            >
                                <p><a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>  {t("Syringe_Pump")}</a> ,{t("t_Syringe_Pump")}</p>
                            </motion.p>

                           
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{marginTop:'15%'}}>
                        <div className='col-lg-4 col-md-4 col-ms-4 col-s-4' >
                        <img  src={syringePump}  style={RightImg} />
                        </div>

                        <div className='col-lg-5 col-md-5 col-ms-6 col-s-6 ' style={{ marginTop: top }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={teftText}
                            >
                                <p>  <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> {t("Heart_Artificial")}</a>,{t("t_Heart_Artificial")}</p>
                            </motion.p>
                            
                        </div>

                    </div>
                    <div className='col-lg-12 col-md-12 col-ms-12 col-s-12 ' style={{ background: 'white', height: '200%', marginTop: '20%' }}>
                        <div className='col-lg-4 col-md-4 col-ms-4 col-s-4 '>
                            <img src={CoeurArtificiel}  style={leftimgStyle} />
                        </div>
                        <div className='col-lg-5 col-md-5 col-ms-8 col-s-12 ' style={{ marginTop: top }}>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style={rightText}
                            >
                                <p > <a style={{ fontSize: '25px', color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> {t("Ventilator")} </a>, {t("t_Ventilator")} </p>
                            </motion.p>                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
)
}


export default ResearchAndDevelopment