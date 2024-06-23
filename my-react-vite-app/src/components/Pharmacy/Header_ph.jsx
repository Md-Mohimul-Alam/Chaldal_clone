import React, {useState} from "react"
import './css/header_ph.css';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import Sidebar_phr from './side_phr';


const Header_ph = () =>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
};
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    return(
      <div>
        <div className='headerWrapper'>
            <div class="headerWrapperWrapper">
             <div ></div>   
             <STC_ChT/>
            <div itemScope="" itemtype="http://schema.org/WebSite" className="top-header">
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
                                    backgroundImage: 'url("https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/header/Header/images/logo-banglameds.png?q=low&webp=1&alpha=1")',
                                     backgroundRepeat: 'no-repeat'
                                    }}
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    />
                </a>
            </div>


    <form
      itemscope=""
      itemProp="potentialAction"
      itemType="http://schema.org/SearchAction"
      className="searchArea hidden-xs"
    >
      <div className="searchInput">
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
    {isSidebarOpen && <Sidebar_phr isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

    </div>
    );

};

export default Header_ph;
