import React, { useState, useRef } from 'react';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import Sidebar_phr from './side_phr';
import './css/HP.css';
import { Link, NavLink } from 'react-router-dom';



const Helpp= ( ) => {
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
            <div className="everythingElseWrapper unauthed" style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '0%' : '0%', transition: 'width 0.3s ease, marginLeft 0.3s ease' }}>
            <section className="bodyTable">
                <div>
                    <div className="topicPage">
                        <div className="loaded">
                            <div className="page-bg-image">
                                <div className="page-image" style={{ backgroundImage: "url('https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Topic/images/story2.png?q=best&webp=1&alpha=1')", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></div>
                                <div className="page-title">FAQ</div>
                                <div className="link-section">
                                    <ul className="page-link">
                                        <li className="links">
                                        <NavLink to="/help_p_faq" className="itemLinks selectedLink">
                                            FAQ
                                            <span className="itemUnderline"></span>
                                        </NavLink>
                                        </li>
                                        <li className="links">
                                        <NavLink to="/Help_P" className="itemLinks " >
                                            Our Story
                                            <span className="itemUnderline"></span>
                                        </NavLink>
                                        </li>
                                        <li className="links">
                                        <a className="itemLinks" href="/t/Team">
                                            Team
                                            <span className="itemUnderline"></span>
                                        </a>
                                        </li>
                                        <li className="links">
                                        <a className="itemLinks" href="/t/Career">
                                            Career
                                            <span className="itemUnderline"></span>
                                        </a>
                                        </li>
                                        <li className="links">
                                        <a className="itemLinks" href="/t/ContactUs">
                                            Contact Us
                                            <span className="itemUnderline"></span>
                                        </a>
                                        </li>
                                        <li className="links">
                                        <a className="itemLinks" href="/t/PrivacyInfo">
                                            Privacy Policy
                                            <span className="itemUnderline"></span>
                                        </a>
                                        </li>
                                        <li className="links">
                                        <a className="itemLinks" href="/t/TermsOfUse">
                                            Terms of Use
                                            <span className="itemUnderline"></span>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="body needHelpItemBody">
                                    <div><strong>Q. How does the site work?</strong>&nbsp;</div>
                                    <div>A. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on Place order. You let us know your address, select a delivery time – and voila, you are done. A Chaldal representative will then deliver your order right to your home or office.&nbsp;</div>

                                    <div><strong>Q. How much do deliveries cost?</strong>&nbsp;</div>
                                    <div>A. The delivery fee across the country is in the table below:</div>
                                    <table>
                                        <thead>
                                            <tr>
                                            <th></th>
                                            <th>Orders below 400</th>
                                            <th>Orders above 400</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>Dhaka</td>
                                            <td>49</td>
                                            <td>39</td>
                                            </tr>
                                            <tr>
                                            <td>Chattogram</td>
                                            <td>29</td>
                                            <td>19</td>
                                            </tr>
                                            <tr>
                                            <td>Jashore</td>
                                            <td>29</td>
                                            <td>19</td>
                                            </tr>
                                        </tbody>
                                        </table>


                                    <div><strong>Q. How can I contact you?</strong>&nbsp;</div>
                                    <div>A. You can always call 16710 or mail us at support@chaldal.com.&nbsp;</div>

                                    <div><strong>Q. What are your delivery hours?</strong>&nbsp;</div>
                                    <div>A. We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient for you.&nbsp;</div>

                                    <div><strong>Q. How do I know when my order is here?</strong>&nbsp;</div>
                                    <div>A. A Chaldal representative will call you as soon as they are at your house to let you know about your delivery.&nbsp;</div>

                                    <div><strong>Q. How do I pay?</strong>&nbsp;</div>
                                    <div>A. We accept cash on delivery and we also have Online Credit Card and Online bKash service. Don’t worry, our Chaldal representatives should always carry enough change.&nbsp;</div>

                                    <div><strong>Q. Do you serve my area?</strong>&nbsp;</div>
                                    <div>A. We are currently serving in the city of Dhaka, Chattogram & Jashore in Bangladesh.&nbsp;</div>

                                    <div><strong>Q. I can’t find the product I am looking for. What do I do?</strong>&nbsp;</div>
                                    <div>A. We are always open to new suggestions and will add an item to our inventory just for you. There is a "Product Request" feature that you can use to inform us of your requirement. You can also call 16710 or mail us at support@chaldal.com to add an item to our inventory.&nbsp;</div>

                                    <div><strong>Q. My order is wrong. What do I do?</strong>&nbsp;</div>
                                    <div>A. Please Immediately call 16710 and let us know the problem.&nbsp;</div>

                                    <div><strong>Q. What if the item is out of stock?</strong>&nbsp;</div>
                                    <div>A. We hold our own inventory in our warehouses, so we rarely run out of stock. However, we will try our best to source what you need. If we are unable to source it, we will send you Push Notification to inform you.&nbsp;</div>

                                    <div><strong>Q. What happens during a hartal?</strong>&nbsp;</div>
                                    <div>A. We work during hartals. That’s how dedicated we are.&nbsp;</div>

                                    <div><strong>Q. Why should we buy from you when I have a store nearby?</strong>&nbsp;</div>
                                    <div>A. Well, that is up to you but you can also be a couch potato like our founders and have your items delivered to your house. Our prices are sometimes lower than that of major superstores in the city. We also carry a larger variety than the average corner store. So, there is really no reason to not buy from us.&nbsp;</div>

                                    <div><strong>Q. What about the prices?</strong>&nbsp;</div>
                                    <div>A. Our prices are our own but we try our best to offer them to you at or below market prices. Our prices are the same as the local market and we are working hard to get them even lower! If you feel that any product is priced unfairly, please let us know.&nbsp;</div>

                                    <div><strong>Q. How do you deliver?</strong>&nbsp;</div>
                                    <div>A. We use our own fleet to deliver. Our goal is to deliver the products to your place on time.&nbsp;</div>

                                    <div><strong>Q. What is your policy on refunds?</strong>&nbsp;</div>
                                    <div>A. We offer a refund or return policy of seven (7) days on most unopened or unspoilt packaged products.&nbsp;</div>
                                    <ul>
                                    <li>For perishable products such as milk, fruits, and fresh vegetables, we have a 1 (one) day return policy.&nbsp;</li>
                                    <li>Diaper items must be returned for refunds before 10% or 3 pieces (whichever comes first) have been used.&nbsp;</li>
                                    <li>Certain products; Face Mask, Disposable Vinyl Gloves, Alcohol Pads, and Covid Testing Kits are not acceptable for refund or return either opened or unopened.</li>
                                    </ul>

                                    <div><strong>Q. Can I get a refund via cash?</strong>&nbsp;</div>
                                    <div>A. No, for any sort of issue, we will update the credit to your Chaldal account.&nbsp;</div>

                                    <div><strong>Q. What is your discounting policy?</strong>&nbsp;</div>
                                    <div>A. We try to provide the best deals in Dhaka and many of our products are already discounted below the maximum retail price (MRP). We also offer discount codes under special circumstances, which are applied on the MRP. On any given product, we can only apply one type of discount. We always consider the best discount available to the customer. For example: If the MRP of a product is Tk. 100 and our list price is Tk. 92 -- the product is already sold at an 8% discount. This means that if the user applies a discount code for a 5% discount, we will still consider the best discount available to the user and sell the product at Tk. 92.&nbsp;</div>

                                    <div><strong>Q. Can I order over the phone?</strong>&nbsp;</div>
                                    <div>A. Absolutely. Our hotline is 16710. Our representatives are always available to help you order.&nbsp;</div>

                                    <div><strong>Q. Do you offer an express delivery option?</strong>&nbsp;</div>
                                    <div>A. Unfortunately, we do not have an express delivery option.&nbsp;</div>

                                    <div><strong>Q. How long do the deliveries take?</strong>&nbsp;</div>
                                    <div>A. We are working hard to shorten delivery times. Deliveries usually take 60 minutes, but it depends on customer location and traffic conditions.&nbsp;</div>

                                    <div><strong>Q. Can I change my order once the order is placed?</strong>&nbsp;</div>
                                    <div>A. Changes to your order can be made by calling 16710.&nbsp;</div>

                                    <div><strong>Q. What happens if the delivery is delayed?</strong>&nbsp;</div>
                                    <div>A. In case of delays, our customer service will let you know about the status of your delivery.</div>

                                    <div><strong>Q. Why is the site called Chaldal?</strong>&nbsp;</div>
                                    <div>A. It means "Instant Market". Just like instant noodles, we believe you should get your groceries instantly.&nbsp;</div>

                                    <div><strong>Q. What is your policy on refunds?</strong>&nbsp;</div>
                                    <div>A. We offer a refund or return policy of seven (7) days on most unopened or unspoilt packaged products.&nbsp;</div>
                                    <ul>
                                    <li>For perishable products such as milk, fruits, and fresh vegetables, we have a 1 (one) day return policy.&nbsp;</li>
                                    <li>Diaper items must be returned for refunds before 10% or 3 pieces (whichever comes first) have been used.&nbsp;</li>
                                    <li>Certain products; Face Mask, Disposable Vinyl Gloves, Alcohol Pads, and Covid Testing Kits are not acceptable for refund or return either opened or unopened.</li>
                                    </ul>
                                    <div>
                                    <br />
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
  );
};
export default Helpp;
