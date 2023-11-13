import React from "react";
import nosTherapeute from "../../../assets/images/nosTherapeute.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NosTherapeute = (props) => {
  const { t } = useTranslation();

  return (
    <div id="therapists-section">
      {/* Nos Thérapeute */}
      <section>
        <div class="container-fluid"></div>
        <div class="row">
          <div class="col-lg-12">
            <div class="col-lg-4">
              <div
                class="title-section"
                style={{
                  marginTop: "15%",
                  marginLeft: "10%",
                  // marginRight: "15%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1>{t("THERAPISTS")}</h1>
                {/* <p>Sed arcu. Cras consequat.</p> */}
              </div>
              <motion.p
                style={{
                  fontSize: "22px",
                  textAlign: "justify",
                  marginLeft: "5%",
                  marginRight: "5%",
                  marginBottom: "10%",
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {t("THERAPISTS_1")}
                <br />
                {t("THERAPISTS_2")}
              </motion.p>
            </div>
            <div class="col-lg-8">
              <img
                src={nosTherapeute}
                alt=""
                style={{
                  width: "100%",
                  height: "640px",
                  // borderRadius: "10px",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosTherapeute;
