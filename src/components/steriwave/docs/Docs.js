import React, { useState } from 'react';
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import doc1 from "../../../assets/images/docs/RAPPORT1.pdf";
import Img1 from "../../../assets/images/docs/ImgRapport1.png";
import doc2 from "../../../assets/images/docs/RAPPORT2.pdf";
import img2 from "../../../assets/images/docs/ImgRapport2.png";
import doc3 from "../../../assets/images/docs/CHUF-apres-Bionettoyage.pdf";
import img3 from "../../../assets/images/docs/imgApresbionettoyageCHUF.png";
import doc4 from "../../../assets/images/docs/AvantBionettoyage.pdf";
import img4 from "../../../assets/images/docs/ImgAvantBionettoyage.png";
import doc5 from "../../../assets/images/docs/ApresBionettoyageEcouvillon.pdf";
import img5 from "../../../assets/images/docs/ImgEcouvillonaux.png";
import doc6 from "../../../assets/images/docs/AvantDesinfection.pdf";
import img6 from "../../../assets/images/docs/ImgAvantdesinfection.png";
import doc7 from "../../../assets/images/docs/ApresDesinfection.pdf";
import img7 from "../../../assets/images/docs/imgApresDesinfection.png";


const Docs = () => {
  
  const { t } = useTranslation();
const [imgStyle,setImgStyle]=useState({
  width:'70%'
});
  const documents = [
    {
      fileUrm: doc1,
      fileName: "",
      imgUrl: Img1
    },
    {
      fileUrm: doc2,
      fileName: "",
      imgUrl: img2
    },
    {
      fileUrm: doc3,
      fileName: "",
      imgUrl: img3
    },
    {
      fileUrm: doc4,
      fileName: "",
      imgUrl: img4
    },
    {
      fileUrm: doc5,
      fileName: "",
      imgUrl: img5
    },
    {
      fileUrm: doc6,
      fileName: "",
      imgUrl: img6
    },
    {
      fileUrm: doc7,
      fileName: "",
      imgUrl: img7
    }
  ]
  const handleDownload = (documentUrl) => {
    window.open(documentUrl, '_blank');
  };
  return (
    <div id='DiscoverOurSolution'>
      <section class="about-section" style={{ marginTop: "-5%" }}>
        <div class="container">
        <div class="title-section">
                        <h1>{t("t1-docs")} <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}>{t("t2-docs")} </a></h1>
                    
                       
                    </div>
          {/* <ul>
            {documents.map((document, index) => (
              <li key={index}>
                {document.fileName}
                <img
                style={imgStyle}
                  src={document.imgUrl}
                  alt="Image"
                  onClick={() => handleDownload(document.fileUrm)}
                />
              </li>
            ))}
          </ul> */}

          <div class="row" style={{ marginTop: "2%" }}>
          {documents.map((document, index) => (
        <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              class="blog-post"
            >
        <div class="col-md-4 col-xs-12">
      
              <div key={index}>
                {document.fileName}
                <img
                style={imgStyle}
                  src={document.imgUrl}
                  alt="Image"
                  onClick={() => handleDownload(document.fileUrm)}
                />
              </div>
         
        </div>
        </motion.div>
           ))}
      </div>


        </div>
      </section>
    </div>
  );
};

export default Docs;




