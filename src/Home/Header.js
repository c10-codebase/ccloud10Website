
import React from 'react';
import * as images  from '../assets/images/Image';
const Header=()=>{
    return(
        <>
              {/* <header
          className="fixed-top main-header header-white transparent with-side-panel-ico "
          id="waituk-main-header">
          <div id="nav-section">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">      
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<a className="navbar-brand mr-auto m-sm-auto" href="/">
                  <img src={images.logoblue} width={80} height={80} alt="Cloud 10" loading='lazy' className='d-inline-block align-top' />
                </a>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarTogglerDemo03">
                  <ul className="nav navbar-nav ml-auto">
                    <li className="dropdown" data-animation="fadeIn">
                      <a
                        className="dropdown-toggle active"
                        data-toggle="dropdown"
                        href="/"
                        data-title="Home">
                        <p className="nav-link"> Home</p> 
                      </a>
                    </li> 
                    <li>
                      <a href="/about"><p className="nav-link active"> About </p></a>
                    </li>
                    <li>
                      <a href='/service'><p className='nav-link active'>Service</p></a>
                    </li>
                    <li>
                      <a href="/contact"><p className="nav-link active"> Contact</p> </a>
                    </li>
                     </ul>
                 </div>
               </nav>
             </div>
           </header> */}  
           <header className="fixed-top main-header header-white no-top-header " id="waituk-main-header">
                <div id="nav-section">
                    <div className="bottom-header container-fluid mega-menus" id="mega-menus">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <button type="button" className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#mega-menu">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand mr-auto m-sm-auto" href="/"> <img src={images.logoblue} width={80} height={80} alt="roxine"/> </a>
                            <div className="collapse navbar-collapse flex-row-reverse" id="mega-menu">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown" data-animation="fadeIn">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="/" data-title="Home"> Home </a>
                                    </li>
                                    <li>
                                        <a href="/about"> About </a>
                                    </li>
                                    <li>
                                        <a href="/service"> Service </a>
                                    </li>                                                                   
                                    <li>
                                        <a href="/contact"> Contact </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="navbar-pos-search">
                                <a href="#" className="x-search x-search-trigger navbar-link"><i className="custom-icon-search"></i></a>
                                <a href="#" className="x-search icon-close-round navbar-link"><i className="icon-line-cross"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
           
        </>
    );
}
export default Header;