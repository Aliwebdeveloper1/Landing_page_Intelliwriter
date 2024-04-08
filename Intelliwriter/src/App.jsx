import React from 'react'
import HeroSection from './Components/HeroSection'
import Magnetism from './Components/Magnetism';
import Strategy from './Components/Strategy';
import WorkSlider from './Components/WorkSlider';
import Choose from './Components/Choose';
import Aslam from './Components/Aslam';
import Services from './Components/Services';
import Midbanner from './Components/Midbanner';
import Clients from './Components/Clients';
import Insight from './Components/Insight';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    <div>
    <HeroSection/>
    <Magnetism/>
    <Strategy/>
    <Choose/>
    <Services/>
    <Midbanner/>
    <WorkSlider />
    <Clients/>
    <Insight/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
};

export default App