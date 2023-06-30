import React from "react";
import * as images from '../assets/images/Image';
const Resource=()=>{
    return(
        <>
        <div className="pageRouter d-mark">
            <section className="ServiceBannerWrapper-06 sect-2">
                <div className="bannerOverlay"></div>
                <div className="bannerimg-style">
                    <div className="h-100 h-sty-01"></div>
                </div>
                <div className="h-100 container">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-12">
                            <h3 className="d-inline-block wow fade-in-bottom re-work">ENTERPRISE APPLICATION DEVELOPMENT</h3>
                            <br/>
                            <h1 className="d-inline-block wow fade-in-bottom re-work">ENTERPRISE RESOURCE PLANNING</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div>
            <div className="subServiceContent sect-2">
                <div className="subServiceContentHeader container">
                    <h2>Enhance Market Potential</h2>
                    <h4>A comprehensive enterprise app development software that provides a complete management suite in terms of production, management, distribution, inventory, finance
                         and human resource that scales and supports application evolution.</h4>
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
                                                    <div className="uiSubContentCardTitle-5">Integration</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Make the best of an integrated design-build-run model to streamline implementation.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg19} alt="contentimage" ></img>
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
                                                    <div className="uiSubContentCardTitle-5">Data Migration</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Perform programmatically to achieve an automated migration, freeing up human resources from tedious tasks.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg7} alt="contentimage" ></img>
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
                                                    <div className="uiSubContentCardTitle-5">Accessibility</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Provide centralized access to all information to accelerate decision making process.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg9} alt="contentimage" ></img>
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
export default Resource;