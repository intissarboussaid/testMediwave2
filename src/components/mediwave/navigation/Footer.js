import React from "react";
import { useTranslation } from "react-i18next";
import './Footer.css';
import backgroundImg from'../../../assets/images/backgroudMediwave1.jpg';
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer">
      
      <footer className="footerMediwave" >
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
            <div class="col-md-6 col-sm-12 col-md-offset-3 ">
              <h1 style={{color:'white', fontSize:'30px'}}>{t("f_1")}</h1>
              <p>{t("Scenarios")}</p>
            </div>
          </div>
          <p class="copyright">Copyright © 2023 3dwave</p>
          {/* <div className="barr"></div> */}
          {/* <ul>
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
