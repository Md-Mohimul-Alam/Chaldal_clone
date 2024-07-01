


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


const FaqG= () =>{
    
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
                    <div className="page-image" style={{
                        backgroundImage: 'url("https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/components/page/Topic/images/faq3.jpg?q=best&webp=1&alpha=1")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                    <div className="page-title">FAQ</div>
                    <div className="link-section">
                        <ul className="page-link">
                            <li className="links">
                            <NavLink to="/help_F_faq" className="itemLinks selectedLink">
                                FAQ
                                <span className="itemUnderline"></span>
                            </NavLink>
                            </li>
                            <li className="links">
                            <NavLink to="/Help_G" className="itemLinks " >
                                Our Story
                                <span className="itemUnderline"></span>
                            </NavLink>
                            </li>
                            <li className="links">
                            <NavLink  to="/help_F_team" className="itemLinks">Team
                                <span className="itemUnderline"></span>
                            </NavLink>
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
    </Link>
    );
};
export default FaqG;
