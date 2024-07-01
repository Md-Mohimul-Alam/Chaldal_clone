import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';

import './css/fav.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 



const Favp= () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const logoRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(!isActive);
      toggleSidebar();
  };
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleFacebookLogin = () => {
        console.log('Facebook login button clicked');
      };
  const [phone, setPhone] = useState('');

  return (
    <Link className='dashboard-container'>
     
      <header className="header" ref={logoRef}>
      <STC_ChT/>
        <div className='flex' >
        <button className={`hamburgerMenu ${isActive ? 'active' : ''}`}
            onClick={handleClick}>
            <svg id="noun_menu_1119465" width="23px" height="23px" viewBox="0 0 24 19.641">
                        <path
                            id="Path_50263"
                            d="M27.663,33.527H43.246a1.563,1.563,0,0,0,0-3.127H27.663a1.563,1.563,0,0,0,0,3.127Z"
                            transform="translate(-26.1 -30.4)"
                        />
                        <path
                            id="Path_50264"
                            d="M43.194,63.6H27.663a1.563,1.563,0,0,0,0,3.127H43.246a1.536,1.536,0,0,0,1.563-1.563A1.58,1.58,0,0,0,43.194,63.6Z"
                            transform="translate(-26.1 -47.086)"
                        />
                        <path
                            id="Path_50265"
                            d="M48.547,47H27.6a1.565,1.565,0,0,0,0,3.127H48.6a1.507,1.507,0,0,0,1.5-1.563A1.548,1.548,0,0,0,48.547,47Z"
                            transform="translate(-26.1 -38.743)"
                        />
                    </svg>
        </button>
          <div className="logo_111 " >
            <Link  to="/" >
              <img src={logo} className="egg chaldal_logo" alt="logo" />
            </Link>
          </div>

                <div className='search_header' style={{  top:'1px' ,paddingLeft: '30px'}}>
                  <CustomizedInputBase/>
                </div>

          <div className="lcn">
            <div className='location_btn'>
              <ButtonGroup>
                <Button style={{ color: '#ff686e', border: '0' }}>
                  <LocationOnIcon sx={{ color: '#ff686e', padding: '3px' }} />
                  Location
                  <ArrowDropDownIcon style={{ color: '#ff686e', padding: '3px' }} />
                </Button>
              </ButtonGroup>
            </div>
            <div className="localeSwitch2 area">
              <div className="localeLeftContainer">
                <p className="selectedLocale2">EN&nbsp;</p>
              </div>
              <div className="localeRightContainer">
                <p className="">&nbsp;বাং</p>
              </div>
            </div>
            <div className="login_D">
              <div className='login'>
                <Button className='btn'>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

      </header>
        
      <div className="bodyTable"style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '13%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>
    <section className="bodyTable1">
        <div>
            <div className="phoneNumberLogin outsideDialog authForm">
            <div>
            <div className="facebookLogin">
                <button
                className="facebookLoginButton loginBtn loginButton"
                onClick={handleFacebookLogin}
                >
                <svg
                    width="20px"
                    height="20px"
                    style={{ fill: 'white', stroke: 'white', display: 'inline-block', verticalAlign: 'middle' }}
                    viewBox="0 0 430.113 430.114"
                >
                    <path
                    id="Facebook"
                    d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805 c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354 c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z"
                    />
                </svg>
                <div className="buttonText">
                    <span>Sign Up or Login with <b>Facebook</b></span>
                </div>
                </button>
            </div>
            </div>
      <button className="loginBtn emailLoginBtn">
            <svg
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
        width="25px"
        height="25px"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 491.52 491.52"
        >
        <rect y="85.914" style={{ fill: '#F6C358' }} width="491.52" height="319.693" />
        <polygon style={{ fill: '#FCD462' }} points="245.76,217.258 491.52,405.604 0,405.604" />
        <polygon style={{ fill: '#DC8744' }} points="245.76,291.673 0,85.916 491.52,85.916" />
        <polygon style={{ fill: '#FCD462' }} points="245.76,274.261 0,85.916 491.52,85.916" />
        </svg>
        <span>Login with <b>Email</b></span>
      </button>
      <div className="orContainer">
        <span>or</span>
      </div>
      <div className="loginWithPhoneMessage">PLEASE ENTER YOUR MOBILE PHONE NUMBER</div>

      
      <form className="phoneNumberInputContainer">
      <div className="phoneNumberLoginField focused">
        <div className='phone-i'>
          <PhoneInput
            value={phone}
            onChange={(phone) => setPhone(phone)}
           inputClass="phone-input"
           dropdownClass="phone-dropdown"
           placeholder='e.g. +8801672955886'
          />
        </div>
        
      </div>
      <div className="errorContainer"></div>
      <div className="actions">
        <button className="loginBtn" type="submit">SIGN UP / LOGIN</button>
      </div>
    </form>

    <div className="recaptcha">
      <h5 className="recaptchaTxt">
        <span>This site is protected by reCAPTCHA and the Google </span>
          <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>
          <span> and </span>
          <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>
          <span> apply.</span>
        </h5>
    </div>


    </div>
  </div>
</section>

    </div> 
        
    </Link>
  );
};
export default Favp;
