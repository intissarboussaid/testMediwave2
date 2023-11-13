import React from "react";
import enis from "../../../assets/images/enis.png";
import threedwave from "../../../assets/images/3dwave.png";
import fms from "../../../assets/images/fms_logo.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import imgBackgroun from '../../../assets/images/backgroundPartenaire.jpg'
function OurPartenaires() {
    const { t } = useTranslation();
  return (
    <div id="Partenaires">
          <div class="container">          
          <div class="row" style={{ marginTop: "2%" }}>
        
          <div class="title-section">
            <h1>Our Partenaires</h1>
          </div>
          <div className="col-lg-12 col-md-12 col-ls-12 ">
          <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-4 col-xs-12" >
              <img
                src={enis}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%"}}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-4 col-xs-12"  >
              <img
                src={threedwave}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%" }}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-4 col-xs-12">
              <img
                src={fms}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%" }}/>
            </div>
            </motion.div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurPartenaires