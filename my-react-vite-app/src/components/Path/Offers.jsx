import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/Offers.css';
import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import { IoIosArrowForward } from "react-icons/io";
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import CartSidebar from './sticky_cart';
import { useCart } from './CartContext'; 

const Offers = () => {
  const { quantity ,items, addToCart, totalItems, cart, totalPrice, removeFromCart, updateCartItemQuantity } = useCart(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const logoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const [rotations, setRotations] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showQuantityEditor, setShowQuantityEditor] = useState({});
  const [quantities, setQuantities] = useState({});

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
    } else {
      setRotations((prevRotations) => ({
        ...prevRotations,
        [cid]: 0,
      }));
    }
  };

  const divStyle = {
    width: isSidebarOpen ? '85.8%' : '100%',
    marginLeft: isSidebarOpen ? '12%' : '0%',
    transition: 'width 0.3s ease, margin-left 0.3s ease',
  };
  const handleClickCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleAddToCart = (items) => {
    addToCart(items, 1);
    setShowQuantityEditor((prev) => ({ ...prev, [items.id]: true }));
    setQuantities((prev) => ({ ...prev, [items.id]: 1 }));
  };

  const handleIncrement = (itemsId) => {
    const items = cart.find(items => items.id === itemsId);
    if (items) {
      const newQuantity = items.quantity + 1;
      updateCartItemQuantity(itemsId, newQuantity);
      setQuantities((prev) => ({ ...prev, [itemsId]: newQuantity }));
    }
  };

  const handleDecrement = (itemsId) => {
    const items = cart.find(items => items.id === itemsId);
    if (items) {
      const newQuantity = items.quantity - 1;
      if (newQuantity <= 0) {
        removeFromCart(itemsId);
        setShowQuantityEditor((prev) => ({ ...prev, [itemsId]: false }));
      } else {
        updateCartItemQuantity(itemsId, newQuantity);
        setQuantities((prev) => ({ ...prev, [itemsId]: newQuantity }));
      }
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
              <div className="area citySelectionArea">
                  <span className="locationMarkerIcon">
                      <svg id="Location" width="17px" height="14px" viewBox="0 0 16.749 20">
                          <path id="Path_52" d="M49.1,20.2l-.581-.5c-.8-.671-7.794-6.71-7.794-11.127a8.375,8.375,0,0,1,16.749,0c0,4.418-6.993,10.457-7.79,11.131Zm0-18.189a6.571,6.571,0,0,0-6.564,6.564c0,2.775,4.3,7.209,6.564,9.238,2.262-2.03,6.564-6.466,6.564-9.238A6.571,6.571,0,0,0,49.1,2.009Z" transform="translate(-40.725 -0.198)" fill="#ff6f71"></path>
                          <path id="Path_53" d="M173.446,136.238a3.32,3.32,0,1,1,3.32-3.32A3.32,3.32,0,0,1,173.446,136.238Zm0-4.979a1.66,1.66,0,1,0,1.66,1.66A1.66,1.66,0,0,0,173.446,131.259Z" transform="translate(-165.071 -124.544)" fill="#ff6f71"></path>
                      </svg>
                  </span>

                  <div className="metropolitanAreaName">
                      <span>DOHS Baridhara</span>
                      <span>Dhaka</span>
                  </div>
                  <p className="hidden-xs">
                    <IoIosArrowForward className="arrow-icon" style={{ transform: `rotate(${rotations[1] || 0}deg)`,color:'#ff4e56' }} onClick={(e) => {e.preventDefault();  e.stopPropagation();  toggleDropdown(1); }}/>
                  </p>
              </div>
              {dropdowns[1] && (
              <div className="headerAddressComponent">
                  <div>
                      <div className="address-list">
                          <div>
                              <div className="useCurrentLocation">
                                  <svg style={{display:'inline-block', verticalAlign:'middle'}} width="40px" height="40px" viewBox="0 0 48 48" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0"><g data-name="Group 10827" transform="translate(-3295 18156)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0"><circle cx="24" cy="24" r="24" fill="#fff" data-name="Ellipse 398" transform="translate(3295 -18156)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.0"></circle><g transform="translate(3307 -18144)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1"><g data-name="Group 521" transform="translate(2.726 2.672)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.0"><g data-name="Group 520" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.0.0"><path fill="#ff686e" d="M151.153 141.827a8.812 8.812 0 01-.077 1.149l.026-.193a8.576 8.576 0 01-.413 1.7c-.046.13-.1.258-.148.386s.073-.172.019-.046l-.041.094-.1.218a8.471 8.471 0 01-.888 1.449c-.081.107.113-.145.03-.039l-.063.079c-.042.053-.086.1-.129.157a9.061 9.061 0 01-.293.329c-.193.206-.4.4-.609.587-.1.089-.206.176-.312.26-.04.032-.147.114.04-.03l-.081.061c-.063.048-.128.094-.192.14a8.488 8.488 0 01-.838.52 8.536 8.536 0 01-.645.316c-.17.075.13-.054.015-.006l-.128.052a8.421 8.421 0 01-1.955.51l.193-.026a8.68 8.68 0 01-2.3 0l.193.026a8.572 8.572 0 01-1.7-.413c-.13-.046-.258-.1-.386-.149s.172.073.046.019l-.094-.041c-.073-.032-.145-.066-.218-.1a8.467 8.467 0 01-1.449-.888c-.107-.081.145.113.039.03l-.08-.063c-.053-.042-.1-.086-.157-.129a9.061 9.061 0 01-.329-.293c-.206-.193-.4-.4-.587-.609a7.158 7.158 0 01-.26-.312c-.032-.04-.114-.147.03.04l-.061-.081c-.048-.063-.094-.128-.14-.192a8.48 8.48 0 01-.52-.838 8.536 8.536 0 01-.316-.645c-.075-.17.054.13.006.015a2.84 2.84 0 01-.051-.128 8.42 8.42 0 01-.51-1.955l.026.193a8.676 8.676 0 010-2.3l-.026.193a8.581 8.581 0 01.413-1.7c.046-.13.1-.258.149-.386s-.073.172-.019.046l.041-.094c.032-.073.067-.145.1-.218a8.467 8.467 0 01.888-1.449c.081-.107-.113.145-.03.039l.063-.08c.042-.053.086-.1.129-.157.094-.112.193-.221.293-.329.193-.206.4-.4.609-.587.1-.089.206-.176.313-.26.04-.032.147-.114-.04.03l.081-.061c.063-.048.128-.094.192-.14a8.465 8.465 0 01.838-.52 8.536 8.536 0 01.646-.316c.17-.075-.13.054-.015.006l.128-.051a8.422 8.422 0 011.955-.51l-.193.026a8.679 8.679 0 012.3 0l-.193-.026a8.586 8.586 0 011.7.413c.13.046.258.1.386.149s-.172-.073-.046-.019l.094.041.217.1a8.465 8.465 0 011.449.888c.107.081-.145-.113-.039-.03l.08.063c.053.042.1.086.157.129.112.095.221.193.329.293.206.193.4.4.587.609.089.1.176.206.26.312.032.04.114.147-.03-.04l.061.081c.048.063.094.128.14.192a8.476 8.476 0 01.52.838 8.536 8.536 0 01.316.645c.075.17-.054-.13-.006-.015l.052.128a8.421 8.421 0 01.51 1.955l-.026-.193a8.831 8.831 0 01.077 1.149.724.724 0 001.449 0 9.169 9.169 0 10-4.551 7.934 9.417 9.417 0 002.73-2.45 9.134 9.134 0 001.821-5.484.724.724 0 10-1.449 0z" data-name="Path 9025" transform="translate(-134.224 -132.638)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.0.0.0"></path></g></g><g data-name="Group 523" transform="translate(0 11.08)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.1"><g data-name="Group 522" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.1.0"><path fill="#ff686e" d="M37.421 461.4H42.6a.782.782 0 000-1.565h-5.179a.782.782 0 000 1.565z" data-name="Path 9026" transform="translate(-36.639 -459.833)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.1.0.0"></path></g></g><g data-name="Group 525" transform="translate(17.035 11.08)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.2"><g data-name="Group 524" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.2.0"><path fill="#ff686e" d="M699.755 461.4h5.183a.782.782 0 000-1.565h-5.183a.782.782 0 100 1.565z" data-name="Path 9027" transform="translate(-698.973 -459.833)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.2.0.0"></path></g></g><g data-name="Group 527" transform="translate(11.131 17.035)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.3"><g data-name="Group 526" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.3.0"><path fill="#ff686e" d="M462.979 705.305v-5.183a.782.782 0 10-1.565 0v5.183a.782.782 0 001.565 0z" data-name="Path 9028" transform="translate(-461.415 -699.34)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.3.0.0"></path></g></g><g data-name="Group 529" transform="translate(11.131)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.4"><g data-name="Group 528" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.4.0"><path fill="#ff686e" d="M462.979 42.969v-5.183a.782.782 0 00-1.565 0v5.183a.782.782 0 001.565 0z" data-name="Path 9029" transform="translate(-461.415 -37.004)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.4.0.0"></path></g></g><g data-name="Group 531" transform="translate(8.125 8.068)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.5"><g data-name="Group 530" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.5.0"><path fill="#ff686e" d="M359.854 355.773a3.369 3.369 0 01-.025.387l.028-.208a3.263 3.263 0 01-.092.444 3.084 3.084 0 01-.109.312c.1-.25.03-.074 0-.018a3 3 0 01-.241.41l-.064.089c.151-.2.068-.088.032-.044a3.067 3.067 0 01-.33.339l-.084.071c-.1.084.173-.128.013-.012a3.023 3.023 0 01-.407.246l-.1.048c-.133.062.187-.076.051-.021a2.75 2.75 0 01-.246.085 3 3 0 01-.48.1l.208-.028a3.188 3.188 0 01-.773 0l.208.028a3.267 3.267 0 01-.444-.091 2.788 2.788 0 01-.213-.07l-.1-.041c.25.1.074.03.019 0a3.014 3.014 0 01-.41-.241l-.089-.064c.2.151.088.068.044.031a3.067 3.067 0 01-.339-.33l-.07-.083c-.084-.1.128.173.011.013a3.026 3.026 0 01-.246-.407c-.017-.033-.032-.066-.048-.1-.062-.133.076.187.021.051a3.116 3.116 0 01-.086-.246 2.99 2.99 0 01-.1-.48l.028.208a3.192 3.192 0 010-.773l-.028.208a3.238 3.238 0 01.092-.444 2.628 2.628 0 01.11-.312c-.1.25-.03.074 0 .018a3.018 3.018 0 01.241-.41l.065-.088c-.151.2-.068.088-.032.044a3.067 3.067 0 01.33-.339l.084-.071c.1-.084-.173.128-.014.012a3.028 3.028 0 01.407-.246l.1-.048c.133-.062-.187.076-.051.021.08-.033.163-.06.246-.085a2.986 2.986 0 01.48-.1l-.208.028a3.2 3.2 0 01.773 0l-.208-.028a3.266 3.266 0 01.444.091 3.3 3.3 0 01.213.069l.1.041c-.25-.1-.074-.03-.019 0a2.99 2.99 0 01.41.241l.089.064c-.2-.151-.088-.068-.044-.032a3.067 3.067 0 01.339.33l.071.084c.084.1-.128-.173-.011-.013a3.015 3.015 0 01.246.407c.017.033.032.066.048.1.062.133-.076-.187-.021-.051.033.08.06.163.086.246a3 3 0 01.1.48l-.028-.208a3.37 3.37 0 01.025.387.782.782 0 001.565 0 3.809 3.809 0 00-.629-2.09 3.927 3.927 0 00-1.777-1.436 3.808 3.808 0 00-4.085.856 3.757 3.757 0 00-1.016 1.888 3.917 3.917 0 00.264 2.358 3.792 3.792 0 007.242-1.576.782.782 0 10-1.565 0z" data-name="Path 9030" transform="translate(-353.836 -351.978)" data-reactid=".1x7ylpa4oim.4.0.0.0.0.4.1.0.1.5.0.0.0.1.5.0.0"></path></g></g></g></g></svg>
                                  <p>Use my current Location</p>
                              </div>
                              <hr className="horizontalivider hide"/>
                              <div className="changeCityContainer">
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
        
      <div class id="your-offers"style={divStyle}>
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
              <span    className="">
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
              </span>
                <span    className="">
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
                </span>
                <span    className="">
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
                </span>
                <span    className="">
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
                </span>
                <span    className="">
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
                </span>
                <span    className="">
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
                </span>
                <span    className="">
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
                </span>
            </div>
          <div className="offers-container">
          <h2 style={{
            fontFamily: 'segoe ui, Helvetica, droid sans, Arial, lucida grande, tahoma, verdana, arial, sans-serif',
            fontSize: '40px',
            fontWeight:'200',
            color: '#615e58',
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
            backgroundColor: '#fff',
            lineHeight: 'normal'
          }}>Special Offers</h2>
          
          {items.map((items) => (
            <ul className="offer-container" key={items.id}>
              <li className="offer-item">
                <img src={items.image} alt={items.name} className="offer-image" />
                <div className="product">
                  <div className="imageWrapper">
                    <div className="choto" style={{ alignItems: 'center', position: 'relative' }}>
                      <div className="imageWrapperWrapper">
                        <img src={items.image} alt={items.name} size="400" style={{ backgroundColor: 'transparent', width: '100%', padding: '5px', marginLeft: '2px' }} />
                      </div>
                      <div className="name">{items.name}</div>
                      <div className="subText">
                        {items.quantity_inKGorPCS}
                      </div>
                      <div className="discountedPriceSection" style={{ display: 'flex' }}>
                        <div className="discountedPrice">
                          <span>৳ {items.price.toString()}</span>
                        </div>
                        <div className="price">
                          <span>৳ {items.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                    

                    {showQuantityEditor[items.id] ? (
                      <div className="productQuantityEditor addButtonWrapper border-radius-small">
                        <button type="button" id="same" className="minusQuantity" onClick={() => handleDecrement(items.id)}>–</button>
                        <div className="QuantityTextContainer">
                          <span>{quantities[items.id]}</span>
                          <span> </span>
                          <span>in bag</span>
                        </div>
                        <button type="button" className="plusQuantity" onClick={() => handleIncrement(items.id)}>+</button>
                      </div>
                    ) : (
                      <section className="addButtonWrapper border-radius-small" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleAddToCart(items)}>
                        <span className="fifteenMinute" id="svgIcon">
                          <svg style={{ display: 'inline-block', verticalAlign: 'middle' }} width="22px" height="25px" version="1.1" x="0px" y="0px" viewBox="0 -5 5.153 40.012">
                            <path d="M38.487 11.472H31.78l6.12-9.643h-8.457L21.9 16.906h5.723l-6.289 14.935z" transform="translate(-21.334 -1.829)"></path>
                          </svg>
                        </span>
                        <div className="buyText" style={{ color: '#ff8182' }}>
                          {showQuantityEditor[items.id] ? "Cancel" : "Add to bag"}
                        </div>
                      </section>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>

        <div style={{position:'fixed', zIndex:'1000', left:'1538px'}}>
        {!isCartOpen && (
        <section className={`stickyHeader ${isActive ? 'active' : ''} ${isCartOpen ? 'hidden' : ''}`} onClick={handleClickCart}>
          <div className="itemCount">
            <svg version="1.1" id="Calque_1" x="0px" y="0px" style={{ fill: '#FDD670', stroke: '#FDD670' }} width="16px" height="24px" viewBox="0 0 100 160.13">
              <g>
                <polygon points="11.052,154.666 21.987,143.115 35.409,154.666"></polygon>
                <path d="M83.055,36.599c-0.323-7.997-1.229-15.362-2.72-19.555c-2.273-6.396-5.49-7.737-7.789-7.737
                  c-6.796,0-13.674,11.599-16.489,25.689l-3.371-0.2l-0.19-0.012l-5.509,1.333c-0.058-9.911-1.01-17.577-2.849-22.747
                  c-2.273-6.394-5.49-7.737-7.788-7.737c-8.618,0-17.367,18.625-17.788,37.361l-13.79,3.336l0.18,1.731h-0.18v106.605l17.466-17.762
                  l18.592,17.762V48.06H9.886l42.845-10.764l2.862,0.171c-0.47,2.892-0.74,5.865-0.822,8.843l-8.954,1.75v106.605l48.777-10.655
                  V38.532l0.073-1.244L83.055,36.599z M36.35,8.124c2.709,0,4.453,3.307,5.441,6.081c1.779,5.01,2.69,12.589,2.711,22.513
                  l-23.429,5.667C21.663,23.304,30.499,8.124,36.35,8.124z M72.546,11.798c2.709,0,4.454,3.308,5.44,6.081
                  c1.396,3.926,2.252,10.927,2.571,18.572l-22.035-1.308C61.289,21.508,67.87,11.798,72.546,11.798z M58.062,37.612l22.581,1.34
                  c0.019,0.762,0.028,1.528,0.039,2.297l-23.404,4.571C57.375,42.986,57.637,40.234,58.062,37.612z M83.165,40.766
                  c-0.007-0.557-0.01-1.112-0.021-1.665l6.549,0.39L83.165,40.766z"></path>
              </g>
            </svg>
            <p><span>{totalItems}</span></p>
          </div>
          <div className="total" style={{ color: 'black' }}>
            <span>৳ </span>
            <div className="odometer odometer-auto-theme odometer-animating-down odometer-animating">
              <span>{totalPrice}</span>
            </div>
          </div>
        </section>
        
        )}
        {isCartOpen && <CartSidebar className='hidden' isCartOpen={isCartOpen} toggleCart={toggleCart} />}

      </div>

</Link>
  );
};
export default Offers;
