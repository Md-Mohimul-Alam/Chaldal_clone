import React, { useState, useRef } from 'react';

import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import { Link, NavLink } from 'react-router-dom';
import './css/HP.css';


const TeamG= () =>{
    
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
                                <div className="page-image" style={{ backgroundImage: "url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Topic/images/team2.png?q=best&webp=1&alpha=1&quot)", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></div>
                                <div className="page-title">Team</div>
                                <div className="link-section">
                                    <ul className="page-link">
                                        <li className="links">
                                            <NavLink  to="/help_F_faq" className="itemLinks">FAQ</NavLink>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <NavLink  to="/Help_G" className="itemLinks" >Our Story</NavLink>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links selectedLink">
                                            <NavLink  to="/help_F_faq" className="itemLinks">Team</NavLink>
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
                                <section className="team-section">
                                    <div className="heading">
                                        "We are a team of dedicated people spread across the globe and working round the clock to bring about rapid progress in the Bangladeshi E-commerce ecosystem."
                                    </div>

                                    <div class="team-block">
                                        <div class="individualTeam">
                                            <div class="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/waseem_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundcolor: 'transparent'}}/>
                                            </div>
                                            <div class="info-block">
                                                <div class="name">Waseem Alim</div>
                                                <div class="position">Founder &amp; Chief Executive Officer</div>
                                                <div class="description">
                                                    <span>
                                                        Before Chaldal, Waseem worked at Sigfig, a Silicon Valley fintech startup, where he led the development of a portfolio management software. He designed algorithms to monitor over $100 billion in assets.
                                                        <br /><br /> 
                                                        Waseem is a CFA Charterholder and graduated from the Wharton School. He aspires to change the culture in Bangladesh so that people value investment in bold ideas.
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="arrowClass">
                                                <div class="arrowHolder">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="individualTeam">
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/waseem_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundcolor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Zia Ashraf</div>
                                                <div className="position">Founder & Chief Operating Officer</div>
                                                <div className="description">
                                                    <span data-reactid=".28vrfj5pzgi.b.2.0.0.0.1.3.0.1.$core_team1.1.2.0">
                                                        Prior to Chaldal, Zia was the Head of Operations at a garments factory. He managed over 1000 employees and oversaw all facets of the business including merchandising, production and marketing.<br/><br/>Zia has an autistic brother and hopes to work for autistic children. He believes a university degree is no measure of a person’s merit. Zia holds a BBA in Marketing from North South University.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="arrowClass">
                                            <div className="arrowHolder">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1" />
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Link>
    );
};
export default TeamG;
