
import React, { useState, useEffect, useRef } from 'react';

import './css/Recipes.css';

import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import { IoIosArrowForward } from "react-icons/io";
import DeliveryInfo from './crt';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import { Link } from 'react-router-dom';


const Recipe = () => {
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
    <Link className='dashboard-container'>
     
      <header className="header" ref={logoRef}>
      <STC_ChT/>
        <div className='flex' >
        <div className={`hamburgerMenu ${isActive ? 'active' : ''}`}
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
        </div>
          <div className="logo_111 " >
            <Link  to="/" >
              <img src={logo} className="egg chaldal_logo" alt="logo" />
            </Link>
          </div>

                <div className='search_header' style={{  top:'1px' ,paddingLeft: '30px'}}>
                  <CustomizedInputBase/>
                </div>

          <div className="lcn">
          <div id="citySelectionLink" >
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
        
        <div className="everythingElseWrapper unauthed" style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '18%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>
            <section className="bodyTable">
                <div className="Recipe-Router">
                    <div id='recipe'>
                        <section className="header-section">
                            <div>
                                <div>
                                <div className="noCarousel">
                                    <div className="items-slides-inner-container long_transition">
                                    <ul>
                                        <li style={{width: '1440px'}}>
                                        <div className="banner-image">
                                            <a href="/recipes">
                                            <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D46218&amp;q=low&amp;v=1&amp;webp=1" className="banner-img-class"/>
                                            </a>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>

                        <section className="item-section">
                            <div className="content">
                                <div className="recipe-item">
                                <a href="/recipes/category/bangladesher-pitha">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/desserts?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40089&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Desserts</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/hilsha-special">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/fish-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40133&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Fish recipe</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/beef-meat">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/beef?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40137&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Beef</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/delicious-chicken-recipe">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/chicken?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40142&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Chicken</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/variety-egg-recipes">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/eggs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40145&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Eggs</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/assorted-vegetable-recipe">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/mash-veggies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40157&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Mash & veggies</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/snacks-recipe-collection">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/snacks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43375&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Snacks</div>
                                </a>
                                </div>
                            </div>
                        </section>

                        <section className="recipe-section"style={{width:'1440px', alignItems:'center'}}>
                            <div className="title-area">
                                <h2><span className="titleFont"><span>Recipes</span></span></h2>
                            </div>
                            <div className="recipeItemsSection" >
                                <div className="individual-recipe">
                                    <a href="/recipes/nescafe-hot-latte-coffee" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                        <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-hot-latte-coffee?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131795&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                        <div className="individual-recipe-title">
                                            <h3>Nescafe Hot Latte</h3>
                                            <h5><span><em>Cook Time :</em> 15 Mins</span></h5>
                                        </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/nescafe-mocha-frappuccino" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                        <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-mocha-frappuccino?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131793&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                        <div className="individual-recipe-title">
                                            <h3>Nescafe Mocha Frappuccino</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                        </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/pistachio-ice-cream" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                        <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/pistachio-ice-cream?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131863&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                        <div className="individual-recipe-title">
                                            <h3>Pistachio Ice Cream</h3>
                                            <h5><em>Cook Time :</em> 25 Mins</h5>
                                        </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/nescafe-milkshake-with-dry-fruits-2" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-milkshake-with-dry-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131594&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                                <h3>Nescafe Milkshake With Dry Fruits</h3>
                                                <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/mango-smoothie" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/mango-smoothie?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D79204&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                                <h3>Mango Smoothie</h3>
                                                <h5><em>Cook Time :</em> 5 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/nescafe-milkshake-with-dry-fruits-2" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-milkshake-with-dry-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131594&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Nescafe Milkshake With Dry Fruits</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/mango-smoothie" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/mango-smoothie?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D79204&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Mango Smoothie</h3>
                                            <h5><em>Cook Time :</em> 5 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/mango-royale" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/mango-royale?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78965&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Mango Royale</h3>
                                            <h5><em>Cook Time :</em> 30 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/lipton-tea" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/lipton-tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D62891&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Lipton Healthy Hydration</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/custard-trifle" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/custard-trifle?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60174&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Custard Trifle</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/pineapple-iced-tea" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/pineapple-iced-tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60155&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Pineapple Iced Tea</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/watermelon-iced-tea" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/watermelon-iced-tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60113&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Watermelon Iced Tea</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/gurer-payesh" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/gurer-payesh?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D46225&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Gurer Payesh</h3>
                                            <h5><em>Cook Time :</em> 30 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/pan-cake" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/pan-cake?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D44976&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Pan Cake</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/fruits-salad" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/fruits-salad?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D44336&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Fruits Salad</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/laccha-shemai" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/laccha-shemai?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43932&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Laccha Shemai</h3>
                                            <h5><em>Cook Time :</em> 20 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/gajor-halva" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/gajor-halva?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43124&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Gajor Halva</h3>
                                            <h5><em>Cook Time :</em> 30 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/boot-daal-barfi" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/boot-daal-barfi?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43122&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Boot Daal Barfi</h3>
                                            <h5><em>Cook Time :</em> 25 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/suji-halva" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/suji-halva?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43113&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Suji Halva</h3>
                                            <h5><em>Cook Time :</em> 12 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/egg-pudding" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/egg-pudding?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40146&q=low&v=1&m=300&webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Egg Pudding</h3>
                                            <h5><em>Cook Time :</em> 40 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/taler-pitha-recipe" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/taler-pitha-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40100&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Taler Pitha</h3>
                                            <h5><em>Cook Time :</em> 60 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/patishapta-pitha-recipe" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/patishapta-pitha-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40098&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Patishapta Pitha</h3>
                                            <h5><em>Cook Time :</em> 60 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/dudhchitoy-pitha-recipe" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/dudhchitoy-pitha-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40094&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Dudh Chitoy Pitha</h3>
                                            <h5><em>Cook Time :</em> 60 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="hasMoreRecipeLoading"></div>
                            </div>
                        </section>
                        <footer id="footer" style={{display:'block'}}>
                            <section className="footer-banner">
                                <div className="banner">
                                    <div className="wrap">
                                        <div className="left-area">
                                            <ul>
                                                <li>
                                                    <span></span>
                                                    <span className="icon">
                                                        <span></span>
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/page/BrandComponent/images/1-hour.png?q=low&amp;webp=1&amp;alpha=1"/>
                                                        <span></span>
                                                    </span>
                                                    <span className="text">
                                                        <span></span>
                                                        <span>30 minute delivery</span>
                                                        <span></span>
                                                    </span>
                                                    <span></span>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <span className="icon">
                                                        <span></span>
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/page/BrandComponent/images/cash-on-delivery.png?q=low&amp;webp=1&amp;alpha=1"/>
                                                        <span></span>
                                                    </span>
                                                    <span className="text">
                                                        <span></span>
                                                        <span>Cash on delivery</span>
                                                        <span></span>
                                                    </span>
                                                    <span></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="right-area">
                                            <ul>
                                                <li className="text">Pay with</li>
                                                <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Amex.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/mastercard.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/VIsa.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon bkash"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/bkash.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon bkash"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/NagadLogo.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon cod"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/COD.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="footer-left">
                                <div className="footerTop">
                                    <h2 className="footerLogo">
                                        <img className="chaldal_logo" style={{backgroundImage:'url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/header/Header/images/logo-small.png?q=low&amp;webp=1&amp;alpha=1)', backgroundRepeat:'no-repeat'}} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Chaldal logo"/>
                                    </h2>
                                    <span>Chaldal.com is an online shop available in Dhaka, Chattogram and Jashore. We believe time is valuable to our fellow residents, and that they should not have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Chaldal delivers everything you need right at your door-step and at no additional cost.</span>
                                </div>
                                <div className="footerBottom">
                                    <div className="list-type customer-service">
                                        <p><span></span><span>Customer Service</span><span></span></p>
                                        <ul><span></span>
                                            <li><a href="/recipes/t/ContactUs">Contact Us</a></li>
                                            <li><a href="/recipes/t/Help">FAQ</a></li><span></span>
                                        </ul>
                                    </div>
                                    <div className="list-type customer-service">
                                        <p><span></span><span>About Chaldal</span><span></span></p>
                                        <ul><span></span>
                                            <li><a href="/recipes/t/PrivacyInfo">Privacy Policy</a></li>
                                            <li><a href="/recipes/t/TermsOfUse">Terms of Use</a></li><span></span>
                                        </ul>
                                    </div>
                                    <div className="list-type customer-service">
                                        <p><span></span><span>For Business</span><span></span></p>
                                        <ul><span></span>
                                            <li><a href="/recipes/corporate">Corporate</a></li><span></span>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-right">
                                <div className="app-download-section">
                                    <div className="wrap">
                                        <div className="google_play_store"><a href="https://play.google.com/store/apps/details?id=com.chaldal.poached"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/google_play_store.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></div>
                                        <div className="app_store"><a href="https://itunes.apple.com/us/app/chaldal-online-grocery/id1104493220"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/app_store.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></div>
                                    </div>
                                </div>
                                <div className="contact-section">
                                    <div className="phone-number">
                                        <div className="wrap"><span className="phone-icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/phone_icon.png?q=low&amp;webp=1&amp;alpha=1"/></span><span className="number"><span>16710</span></span></div>
                                    </div>
                                    <div className="email-address">
                                        <span className="pre-text">or </span><span className="email">support@chaldal.com</span>
                                    </div>
                                </div>
                                <div className="social-section">
                                    <ul>
                                        <li><a href="https://www.facebook.com/chaldalcom" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Facebook.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></li>
                                        <li><a href="https://twitter.com/Chaldal" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/twitter.png?q=low&webp=1&alpha=1"/><span></span></a></li>
                                        <li><a href="https://www.instagram.com/chaldal/" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Instagram.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></li>
                                        <li><a href="https://www.linkedin.com/company/chaldal/" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Youtube.png?q=low&webp=1&alpha=1"/><span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </footer>


                    </div>
                </div>
            </section>
        </div>
    </Link>
  );
};

export default Recipe;

