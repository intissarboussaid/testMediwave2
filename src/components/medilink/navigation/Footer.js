import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useResizeScreen from "../../../utils/useResizeScreen";
import img from "../../../assets/images/HeaderMedilink.png";
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
    <div id="footer" style={{ marginTop: '5%',  backgroundImage: `url(${img})`, backgroundSize:'cover'}}>
      
      <footer className="footerSteriwave ">
        <div class="container-fluid">
          <div class="row">
            {/* <div class="title-section col-md-3 col-sm-3">
              <div class="media-title">
                <h1 style={{color:'white'}}>{t("f-m-t")}</h1>
              </div>
              <ul class="social-icons">
                <li>
                  <a class="facebook">
                  <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a class="instagram">
                  <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin">
                  <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div class="col-md-6 col-sm-6 col-md-offset-3 ">
              <h1 style={{color:'white'}}>{t("f_1")}</h1>
              <p>{t("Scenarios")}</p>
            </div> */}
          </div>
          <p class="copyright">Copyright © 2023 3dwave</p>
          {/* <div className="barr"></div>
          <ul>
            <div class="row col-md-12  col-sm-12">
              <li>
                <div class="col-md-3 col-sm-3">
                  <div class="">
                    <h2>{t("address")}</h2>
                    <p>
                      Rue Amouda Mali Khzema est, <br /> Sousse, Tunisia
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="col-md-6 col-sm-6">
                  <div class="contact">
                    <h2>{t("nous_contacter")}</h2>
                    <p>
                      +216 28 899 806 <br />{" "}
                      <a href="mailto:contact@3dwave.tech">
                        contact@3dwave.tech
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="col-md-18 col-sm-18">
                  <div class="">
                    <h2>{t("horaire")}</h2>
                    <p>
                      {t("time")}
                      <br />

                    </p>
                  </div>
                </div>
              </li>
            </div>
          </ul> */}
        </div>



      </footer>
    




    </div>
  );
};

export default Footer;
