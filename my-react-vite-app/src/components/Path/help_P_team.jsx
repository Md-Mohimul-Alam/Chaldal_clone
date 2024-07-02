import React, { useState, useRef } from 'react';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import Sidebar_phr from './side_phr';
import './css/HP.css';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";



const TeamP= ( ) => {

  const [selectedMembers, setSelectedMembers] = useState( false );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
};
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleSelected = (id) => {
    setSelectedMembers((prevState) => {
        const newState = { ...prevState };

        Object.keys(newState).forEach(key => {
            if (key !== id.toString()) {
                newState[key] = false;
            }
        });

        newState[id] = !prevState[id];

        return newState;
    });
};

const [dropdowns, setDropdowns] = useState({});
const [rotations, setRotations] = useState({});



const toggleDropdown = (cid) => {
  setDropdowns((prevDropdowns) => ({
    ...prevDropdowns,
    [cid]: !prevDropdowns[cid],
  }));
  if (!dropdowns[cid]) {
    setRotations((prevRotations) => ({
      ...prevRotations,
      [cid]: 90,
    }));
  }else{
      setRotations((prevRotations) => ({
          ...prevRotations,
          [cid]: 0,
        }));  
  }
};



  return (
    <div className='dashboard-container'>
<div className='headerWrapper'>
            <div className="headerWrapperWrapper">
             <div ></div>   
             <STC_ChT/>
            <div itemScope="" itemType="http://schema.org/WebSite" className="top-header">
                <div className={`hamburgerMenu ${isActive ? 'active' : ''}`}  onClick={handleClick}>
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
                    </div>
                <div className="logo">
                <Link  to="/Pharmacy/pharmacyDashboard">
                        <img
                            className="egg chaldal_logo"
                                style={{
                                width: "165px",

                                        backgroundImage: 'url("https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-506/Default/components/header/Header/images/logo-banglameds.png?q=low&webp=1&alpha=1")',
                                        backgroundRepeat: 'no-repeat',
                                        }}
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        />
                    </Link>
                </div>

                <form itemScope="" itemProp="potentialAction" itemType="http://schema.org/SearchAction" className="searchArea hidden-xs">
                    <div className="searchInput" style={{width: '1000px' ,marginRight: '150px'}}>
                        <div>
                        <CustomizedInputBase className="input"/>

                        </div>
                        <div className="search-suggestions"></div>
                    </div>
                </form>

                <div id="city" >
              <div class="area citySelectionArea">
                  <span class="locationMarkerIcon">
                      <svg id="Location" width="17px" height="14px" viewBox="0 0 16.749 20">
                          <path id="Path_52" d="M49.1,20.2l-.581-.5c-.8-.671-7.794-6.71-7.794-11.127a8.375,8.375,0,0,1,16.749,0c0,4.418-6.993,10.457-7.79,11.131Zm0-18.189a6.571,6.571,0,0,0-6.564,6.564c0,2.775,4.3,7.209,6.564,9.238,2.262-2.03,6.564-6.466,6.564-9.238A6.571,6.571,0,0,0,49.1,2.009Z" transform="translate(-40.725 -0.198)" fill="#ff6f71"></path>
                          <path id="Path_53" d="M173.446,136.238a3.32,3.32,0,1,1,3.32-3.32A3.32,3.32,0,0,1,173.446,136.238Zm0-4.979a1.66,1.66,0,1,0,1.66,1.66A1.66,1.66,0,0,0,173.446,131.259Z" transform="translate(-165.071 -124.544)" fill="#ff6f71"></path>
                      </svg>
                  </span>

                  <div class="metropolitanAreaName">
                      <span>DOHS Baridhara</span>
                      <span>Dhaka</span>
                  </div>
                  <p class="hidden-xs">
                    <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[1] || 0}deg)`,color:'#ff4e56' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(1); }}/>
                  </p>
              </div>
              {dropdowns[1] && (
              <div class="headerAddressComponent">
                  <div>
                      <div class="address-list">
                        {/* 
                          <div class="confirmAddressTitle hide geolocationOffTitle">
                              <button class="closeButton">
                                  <div class="before"></div>
                                  <div class="after"></div>
                              </button>
                          </div>
                          <div class="hide"></div>
                        */}
                          <div>
                              <div class="useCurrentLocation">
                                  <svg style={{display:'inline-block', verticalAlign:'middle'}} width="40px" height="40px" viewBox="0 0 48 48" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0"><g data-name="Group 10827" transform="translate(-3295 18156)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0"><circle cx="24" cy="24" r="24" fill="#fff" data-name="Ellipse 398" transform="translate(3295 -18156)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.0"></circle><g transform="translate(3307 -18144)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1"><g data-name="Group 521" transform="translate(2.726 2.672)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.0"><g data-name="Group 520" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.0.0"><path fill="#ff686e" d="M151.153 141.827a8.812 8.812 0 01-.077 1.149l.026-.193a8.576 8.576 0 01-.413 1.7c-.046.13-.1.258-.148.386s.073-.172.019-.046l-.041.094-.1.218a8.471 8.471 0 01-.888 1.449c-.081.107.113-.145.03-.039l-.063.079c-.042.053-.086.1-.129.157a9.061 9.061 0 01-.293.329c-.193.206-.4.4-.609.587-.1.089-.206.176-.312.26-.04.032-.147.114.04-.03l-.081.061c-.063.048-.128.094-.192.14a8.488 8.488 0 01-.838.52 8.536 8.536 0 01-.645.316c-.17.075.13-.054.015-.006l-.128.052a8.421 8.421 0 01-1.955.51l.193-.026a8.68 8.68 0 01-2.3 0l.193.026a8.572 8.572 0 01-1.7-.413c-.13-.046-.258-.1-.386-.149s.172.073.046.019l-.094-.041c-.073-.032-.145-.066-.218-.1a8.467 8.467 0 01-1.449-.888c-.107-.081.145.113.039.03l-.08-.063c-.053-.042-.1-.086-.157-.129a9.061 9.061 0 01-.329-.293c-.206-.193-.4-.4-.587-.609a7.158 7.158 0 01-.26-.312c-.032-.04-.114-.147.03.04l-.061-.081c-.048-.063-.094-.128-.14-.192a8.48 8.48 0 01-.52-.838 8.536 8.536 0 01-.316-.645c-.075-.17.054.13.006.015a2.84 2.84 0 01-.051-.128 8.42 8.42 0 01-.51-1.955l.026.193a8.676 8.676 0 010-2.3l-.026.193a8.581 8.581 0 01.413-1.7c.046-.13.1-.258.149-.386s-.073.172-.019.046l.041-.094c.032-.073.067-.145.1-.218a8.467 8.467 0 01.888-1.449c.081-.107-.113.145-.03.039l.063-.08c.042-.053.086-.1.129-.157.094-.112.193-.221.293-.329.193-.206.4-.4.609-.587.1-.089.206-.176.313-.26.04-.032.147-.114-.04.03l.081-.061c.063-.048.128-.094.192-.14a8.465 8.465 0 01.838-.52 8.536 8.536 0 01.646-.316c.17-.075-.13.054-.015.006l.128-.051a8.422 8.422 0 011.955-.51l-.193.026a8.679 8.679 0 012.3 0l-.193-.026a8.586 8.586 0 011.7.413c.13.046.258.1.386.149s-.172-.073-.046-.019l.094.041.217.1a8.465 8.465 0 011.449.888c.107.081-.145-.113-.039-.03l.08.063c.053.042.1.086.157.129.112.095.221.193.329.293.206.193.4.4.587.609.089.1.176.206.26.312.032.04.114.147-.03-.04l.061.081c.048.063.094.128.14.192a8.476 8.476 0 01.52.838 8.536 8.536 0 01.316.645c.075.17-.054-.13-.006-.015l.052.128a8.421 8.421 0 01.51 1.955l-.026-.193a8.831 8.831 0 01.077 1.149.724.724 0 001.449 0 9.169 9.169 0 10-4.551 7.934 9.417 9.417 0 002.73-2.45 9.134 9.134 0 001.821-5.484.724.724 0 10-1.449 0z" data-name="Path 9025" transform="translate(-134.224 -132.638)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.0.0.0"></path></g></g><g data-name="Group 523" transform="translate(0 11.08)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.1"><g data-name="Group 522" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.1.0"><path fill="#ff686e" d="M37.421 461.4H42.6a.782.782 0 000-1.565h-5.179a.782.782 0 000 1.565z" data-name="Path 9026" transform="translate(-36.639 -459.833)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.1.0.0"></path></g></g><g data-name="Group 525" transform="translate(17.035 11.08)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.2"><g data-name="Group 524" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.2.0"><path fill="#ff686e" d="M699.755 461.4h5.183a.782.782 0 000-1.565h-5.183a.782.782 0 100 1.565z" data-name="Path 9027" transform="translate(-698.973 -459.833)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.2.0.0"></path></g></g><g data-name="Group 527" transform="translate(11.131 17.035)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.3"><g data-name="Group 526" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.3.0"><path fill="#ff686e" d="M462.979 705.305v-5.183a.782.782 0 10-1.565 0v5.183a.782.782 0 001.565 0z" data-name="Path 9028" transform="translate(-461.415 -699.34)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.3.0.0"></path></g></g><g data-name="Group 529" transform="translate(11.131)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.4"><g data-name="Group 528" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.4.0"><path fill="#ff686e" d="M462.979 42.969v-5.183a.782.782 0 00-1.565 0v5.183a.782.782 0 001.565 0z" data-name="Path 9029" transform="translate(-461.415 -37.004)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.4.0.0"></path></g></g><g data-name="Group 531" transform="translate(8.125 8.068)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.5"><g data-name="Group 530" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.5.0"><path fill="#ff686e" d="M359.854 355.773a3.369 3.369 0 01-.025.387l.028-.208a3.263 3.263 0 01-.092.444 3.084 3.084 0 01-.109.312c.1-.25.03-.074 0-.018a3 3 0 01-.241.41l-.064.089c.151-.2.068-.088.032-.044a3.067 3.067 0 01-.33.339l-.084.071c-.1.084.173-.128.013-.012a3.023 3.023 0 01-.407.246l-.1.048c-.133.062.187-.076.051-.021a2.75 2.75 0 01-.246.085 3 3 0 01-.48.1l.208-.028a3.188 3.188 0 01-.773 0l.208.028a3.267 3.267 0 01-.444-.091 2.788 2.788 0 01-.213-.07l-.1-.041c.25.1.074.03.019 0a3.014 3.014 0 01-.41-.241l-.089-.064c.2.151.088.068.044.031a3.067 3.067 0 01-.339-.33l-.07-.083c-.084-.1.128.173.011.013a3.026 3.026 0 01-.246-.407c-.017-.033-.032-.066-.048-.1-.062-.133.076.187.021.051a3.116 3.116 0 01-.086-.246 2.99 2.99 0 01-.1-.48l.028.208a3.192 3.192 0 010-.773l-.028.208a3.238 3.238 0 01.092-.444 2.628 2.628 0 01.11-.312c-.1.25-.03.074 0 .018a3.018 3.018 0 01.241-.41l.065-.088c-.151.2-.068.088-.032.044a3.067 3.067 0 01.33-.339l.084-.071c.1-.084-.173.128-.014.012a3.028 3.028 0 01.407-.246l.1-.048c.133-.062-.187.076-.051.021.08-.033.163-.06.246-.085a2.986 2.986 0 01.48-.1l-.208.028a3.2 3.2 0 01.773 0l-.208-.028a3.266 3.266 0 01.444.091 3.3 3.3 0 01.213.069l.1.041c-.25-.1-.074-.03-.019 0a2.99 2.99 0 01.41.241l.089.064c-.2-.151-.088-.068-.044-.032a3.067 3.067 0 01.339.33l.071.084c.084.1-.128-.173-.011-.013a3.015 3.015 0 01.246.407c.017.033.032.066.048.1.062.133-.076-.187-.021-.051.033.08.06.163.086.246a3 3 0 01.1.48l-.028-.208a3.37 3.37 0 01.025.387.782.782 0 001.565 0 3.809 3.809 0 00-.629-2.09 3.927 3.927 0 00-1.777-1.436 3.808 3.808 0 00-4.085.856 3.757 3.757 0 00-1.016 1.888 3.917 3.917 0 00.264 2.358 3.792 3.792 0 007.242-1.576.782.782 0 10-1.565 0z" data-name="Path 9030" transform="translate(-353.836 -351.978)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.5.0.0"></path></g></g></g></g></svg>
                                  <p>Use my current Location</p>
                              </div>
                              <hr class="horizontalivider hide"/>
                              <div class="changeCityContainer">
                                  <div>
                                  <svg
                                    id="Group_47542"
                                    data-name="Group 47542"
                                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                    width="40px"
                                    height="40px"
                                    viewBox="0 0 38 38"
                                  >
                                    <circle id="Ellipse_915" data-name="Ellipse 915" cx="19" cy="19" r="19" fill="#fff" />
                                    <g id="egg_1_" data-name="egg (1)" transform="translate(10.95 8)">
                                      <path
                                        id="Path_74136"
                                        data-name="Path 74136"
                                        d="M83.713,12.745c0,5.111-3.6,9.255-8.049,9.255s-8.049-4.144-8.049-9.255S71.218,0,75.663,0,83.713,7.634,83.713,12.745Z"
                                        transform="translate(-67.614)"
                                        fill="#ff686e"
                                      />
                                      <path
                                        id="Path_74137"
                                        data-name="Path 74137"
                                        d="M138.342,12.009C138.025,6.934,134.553,0,130.316,0c-2.975.353-5.555,8.19-5.555,13.3,0,4.459.845,7.757,4.012,8.527a7.069,7.069,0,0,0,1.543.172c4.446,0,8.049-4.144,8.049-9.255C138.366,12.506,138.357,12.261,138.342,12.009Z"
                                        transform="translate(-122.267)"
                                        fill="#ff686e"
                                      />
                                      <path
                                        id="Path_74138"
                                        data-name="Path 74138"
                                        d="M260.082,12.009C259.765,6.934,256.293,0,252.056,0c4.237,0,6.129,6.975,6.445,12.05.016.251.024.5.024.736,0,5.111-2.023,9.214-6.469,9.214,4.446,0,8.049-4.144,8.049-9.255C260.105,12.506,260.1,12.261,260.082,12.009Z"
                                        transform="translate(-244.007)"
                                        fill="#ff686e"
                                      />
                                      <g id="Group_47501" data-name="Group 47501" transform="translate(0.635 7.306)">
                                        <path
                                          id="Path_74139"
                                          data-name="Path 74139"
                                          d="M83.322,257.819c0,1.291.137,2.4-.319,2.4s-.829-1.044-.834-2.335.362-2.338.818-2.339S83.318,256.528,83.322,257.819Z"
                                          transform="translate(-82.169 -251.701)"
                                          fill="#ff686e"
                                        />
                                        <path
                                          id="Path_74140"
                                          data-name="Path 74140"
                                          d="M98.257,168.788c-.171.755-.242,1.421-.508,1.36s-.345-.721-.174-1.476.525-1.318.792-1.257S98.428,168.033,98.257,168.788Z"
                                          transform="translate(-96.816 -167.411)"
                                          fill="#ff686e"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                      <p>Change City</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>)}
            </div>
                <div className="localeSwitch2 area hidden-sm hidden-xs">
                    <div className="localeLeftContainer">
                        <p className="selectedLocale2">EN&nbsp;</p>
                    </div>
                    <div className="localeRightContainer">
                        <p>&nbsp;বাং</p>
                    </div>
                </div>


                <div className="loginArea authButtons area">
                    <button className="signInBtn">Login</button>
                </div>
                </div> 
                </div>
            </div>
            {isSidebarOpen && <Sidebar_phr isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} className='off' />}


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
                                            <NavLink  to="/help_P_faq" className="itemLinks">FAQ</NavLink>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links">
                                            <NavLink  to="/Help_P" className="itemLinks" >Our Story</NavLink>
                                            <span className="itemUnderline"></span>
                                        </li>
                                        <li className="links selectedLink">
                                            <NavLink  to="/help_P_faq" className="itemLinks">Team</NavLink>
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
                            <div className='team-page '>
                                <section className="team-section">
                                    <div className="heading">
                                        "We are a team of dedicated people spread across the globe and working round the clock to bring about rapid progress in the Bangladeshi E-commerce ecosystem."
                                    </div>

                                    <div className="team-block">
                                        <div className={`individualTeam ${selectedMembers[1] ? 'selected' : ''}`} onClick={() => toggleSelected(1)}>
                                                <div className="img">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/waseem_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundcolor: 'transparent'}}/>
                                                </div>
                                                <div className="info-block">
                                                    <div className="name">Waseem Alim</div>
                                                    <div className="position">Founder &amp; Chief Executive Officer</div>
                                                    <div className="description">
                                                    <span>
                                                        Before Chaldal, Waseem worked at Sigfig, a Silicon Valley fintech startup, where he led the development of a portfolio management software. He designed algorithms to monitor over $100 billion in assets.
                                                        <br /><br /> 
                                                        Waseem is a CFA Charterholder and graduated from the Wharton School. He aspires to change the culture in Bangladesh so that people value investment in bold ideas.
                                                    </span>
                                                </div>
                                                </div>
                                                
                                            {selectedMembers[1] && (
                                            <div data-cid="1" >
                                                <div className="info-block">
                                                </div>
                                                <div className="arrowClass">
                                                    <div className="arrowHolder">
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1"/>
                                                    </div>
                                                </div>
                                            </div>
                                            )}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[2] ? 'selected' : ''}`} onClick={() => toggleSelected(2)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/zia_v3.png?q=best&m=210&webp=1&alpha=1" size="210" style={{backgroundcolor: 'transparent'}}/>
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
                                            {selectedMembers[2] && (
                                            <div data-cid="2" >
                                                <div className="arrowClass">
                                                <div className="arrowHolder">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1" />
                                                </div>
                                                </div>
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[3] ? 'selected' : ''}`} onClick={() => toggleSelected(3)}>                                                
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/tejas_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Tejas Viswanath</div>
                                                <div className="position">Founder &amp; Chief Technology Officer</div>
                                                <div className="description">
                                                    <span>Tejas is a full stack engineer. Prior to Chaldal, he worked at Sigfig where he was in charge of tech infrastructure.<br/><br/>His hobby includes research on Lisp machines.<br/><br/>Tejas has a degree in Computer Science from the National University of Singapore.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[3] && (
                                            <div data-cid="3" >
                                                <div className="arrowClass">
                                                    <div className="arrowHolder">
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1"/>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[4] ? 'selected' : ''}`} onClick={() => toggleSelected(4)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/mizan_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Mizanur Rahman</div>
                                                <div className="position">Treasurer</div>
                                                <div className="description">
                                                    <span>Mizanur Rahman appointed as an Account Executive in November 2013.<br/><br/>He was responsible for accounting operations and financial reporting functions. Later, he was promoted as the Treasurer and currently overseeing accounting and finance of Chaldal.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[4] && (
                                            <div data-cid="4" >
                                                <div className="arrowClass">
                                                    <div className="arrowHolder">
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1"/>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>


                                        <div className={`individualTeam ${selectedMembers[5] ? 'selected' : ''}`} onClick={() => toggleSelected(5)}>
                                            <div className="img">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/nayef_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                                </div>
                                                <div className="info-block">
                                                    <div className="name">Nayef Ahmed Chowdhury</div>
                                                    <div className="position">Executive Director</div>
                                                    <div className="description">
                                                        <span>Nayef Ahmed Chowdhury joined as the Product Manager of Chaldal in December 2013. He developed products by conducting market research; identifying potential products and product pricing.<br/><br/>He is looking after overall Sourcing, overseeing the strategic plan, administration and programs of Chaldal. He graduated from BGMEA University of Fashion &amp; Technology.</span>
                                                    </div>
                                                </div>
                                            {selectedMembers[5] && (
                                            <div data-cid="5" >
                                                <div className="arrowClass">
                                                    <div className="arrowHolder">
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1"/>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>


                                        <div className={`individualTeam ${selectedMembers[6] ? 'selected' : ''}`} onClick={() => toggleSelected(6)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/uditi2_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Lusbun Uditi</div>
                                                <div className="position">Director of Monitoring</div>
                                                <div className="description">
                                                    <span>Lusbun Uditi joined as the Management Trainee Officer in Chaldal in February 2014. Currently, she is the Director of Business Development of Chaldal. She designs and oversees all the operations, evaluations, and learning activities of the projects.<br/><br/>Uditi holds a Bachelors degree in Economics from North South University.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[6] && (
                                            <div data-cid="6" >
                                                <div className="arrowClass">
                                                    <div className="arrowHolder">
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1"/>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                        <div className={`individualTeam ${selectedMembers[15] ? 'selected' : ''}`} onClick={() => toggleSelected(15)}>
                                            <div class="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/sumon_v3.png?q=best&m=210&webp=1&alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div class="info-block">
                                                <div class="name">Md. Sumon Mallik</div>
                                                <div class="position">Director of Operations</div>
                                                <div class="description">
                                                    <span>Md. Sumon Mallik joined as an Assistant Accounts Officer of Chaldal in March 2014. Now, he is the Director of Operations of Chaldal.<br/><br/>Currently, he is responsible for the direction, coordination, overall operations, and profitability of Chaldal. Mr. Mallik graduated from Southeast University.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[15] && (
                                            <div class="arrowClass arrowClassHide">
                                                <div class="arrowHolder">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&m=25&webp=1&alpha=1"/>
                                                </div>
                                            </div>)}
                                        </div>



                                        <div className={`individualTeam ${selectedMembers[7] ? 'selected' : ''}`} onClick={() => toggleSelected(7)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/shahed_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">HU Shahed</div>
                                                <div className="position">Director of Infrastructure</div>
                                                <div className="description">
                                                    <span>HU Shahed joined as the Corporate Sales Manager of Chaldal in 2014. He provided resolutions to operational problems whilst adhering to Chaldal's Corporate Service.<br/><br/>Currently, he is working as the Director of Infrastructure in Chaldal Limited. He is responsible for overseeing every aspect of Chaldal's equipment and storage facilities. He completed his BBA in Marketing from Asian University of Bangladesh.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[7] && (
                                            <div data-cid="7" >
                                                <div className="arrowClass">
                                                    <div className="arrowHolder">
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&amp;m=25&amp;webp=1&amp;alpha=1"/>
                                                    </div>
                                                </div>
                                            </div>)}   
                                        </div>


                                        <div className={`individualTeam ${selectedMembers[8] ? 'selected' : ''}`} onClick={() => toggleSelected(8)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/asad2_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Asad Nour</div>
                                                <div className="position">Director of Training</div>
                                                <div className="description">
                                                    <span>Asad Nour joined as the Head of Activation of Chaldal in November 2014. Currently, he is working as the Director of Training in Chaldal Limited. His responsibilities include identifying training needs, developing group and individual learning courses, and managing the training budget.<br/><br/>He graduated from Limkokwing University in Malaysia, and did MBA from Open University in Malaysia.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[8] && (
                                            <div data-cid="8" >
                                                
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[9] ? 'selected' : ''}`} onClick={() => toggleSelected(9)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/shion_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Raisul Islam Shion</div>
                                                <div className="position">Director of Night Operations</div>
                                                <div className="description">
                                                    <span>Raisul Islam Shion has joined Chaldal on 1st January, 2015 as a Customer Service Executive.<br/><br/>He is currently working as the Director of Night Operations. He is handling store, inventory management and the vegetables supply chain management. He graduated from Primeasia University.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[9] && (
                                            <div data-cid="9" >
                                                
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[10] ? 'selected' : ''}`} onClick={() => toggleSelected(10)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/mustafiz2_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Md. Mustafizur Rahman</div>
                                                <div className="position">Director of Corporate Relations</div>
                                                <div className="description">
                                                    <span>Md. Mustafizur Rahman joined as the Director of Business Development of Chaldal in March 2014. Currently, he is promoted to Director of Corporate Relation of Chaldal.<br/><br/>He builds and maintains relationships with key stakeholders in the organization.<br/><br/>He completed his BBA in Marketing and International Business from North South University.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[10] && (
                                            <div data-cid="10" >
                                                
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[11] ? 'selected' : ''}`} onClick={() => toggleSelected(11)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/hasanuzzaman_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Md. Hasanuzzaman</div>
                                                <div className="position">Director of Internal Audit</div>
                                                <div className="description">
                                                    <span>Md. Hasanuzzaman joined as the Accounts Executive of Chaldal in September 2015. He is responsible for preparing and implementing a risk-based audit plan to assess and make suggestions for improving the company’s financial activities and internal controls.<br/><br/>Hasanuzzaman holds an MBS in Management from National University Bangladesh.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[11] && (
                                            <div data-cid="11" >
                                                
                                            </div>)}
                                        </div>


                                        <div className={`individualTeam ${selectedMembers[12] ? 'selected' : ''}`} onClick={() => toggleSelected(12)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/raceme_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Emrul Kayes Raceme</div>
                                                <div className="position">Director, IT</div>
                                                <div className="description">
                                                    <span>Emrul joined as Product Designer in 2016. He was responsible for various design aspects.<br/><br/>He is now the Director of Product Operations where he is responsible for designing large-scale software systems and triage between the Operations Team and the Engineering team. Emrul graduated from Limkokwing University of Creative Technology in London.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[12] && (
                                            <div data-cid="12" >
                                                
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[13] ? 'selected' : ''}`} onClick={() => toggleSelected(13)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/ishrat2_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Ishrat Jahan Nabila</div>
                                                <div className="position">Chief of Staff</div>
                                                <div className="description">
                                                    <span>Ishrat Nabila joined as the Director of Human resource, Legal and Compliance of Chaldal in January 2018. She is responsible for policy development, legal compliance, and legislative affairs of Chaldal.<br/><br/>She completed her post graduation from the Cardiff University in UK.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[13] && (
                                            <div data-cid="13" >
                                                
                                            </div>)}
                                        </div>


                                        <div className={`individualTeam ${selectedMembers[14] ? 'selected' : ''}`} onClick={() => toggleSelected(14)}>
                                            <div className="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/page/Team/images/tanveer_v3.png?q=best&amp;m=210&amp;webp=1&amp;alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div className="info-block">
                                                <div className="name">Tanveer Rashid</div>
                                                <div className="position">Senior Director of Finance</div>
                                                <div className="description">
                                                    <span>Tanveer joined in 2020 as Senior Director of Finance of Chaldal Limited.<br/><br/>Currently, he is responsible for the finance and accounts of Chaldal and all its subsidiaries. He has attained his ICAEW &amp; ACCA memberships and has completed his graduation from UCL.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[14] && (
                                            <div data-cid="14" >
                                                
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[16] ? 'selected' : ''}`} onClick={() => toggleSelected(16)}>
                                            <div class="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/Fahad-Sir-v2.png?q=best&m=210&webp=1&alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div class="info-block">
                                                <div class="name">SK Ahammad Fahad</div>
                                                <div class="position">Data Scientist</div>
                                                <div class="description">
                                                    <span>SK Ahammad Fahad joined as a consultant in the Data Science Department at Chaldal in October 2020. His tenure at the organization, specifically within the Data Science Department, highlights his active contribution to various facets of the business, including inventory management, customer engagement, and strategic decision-making. Currently, he is working as a Data Scientist.<b/><br/>Fahad has completed an M.Sc. in Information and Communication Technology from MEDIU. Currently, he is enrolled in the Doctor of Engineering (DEng) program at DSAIL, Singapore Institute of Technology to pursue his PhD.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[16] && (

                                            <div class="arrowClass">
                                                <div class="arrowHolder">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&m=25&webp=1&alpha=1"/>
                                                </div>
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[17] ? 'selected' : ''}`} onClick={() => toggleSelected(17)}>
                                            <div class="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/rezaurrahman_v3.png?q=best&m=210&webp=1&alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div class="info-block">
                                                <div class="name">Rezaur Rahman Jitu</div>
                                                <div class="position">VP Engineering</div>
                                                <div class="description">
                                                    <span>Rezaur Rahman Jitu joined as Principal Engineer at Chaldal in January 2021. He is in charge of designing improved user interfaces and user experiences. He is also responsible for launching new features that will improve the user experience on Chaldal's website and mobile application.<br/><br/>He earned a computer science degree from Ahsanullah University of Science and Technology.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[17] && (

                                            <div class="arrowClass">
                                                <div class="arrowHolder">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&m=25&webp=1&alpha=1"/>
                                                </div>
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[18] ? 'selected' : ''}`} onClick={() => toggleSelected(18)}>
                                            <div class="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/shangkha_v3.png?q=best&m=210&webp=1&alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div class="info-block">
                                                <div class="name">Mahbub M M Muntasin</div>
                                                <div class="position">Sr. Director, CDVN</div>
                                                <div class="description">
                                                    <span>Mahbub M M Muntasin is the Director of Chaldal Vegetable Network. He is overseeing operations, sourcing, sales, and process development. He aims to improve profitability, establish perishable supply chains, and enhance system efficiency.<br/><br/>He retired as a Squadron Leader in Bangladesh Air Force after a 15-year career. He graduated from Bangladesh Air Force Academy and has a Master's degree in Criminology and Criminal Justice from the University of Dhaka.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[18] && (
                                            <div class="arrowClass">
                                                <div class="arrowHolder">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&m=25&webp=1&alpha=1"/>
                                                </div>
                                            </div>)}
                                        </div>

                                        <div className={`individualTeam ${selectedMembers[19] ? 'selected' : ''}`} onClick={() => toggleSelected(19)}>
                                            <div class="img">
                                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/Kamruzzaman.png?q=best&m=210&webp=1&alpha=1" size="210" style={{backgroundColor: 'transparent'}}/>
                                            </div>
                                            <div class="info-block">
                                                <div class="name">Md. Kamruzzaman</div>
                                                <div class="position">Director of Central Planning</div>
                                                <div class="description">
                                                    <span>Kamruzzaman is an Industrial & Production Engineer. Prior to Chaldal, he worked in RMG for around 10 years, mostly with the coverage of Planning, IE, and Operations.<br/><br/>He joined as a consultant in 2020 and worked in Resources and Ops departments. Currently, he is working in Central Planning where the core job is the synchronization of the tasks of all departments based on specific NorthStar to ensure the optimum utilization of the resources.<br/><br/>Kamruzzaman completed his Bachelor's Degree in IPE from SUST.</span>
                                                </div>
                                            </div>
                                            {selectedMembers[19] && (
                                            <div class="arrowClass">
                                                <div class="arrowHolder">
                                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Team/images/down-arrow.png?q=best&m=25&webp=1&alpha=1"/>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
  );
};
export default TeamP;
