import React, { useState, useRef } from 'react';

import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import { Link } from 'react-router-dom';
import './css/HP.css';


const Helpg= () =>{
    
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
        <div className="everythingElseWrapper unauthed" style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '15%' : '0%', transition: 'width 0.3s ease, marginLeft 0.3s ease' }}>
            <section className="bodyTable">
                <div>
                    <div className="topicPage">
                        <div className="loaded">
                            <div className="page-bg-image">
                                <div className="page-image" style={{ backgroundImage: "url('https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Topic/images/story2.png?q=best&webp=1&alpha=1')", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></div>
                                <div className="page-title">Our Story</div>
                                <div className="link-section">
                                    <ul className="page-link">
                                        <li className="links">
                                            <Link  to="/help_F_faq" className="itemLinks">FAQ</Link>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links selectedLink">
                                            <Link  to="/Help_G" className="itemLinks" >Our Story</Link>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <a className="itemLinks" href="/pharmacy/t/Team">Team</a>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <a className="itemLinks" href="/pharmacy/t/Career">Career</a>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <a className="itemLinks" href="/pharmacy/t/ContactUs">Contact Us</a>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <a className="itemLinks" href="/pharmacy/t/PrivacyInfo">Privacy Policy</a>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <a className="itemLinks" href="/pharmacy/t/TermsOfUse">Terms of Use</a>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <a className="itemLinks" href="/pharmacy/t/PharmacyLicense">Pharmacy License</a>
                                            <span className="itemUnderline"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="body needHelpItemBody">
                                    <div>
                                        <strong>Our Story</strong>
                                    </div>
                                    <div>
                                        Chaldal.com is an online shop available in Dhaka, Jashore and Chattogram. We believe the time is valuable to our fellow Dhaka residents, and that they should not have to waste hours in traffic, brave harsh weather, and wait in line just to buy necessities like eggs! This is why we deliver everyday needs to our customers’ door-steps across urban cities.
                                        <br /><br />
                                    </div>
                                    <div>
                                        Chaldal is a work in progress, and we hope to get better over time. We are firm believers in using technology and education to improve Bangladesh, and we will continue to invest all our effort in pushing the boundaries of technology.
                                    </div>
                                    <div>
                                        If you have ideas on how we can improve, we would love to hear from you. Please do email us at 
                                        <a href="mailto:founders@chaldal.com"><strong>info@chaldal.com</strong></a>.
                                    </div>
                                    <div>
                                        <br />
                                        <strong>Waseem (Founder &amp; CEO)</strong>
                                        <br />
                                        Before Chaldal, Waseem worked at Sigfig, a Silicon Valley financial technology startup. At Sigfig, he led the development of a web-based portfolio management software. He designed algorithms to monitor over $100 billion in brokerage assets held by retail investors. He aspires to change the culture in Bangladesh so that people value investment in bold ideas and are more accepting of new technology. Waseem graduated from the Wharton School, the University of Pennsylvania with a degree in Finance and Entrepreneurship.
                                        <br /><br />
                                        <strong>Zia (Founder &amp; COO)</strong>
                                        <br />
                                        Zia brings in experience from the field of management and marketing. Prior to Chaldal, he was the Head of Operations at a ready-made garments factory in Bangladesh. He managed over 1000 employees and oversaw all facets of the business including merchandising, production, commercial design, and marketing. Zia has an autistic brother, and he hopes to provide proper care and education to all autistic children. He also believes that a university degree is no measure of a person’s merit. Zia holds a BBA in Marketing from North South University.
                                        <br /><br />
                                        <strong>Tejas (Founder &amp; CTO)</strong>
                                        <br />
                                        Tejas is a full-stack engineer. Prior to Chaldal, he worked at Sigfig where he was in charge of tech infrastructure. His hobby includes research on Lisp machines and how we can develop better software. Tejas has a degree in Computer Science from the National University of Singapore. He invites you to read more about 
                                        <a href="https://chaldal.tech"><strong>Chaldal Engineering</strong></a>.
                                        <br /><br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Link>
    );
};
export default Helpg;
