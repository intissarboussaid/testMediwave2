import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import img from "../../../assets/images/headerSteriwave.jpg";
const Footer = () => {
  const { t } = useTranslation();
  const [top, setTop] =useState('5%');
  const windowDimensions = useResizeScreen();
  useEffect(() => {

    if (windowDimensions.width > 2200) {
 
    } else if (windowDimensions.width > 2100 && windowDimensions.width < 2200) {

    } else if (windowDimensions.width > 2000 && windowDimensions.width < 2100) {

    } else if (windowDimensions.width > 1900 && windowDimensions.width < 2000) {

    } else if (windowDimensions.width > 1800 && windowDimensions.width < 1900) {

    } else if (windowDimensions.width > 1700 && windowDimensions.width < 1800) {

    } else if (windowDimensions.width > 1600 && windowDimensions.width < 1700) {
      
    } else if (windowDimensions.width > 1500 && windowDimensions.width < 1600) {
          
    } else if (windowDimensions.width > 1400 && windowDimensions.width < 1500) {
       
    } else if (windowDimensions.width > 1300 && windowDimensions.width < 1400) {
       
    } else if (windowDimensions.width > 1200 && windowDimensions.width < 1300) {
    
    } else if (windowDimensions.width > 1100 && windowDimensions.width < 1200) {
 
    } else if (windowDimensions.width > 1000 && windowDimensions.width < 1100) {
    
    } else if (windowDimensions.width > 900 && windowDimensions.width < 1000) {
   
    } else if (windowDimensions.width > 700 && windowDimensions.width < 900) {
   
    } else if (windowDimensions.width > 500 && windowDimensions.width < 700) {
    
    } else if (windowDimensions.width > 300 && windowDimensions.width < 500) {
    
    } 
    else if (windowDimensions.width > 200 && windowDimensions.width < 300) {
   
    }else if (windowDimensions.width > 100 && windowDimensions.width < 300) {
  
    }
   
  }, [windowDimensions.width,]);

  return (
    <div id="footer" style={{  backgroundImage: `url(${img})`, backgroundSize:'cover'}}>
      
      <footer className="footerSteriwave ">
        <div class="container-fluid">
          <div class="row">
          
            <div class="col-md-6 col-sm-6 col-md-offset-3 ">
              <h1 style={{color:'white'}}>{t("f_1")}</h1>
              <p>{t("Scenarios")}</p>
            </div>
          </div>
          <p class="copyright">Copyright © 2023 3dwave</p>         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
