import React from 'react';
import { Route,Routes } from 'react-router-dom';
import 'jquery/src/jquery';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/carousel';
//import './assets/pages/headerstyle.css'
import './assets/pages/genralStyle.css';
import './assets/pages/borderPages.css';
import './assets/pages/headerPages.css';
import './assets/pages/bannerPage.css';
import './assets/pages/buttonBtn.css';
import './assets/pages/searchForm.css';
import './assets/pages/contentBlock.css';
import './assets/pages/blogPage.css';
import './assets/pages/parallaxPages.css';
import './assets/pages/galleryList.css';
import './assets/pages/teamPages.css';
import './assets/pages/countBlock.css';
import './assets/pages/testimonialPage.css';
import './assets/pages/logBlock.css';
import './assets/pages/newsLetter.css';
import './assets/pages/postBlock.css';
import './assets/pages/elementPages.css';
import './assets/pages/blockHeading.css';
import './assets/pages/footerPage.css';
import './assets/pages/utilitiesPage.css';
import './assets/pages/icon.css';
import './assets/pages/ux.css';
import './assets/pages/servicePage.css'
import Contact from './Contact/contact';
import Home from './Home/Home'; 
import Header from './Home/Header';
import Footer from './Home/Footer';
import About from './About/about';
import Nav from './Home/Nav';
 import Digital from './Home/Digital trans';
import Uxweb from './Home/ux';
import Mobile from './Home/Mobile';
import Technology from './Home/Technology';
import Innovation from './Home/Innovation';
import Development from './Home/Development';
import Cloud from './Home/Cloud';
import Engineering from './Home/Engineering';
import Servises from './Home/Services';
import Works from './Home/Recentwork';
import Marketing from './Home/Digital-marketing';
import Strategy from './Home/Digital-Strategy';
import Analys from './Home/Data-analys';
import Ecosystem from './Home/Ecosystem';
import Branding from './Home/Branding';
import DigitalStrategy from './Home/Strategy';
import Webdesing from './Home/Web-Desing';
import Androiddev from './Home/Android-dev';
import Iosdev from './Home/IOS-Dev';
import Native from './Home/Native-Dev';
import Wearable from './Home/Wearable-Dev';
import Hybrid from './Home/Hybrid-Dev';
import Management from './Home/Management';
import Commerce from './Home/E-Commerce';
import Application from './Home/Web-Application';
import Augmented from './Home/Augmented';
import Machine from './Home/Machine';
import Internet from './Home/Internet';
import Resource from './Home/Resource';
import Point from './Home/Point';
import Customer from './Home/Customer';
import Workflow from './Home/Workflow';
import Business from './Home/Business';
import Quality from './Home/Quality';
import Architecture from './Home/Architecture';


const App=()=> {
  return (
    <div>
        <Nav/> 
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Servises/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Digitaltrans' element={<Digital/>}/>
        <Route path='/Uxweb' element={<Uxweb/>}/>
        <Route path='/Mobile' element={<Mobile/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='/Innovation' element={<Innovation/>}/>
        <Route path='/Development' element={<Development/>}/>
        <Route path='/Cloud' element={<Cloud/>}/>
        <Route path='/Engineering' element={<Engineering/>}/>
        <Route path='/Work' element={<Works/>}/>
        <Route path='/Digital-marketing' element={<Marketing/>}/>
        <Route path='/Digital-Strategy' element={<Strategy/>}/>
        <Route path='/Data-analytics' element={<Analys/>}/>
        <Route path='/Ecosystem' element={<Ecosystem/>}/>
        <Route path='/Branding' element={<Branding/>}/>
        <Route path='/Strategy' element={<DigitalStrategy/>}/>
        <Route path='/Web-desing' element={<Webdesing/>}/>
        <Route path='/Android-Dev' element={<Androiddev/>}/>
        <Route path='/IOS-Dev' element={<Iosdev/>}/>
        <Route path='/React-native' element={<Native/>}/>
        <Route path='/Wearable-dev' element={<Wearable/>}/>
        <Route path='/Hybrid-Dev' element={<Hybrid/>}/>
        <Route path='/Management' element={<Management/>}/>
        <Route path='/E-Commerce' element={<Commerce/>}/>
        <Route path='/Web-Application' element={<Application/>}/>
        <Route path='/Augmented-virtual' element={<Augmented/>}/>
        <Route path='/Machine-learning' element={<Machine/>}/>
        <Route path='/Internet' element={<Internet/>}/>
        <Route path='/Enterprise-resourse' element={<Resource/>}/>
        <Route path='/Point-sale' element={<Point/>}/>
        <Route path='/Customer-relation' element={<Customer/>}/>
        <Route path='/Workflow' element={<Workflow/>}/>
        <Route path='/Business-intelligens' element={<Business/>}/>
        <Route path='/Quality-assuranse' element={<Quality/>}/>
        <Route path='/Architecture' element={<Architecture/>}/>
      </Routes>
      <Footer/>
    </div>
     
  );
}

export default App;
