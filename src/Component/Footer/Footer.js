import React, { Component } from 'react';
import Spacer from 'react-add-space';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlus } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css";
const Footer = () => (
    <div className="footer">
      <p className="text-color"> <Spacer amount={6}/>    © eNno Theme.All Rights Reserved</p>
      <p className="text-color">  <Spacer amount={6}/>   Designed by BootstrapMade  <Spacer amount={170}/> <FacebookIcon/>
      <Spacer amount={6}/>  <TwitterIcon/> <Spacer amount={6}/> <LinkedInIcon/> <Spacer amount={6}/> 
      <PinterestIcon/>
      <Spacer amount={4}/>  <i class="fab fa-google-plus"></i>
      </p>  
    </div>
  );

export default Footer
