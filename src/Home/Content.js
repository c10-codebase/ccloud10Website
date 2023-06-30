import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import * as images from "../assets/images/Image";

const Content=()=>{
    return(
        <>
          <div className="content-wrapper">
            <section className="content-block">
              <div className="container">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center">
                    <div className="col-wrap">
                      <div className="block-heading">
                        <h3 className="block-top-heading">WHAT WE DO</h3>
                        <h2 className="block-main-heading">EXPERTS</h2>
                        <span className="block-sub-heading">We build digital solutions.</span>
                        <div className="divider">
                          <img src={images.divider} alt="images description"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                      <div className="icon">
                      <img src={images.penlogo} className="vector-style"></img>
                        </div>
                        <h4 className="content-title"><a href="/Digitaltrans">DIGITAL TRANSFORMATION</a></h4>
                        <div className="des">
                           <p>                           
                           Digital Marketing<br/>
                           Digital Strategy                            
                           </p>
                           <div class="link-holder">
                          <a class="link-more" href="/Digitaltrans">LEARN MORE</a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={images.vector} className="vector-style"></img>
                        </div>
                        <h4 className="content-title">
                          <a href="/Uxweb">
                            UI/UX & <br />
                            DESIGN
                          </a>
                        </h4>
                        <div className="des">
                          Mobile & Web Design <br/>
                           UX Strategy 
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Uxweb">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={images.sds} className="style-sds"></img>
                        </div>
                        <h4 className="content-title"><a href="/Mobile">MOBILE <br/>
                         ENGINEERING</a></h4>
                        <div className="des">                         
                            Android Development<br/>
                             iOS Development
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Mobile">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i class="fa fa-cogs" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="Technology">WEB TECHNOLOGY DEVELOPMENT</a></h4>
                        <div className="des">
                            e-Commerce Platforms
                          Custom Web Applications
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="Technology">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Innovation">INNOVATION TECHNOLOGY</a></h4>
                        <div className="des">                                                      
                             Machine Learning & AI<br/>
                             Internet of Things                         
                        </div>
                        <div className="link-holder">
                          <a className="link-more" href="/Innovation">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i class="fa fa-ravelry" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Development">ENTERPRISE APP DEVELOPMENT</a></h4>
                        <div className="des">                                                  
                             point Of Sale<br/>                            
                             liBusiness Intelligence
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Development">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Cloud">CLOUD<br/>
                        SERVICE
                        </a></h4>
                        <div className="des">                          
                          Private Cloud and Infrastructure <br/>                      
                          Cloud Hyper Automation Platform                         
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Cloud">LEARN MORE</a>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 h-100">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Engineering">PERFORMANCE ENGINEERING</a></h4>
                        <div className="des">
                          Quality assurance as a service<br/>
                               Optimization                           
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Engineering">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
             <section
              className="content-block quotation-block black-overlay-6 parallax"
              data-stellar-background-ratio="0.55">
              <div className="container">
                <div className="inner-wrapper">
                  <h3 className="block-top-heading text-white">BEST EVER DESIGN</h3>
                  <h2 className="text-white">Time to enhance your web presence!</h2>
                  <div className="btn-container">
                    <a href="#" className="btn btn-primary has-radius-small">GET QUOTATION</a>
                  </div>
                </div>
              </div>
            </section> 
            <section className="content-block portfolio-block" id="container">
              <div className="bottom-space text-center text-uppercase">
                <h2>Our Work</h2>
              </div>
                   <ul className="filter-nav text-center button-group filter-button-group">
                     <li className="li-style">
                      <button data-filter="*">ALL</button>
                    </li>
                   <li className="li-style">
                      <button data-filter=".ui">UI/UX DESIGN</button>
                  </li>
                  <li className="li-style">
                  <button data-filter=".programming">PROGRAMMING</button>
                </li>
                <li className="li-style">
                  <button data-filter=".photography">PHOTOGRAPHY</button>
                </li>
                <li className="li-style">
                  <button data-filter=".ecommerce">ECOMMERCE</button>
                </li>
              </ul>
              <div className="row grid">
                <div className="gallery-item col-lg-4 col-md-6 ui photography">
                  <figure className="picture-item img-block shine-effect image-zoom port-v2">
                    <img src={images.Newimg1} alt="images description" />
                    <figcaption>
                      <div className="link-box">
                        <a href="#">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="gallery-item col-lg-4 col-md-6 photography programming">
                  <figure className="picture-item img-block shine-effect image-zoom port-v2">
                    <img src={images.Newimg16} alt="images description" />
                    <figcaption>
                      <div className="link-box">
                        <a href="#">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="gallery-item col-lg-4 col-md-6 ui photography">
                  <figure className="picture-item img-block shine-effect image-zoom port-v2">
                    <img src={images.Newimg18} alt="images description" />
                    <figcaption>
                      <div className="link-box">
                        <a href="#">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="gallery-item col-lg-4 col-md-6 ecommerce programming">
                  <figure className="picture-item img-block shine-effect image-zoom port-v2">
                    <img src={images.Newimg7} alt="images description" />
                    <figcaption>
                      <div className="link-box">
                        <a href="#">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="gallery-item col-lg-4 col-md-6 programming ecommerce">
                  <figure className="picture-item img-block shine-effect image-zoom port-v2">
                    <img src={images.Newimg8} alt="images description" />
                    <figcaption>
                      <div className="link-box">
                        <a href="#">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="gallery-item col-lg-4 col-md-6 ecommerce ui">
                  <figure className="picture-item img-block shine-effect image-zoom port-v2">
                    <img src={images.Newimg9} alt="images description" />
                    <figcaption>
                      <div className="link-box">
                        <a href="#">
                          <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="content-block pt-0">
              <div className="container">
                <div className="block-heading bottom-space">
                  <h2 className="block-main-heading">CONSULTING</h2>
                  <div className="divider"><img src={images.divider} alt="images description" /></div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="bottom-space-small-only">
                      <p>
                      Want to unleash your business's full potential? Look no further than our top-notch consulting services.
                       We have helped countless clients from varying industries fulfil their objectives, thanks to our extensive knowledge and experience.
                        When it comes to guiding your business towards success, count on us we will deliver the results you are looking for.
                      </p>
                      <p>
                      Unlock Your Business's Potential with Our Team
                      Are you looking for the missing piece that can take your business to the next level? Look no further than our expert team of service providers.
                      </p>
                      <div className="btn-container top-m-space">
                        <a href="#" className="btn btn-black has-radius-small">VIEW PROJECTS</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bottom-s-space">
                      <p>
                      With our extensive knowledge and experience,
                       we can help your business reach new heights and unlock its full potential.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="content-links">
                          <li className="li-style"><a href="#">PRODUCT ENGINEERING</a></li>
                          <li className="li-style"><a href="#">UI/UX DESIGN</a></li>
                          <li className="li-style"><a href="#">ENTERPRISE IT SOLUTIONS</a></li>
                          <li className="li-style"><a href="#">DEDICATED DEV TEAM</a></li>
                          <li className="li-style"><a href="#">STAFF AUGMENTATION</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="content-links">
                          <li className="li-style"><a href="#">PROJECT OUTSOURCE</a></li>
                        </ul>
                      </div>
                      <div className="frount end">
                    <p>Front - End & Mobile Technologies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="work-section" className="content-block work-block">
              <div className="bg-stretch">
                <img src={images.Newimg11} alt="" />
              </div>
              <div className="container">
                <div className="block-heading bottom-space text-center">
                  <h3 className="block-top-heading">WORK PLACE</h3>
                  <h2 className="block-main-heading">THE CULTURE</h2>
                  <span className="block-sub-heading">
                    Lovely people with nack for design creativity flourish here.</span>
                  
                  <div className="divider"><img src={images.divider} alt="images description" /></div>
                </div>
                <div className="description text-center container-md">
                  <div className="text-white">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="content-block">
              <div className="container">
                <div className="block-heading bottom-space">   
                  <h2 className="block-main-heading">OUR SERVICES</h2>
                  <span className="block-sub-heading"
                    >At Cloud 10, we are developing digital solutions for our clients by leveraging the best of technology and combining it with a human touch.
                     We are a team of technology evangelists. We believe in maximizing the output and making a difference to the lives of users in the long run. We are the voice of technology for our clients. We love to explore new technologies and understand what it takes to make a difference. We believe in building lasting relationships with our clients
                  </span><br/>
                  <h4 className="block-main-heading">Custom Development</h4>
                  <p>
                  Don't settle for mediocre results. Let our team of development masters help you stand out from the crowd.
                   Our custom development services are designed to provide businesses of any size or scale with exceptional results that are tailored to meet your unique needs.
                    With our experts on the job, you can rest easy knowing that we always prioritize Quality, Customer Experience, and feasibility, delivering products that leave a lasting impression.
                  </p>
                  <ul className="service-block">
                    <li>Mobile Applications</li>
                    <li>Web Application Development</li>
                    <li>SOLUTION BASED: - IOT , AI  & ML</li>
                  </ul>
                  <div className="divider"><img src={images.divider}alt="images description" /></div>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="d-flex justify-content-center mb-4">
  </div>
  <div className="carousel-inner py-4">
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg2} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">JASON STRATHAM</strong>
                          <span className="sub">UI/UX GURU</span>
                        </figcaption>
                   </figure>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg19} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">JESSICA FIZOVIC</strong>
                          <span className="sub">UI/UX GURU</span>
                       </figcaption>
                 </figure>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg10} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">JAMES NASS</strong>
                          <span className="sub">UI/UX GURU</span>
                        </figcaption>
                </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg17} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">STEVE MANNING</strong>
                          <span className="sub">UI/UX GURU</span>
                        </figcaption>
                      </figure>
            </div>
          </div>
           <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg20} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">JESSICA FIZOVIC</strong>
                          <span className="sub">UI/UX GURU</span>
                       </figcaption>
                </figure>
            </div>
          </div> 
           <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg2} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">JASON STRATHAM</strong>
                          <span className="sub">UI/UX GURU</span>
                     </figcaption> 
              </figure>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container">
        <div className="row">
           <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg21} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">JAMES NASS</strong>
                          <span className="sub">UI/UX GURU</span>
                        </figcaption>
                   </figure>
            </div>
          </div> 
           <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg22} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">JASON STRATHAM</strong>
                          <span className="sub">UI/UX GURU</span>
                        </figcaption>
                      </figure>
               </div>
            </div> 
           <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
            <figure className="team-box caption-fade-up">
                        <div className="img-block rev-gray-scale">
                          <img src={images.Newimg23} className="d-block w-100 " alt="images description" />
                        </div>
                        <figcaption className="text-right">
                          <strong className="content-title mb-0">STEVE MANNING</strong>
                          <span className="sub">UI/UX GURU</span>
                        </figcaption>
                      </figure>
                 </div>
             </div> 
          </div>
        </div>
      </div>
    </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="sr-only">Next</span>
          </button>
        </div>
       </div>
     </section>
            <section
              className="content-block count-block text-center p-0 parallax"
              data-stellar-background-ratio="0.55">
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-sm-3 col-lg-3">
                    <div className="col-wrap">
                      <div className="icon">
                      <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                      </div>
                      <h3 className="number">505</h3>
                      <div className="text text-uppercase">TOTAL PROJECTS</div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-lg-3">
                    <div className="col-wrap">
                      <div className="icon">
                      <i className="fa fa-smile-o" aria-hidden="true"></i>
                      </div>
                      <h3 className="number">220</h3>
                      <div className="text text-uppercase">SATISFIED CLIENTS</div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-lg-3">
                    <div className="col-wrap">
                      <div className="icon">
                      <i className="fa fa-fire" aria-hidden="true"></i>
                      </div>
                      <h3 className="number">720</h3>
                      <div className="text text-uppercase">AWARDS WON</div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-lg-3">
                    <div className="col-wrap">
                      <div className="icon">
                      <i className="fa fa-sign-language" aria-hidden="true"></i>
                      </div>
                      <h3 className="number">707</h3>
                      <div className="text text-uppercase">MILESTONES MET</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="content-block bg-gray-light">
              <div className="container">
                <div className="block-heading bottom-space text-center">
                  <h3 className="block-top-heading">HEAR FROM</h3>
                  <h2 className="block-main-heading">TESTIMONIALS</h2>
                  <span className="block-sub-heading">We always listen to our clients.</span>
                  <div className="divider"><img src={images.divider} alt="images description" /></div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                       <div className="carousel-item active">
                          <img src={images.people02} className=" rounded mx-auto d-block w-15 rounded-circle" alt="..."/> 
                            <div className="carousel-caption d-none d-md-block">
                         </div>
                               <div className="text-center">
                                 <h5 className="block-sub-heading">Natalie Fullick</h5>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                      tempor incididunt ut labore et dolore magna aliqua.</p>
                                  </div>
                              </div>
                                   <div className="carousel-item">
                                        <img src={images.people03} className="rounded mx-auto d-block w-15 rounded-circle" alt="..."/> 
                                         <div className="carousel-caption d-none d-md-block">
                                     </div>
                                         <div className="text-center">
                                            <h5 className="block-sub-heading">Jason Doe</h5>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                               tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                          </div>
                                             <div className="carousel-item"> 
                                                <img src={images.people02} className="rounded mx-auto d-block w-15 rounded-circle " alt="..."/> 
                                                 <div className="carousel-caption d-none d-md-block">
                                             </div>
                                                <div className="text-center">
                                              <h5 className="block-sub-heading">Jake Grahm</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                              </div>
                                            </div>
                                                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                                                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </button>
                                                  <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                                                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                  <span className="sr-only">Next</span>
                                                </button>
                                            </div>          
                                          </div>
                                      </section>     
                                   </div>
                                 </>
                               );
                              }
export default Content;