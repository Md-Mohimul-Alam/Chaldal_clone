import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './css/Deal_G.css';
import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,Box,
  } from '@chakra-ui/react';

const DealG= () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const logoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
};
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

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
       
        <div className="bodyTable"style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '12%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>
            <div className="daily-deals">
                <div className="daily-deals-inner-container">
                    <div className="daily-deals-header">
                        <div className="title">
                            Deal of the Day
                        </div>
                        <div className="no-deal-message">
                            <span>Fantastic deals every weekend!</span>
                        </div>
                    </div>
                    <div className="faq-title">
                        FAQ
                    </div>



                    <div className="faq-outer-container">
                        <div className="faq-container">

                        <Accordion allowToggle >
                            <AccordionItem style={{}}>
                               
                                <AccordionButton className='que'>
                                    <Box as='span' flex='1' textAlign='left' style={{color:'black'}}>
                                        What is 'Deal of the Day'?
                                    </Box>
                                    <AccordionIcon style={{color:'black'}}/>
                                </AccordionButton>
                               
                                <AccordionPanel pb={4}  className='ans'>
                                    'Deal of the Day' is a special opportunity for our customers to get a great deal! Under this program, every weekend, Chaldal offers a limited stock of selected products at special prices.<br /><br />The first 'Deal of the Day' runs from 10 PM on Thursday to 10 PM on Friday. This is followed by our 2nd 'Deal of the Day' from 10 PM on Friday to 10 PM on Saturday. To activate this offer, a minimum order value is required.<br /><br />
                                </AccordionPanel>
                            </AccordionItem>
                            <br />
                            <AccordionItem>
                                
                                <AccordionButton className='que'>
                                     <Box as='span' flex='1' textAlign='left' style={{color:'black'}}>
                                        How does it work?          
                                    </Box>
                                    <AccordionIcon style={{color:'black'}}/>
                                </AccordionButton>
                                
                                <AccordionPanel pb={4}  className='ans'>
                                    'Deal of the Day' is automatically activated through a minimum order value. You will not be able to avail this deal if your order value does not meet the deal's requirements.<br /><br />
                                </AccordionPanel>
                            </AccordionItem>
                            <br />
                            <AccordionItem>
                                
                                <AccordionButton className='que'>
                                     <Box as='span' flex='1' textAlign='left' style={{color:'black'}}>
                                        What is the minimum order value to activate 'Deal of the day'?
                                    </Box>
                                    <AccordionIcon style={{color:'black'}}/>
                                </AccordionButton>
                                
                                <AccordionPanel pb={4}  className='ans'>
                                    The minimum order value depends on the product selected by Chaldal for that specific 'Deal of the Day'.<br /><br />
                                </AccordionPanel>
                            </AccordionItem>
                            
                            <br />
                            <AccordionItem>
                                
                                <AccordionButton className='que'>
                                     <Box as='span' flex='1' textAlign='left' style={{color:'black'}}>
                                        Is there a validity duration for 'Deal of the Day'?
                                    </Box>
                                    <AccordionIcon style={{color:'black'}}/>
                                </AccordionButton>
                                
                                <AccordionPanel pb={4}  className='ans'>
                                    Yes, 'Deal of the Day' is valid for 24 hours (1 day). However, you have to hurry as we only offer limited stock for 'Deal of the Day'. The deal is therefore subject to product availability and will end once products are sold out.<br /><br />
                                </AccordionPanel>
                            </AccordionItem>

                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </Link>
  );
};
export default DealG;
