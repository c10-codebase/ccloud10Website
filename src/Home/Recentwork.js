import React from "react";
import * as images from '../assets/images/Image';
const Works=()=>{
    return(
        <>
       <section className="serviceBannerWrapper sect-2">
        <div className="bannerOverlay" data-v-56d67de0 ></div>
        <div className="h-100 container">
          <div>
            <select>
            {/* <option value={{Digitaltransformation}}>Digitaltransformation</option> */}
            {/* <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option> */}
            </select>
          </div>
          <div className="row h-100 align-items-center">
            <div className="col-md-12" id="bannerscene">
              <h3 className="d-inline-block block_reveal_effect block_reveal_effect_delay_02dark">
                <div>
                  ENTERPRISE APPLICATION DEVELOPMENT
                  <span className="spansty">
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </span>
                </div>
              </h3>
              <br/>
              <h1 className="d-inline-block block_reveal_effect dark">
                <div className="d-inline-block">AUTOMATE BUSINESS PROCESS</div>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="customMadeMobileApply">
        <div className="container">
            <div className="casestudy-content-section">
                <div className="row">
                    <div className="col-sm-12"> 
                    <h1 className="h4 wow fade-in-bottom re-work">
                        A Luxury Fashion House Seeking To The Hornes The Power Of Social Meadia To Connect With a
                        Yunger Audianse
                    </h1>
                    <p className="wow fade-in-bottom re-work">
                    As a newly launched brand, there was a strong need to create buzz and hype in order to accelerate brand value, 
                    brand awareness and engagement with their target audience.
                    </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="approachSection good-sty">
        <div className="container-fluid approach-backround">
            <div className="row">
                <div className="col-md-12">
                    <div className="approach-section-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="approach-content-section dark h-100-1">
                                    <h4 className="wow fade-in-bottom re-work">APPROACH</h4>
                                    <h2 className="wow fade-in-bottom re-work">Digital Business Building</h2>
                                    <p className="wow fade-in-bottom re-work">Keeping brand ideologies in mind, our digital transformation team suggested updating users on fashion shows, news and trends of the luxury fashion house with the help of keywords and notifications.
                                     This approach accelerated engagement and helped build a larger audience base across their social media platforms.</p>
                                </div>
                            </div>
                            <div className="padding-0 col-md-6">
                            <div className="approach-content-section">
                            <h4 className="wow fade-in-bottom re-work">SOLUTION</h4>
                                    <h2 className="wow fade-in-bottom re-work">Enriching Shopping Experience</h2>
                                    <p className="wow fade-in-bottom re-work">For a fast and easy shopping experience, we embedded a chatbot on their website, which helped customers to quickly find apparels they wanted. Additionally,
                                     we increased their social media reach, increased engagement and accelerated brand recognition</p> 
                                     <ul className="wow fade-in-bottom re-work">
                                        <li>Displaying behind the scenes of fashion shows</li>
                                        <li>Pushing notifications to every user who interacted with the chatbot</li>
                                        <li>Optimising funnel for directing customers to their desired set of options</li>
                                     </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="impactsection good-sty">
        <div className="container">
            <h4 className="wow fade-in-bottom re-work">IMPACT</h4>
            <p className="wow fade-in-bottom re-work">The campaigns on social media for BTS videos, 
            customer interaction and feedback gained a steady response</p> 
            <div className="row">
                <div className="col-sm-4 wow fade-in-bottom re-work">
                    <div className="countPersentage">
                        <img src={images.recentwork} alt="style"></img>
                        <div className="calculationPer">10000+</div>
                        <p>users engaged</p>
                    </div>
                </div>
                <div className="col-sm-4 wow fade-in-bottom re-work">
                    <div className="countPersentage">
                        <img src={images.recentwork2} alt="style"></img>
                        <div className="calculationPer">18%</div>
                        <p>increase in mobile orders</p>
                    </div>
                </div>
                <div className="col-sm-4 wow fade-in-bottom re-work">
                    <div className="countPersentage">
                        <img src={images.recentwork3} alt="style"></img>
                        <div className="calculationPer">52%</div>
                        <p>increase in customers</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
        </>
    );
}
export default Works;