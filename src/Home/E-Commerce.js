import React from "react";
import * as images from '../assets/images/Image';
const Commerce=()=>{
    return(
        <>
        <div className="pageRouter d-mark">
            <section className="ServiceBannerWrapper-04 sect-2">
                <div className="bannerOverlay"></div>
                <div className="bannerimg-style">
                    <div className="h-100 h-sty-01"></div>
                </div>
                <div className="h-100 container">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-12">
                            <h3 className="d-inline-block wow fade-in-bottom re-work">WEB TECHNOLOGY</h3>
                            <br/>
                            <h1 className="d-inline-block wow fade-in-bottom re-work">E-COMMERCE PLATFORMS</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div>
            <div className="subServiceContent sect-2">
                <div className="subServiceContentHeader container">
                    <h2>Online Stores With Enhanced Security And Performance</h2>
                    <h4>Our e-commerce website development is customized to make a lasting impression with diversity. Our agile team of professionals provide integrated solutions
                         that attract the right community leading to successful online marketplaces.</h4>
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
                                                    <div className="uiSubContentCardTitle-3">Real-Time Analytics And Reports</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Instant insight into the performance of websites and sales campaigns with data reporting and analytics.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg18} alt="contentimage" ></img>
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
                                                    <div className="uiSubContentCardTitle-3">Easy To Use</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Enable fully automated process by featuring a simple and intuitive user interface.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg37} alt="contentimage" ></img>
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
                                                    <div className="uiSubContentCardTitle-3">Technology And Framework</div>
                                                    <div className="uiSubContentCardText uiSubContentCardCapyion">
                                                        <p>Powered by proven technology including Magento 2, Shopify , WooCommerce.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="uiSubContentImg">
                                                    <img src={images.dtcontentimg30} alt="contentimage" ></img>
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
export default Commerce;
