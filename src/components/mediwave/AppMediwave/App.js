import React from 'react';
import VideoHeader from '../videoheader/Header';
import Navbar from '../navigation/Navbar';
import Footer from "../../mediwave/navigation/Footer";
import Contact from '../../mediwave/contact/Contact';
import AboutUs from '../aboutUs/AboutUs';
import UpcomingProjects from '../UpcomingProjects';
import Information from "../information/InformationSection";
import DiscoverUs from '../ourSolution/DiscoverUs';
import '../AppMediwave/AppMediwave.css';
import Partenaires from '../partenaire/Partenaires';



function Home() {
  return (
    <>
      <VideoHeader />
      <Navbar />
      <AboutUs />
      <DiscoverUs />
      <UpcomingProjects/>
      <Information/>
      <Partenaires/>
      
      <Contact />
      <div className='footeer'>
      <Footer />
      </div>
    </>
  )
}

export default Home