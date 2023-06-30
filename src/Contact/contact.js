import React from "react";
import * as images from '../assets/images/Image';
const Contact=()=> {
    return (
        <>
        
            <main className="no-banner">
                <section className="visual visual-sub visual-no-bg">
                    <div className="visual-inner no-overlay bg-gray-light">
                        <div className="centered">
                            <div className="container">
                                <div className="visual-text visual-center">
                                    <h1 className="visual-title visual-sub-title">Contact Us</h1>
                                    <div className="breadcrumb-block">
                                         <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/"> Home </a></li>
                                            <li className="breadcrumb-item active"> Contact Us </li>
                                        </ol> 
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <div className="content-wrapper">
                    <section className="content-block pb-0">
                        <div className="container">
                            <div className="contact-container">
                                <h6 className="content-title contact-title">GET IN TOUCH WITH US</h6>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <from action="#" method="post" id="contact_form" className="waituk_contact-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" placeholder="FIRST NAME *" id="con_fname" name="con_fname" className="form-control" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="tel" placeholder="PHONE NUMBER" id="con_phone" name="con_phone" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" placeholder="EMAIL ADDRESS *" id="con_email" name="con_email" className="form-control" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="btn-container">
                                                <button id="btn_sent" className="btn btn-primary btn-arrow">SEND MESSAGE</button>
                                                <p id="error_message"> </p>
                                            </div>
                                        </from>
                                    </div>
                                    <div className="col-lg-6 col-xl-5 offset-xl-1">
                                        <div className="info-slot">
                                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                                            <div className="text">
                                                <address>6/16,Kottai Labbai Street,Thimiri
                                                    <br />Ranipet-Dist,Tamil Nadu
                                                    <br />India</address>
                                            </div>
                                        </div>
                                        <div className="info-slot">
                                            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                            <div className="text">
                                                <ul>
                                                    <li><a href="mailto:contact@c10.in">contact@c10.in</a></li>
                                                    {/* <li><a href="mailto:info@roxine-online.com">info@roxine-online.com</a></li>
                                                    <li><a href="mailto:help@roxine-online.com">help@roxine-online.com</a></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <div className="map-holder embed-responsive-21by9 grayscaled-map">
                <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kottai%20labbai%20street%20thimiri+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>  
                </div> 
             </div>
            </main>
            <div className="search-form-wrapper">
                <a href="#" className="nav-search-link close"><span className="icon-android-close"></span></a>
                <div className="holder">
                    <input type="search" className="form-control form-control-v1" placeholder="Enter Your Search" />
                    <button type="submit"><span className="custom-icon-search"></span></button>
                </div>
            </div>

        </>
    );
}

export default Contact;