// sidebar.jsx
import React, { useState } from "react";
import './css/sidebar.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [dropdowns, setDropdowns] = useState({});
  const [rotation, setRotation] = useState(0);

  const toggleDropdown = (cid) => {
    setRotation(rotation + 90);
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [cid]: !prevDropdowns[cid],
    }));
  };
  return (
    <div className="" >
      <div className={`menuWrapper ${isOpen ? 'open' : ''}`}  style={{ position:'relative',height:'900px', width: '230px', background: '#fff' }} onClick={toggleSidebar}>
        <div className="menu-container" style={{ width: '230px', background: '#fff', position: "fixed"}}>
        <div className="menu">

          <div className="store-menu">
            <Link  to="/" >
            <div className="store-menu-block">
              <div className="store-item selected">
                <svg  className="svg-icon" style={{ display: 'inline-block', verticalAlign: 'middle' }} width="30px" height="30px" viewBox="0 0 82.068 82">
                  <defs>
                    <linearGradient id="linear-gradient" x1="0.732" x2="0.297" y1="0.882" y2="0.298" gradientUnits="objectBoundingBox">
                      <stop offset="0" stopColor="#ff9c69"></stop>
                      <stop offset="0.995" stopColor="#ffccac"></stop>
                    </linearGradient>
                  </defs>
                  <g data-name="Group 42411" transform="translate(-34 -144)">
                    <circle cx="38.582" cy="38.582" r="38.582" fill="#ffed7a" data-name="Ellipse 855" transform="translate(34 144)"></circle>
                    <path fill="#ebd023" d="M0 0h46.153v34.3a41.864 41.864 0 01-11.087 5.98 40.532 40.532 0 01-12.8 2.1 35.444 35.444 0 01-14.381-3A104.423 104.423 0 01.079 35.6z" data-name="Path 68291" transform="rotate(-42 280.061 27.68)"></path>
                    <g transform="translate(51.648 151.599)">
                      <path fill="url(#linear-gradient)" d="M129.56 51.76c-4.83-17.288-13.631-21.689-17.454-22.8a6.646 6.646 0 00-3.713 0c-3.824 1.112-12.624 5.514-17.454 22.8 0 0-8.094 26.171 11.848 32.823a23.622 23.622 0 0014.926 0c19.941-6.652 11.847-32.823 11.847-32.823z" data-name="Path 68284" transform="translate(-89.314 -28.694)"></path>
                    </g>
                  </g>
                </svg>
                <h4 className="name">Grocery</h4>
              </div>
            </div>
            </Link>
            <Link  to="/Pharmacy/pharmacyDashboard" className="store-menu-block">
              <div className="store-item selected">
                <svg  className="svg-icon" style={{ display: 'inline-block', verticalAlign: 'middle' }} width="30px" height="30px" viewBox="0 0 73.457 76">
                  <g data-name="Group 42412" transform="translate(24405 1908)">
                    <g transform="translate(-24405.051 -1907.627)">
                      <ellipse cx="36.5" cy="38" fill="#6d76e7" data-name="Ellipse 856" rx="36.5" ry="38" transform="translate(.051 -.373)"></ellipse>
                      <path fill="#1c2ede" d="M145.173 108.444a37.005 37.005 0 00-.426-5.613l-15.336-15.354a12.891 12.891 0 00-18.177 0l-23.757 23.758a12.89 12.89 0 000 18.176l15.347 15.334a36.757 36.757 0 0042.349-36.3z" data-name="Path 68292" transform="translate(-71.663 -70.664)"></path>
                      <path fill="#fff" d="M87.477 129.411a12.891 12.891 0 010-18.177l23.758-23.758a12.891 12.891 0 0118.177 0 12.89 12.89 0 010 18.176l-23.758 23.758a12.89 12.89 0 01-18.177.001z" data-name="Path 68293" transform="translate(-71.663 -70.664)"></path>
                      <path fill="#9cfdff" d="M151.789 128.031l-23.757 23.757a12.891 12.891 0 01-18.177 0l41.935-41.935a12.89 12.89 0 010 18.177z" data-name="Path 68294" transform="translate(-94.042 -93.042)"></path>
                      <path fill="#ffaa20" d="M117.533 210.834l-11.879 11.879a12.852 12.852 0 11-18.176-18.176l11.879-11.879z" data-name="Path 68295" transform="translate(-71.664 -163.966)"></path>
                      <path fill="#e67500" d="M139.91 265.088l-11.879 11.879a12.891 12.891 0 01-18.177 0L130.823 256z" data-name="Path 68296" transform="translate(-94.042 -218.22)"></path>
                    </g>
                  </g>
                </svg>
                <h4 className="name">Pharmacy</h4>
              </div>
            </Link>
            <div className="store-menu-block">
              <div className="store-item selected" >
                <svg  className="svg-icon" style={{ display: 'inline-block', verticalAlign: 'middle' }} width="30px" height="30px" viewBox="0 0 23 23" data-reactid=".je1swuuv1e.4.0.1.0.0.2.0.0.0.$store-item-2.0">
                  <g data-name="Group 42518" transform="translate(-200 -125)">
                    <circle data-name="Ellipse 868" cx="11.5" cy="11.5" r="11.5" transform="translate(200 125)" fill="#4fb65c"></circle>
                    <path data-name="Path 68355" d="M222.951 137.505v-.481h-1.736l-2.35.481-2.588.681-2.561.528-3.512.713-3.618.607-2.588.343 3.135 6.773a12.162 12.162 0 005.339.814 13.2 13.2 0 003.2-.675 9.319 9.319 0 002.355-1.317 11.624 11.624 0 004.924-8.467z" fill="#206b1f"></path>
                    <path data-name="Path 68334" d="M216.308 138.081l-1.353.263.104.535a2.85 2.85 0 01.045.365l1.375-.267z" fill="#fef0ae"></path>
                    <path data-name="Path 68335" d="M221.433 138.406l-4.733.92a.182.182 0 01-.213-.144l-.223-1.145a.182.182 0 01.144-.213l4.733-.92a.182.182 0 01.213.144l.223 1.145a.182.182 0 01-.144.213z" fill="#fef0ae"></path>
                    <path data-name="Path 68341" d="M218.585 141.175a4.732 4.732 0 01-3.506.208.444.444 0 00-.287-.017l-2.318.537a.364.364 0 00-.267.43.37.37 0 00.276.282l5.86 1.234a.366.366 0 00.457-.283l.462-2.265a.37.37 0 00-.278-.426z" fill="#fef0ae"></path>
                    <path data-name="Path 68346" d="M212.65 131.97l1.553 1.748 2.322.737.566-.631-1.345-1.549z" fill="#ffe24d"></path>
                    <path data-name="Path 68347" d="M212.74 132.055a.342.342 0 01-.485-.024.366.366 0 01.022-.51l.736-.69a.34.34 0 01.485.025.366.366 0 01-.022.51z" fill="#584128"></path>
                    <path data-name="Path 68353" d="M215.962 135.127c.282 1.355-.275 2.689-1.252 2.973s-2.062-.546-2.344-1.9.275-2.689 1.252-2.973 2.062.545 2.344 1.9z" fill="#f88a54"></path>
                    <path data-name="Path 68348" d="M217.076 137.424a.147.147 0 01-.037-.009l-3.56-1.376a.365.365 0 01-.215-.467.357.357 0 01.461-.214l3.56 1.376a.364.364 0 01.215.467.357.357 0 01-.424.223z" fill="#584128"></path>
                    <path data-name="Path 68350" d="M213.423 135.617l-1.26 1.238a1.028 1.028 0 01-.4.25 2.229 2.229 0 01-.45.098c-.346.031-.64-.049-.679-.212s.189-.337.535-.367a2.229 2.229 0 01.45-.098 1.028 1.028 0 01.4-.25z" fill="#584128"></path>
                    <path data-name="Path 68351" d="M216.575 136.548l-1.026.91c-.03-.176-.1-.354-.208-.52s-.264-.316-.419-.439c-.183-.146-.356-.272-.52-.208z" fill="#f88a54"></path>
                  </g>
                </svg>
                <h4 className="name">Cookups</h4>
              </div>
            </div>
          </div>

        <ul className="mid_menu">
          <li className="L_2">
            <div style={{ display: 'inline-block', paddingLeft: '13px', position: 'relative' }}>
              <a className="L_2_A" href="#">
                <span>Offers</span>
                <span className="nav-count-label offers-count">
                  <span>27</span>
                </span>
              </a>
            </div>
          </li>
          <li className="L_2">
            <div style={{ display: 'inline-block', paddingLeft: '13px', position: 'relative' }}>
              <a className="L_2_A" href="#">
                <span>Egg Club</span>
              </a>
            </div>
          </li>
          <li className="L_2">
            <div style={{ display: 'inline-block', paddingLeft: '13px', position: 'relative' }}>
              <a className="L_2_A" href="#">
                <span>Deal of the Day</span>
                <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/DailyDeal.gif?q=best&amp;webp=1" alt="Dailydeal" />
              </a>
            </div>
          </li>
        </ul>

        <aside className="sidebar">
          <ul className="level-0">
            <li className="unselected topLevel">
              
              <ul className="name">
                <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/favourites.svg?q=best&amp;webp=1" alt="Fav" />
                  <a href="#">Favourites</a>
              </ul>
            </li>
            <li data-cid="1506" className="not-in-selection-tree unselected topLevel">
              <div className="name">
              <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/summer-collection?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D155983&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
                <a href="#">Summer Collection</a>
              </div>
            </li>

            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />

              <a href="#">Flash Sales</a>
            </li>


            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95790&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />

              <a href="#">Popular</a>
            </li>





            <li className="unselected topLevel">
            <div className="name">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95785&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Food</a>
                  <span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>                  
                  <IoIosArrowForward
                className="arrow-icon"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={(e) => { e.stopPropagation(); toggleDropdown(7); }}
            />
            </div>
              {dropdowns[7] && (
                <ul className="level-1">
                <li data-cid="7" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/fruits-vegetables">Fruits &amp; Vegetables</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="23" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/meat-fish">Meat &amp; Fish</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="104" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/cooking">Cooking</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="1631" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/sauces-pickles">Sauces &amp; Pickles</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="58" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/dairy">Dairy &amp; Eggs</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="14" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/breakfast">Breakfast</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="51" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/candy-chocolate">Candy &amp; Chocolate</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="49" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/snacks">Snacks</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="17" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/beverages">Beverages</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="100" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/baking-needs">Baking</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="65" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/frozen-foods">Frozen &amp; Canned</a>
                    <span>&nbsp;<i className="arrow-right"></i></span>
                  </div>
                </li>
                <li data-cid="191" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/diabetic-food">Diabetic Food</a>
                  </div>
                </li>
              </ul>
              
              )}

            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/cleaning-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95783&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>
              <a href="#">Cleaning Supplies</a>
              <span>&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>                  
              <span>
                <IoIosArrowForward
                className="arrow-icon"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={(e) => { e.stopPropagation(); toggleDropdown(83); }} />
              </span>
              {dropdowns[83] && (
                <ul className="level-1">
                <li data-cid="83" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/dish-wash">Dishwashing Supplies</a>
                    </div>
                </li>
                <li data-cid="86" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/laundry">Laundry</a>
                    </div>
                </li>
                <li data-cid="84" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/toilet-cleaning">Toilet Cleaners</a>
                    </div>
                </li>
                <li data-cid="87" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/paper-products">Napkins &amp; Paper Products</a>
                    </div>
                </li>
                <li data-cid="88" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/pest-control">Pest Control</a>
                    </div>
                </li>
                <li data-cid="1542" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/floor-glass-cleaners">Floor &amp; Glass Cleaners</a>
                    </div>
                </li>
                <li data-cid="1276" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/cleaning-accessories">Cleaning Accessories</a>
                    </div>
                </li>
                <li data-cid="82" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/air-freshners">Air Fresheners</a>
                    </div>
                </li>
                <li data-cid="90" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/trash-bags">Disposables &amp; Trash Bags</a>
                    </div>
                </li>
                <li data-cid="89" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/shoe-care">Shoe Care</a>
                    </div>
                </li>
                <li data-cid="1545" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/trash-bin-basket">Trash Bin &amp; Basket</a>
                    </div>
                </li>
            </ul>
            
              )}

            
            </li>


            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Personal Care</a>
              <span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>                  
              <span>
                <IoIosArrowForward
                className="arrow-icon"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={(e) => { e.stopPropagation(); toggleDropdown(1494); }} />
              </span>
              {dropdowns[1494] && (
                <ul className="level-1">
                <li data-cid="1494" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/female-care">Women's Care</a>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>                  

                        <span>
                          <IoIosArrowForward
                            className="arrow-icon"
                              style={{ transform: `rotate(${rotation}deg)` }}
                              onClick={(e) => { e.stopPropagation(); toggleDropdown(1608); }} />
                        </span>
                        
                    </div>
                    {dropdowns[1608]&&(
                      <ul className="level-2">
                      <li data-cid="1608" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/womens-soaps">Women's Soaps</a>
                          </div>
                      </li>
                      <li data-cid="33" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/hair-care">Hair Care</a>
                          </div>
                      </li>
                      <li data-cid="1501" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/female-shampoo">Women's Shampoos &amp; Conditioners</a>
                          </div>
                      </li>
                      <li data-cid="35" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/feminine-care">Feminine Care</a>
                          </div>
                      </li>
                      <li data-cid="1497" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/female-moisturizer">Female Moisturizer</a>
                          </div>
                      </li>
                      <li data-cid="1642" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/face-wash-scrub">Face Wash &amp; Scrub</a>
                          </div>
                      </li>
                      <li data-cid="1499" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/female-deo">Female Deo</a>
                          </div>
                      </li>
                      <li data-cid="1611" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/womens-perfume">Women's Perfume</a>
                          </div>
                      </li>
                      <li data-cid="1610" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/womens-shower-gel">Women's Shower Gel</a>
                          </div>
                      </li>
                      <li data-cid="1643" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/masks-cleansers">Masks &amp; Cleansers</a>
                          </div>
                      </li>
                      <li data-cid="1644" className="not-in-selection-tree unselected">
                          <div className="name">
                              <a href="/serum-oil-toners">Serum, Oil &amp; Toners</a>
                          </div>
                      </li>
                  </ul>
                    )}                  
                </li>
                <li data-cid="1495" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/male-care">Men's Care</a>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                  <IoIosArrowForward
                        className="arrow-icon"
                        style={{ transform: `rotate(${rotation}deg)` }}
                       onClick={(e) => { e.stopPropagation(); toggleDropdown(1636); }} />
                </span>
              </div>
              {dropdowns[1636]&&(
                <ul class="level-2">
                <li data-cid="1636" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/mens-soaps">Men's Soaps</a>
                    </div>
                </li>
                <li data-cid="1641" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/mens-perfume">Men's Perfume</a>
                    </div>
                </li>
                <li data-cid="39" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/shampoo">Men's Shampoos &amp; Conditioners</a>
                    </div>
                </li>
                <li data-cid="32" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/shaving-needs">Shaving Needs</a>
                    </div>
                </li>
                <li data-cid="1468" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/beard-grooming">Beard Grooming</a>
                    </div>
                </li>
                <li data-cid="31" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/deodorants">Men's Deodorants</a>
                    </div>
                </li>
                <li data-cid="1640" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/razors-blades">Razors &amp; Blades</a>
                    </div>
                </li>
                <li data-cid="1500" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/mens-hair-care">Men's Hair Care</a>
                    </div>
                </li>
                <li data-cid="1354" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/lotion-cream">Cream &amp; Lotion</a>
                    </div>
                </li>
                <li data-cid="1498" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/mens-facewash">Men's Facewash</a>
                    </div>
                </li>
                <li data-cid="1639" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/mens-shower-gels">Men's Shower Gels</a>
                    </div>
                </li>
            </ul>
            
              )}

                </li>
                <li data-cid="40" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/handwash">Handwash</a>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                          <IoIosArrowForward
                        className="arrow-icon"
                        style={{ transform: `rotate(${rotation}deg)` }}
                       onClick={(e) => { e.stopPropagation(); toggleDropdown(1638); }} />
                        </span>
                    </div>
                    {dropdowns[1638]&&(
                      <ul class="level-2">
                      <li data-cid="1638" class="not-in-selection-tree unselected">
                          <div class="name">
                              <a href="/liquid-handwash">Liquid Handwash</a>
                          </div>
                      </li>
                      <li data-cid="1645" class="not-in-selection-tree unselected">
                          <div class="name">
                              <a href="/hand-sanitizer">Hand Sanitizer</a>
                          </div>
                      </li>
                  </ul>
                  
                    )}
                </li>
                <li data-cid="41" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/tissue-wipes">Tissue &amp; Wipes</a>
                    </div>
                </li>
                <li data-cid="1697" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/oral-care-2">Oral Care</a>
                        <span>
                            <span>&nbsp;</span>
                            <i className="arrow-right"></i>
                        </span>
                    </div>
                </li>
                <li data-cid="1698" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/skin-care-2">Skin Care</a>
                        <span>
                            <span>&nbsp;</span>
                            <i className="arrow-right"></i>
                        </span>
                    </div>
                </li>
                <li data-cid="190" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/talcom-powder">Talcom Powder</a>
                    </div>
                </li>
                <li data-cid="1504" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/hair-color">Hair Color</a>
                    </div>
                </li>
            </ul>
            
              )}
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/health-wellness?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95788&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Health & Wellness</a>
              <span>&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>                  
              <span>
                <IoIosArrowForward
                className="arrow-icon"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={(e) => { e.stopPropagation(); toggleDropdown(1505); }} />
              </span>
              {dropdowns[1505] && (
                <ul className="level-1">
                <li data-cid="1505" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/keto-food">Keto Food</a>
                    </div>
                </li>
                <li data-cid="192" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/antiseptics">Antiseptics</a>
                    </div>
                </li>
                <li data-cid="1660" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/handwash-handrub">Handwash &amp; Handrub</a>
                    </div>
                </li>
                <li data-cid="232" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/herbal-products">Herbal &amp; Digestive Aids</a>
                    </div>
                </li>
                <li data-cid="227" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/food-supplements">Food Supplements</a>
                    </div>
                </li>
                <li data-cid="1658" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/face-masks-safety">Face Masks &amp; Safety</a>
                    </div>
                </li>
                <li data-cid="47" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/family-planning">Family Planning</a>
                    </div>
                </li>
                <li data-cid="1665" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/mouthwashes">Mouthwashes, Inhaler &amp; Balm</a>
                    </div>
                </li>
                <li data-cid="1261" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/adult-diapers">Adult Diapers</a>
                    </div>
                </li>
                <li data-cid="1666" className="not-in-selection-tree unselected">
                    <div className="name">
                        <a href="/medical-devices">Medical Devices</a>
                    </div>
                </li>
            </ul>
            
              )}
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95781&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>
              <a href="#">Baby Care</a>
              <span>
              <span>&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>                  
                  <IoIosArrowForward
                className="arrow-icon"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={(e) => { e.stopPropagation(); toggleDropdown(1673); }}/>
                </span>
          
              {dropdowns[1673]&&(
                <ul class="level-1">
                <li data-cid="211" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/diapers">Diapers</a>
                        <span>
                        <span>&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>                  
                        <IoIosArrowForward
                className="arrow-icon"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={(e) => { e.stopPropagation(); toggleDropdown(1673); }}/>
                </span>
              </div>
              {dropdowns[1673]&&(
                <ul className="level-2">
                <li data-cid="1673" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/pharmacy/medium-2">Medium (5-13 kg) Diapers</a>
                  </div>
                </li>
                <li data-cid="1676" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/pharmacy/large-2">Large (10-16 kg) Diapers</a>
                  </div>
                </li>
                <li data-cid="1672" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/pharmacy/small-2">Small (3-7 kg) Diapers</a>
                  </div>
                </li>
                <li data-cid="1671" className="not-in-selection-tree unselected">
                  <div className="name">
                    <a href="/pharmacy/newborn-2">Newborn (2-5 kg) Diapers</a>
                  </div>
                </li>
              </ul>
              
              )}
                </li>
                <li data-cid="216" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/fooding">Baby Food</a>
                        <span>
                            <span>&nbsp;</span>
                            <i class="arrow-right"></i>
                        </span>
                    </div>
                </li>
                <li data-cid="223" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/bath-skincare">Baby Skincare</a>
                    </div>
                </li>
                <li data-cid="212" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/wipes">Wipes</a>
                    </div>
                </li>
                <li data-cid="1379" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/baby-oral-care">Baby Oral Care</a>
                    </div>
                </li>
                <li data-cid="1483" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/newborn-essentials">Newborn Essentials</a>
                    </div>
                </li>
                <li data-cid="1378" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/baby-accessories">Baby Accessories</a>
                    </div>
                </li>
                <li data-cid="234" class="not-in-selection-tree unselected">
                    <div class="name">
                        <a href="/feeders">Feeders</a>
                    </div>
                </li>
            </ul>
            
              )}

            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/home-kitchen?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95787&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Home & Kitchen</a>
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/stationery-office?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95792&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Stationery & Office</a>
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/stationery-office?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95792&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Pet Care</a>
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/toys-sports?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103175&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Toys & Sports</a>
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/beauty-makeup?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116661&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Beauty & MakeUp</a>
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/fashion-lifestyle?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101371&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Fashion & Lifestyle</a>
            </li>
            <li className="unselected topLevel">
            <img className="MenuItemIcons" src="https://chaldn.com/_mpimage/vehicle-essentials?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95794&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Vehicle Essentials</a>
            </li>
          </ul>
        </aside>



        <ul className="bottom-misc-menu">
          <li className="unselected topLevel">
            <a href="#">
              <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/premiumCare.svg?q=best&amp;webp=1" alt="Premium Care" />
              <span>Premium Care</span>
            </a>
          </li>
          <li className="unselected topLevel">
            <a href="#">
              <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/recipe.svg?q=best&amp;webp=1" alt="Recipes" />
              <span>Recipes</span>
            </a>
          </li>
          <li className="unselected topLevel">
            <a href="#">
              <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-505/Default/components/header/CategoryMenuVertical/images/investIcon.svg?q=best&webp=1" alt="biniyog.io" />
              <span>biniyog.io</span>
            </a>
          </li>
        </ul>
 
        </div>
      </div>
        <div className="quick-access-menu">
          <a href="#" className="help">
            <svg width="20px" height="20px" style={{ display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 512 512">
              <path fill="url(#paint0_linear_1006_2150)" d="M256 42.666C138.24 42.666 42.667 138.24 42.667 256S138.24 469.333 256 469.333 469.333 373.76 469.333 256 373.76 42.666 256 42.666zm21.333 362.667h-42.666v-42.666h42.666v42.666zM321.493 240l-19.2 19.627C286.933 275.2 277.333 288 277.333 320h-42.666v-10.667c0-23.466 9.6-44.8 24.96-60.373l26.453-26.88c7.893-7.68 12.587-18.347 12.587-30.08 0-23.467-19.2-42.667-42.667-42.667-23.467 0-42.667 19.2-42.667 42.667h-42.666c0-47.147 38.186-85.333 85.333-85.333s85.333 38.186 85.333 85.333c0 18.773-7.68 35.84-19.84 48z"></path>
              <defs>
                <linearGradient id="paint0_linear_1006_2150" x1="256" x2="256" y1="42.666" y2="469.333" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FD4A85"></stop>
                  <stop offset="1" stopColor="#FF9D8C"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span>Help</span>
          </a>
          <div className="complaint">
            <svg width="20px" height="20px" style={{ display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 20 20">
              <path fill="url(#paint0_linear_800_2512)" fillRule="evenodd" d="M10 0a10 10 0 100 20A10 10 0 0010 0zm3.333 5L10 8.333 6.667 5 5 6.667 8.333 10 5 13.333 6.667 15 10 11.667 13.333 15 15 13.333 11.667 10 15 6.667 13.333 5z" clipRule="evenodd"></path>
              <defs>
                <linearGradient id="paint0_linear_800_2512" x1="10" x2="10" y1="0" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FD4A85"></stop>
                  <stop offset="1" stopColor="#FF9D8C"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span>Complaint</span>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Sidebar;
