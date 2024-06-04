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
          <svg id="noun_menu_1119465" width="23px" height="23px" viewBox="0 0 24 19.641" data-reactid=".qyljp5w7ii.4.0.0.0.0.0.0"><path id="Path_50263" data-name="Path 50263" d="M27.663,33.527H43.246a1.563,1.563,0,0,0,0-3.127H27.663a1.563,1.563,0,0,0,0,3.127Z" transform="translate(-26.1 -30.4)" data-reactid=".qyljp5w7ii.4.0.0.0.0.0.0.0"></path><path id="Path_50264" data-name="Path 50264" d="M43.194,63.6H27.663a1.563,1.563,0,0,0,0,3.127H43.246a1.536,1.536,0,0,0,1.563-1.563A1.58,1.58,0,0,0,43.194,63.6Z" transform="translate(-26.1 -47.086)" data-reactid=".qyljp5w7ii.4.0.0.0.0.0.0.1"></path><path id="Path_50265" data-name="Path 50265" d="M48.547,47H27.6a1.565,1.565,0,0,0,0,3.127H48.6a1.507,1.507,0,0,0,1.5-1.563A1.548,1.548,0,0,0,48.547,47Z" transform="translate(-26.1 -38.743)" data-reactid=".qyljp5w7ii.4.0.0.0.0.0.0.2"></path></svg>
          </div>

          <div className="logo hidden-xs">
            <a >
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
