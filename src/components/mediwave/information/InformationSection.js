import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const InformationSection = (props) => {
  const { t } = useTranslation();
  return (
    <div style={{marginTop:'5%'}}>
      <section class="statistic-section">
        <div class="container">
          <div class="col-md-12" style={{marginTop:'5%'}}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{
                color: "white",
                fontSize: "20px",
                marginTop: "3%",
                marginBottom: "3%",
                textAlign: "center",
                marginBottom: "2%",
                fontWeight: "100",                
              }}
            >
              {t("Scenarios")}
            </motion.h1>
          </div>
          <div class="statistic-box">
            <div class="row">
              <div class="col-md-4 col-sm-6" >
                <div class="statistic-post">
                  <p class="stat-timer">
                    <span class="timer" data-from="0" data-to="125"></span>
                    <CountUp end={71} duration={3} /> %
                  </p>
                  <h2></h2>
                  <p>{t("B_1")}</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="statistic-post">
                  <p class="stat-timer">
                    <span class="timer" data-from="0" data-to="750"></span>
                    <CountUp end={284} duration={3} />M{/* 284M */}
                  </p>
                  <h2></h2>
                  <p >{t("B_2")}</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="statistic-post">
                  <p class="stat-timer" >
                    <span class="timer" data-from="0" data-to="170"></span>
                    <CountUp end={63} duration={3} /> %
                  </p>
                  <h2></h2>
                  <p >{t("B_3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformationSection;
