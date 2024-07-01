import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './css/Offers.css';
import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';


const Offers= () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
        
        <div class id="your-offers"style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '12%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>
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
            <div  className="mainTile">
                <a  className="">
                    <div  className="categoryBox">
                        <div  className="categoryName">
                            <span>Summer Collection</span>
                            <span> </span>
                            <span>
                            <span>(</span>
                            <span>2</span>
                            <span>)</span>
                            </span>
                        </div>
                        <div  className="categoryImg">
                            <img src="https://chaldn.com/_mpimage/summer-collection?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D155983&amp;q=best&amp;v=1&amp;webp=1&amp;alpha=1"/>
                        </div>
                    </div>
                </a>
  <a  className="">
    <div  className="categoryBox">
      <div  className="categoryName">
        <span>Flash Sales </span>
        <span> </span>
        <span>
          <span>(</span>
          <span>10</span>
          <span>)</span>
        </span>
      </div>
      <div  className="categoryImg">
        <img src="https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&amp;q=best&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>
  <a  className="">
    <div  className="categoryBox">
      <div  className="categoryName">
        <span>Popular</span>
        <span> </span>
        <span>
          <span>(</span>
          <span>9</span>
          <span>)</span>
        </span>
      </div>
      <div  className="categoryImg">
        <img src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95790&amp;q=best&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>
  <a  className="">
    <div  className="categoryBox">
      <div  className="categoryName">
        <span>Food</span>
        <span> </span>
        <span>
          <span>(</span>
          <span>3</span>
          <span>)</span>
        </span>
      </div>
      <div  className="categoryImg">
        <img src="https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95785&amp;q=low&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>
  <a  className="">
    <div  className="categoryBox">
      <div  className="categoryName">
        <span>Cleaning Supplies</span>
        <span> </span>
        <span>
          <span>(</span>
          <span>24</span>
          <span>)</span>
        </span>
      </div>
      <div  className="categoryImg">
        <img src="https://chaldn.com/_mpimage/cleaning-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95783&amp;q=best&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>
  <a  className="">
    <div  className="categoryBox">
      <div  className="categoryName">
        <span>Personal Care</span>
        <span> </span>
        <span>
          <span>(</span>
          <span>23</span>
          <span>)</span>
        </span>
      </div>
      <div  className="categoryImg">
        <img src="https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&amp;q=low&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>
  <a  className="">
    <div  className="categoryBox">
      <div  className="categoryName">
        <span>Health &amp; Wellness</span>
        <span> </span>
        <span>
          <span>(</span>
          <span>3</span>
          <span>)</span>
        </span>
      </div>
      <div  className="categoryImg">
        <img src="https://chaldn.com/_mpimage/health-wellness?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95788&amp;q=best&amp;v=1&amp;webp=1&amp;alpha=1"/>
      </div>
    </div>
  </a>
</div>


<h1 >Special Offers</h1>

<ul className="offer-container">



  <li className="offer-item">
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158759&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Mango Himshagor ± 50 gm 3 kg-offer" className="offer-image"/>
    <div className="product">
      <div className="imageWrapper">
        <div className="imageWrapperWrapper">
          <img src="https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1" size="400" style={{ backgroundColor: 'transparent' }} />
        </div>
        <div className="name">Mango Himshagor ± 50 gm</div>
        <div className="subText">3 kg</div>
        <div className="discountedPriceSection">
          <div className="discountedPrice">
            <span>৳ </span><span>399</span>
          </div>
          <div className="price">
            <span>৳ </span><span>510</span>
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
        
</Link>
  );
};
export default Offers;
