import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SyringePump from '../../assets/images/SyringePump.jpg';
import coeurArtificial from '../../assets/images/coeurArtificial.jpg';
import ventilateur from '../../assets/images/ventilateurr.jpg';


function UpcomingProjects() {
    const { t } = useTranslation();
    // useEffect(() => {}, [windowDimensions.width,])
    // const { t } = useTranslation();
    return (
        <div id='UpcomingProjects-section'>
            <section class="about-section" style={{ marginTop: '0%' }}>
                <div class="container">
                    <div class="title-section">
                        <h1>   {t("h_6")}
                            <a style={{ color: 'rgb(52, 152, 219)', textDecoration: 'none' }}> {t("h-6-1")}</a>
                        </h1>
                    </div>

                    <div className="App">
                        <Carousel autoPlay>
                            <div>
                                <img src={SyringePump} style={{ width: '50%' }} alt="Image 1" />
                                <h2 >Syringe Pump</h2>
                                <p> Définissant la perfusion médicale, notre pousse-seringue de pointe assure une administration précise des médicaments. Une solution innovante pour une prise en charge médicale sûre et efficace.
                                </p>
                            </div>
                            <div>
                                <img src={coeurArtificial} style={{ width: '50%' }} alt="Image 2" />
                                <h2 >Coeur artificiel:</h2>
                                <p> L'avenir de la santé cardiaque est en cours de création! Notre solution révolutionnaire est là pour offrir une assistance cardiovasculaire inégalée. Redécouvrez la vitalité avec une technologie qui promet de redéfinir votre bien-être et votre style de vie. </p>
                            </div>
                            <div  >
                                <img src={ventilateur} style={{ width: '30%', height: '20%' }} alt="Image 3" />
                                <h2>Ventilateur: </h2>
                                <p> Un souffle d'innovation dans le domaine de la climatisation. Notre ventilateur promet une expérience utilisateur révolutionnaire, alliant efficacité, intelligence et design sophistiqué pour transformer votre environnement de vie.</p>

                            </div>
                        </Carousel>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default UpcomingProjects