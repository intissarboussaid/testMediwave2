import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import img from "../../../assets/images/AboutUsMedilink.png";
import img2 from "../../../assets/images/Steriwave.jpg";
import { motion } from "framer-motion";


function AboutUs() {
    const windowDimensions = useResizeScreen();
    const [titleStyle, setTitleStyle] = useState({
        marginTop: '-5%',
        fontSize: '20px'
    });
    const [textStyle, setTextStyle] = useState({
    //    marginLeft:'50%',
    //    marginTop: "-25%",
    });
    const [imgStyle, setImgStyle] = useState({
        marginLeft:'0%',
        height:'50%',
     });
     const [img2Style, setImg2Style] = useState( {
        width:'70%',
        height:'100%',        
        border:' 5px solid white',
        boxShadow:' 0 5px 10px #505050', 
        marginLeft:'180%', 
        marginTop:'-40%', 
        position:'relative'});
    useEffect(() => {

        if(windowDimensions.width > 2000){  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 2100 && windowDimensions.width < 2200) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050',  
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 2000 && windowDimensions.width < 2100) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050',  
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 1900 && windowDimensions.width < 2000) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 1800 && windowDimensions.width < 1900) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050',  
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 1700 && windowDimensions.width < 1800) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 1600 && windowDimensions.width < 1700) {
  setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 1500 && windowDimensions.width < 1600) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      } if ((windowDimensions.width > 1300 && windowDimensions.width < 1400)) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        });
        setImg2Style({
            width:'70%',
            height:'100%',         
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-25%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })

      } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-30%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   border:' 5px solid white',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })

      } else if (windowDimensions.width > 1000 && windowDimensions.width < 1100) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "-30%",
        });
        setImgStyle({
          width:'230%',
          height:'230%',
        //   border:' 5px solid white',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        })
;
        setImg2Style({
            width:'70%',
            height:'70%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'180%', 
            marginTop:'-40%', 
            position:'relative'
        })
      }
     else if (windowDimensions.width > 900 && windowDimensions.width < 1000) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginTop: "-50%",
            width:'55%',
            marginLeft:'55%',
        });
        setImgStyle({
          width:'55%',
          height:'55%',
          marginLeft:'-10%',
        //   border:' 5px solid white',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'20%',
            height:'20%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'-15%', 
            marginTop:'40%', 
            position:'relative'
        })

      }
       else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '45px'
        });
        setTextStyle({
            marginTop: "15%",
            width:'100%',
            marginLeft:'00%',
        });
        setImgStyle({
          width:'70%',
          height:'70%',
          marginLeft:'15%',
        //   border:' 5px solid white',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'25%',
            height:'25%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'70%', 
            marginTop:'-15%', 
            position:'relative'
        })
      } else if (windowDimensions.width > 500 && windowDimensions.width < 700) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '35px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "15%",
            width:'100%',
            marginLeft:'0%',
        });
        setImgStyle({
          width:'70%',
          height:'70%',
          marginLeft:'15%',
        //   border:' 5px solid white',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        })
        setImg2Style({
            width:'25%',
            height:'25%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'70%', 
            marginTop:'-15%', 
            position:'relative'
        })


      } else if (windowDimensions.width > 300 && windowDimensions.width < 500) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '30px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "15%",
            width:'100%',
            marginLeft:'0%',
        });
        setImgStyle({
          width:'70%',
          height:'70%',
          marginLeft:'15%',
        //   border:' 5px solid white',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'25%',
            height:'25%',        
            border:' 5px solid white',
            boxShadow: ' 0 5px 10px #505050',
            marginLeft:'70%', 
            marginTop:'-15%', 
            position:'relative'
        })

      } else if (windowDimensions.width > 100 && windowDimensions.width < 300) {
        setTitleStyle({
            marginTop: "-6%",
            fontSize: '22px'
        });
        setTextStyle({
            marginLeft:'38%',
            marginTop: "15%",
            width:'100%',
            marginLeft:'0%',
        });
        setImgStyle({
          width:'100%',
          height:'50%',
          marginTop: "-10%",
          marginLeft:'0%',
        //   border:' 5px solid white',
        //   boxShadow:' 0 20px 30px #505050'
        //   borderShadow:'5px 10px rgb(52, 152, 219,0.5)'
        });
        setImg2Style({
            width:'25%',
            height:'25%',        
            border:' 5px solid white',
            boxShadow:' 0 5px 10px #505050', 
            marginLeft:'70%', 
            marginTop:'-15%', 
            position:'relative'
        })

      }










        

    }, [windowDimensions.width,])
    const { t } = useTranslation();
    return (
        <div id='about-medilink'>
        <section class="about-section" style={{marginTop:'5%'}}>
            <div class="container" style={titleStyle}>
                <div class="title-section">                
                    <h1 style={titleStyle}>{t("about")}
                    <a style={{color:'rgb(52, 152, 219)', textDecoration:'none'}}> {t("us")}</a>
                   </h1>              
                </div>
                <div className='contents'>
                    
                    <div className='col-md-2 col-ms-2'>
                        <img src={img} style={imgStyle}/>
                    </div>
                    <div  className='col-md-7 col-ms-7'style={textStyle}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8}}
                    style={{ textAlign: "justify", marginTop: "0%" }}
                >
                       <a style={{color:'rgb(52, 152, 219)', textDecoration:'none', fontSize:'25px'}}>    Medilink </a>
                       {t("about-medilink-text1")}<br />
                    {t("about-medilink-text2")}<br />
                    {t("about-medilink-text3")}<br />
                    {t("about-medilink-text4")}<br />
                </motion.p>
                    </div>
                  
                </div>
            </div>

        </section>
        </div>
    )
}

export default AboutUs