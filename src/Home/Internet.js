import React from "react";
import * as images from '../assets/images/Image';
const Internet=()=>{
    return(
        <>
        <div className="pageRouter d-mark">
            <section className="ServiceBannerWrapper-05 sect-2">
                <div className="bannerOverlay"></div>
                <div className="bannerimg-style">
                    <div className="h-100 h-sty-01"></div>
                </div>
                <div className="h-100 container">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-12">
                            <h3 className="d-inline-block wow fade-in-bottom re-work">INNOVATION</h3>
                            <br/>
                            <h1 className="d-inline-block wow fade-in-bottom re-work">INTERNET OF THINGS</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div>
            <div className="subServiceContent sect-2">
                <div className="subServiceContentHeader container">
                    <h2>Connecting Smart Hardware Ecosystem</h2>
                    <h4>Enhance everyday life with IoT technology and transform business needs to tangible solutions. We customize IoT application development to
                         support multi-functional transformation through secure communication and data processing between devices.</h4>
                </div>
                <div className="container">
                    <section className="uiSubContentWrapper sect-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="uiSubContentCard">
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                                <div className="uiSubContentCardBody">
                                                    <div className="uiSubContentCardTitle-4">Integration</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Robust framework that enhances optimization between the platform and
                                                             enterprise systems through communication modes like Wi-Fi, Bluetooth, iBeacon, NFC, RFID and Zigbee Wireless.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg50} alt="contentimage" ></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="uiSubContentCard">
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                                <div className="uiSubContentCardBody">
                                                    <div className="uiSubContentCardTitle-4">Data Sync</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Built on a platform that is embedded into applications for easy data transfer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg51} alt="contentimage" ></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="uiSubContentCard">
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                                <div className="uiSubContentCardBody">
                                                    <div className="uiSubContentCardTitle-4">Control</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Easy control of electronic devices using interrelated computing devices.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg52} alt="contentimage" ></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                  </div>   
                </div>
                    <div className="transform_section">
    <section className="{'mb-0':!showIndustriesSwiper} sect-2 ">
    <div className="transform_busines_wrapper">
      <div id="stars">
        <div id="title">
          <div>
            <div className="h-01">Have a Question? We're Happy to help</div>
            <a href="/contact" className="servcontact">
              <div className="customArrow pl-0 undefined servstyle-con">
              <button type="button" className="btn-serv position-relative button-link buttonlink btn-secondary butsty-1">
                        <div className="custom_btn_front">
                        <div className="row align-items-center justify-content-center">
                        <div className="col">
                        <div className="d-inline-block blo-sty-2">Contact Us</div>
                        </div>
                        <div className="col-auto pl-0">
                        <div className="d-inline-block astArrowWrapper buticon">
                        <div className="btn-arrow-wrapper">
                            <div className="customArrow">
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                        </div>
                        </div>
                     </div>
                 </button>
              </div>
            </a>
          </div>
          </div>      
      </div>
    </div>
    </section>
      </div>         
        </>
        );
    }
export default Internet;