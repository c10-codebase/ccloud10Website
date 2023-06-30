import React from "react";

const Nav=()=> {
    return(
        <>
        <nav className="nav-wrap bg-white">
      {/*opener inside of collapsible menu */}
      <div className="nav-trigger nav-trigger-close">
        <a href="#">Close Panel <i className="icon-long-arrow-right"></i> </a>
        <div className="divider-border"><span className="sr-only"></span></div>
      </div>

      <div className="col-sm-6 pb-3">
        <a href="#" className="btn btn-black btn-small-font btn-solid-facebook has-radius-small">
          <span className="icon-facebook"><span className="sr-only">&nbsp;</span></span> LOGIN WITH
          FACEBOOK</a>
        
      </div>
      <div className="col-sm-6">
        <a href="#" className="btn btn-black btn-small-font btn-solid-google has-radius-small">
          <span className="icon-google-plus"><span className="sr-only">&nbsp;</span></span> LOGIN WITH
          GOOGLE</a>
        
      </div>
      <div className="divider-border"><span className="sr-only"></span></div>
      <ul className="side-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog-single.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <nav className="header-links">
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </nav>
      <div className="divider-border"><span className="sr-only"></span></div>
      <div className="p-3">
        <ul className="social-network square-icon shadowed-icon">
          <li>
            <a href="#"><span className="icon-facebook"></span></a>
          </li>
          <li>
            <a href="#"><span className="icon-twitter"></span></a>
          </li>
          <li>
            <a href="#"><span className="icon-google-plus"></span></a>
          </li>
          <li>
            <a href="#"><span className="icon-pinterest"></span></a>
          </li>
          <li>
            <a href="#"><span className="icon-dribbble"></span></a>
          </li>
        </ul>
      </div>
    </nav>
   
        </>

    );
}

export default Nav;