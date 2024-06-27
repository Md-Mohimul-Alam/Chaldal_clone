import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import Sidebar_phr from './side_phr';
import './css/Offers2.css';



const Offers= () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
};
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className='dashboard-container'>
        <div className='headerWrapper'>
            <div className="headerWrapperWrapper">
             <div ></div>   
             <STC_ChT/>
            <div itemScope="" itemType="http://schema.org/WebSite" className="top-header">
            <button className={`hamburgerMenu ${isActive ? 'active' : ''}`}  onClick={handleClick}>
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
            <div className="logo">
                <a>
                    <img
                        className="egg chaldal_logo"
                            style={{
                              width: "165px",

                                    backgroundImage: 'url("https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-506/Default/components/header/Header/images/logo-banglameds.png?q=low&webp=1&alpha=1")',
                                     backgroundRepeat: 'no-repeat',
                                    }}
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    />
                </a>
            </div>


    <form
      itemScope=""
      itemProp="potentialAction"
      itemType="http://schema.org/SearchAction"
      className="searchArea hidden-xs"
    >
      <div className="searchInput" style={{width: '1000px' ,marginRight: '150px'}}>
        <div>
        <CustomizedInputBase className="input"/>

        </div>
        <div className="search-suggestions"></div>
      </div>
    </form>






    <div id="citySelectionLink">
      <div className="area citySelectionArea">
        <span className="locationMarkerIcon">
          <svg id="Location" width="17px" height="14px" viewBox="0 0 16.749 20">
            <path
              id="Path_52"
              data-name="Path 52"
              d="M49.1,20.2l-.581-.5c-.8-.671-7.794-6.71-7.794-11.127a8.375,8.375,0,0,1,16.749,0c0,4.418-6.993,10.457-7.79,11.131Zm0-18.189a6.571,6.571,0,0,0-6.564,6.564c0,2.775,4.3,7.209,6.564,9.238,2.262-2.03,6.564-6.466,6.564-9.238A6.571,6.571,0,0,0,49.1,2.009Z"
              transform="translate(-40.725 -0.198)"
              fill="#ff6f71"
            ></path>
            <path
              id="Path_53"
              data-name="Path 53"
              d="M173.446,136.238a3.32,3.32,0,1,1,3.32-3.32A3.32,3.32,0,0,1,173.446,136.238Zm0-4.979a1.66,1.66,0,1,0,1.66,1.66A1.66,1.66,0,0,0,173.446,131.259Z"
              transform="translate(-165.071 -124.544)"
              fill="#ff6f71"
            ></path>
          </svg>
        </span>
        <div className="metropolitanAreaName">
          <span>Dhaka</span>
        </div>
        <p className="hidden-xs">
          <i className="arrow-down hidden-xs"></i>
        </p>
      </div>
      <div className="headerAddressComponent">
        <div>
          <div className="touchBlocker"></div>
          <div className="address-list">
            <div className="confirmAddressTitle hide geolocationOffTitle">
              <button className="closeButton hide">
                <div className="before"></div>
                <div className="after"></div>
              </button>
            </div>
            <div className="hide"></div>
            <div>
              <div className="useCurrentLocation">
                <svg style={{ display: 'inline-block', verticalAlign: 'middle' }} width="40px" height="40px" viewBox="0 0 48 48">
                  <g data-name="Group 10827" transform="translate(-3295 18156)">
                    <circle cx="24" cy="24" r="24" fill="#fff" transform="translate(3295 -18156)"></circle>
                    <g transform="translate(3307 -18144)">
                      <g data-name="Group 521" transform="translate(2.726 2.672)">
                        <g data-name="Group 520">
                          <path
                            fill="#ff686e"
                            d="M151.153 141.827a8.812 8.812 0 01-.077 1.149l.026-.193a8.576 8.576 0 01-.413 1.7c-.046.13-.1.258-.148.386s.073-.172.019-.046l-.041.094-.1.218a8.471 8.471 0 01-.888 1.449c-.081.107.113-.145.03-.039l-.063.079c-.042.053-.086.1-.129.157a9.061 9.061 0 01-.293.329c-.193.206-.4.4-.609.587-.1.089-.206.176-.312.26-.04.032-.147.114.04-.03l-.081.061c-.063.048-.128.094-.192.14a8.488 8.488 0 01-.838.52 8.536 8.536 0 01-.645.316c-.17.075.13-.054.015-.006l-.128.052a8.421 8.421 0 01-1.955.51l.193-.026a8.68 8.68 0 01-2.3 0l.193.026a8.572 8.572 0 01-1.7-.413c-.13-.046-.258-.1-.386-.149s.172.073.046.019l-.094-.041c-.073-.032-.145-.066-.218-.1a8.467 8.467 0 01-1.449-.888c-.107-.081.145.113.039.03l-.08-.063c-.053-.042-.1-.086-.157-.129a9.061 9.061 0 01-.329-.293c-.206-.193-.4-.4-.587-.609a7.158 7.158 0 01-.26-.312c-.032-.04-.114-.147.03.04l-.061-.081c-.048-.063-.094-.128-.14-.192a8.48 8.48 0 01-.52-.838 8.536 8.536 0 01-.316-.645c-.075-.17.054.13.006.015a2.84 2.84 0 01-.051-.128 8.42 8.42 0 01-.51-1.955l.026.193a8.676 8.676 0 010-2.3l-.026.193a8.581 8.581 0 01.413-1.7c.046-.13.1-.258.149-.386s-.073.172-.019.046l.041-.094c.032-.073.067-.145.1-.218a8.467 8.467 0 01.888-1.449c.081-.107-.113.145-.03.039l.063-.08c.042-.053.086-.1.129-.157.094-.112.193-.221.293-.329.193-.206.4-.4.609-.587.1-.089.206-.176.313-.26.04-.032.147-.114-.04.03l.081-.061c.063-.048.128-.094.192-.14a8.465 8.465 0 01.838-.52 8.536 8.536 0 01.646-.316c.17-.075-.13.054-.015.006l.128-.051a8.422 8.422 0 011.955-.51l-.193.026a8.679 8.679 0 012.3 0l-.193-.026a8.586 8.586 0 011.7.413c.13.046.258.1.386.149s-.172-.073-.046-.019l.094.041.217.1a8.465 8.465 0 011.449.888c.107.081-.145-.113-.039-.03l.08.063c.053.042.1.086.157.129.112.095.221.193.329.293.206.193.4.4.587.609.089.1.176.206.26.312.032.04.114.147-.03-.04l.061.081c.048.063.094.128.14.192a8.476 8.476 0 01.52.838 8.536 8.536 0 01.316.645c.075.17-.054-.13-.006-.015l.052.128a8.421 8.421 0 01.51 1.955l-.026-.193a8.831 8.831 0 01.077 1.149.724.724 0 001.449 0 9.169 9.169 0 10-4.551 7.934 9.417 9.417 0 002.73-2.45 9.134 9.134 0 001.821-5.484.724.724 0 10-1.449 0z"
                            transform="translate(-134.224 -132.638)"
                          ></path>
                        </g>
                      </g>
                      <path
                        fill="#ff686e"
                        d="M15.438 8.97H.726a.725.725 0 100 1.449h14.712a.725.725 0 100-1.449z"
                        transform="translate(3307.947 -18143.802)"
                      ></path>
                      <path
                        fill="#ff686e"
                        d="M8.97.726v14.712a.725.725 0 101.449 0V.726a.725.725 0 10-1.449 0z"
                        transform="translate(3307.947 -18143.802)"
                      ></path>
                    </g>
                  </g>
                </svg>
                <div>
                  <span className="title">Use current location</span>
                </div>
              </div>
              <div className="list-group locationListItem">
                <div>
                  <a href="#" className="locationRow address">
                    <span className="locationIcon">
                      <svg
                        id="Location-2"
                        data-name="Location"
                        width="17px"
                        height="14px"
                        viewBox="0 0 16.749 20"
                      >
                        <path
                          id="Path_52-2"
                          data-name="Path 52"
                          d="M49.1,20.2l-.581-.5c-.8-.671-7.794-6.71-7.794-11.127a8.375,8.375,0,0,1,16.749,0c0,4.418-6.993,10.457-7.79,11.131Zm0-18.189a6.571,6.571,0,0,0-6.564,6.564c0,2.775,4.3,7.209,6.564,9.238,2.262-2.03,6.564-6.466,6.564-9.238A6.571,6.571,0,0,0,49.1,2.009Z"
                          transform="translate(-40.725 -0.198)"
                          fill="#ff6f71"
                        ></path>
                        <path
                          id="Path_53-2"
                          data-name="Path 53"
                          d="M173.446,136.238a3.32,3.32,0,1,1,3.32-3.32A3.32,3.32,0,0,1,173.446,136.238Zm0-4.979a1.66,1.66,0,1,0,1.66,1.66A1.66,1.66,0,0,0,173.446,131.259Z"
                          transform="translate(-165.071 -124.544)"
                          fill="#ff6f71"
                        ></path>
                      </svg>
                    </span>
                    <div className="metropolitanAreaName">
                      <span>Dhaka</span>
                    </div>
                  </a>
                  <a href="#" className="locationRow address">
                    <span className="locationIcon">
                      <svg
                        id="Location-3"
                        data-name="Location"
                        width="17px"
                        height="14px"
                        viewBox="0 0 16.749 20"
                      >
                        <path
                          id="Path_52-3"
                          data-name="Path 52"
                          d="M49.1,20.2l-.581-.5c-.8-.671-7.794-6.71-7.794-11.127a8.375,8.375,0,0,1,16.749,0c0,4.418-6.993,10.457-7.79,11.131Zm0-18.189a6.571,6.571,0,0,0-6.564,6.564c0,2.775,4.3,7.209,6.564,9.238,2.262-2.03,6.564-6.466,6.564-9.238A6.571,6.571,0,0,0,49.1,2.009Z"
                          transform="translate(-40.725 -0.198)"
                          fill="#ff6f71"
                        ></path>
                        <path
                          id="Path_53-3"
                          data-name="Path 53"
                          d="M173.446,136.238a3.32,3.32,0,1,1,3.32-3.32A3.32,3.32,0,0,1,173.446,136.238Zm0-4.979a1.66,1.66,0,1,0,1.66,1.66A1.66,1.66,0,0,0,173.446,131.259Z"
                          transform="translate(-165.071 -124.544)"
                          fill="#ff6f71"
                        ></path>
                      </svg>
                    </span>
                    <div className="metropolitanAreaName">
                      <span>Dhaka</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="hide">
              <button className="closeButton hide">
                <div className="before"></div>
                <div className="after"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
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




        <div class id="your-offers"style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '3%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>
            <div className="filterTile">
                <div className="filterHeader">
                    <div className="filterImg">
                        <svg fill="#214354" viewBox="0 0 100 100">
                            <path d="M86,19L56,49v24l-12,8V49L14,19H86 M86,15H14c-1.6,0-3.1,1-3.7,2.5c-0.6,1.5-0.3,3.2,0.9,4.4L40,50.7V81 c0,1.5,0.8,2.8,2.1,3.5c0.6,0.3,1.2,0.5,1.9,0.5c0.8,0,1.5-0.2,2.2-0.7l12-8c1.1-0.7,1.8-2,1.8-3.3V50.7l28.8-28.8 c1.1-1.1,1.5-2.9,0.9-4.4C89.1,16,87.6,15,86,15L86,15z M57.7,42.7l18-18c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-18,18 c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3S57.5,42.9,57.7,42.7z"></path>
                        </svg>
                    </div>
                <div className="filterHeaderName">Filter By Category</div>
                    <div className="filterCollapse">
                    <div>
                    <svg style={{ fill: '#214354', stroke: '#214354', display: 'inline-block', verticalAlign: 'middle' }} width="18px" height="18px" version="1.1" viewBox="0 0 100 100" x="0px" y="0px">
                    <g transform="translate(0,-952.36218)">
                    <path style={{ textIndent: '0px', textTransform: 'none', direction: 'ltr', blockProgression: 'tb', baselineShift: 'baseline', color: '#000000', enableBackground: 'accumulate' }} d="m 50,956.36217 c -25.34581,0 -46,20.65409 -46,46.00003 0,25.3457 20.65416,46 46,46 25.34592,0 46,-20.6543 46,-46 0,-25.34592 -20.65411,-46.00003 -46,-46.00003 z m 0,10 c 19.94151,0 36,16.05849 36,36.00003 0,19.9413 -16.05852,36 -36,36 -19.94136,0 -36,-16.0587 -36,-36 0,-19.94152 16.05861,-36.00003 36,-36.00003 z m 0,14.1875 -3.40625,3.125 -26,24.00003 6.8125,7.3437 L 50,994.17467 l 22.59375,20.84373 6.8125,-7.3437 -26,-24.00003 L 50,980.54967 z" fillOpacity="1" stroke="none"></path>
                    </g>
                    </svg>
                </div>
            </div>
            </div>
            </div>
            <div class="mainTile">
  <a class="">
    <div class="categoryBox">
      <div class="categoryName">
        <span>Personal Care</span>
        <span> </span>
        <span>
          <span>(</span>
          <span>23</span>
          <span>)</span>
        </span>
      </div>
      <div class="categoryImg">
        <img src="https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&amp;q=low&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>



  <a class="">
    <div class="categoryBox">
      <div class="categoryName">
        <span>Health &amp; Wellness</span>
        <span> </span>
        <span>
          <span>(</span>
          <span>3</span>
          <span>)</span>
        </span>
      </div>
      <div class="categoryImg">
        <img src="https://chaldn.com/_mpimage/health-wellness?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95788&amp;q=best&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>
</div>


<h1 >Special Offers</h1>





<ul className="offer-container">



  <li className="offer-item">
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D152685&q=low&v=1&m=400&webp=1" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/dettol-handwash-aloe-vera-refill-170-ml-combo-pack-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D99138&q=best&v=1&m=400&webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Dettol Handwash Aloe Vera Refill 170 ml Combo pack</div>
        <div className="subText">2 pcs</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>129</span>
          </div>
          <div className="price">
            <span>৳ </span><span>150</span>
          </div>
        </div>
      </div>
      <span>
        <a href="/mango-himshagor-satkhira-50-gm-3-kg" className="btnShowDetails">
          <span>Details</span><span>  &gt;</span>
        </a>
        <div className="btnShowDetailsIcon">
          <svg width="24px" height="24px" style={{ fill: '#e1e1e1', stroke: '#e1e1e1', display: 'inline-block', verticalAlign: 'middle' }} version="1.1" viewBox="0 0 100 100">
            <path d="m50 5c-24.898 0-45 20.102-45 45s20.102 45 45 45 45-20.102 45-45-20.102-45-45-45zm7.1016 70c0 2.1992-1.8984 4.1016-4.1016 4.1016h-6.1992c-2.1992 0-4.1016-1.8984-4.1016-4.1016v-26.199c0-2.3008 1.8984-4.1016 4.1016-4.1016h6.1992c2.1992 0 4.1016 1.8984 4.1016 4.1016zm-7.2031-37.102c-4.6016 0-8.3984-3.8008-8.3984-8.5 0-4.6992 3.8008-8.5 8.3984-8.5 4.6992 0 8.5 3.8008 8.5 8.5 0 4.7031-3.7969 8.5-8.5 8.5z"></path>
          </svg>
        </div>
      </span>
      <section className="addButtonWrapper border-radius-small">
        <span className="fifteenMinute" id="svgIcon">
          <svg width="22px" height="25px" style={{ display: 'inline-block', verticalAlign: 'middle' }} version="1.1" x="0px" y="0px" viewBox="0 -5 5.153 40.012">
            <path d="M38.487 11.472H31.78l6.12-9.643h-8.457L21.9 16.906h5.723l-6.289 14.935z" transform="translate(-21.334 -1.829)"></path>
          </svg>
        </span>
        <p className="buyText">Add to bag</p>
      </section>
    </div>
  </li>


  
  <li className="offer-item">
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158442&q=low&v=1&m=400&webp=1" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/dettol-handwash-re-energize-refill-170-gm-combo-pack-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D100725&q=best&v=1&m=400&webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Dettol Handwash Aloe Vera Refill 170 ml Combo pack</div>
        <div className="subText">2 pcs</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>129</span>
          </div>
          <div className="price">
            <span>৳ </span><span>150</span>
          </div>
        </div>
      </div>
      <span>
        <a href="/mango-himshagor-satkhira-50-gm-3-kg" className="btnShowDetails">
          <span>Details</span><span>  &gt;</span>
        </a>
        <div className="btnShowDetailsIcon">
          <svg width="24px" height="24px" style={{ fill: '#e1e1e1', stroke: '#e1e1e1', display: 'inline-block', verticalAlign: 'middle' }} version="1.1" viewBox="0 0 100 100">
            <path d="m50 5c-24.898 0-45 20.102-45 45s20.102 45 45 45 45-20.102 45-45-20.102-45-45-45zm7.1016 70c0 2.1992-1.8984 4.1016-4.1016 4.1016h-6.1992c-2.1992 0-4.1016-1.8984-4.1016-4.1016v-26.199c0-2.3008 1.8984-4.1016 4.1016-4.1016h6.1992c2.1992 0 4.1016 1.8984 4.1016 4.1016zm-7.2031-37.102c-4.6016 0-8.3984-3.8008-8.3984-8.5 0-4.6992 3.8008-8.5 8.3984-8.5 4.6992 0 8.5 3.8008 8.5 8.5 0 4.7031-3.7969 8.5-8.5 8.5z"></path>
          </svg>
        </div>
      </span>
      <section className="addButtonWrapper border-radius-small">
        <span className="fifteenMinute" id="svgIcon">
          <svg width="22px" height="25px" style={{ display: 'inline-block', verticalAlign: 'middle' }} version="1.1" x="0px" y="0px" viewBox="0 -5 5.153 40.012">
            <path d="M38.487 11.472H31.78l6.12-9.643h-8.457L21.9 16.906h5.723l-6.289 14.935z" transform="translate(-21.334 -1.829)"></path>
          </svg>
        </span>
        <p className="buyText">Add to bag</p>
      </section>
    </div>
  </li>

  
  <li className="offer-item">
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153050&q=low&v=1&m=400&webp=1" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/veet-pure-hair-removal-cream-normal-skin-with-cucumber-extract-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D148928&q=best&v=1&m=400&webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Veet Pure Hair Removal Cream Normal Skin With Cucumber Extract</div>
        <div className="subText">50 gm</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>175</span>
          </div>
          <div className="price">
            <span>৳ </span><span>200</span>
          </div>
        </div>
      </div>
      <span>
        <a href="/mango-himshagor-satkhira-50-gm-3-kg" className="btnShowDetails">
          <span>Details</span><span>  &gt;</span>
        </a>
        <div className="btnShowDetailsIcon">
          <svg width="24px" height="24px" style={{ fill: '#e1e1e1', stroke: '#e1e1e1', display: 'inline-block', verticalAlign: 'middle' }} version="1.1" viewBox="0 0 100 100">
            <path d="m50 5c-24.898 0-45 20.102-45 45s20.102 45 45 45 45-20.102 45-45-20.102-45-45-45zm7.1016 70c0 2.1992-1.8984 4.1016-4.1016 4.1016h-6.1992c-2.1992 0-4.1016-1.8984-4.1016-4.1016v-26.199c0-2.3008 1.8984-4.1016 4.1016-4.1016h6.1992c2.1992 0 4.1016 1.8984 4.1016 4.1016zm-7.2031-37.102c-4.6016 0-8.3984-3.8008-8.3984-8.5 0-4.6992 3.8008-8.5 8.3984-8.5 4.6992 0 8.5 3.8008 8.5 8.5 0 4.7031-3.7969 8.5-8.5 8.5z"></path>
          </svg>
        </div>
      </span>
      <section className="addButtonWrapper border-radius-small">
        <span className="fifteenMinute" id="svgIcon">
          <svg width="22px" height="25px" style={{ display: 'inline-block', verticalAlign: 'middle' }} version="1.1" x="0px" y="0px" viewBox="0 -5 5.153 40.012">
            <path d="M38.487 11.472H31.78l6.12-9.643h-8.457L21.9 16.906h5.723l-6.289 14.935z" transform="translate(-21.334 -1.829)"></path>
          </svg>
        </span>
        <p className="buyText">Add to bag</p>
      </section>
    </div>
  </li>

  
  <li className="offer-item">
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151151&q=low&v=1&m=400&webp=1"className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/veet-hair-removal-cream-for-normal-skin-cucumber-extract-free-dettol-soap-2-pcs-25-gm-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D149302&q=best&v=1&m=400&webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Veet Hair Removal Cream For Normal Skin Cucumber Extract (Free Dettol Soap 2 pcs) 25 gm</div>
        <div className="subText">2 pcs</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>199</span>
          </div>
          <div className="price">
            <span>৳ </span><span>220</span>
          </div>
        </div>
      </div>
      <span>
        <a href="/mango-himshagor-satkhira-50-gm-3-kg" className="btnShowDetails">
          <span>Details</span><span>  &gt;</span>
        </a>
        <div className="btnShowDetailsIcon">
          <svg width="24px" height="24px" style={{ fill: '#e1e1e1', stroke: '#e1e1e1', display: 'inline-block', verticalAlign: 'middle' }} version="1.1" viewBox="0 0 100 100">
            <path d="m50 5c-24.898 0-45 20.102-45 45s20.102 45 45 45 45-20.102 45-45-20.102-45-45-45zm7.1016 70c0 2.1992-1.8984 4.1016-4.1016 4.1016h-6.1992c-2.1992 0-4.1016-1.8984-4.1016-4.1016v-26.199c0-2.3008 1.8984-4.1016 4.1016-4.1016h6.1992c2.1992 0 4.1016 1.8984 4.1016 4.1016zm-7.2031-37.102c-4.6016 0-8.3984-3.8008-8.3984-8.5 0-4.6992 3.8008-8.5 8.3984-8.5 4.6992 0 8.5 3.8008 8.5 8.5 0 4.7031-3.7969 8.5-8.5 8.5z"></path>
          </svg>
        </div>
      </span>
      <section className="addButtonWrapper border-radius-small">
        <span className="fifteenMinute" id="svgIcon">
          <svg width="22px" height="25px" style={{ display: 'inline-block', verticalAlign: 'middle' }} version="1.1" x="0px" y="0px" viewBox="0 -5 5.153 40.012">
            <path d="M38.487 11.472H31.78l6.12-9.643h-8.457L21.9 16.906h5.723l-6.289 14.935z" transform="translate(-21.334 -1.829)"></path>
          </svg>
        </span>
        <p className="buyText">Add to bag</p>
      </section>
    </div>
  </li>

</ul>
</div>
        
</div>
  );
};
export default Offers;
