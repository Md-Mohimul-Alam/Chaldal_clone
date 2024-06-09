import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <Footer id="footerContainer" style="display:block;">
            <section className="footer-banner" >
                <div className="banner">
                    <div className="left-area">
                        <span>
                            <ul>
                                <li className="text">Cities:</li>
                                <li className="cityText">Dhaka</li>
                                <li className="cityText">Chattogram</li>
                                <li className="cityText" >Jashore</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>
            <div className="footer-left">
                <div className="footerBottom">
                    <div className="list-type customer-service">
                        <p>
                            <span> </span><span>About Chaldal</span><span> </span>
                        </p>
                        <ul>
                            <span> </span>
                            <li><a href="/t/AboutUs">Our Story</a></li>
                            <li><a href="/t/Team">Team</a></li>
                            <li><a href="/t/PrivacyInfo">Privacy Policy</a></li>
                            <li><a href="/t/TermsOfUse">Terms of Use</a></li>
                            <span> </span>
                        </ul>
                    </div>
                    <div className="list-type customer-service">
                        <p>
                            <span> </span><span>Customer Service</span><span> </span>
                        </p>
                        <ul>
                            <span> </span>
                                <li><a href="/t/ContactUs">Contact Us</a></li>
                                <li><a href="/t/Help">FAQ</a></li>
                            <span> </span>
                        </ul>
                    </div>
                    <div className="list-type customer-service">
                        <p>
                            <span> </span><span>For Business</span><span> </span>
                        </p>
                        <ul>
                            <span> </span>
                                <li><a href="corporate">Corporate</a></li>
                            <span> </span>
                        </ul>
                    </div>
                </div>
                <div className="right-area">
                    <ul>
                        <li className="text">Payment Methods</li>
                        <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/shared/FooterForH4/images/Amex.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                        <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/shared/FooterForH4/images/mastercard.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                        <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/shared/FooterForH4/images/VIsa.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                        <li className="icon bkash"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/shared/FooterForH4/images/bkash.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"/></li>
                    </ul>
                </div>
            </div>


            <div className="footer-right">
                <div className="mobileApp">
                    <section id="chaldalAppsSecond">
                        <div className="chaldalAppsContent">
                            <form>
                                <div className="inputGroup" >
                                    <div className="phoneNumberLoginFieldSecond">
                                        <div className="input">
                                            <input type="tel" value="+88" placeholder=""/>
                                        </div>
                                    </div>
                                    <input type="submit" name="submit" value="Get app"/>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                <div className="app-download-section" >
                    <div>
                        <div className="wrap">
                            <div className="google_play_store" >
                                <a href="https://play.google.com/store/apps/details?id=com.chaldal.poached" >
                                    <svg id="google-play-badge" width="90px" height="40px" viewBox="0 0 194.37 57.592">
                            
                                    </svg>
                                </a>
                             </div>
                            <div className="app_store">
                                <a href="https://itunes.apple.com/us/app/chaldal-online-grocery/id1104493220">
                                    <svg id="App-Store-Badge" width="90px" height="40px" viewBox="0 0 194.372 57.592">

                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="footerSocial">
  <div className="copyright-text">© 2013 Chaldal Limited</div>
  <div className="iconContainer">
    <div className="icons">
      <div className="icon">
        <a href="https://www.facebook.com/chaldalcom">
          <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/shared/FooterForH4/images/facebookImage.png?q=low&amp;webp=1&amp;alpha=1"/>
        </a>
      </div>
      <div className="icon">
        <a href="https://twitter.com/chaldal">
          <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/shared/FooterForH4/images/twitter.png?q=low&amp;webp=1&amp;alpha=1"/>
        </a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com/chaldal_bd/">
          <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-504/Default/components/shared/FooterForH4/images/instaImage.png?q=low&amp;webp=1&amp;alpha=1"/>
        </a>
      </div>
    </div>
    <div className="localeContainer">
      <span className="globeIcon">
        <svg width="15px" height="15px" viewBox="0 0 19.771 19.771">
          <g id="Layer_2" transform="translate(-5.5 -5.5)">
            <path id="Path_68042" d="M23.818,20.547a9.84,9.84,0,0,0,1.454-5.161h0a9.84,9.84,0,0,0-1.454-5.161l-.005-.008a9.886,9.886,0,0,0-16.853,0l-.005.009a9.889,9.889,0,0,0,0,10.322l.006.009a9.886,9.886,0,0,0,16.853,0Zm-7.168,3.03a2.4,2.4,0,0,1-.642.443,1.449,1.449,0,0,1-1.243,0,3.026,3.026,0,0,1-1.121-.987,8.836,8.836,0,0,1-1.277-2.77q1.508-.093,3.02-.095t3.02.095a11.152,11.152,0,0,1-.542,1.491,5.732,5.732,0,0,1-1.215,1.823ZM6.63,15.941h3.987a19.617,19.617,0,0,0,.36,3.313q-1.635.144-3.262.4A8.715,8.715,0,0,1,6.63,15.941Zm1.086-4.819q1.626.252,3.263.4a19.583,19.583,0,0,0-.361,3.313H6.63a8.715,8.715,0,0,1,1.086-3.708Zm6.406-3.928a2.4,2.4,0,0,1,.642-.443,1.449,1.449,0,0,1,1.243,0,3.026,3.026,0,0,1,1.121.987,8.836,8.836,0,0,1,1.277,2.77q-1.508.093-3.02.095t-3.02-.095a11.15,11.15,0,0,1,.542-1.491,5.732,5.732,0,0,1,1.215-1.823ZM24.141,14.83H20.154a19.618,19.618,0,0,0-.36-3.313q1.635-.144,3.262-.4A8.715,8.715,0,0,1,24.141,14.83ZM12.1,19.168a18.371,18.371,0,0,1-.367-3.227h7.315a18.367,18.367,0,0,1-.366,3.227q-1.644-.108-3.291-.11T12.1,19.168ZM18.676,11.6a18.373,18.373,0,0,1,.367,3.227H11.728a18.368,18.368,0,0,1,.366-3.227q1.644.108,3.291.11T18.676,11.6Zm1.477,4.338h3.988a8.715,8.715,0,0,1-1.086,3.708q-1.626-.252-3.263-.4a19.582,19.582,0,0,0,.361-3.313ZM22.389,10.1q-1.422.205-2.852.325a12.667,12.667,0,0,0-.661-1.865,7.882,7.882,0,0,0-.92-1.565A8.773,8.773,0,0,1,22.389,10.1ZM9.181,9.181a8.772,8.772,0,0,1,3.633-2.187c-.021.027-.042.053-.063.08a10.14,10.14,0,0,0-1.515,3.35Q9.806,10.3,8.382,10.1a8.847,8.847,0,0,1,.8-.919Zm-.8,11.491q1.422-.205,2.852-.325a12.667,12.667,0,0,0,.661,1.865,7.883,7.883,0,0,0,.92,1.565,
                8.773,8.773,0,0,1-4.432-3.105Zm13.208.919a8.772,8.772,0,0,1-3.633,2.187c.021-.027.042-.053.063-.08a10.14,10.14,0,0,0,1.515-3.35q1.43.121,2.854.325a8.847,8.847,0,0,1-.8.919Z"
                transform="translate(0 0)">
              </path>
            </g>
          </svg>
        </span>
        <span className="text">English (EN)</span>
      </div>
    </div>
  </section>
  
    </Footer>
    );
};

export default Footer;
