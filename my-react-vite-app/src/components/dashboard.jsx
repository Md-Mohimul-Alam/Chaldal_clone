import React, { useState, useEffect, useRef } from 'react';
import './css/dash.css';
import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeliveryInfo from './crt';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const logoRef = useRef(null);
  const searchBarRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
};
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (logoRef.current && searchBarRef.current) {
      const logoBottom = logoRef.current.getBoundingClientRect().bottom;
      setIsSticky(scrollY > logoBottom);
      if (scrollY === 0) {
        setIsSearchVisible(true); 
      }
      else{
        setIsSearchVisible(scrollY <= logoBottom && scrollY !== 0); 
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className='dashboard-container'>
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
            <a>
              <img src={logo} className="egg chaldal_logo" alt="logo" />
            </a>
          </div>

          {!isSearchVisible && (
                <div className='search_header' style={{  top:'1px' }}>
                  <CustomizedInputBase/>
                </div>
              )}
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
      <div className='compress' style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '10%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>
        <div className="landingBanner" style={{ background: 'url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-501/Default/stores/chaldal/components/landingPage2/LandingPage/images/landingBanner.png) no-repeat center', backgroundSize: 'cover', flex: '1' }}>
          <div className="floatingSearchBar">
            <meta content="https://chaldal.com/" />
            <div className="searchBarContainer">
              <h2>
                <span> </span>
                <span>Grocery Delivered at your Doorstep</span>
                <span> </span>
              </h2>

              <div ref={searchBarRef} className={`sticky-wrapper ${isSticky && isSearchVisible ? 'sticky' : ''}`}>
                <CustomizedInputBase/>
              </div>
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

