import React, { useState } from 'react';
import './css/dash.css';
import logo from './img/logo.png';
import Sidebar from './sidebar'; 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DeliveryInfo from './crt';

import CustomizedInputBase from './search'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };
  
  return (
    <div className='dashboard-container'>
      <header className="header">
        <div className='flex'>
          <div className="menu-button" onClick={toggleSidebar}>
            <MenuRoundedIcon aria-label="menu" style={{color:'black'}} />
          </div>

          <div className="logo hidden-xs">
            <a href="/">
              <img src={logo} className="egg chaldal_logo" alt="logo" />
            </a>
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
            <div className="btn_grp_D">
              <ButtonGroup className='btn_grp'>
                <Button variant={isEnglish ? 'contained' : ''} onClick={handleLanguageToggle} style={{ backgroundColor: isEnglish ? '#ff686e' : 'white' }}>
                  ENG
                </Button>
                <Button variant={!isEnglish ? 'contained' : ''} onClick={handleLanguageToggle} style={{ backgroundColor: !isEnglish ? '#ff686e' : 'white' }}>
                  BAN
                </Button>
              </ButtonGroup>
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


      <div className='compress' style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '12.9%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>

        <div className="landingBanner" style={{ 
          background: 'url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-501/Default/stores/chaldal/components/landingPage2/LandingPage/images/landingBanner.png) no-repeat center' , 
          backgroundSize: 'cover',
          flex: '1'
        }}>
          <div  content="nositelinkssearchbox" className="floatingSearchBar">
            <meta  content="https://chaldal.com/" />
            <div className="searchBarContainer">
              <h2>
                <span> </span>
                <span>Grocery Delivered at your Doorstep</span>
                <span> </span>
              </h2>
                <CustomizedInputBase/>
            </div>
          </div>
          <div className="banner-image">
            <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-501/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&amp;webp=1" alt="banner" />
          </div>
        </div>
        <DeliveryInfo/>
      </div>
      
    </div>
  );
};

export default Dashboard;
