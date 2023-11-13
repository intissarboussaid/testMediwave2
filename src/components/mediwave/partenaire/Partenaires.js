import React from "react";
import enis from "../../../assets/images/enis.png";
import threedwave from "../../../assets/images/3dwave.png";
import virotek from "../../../assets/images/virotek.png";
import CTMBH from "../../../assets/images/CTMBH.png";
import FMM from "../../../assets/images/FMM.png";
import MS from "../../../assets/images/MS.png";
import actia from "../../../assets/images/Actia.png";
import CIMS from "../../../assets/images/CIMS.png";
import TIM from "../../../assets/images/TIM.png";
import fms from "../../../assets/images/fms_logo.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


const Partenaires = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <section class="">
        <div class="container">        
          <div class="row" style={{ marginTop: "2%" }}>
          <div class="title-section">                
                    <h1> {t("Partners1")}
                    <a style={{color:'rgb(52, 152, 219)', textDecoration:'none'}}> {t("Partners2")}</a>
                   </h1>              
                </div>
              
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12">
              <img
                src={virotek}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%", width:'50%' }}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12">
              <img
                src={CTMBH}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%", width:'50%' }}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12">
              <img
                src={FMM}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%", width:'50%' }}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12">
              <img
                src={MS}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%", width:'50%'}}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12">
              <img
                src={CIMS}
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
            <div class="container col-md-3 col-xs-12" >
              <img
                src={enis}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%", width:'50%', height:'9%'}}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12"  >
              <img
                src={threedwave}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%"  , width:'50%', height:'10%'}}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12">
              <img
                src={fms}
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
            <div class="col-md-3 col-xs-12">
              <img
                src={actia}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "20%", width:'70%', height:'10%' }}/>
            </div>
            </motion.div>
            <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  class="blog-post"
                >
            <div class="col-md-3 col-xs-12">
              <img
                src={TIM}
                alt=""
                height={110}
                style={{ borderRadius: "2%", marginTop: "2%", width:'70%', height:'10%' }}/>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partenaires;
