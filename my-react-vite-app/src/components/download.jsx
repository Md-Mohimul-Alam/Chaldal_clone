import React, { useRef } from 'react';
import './css/Down.css';

const Down = () => {
    return (
        <div>
            <section id="downloadChaldalApp" style={{ background: 'url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/downloadAppBackground.png) no-repeat center', backgroundSize: 'cover' }}>
            <div className='wrapper'>
                <div class="downloadAppContainer">
                 
                    <div class="downloadApp">
                        <div class="header">
                            <h2>Download The Chaldal App Now!</h2>
                        </div>
                     <div>
                        <p>
                            <span> </span>
                            <span>Get <b>5% off</b> on your first order through the Chaldal app and make your shopping experience even smoother!</span>
                            <span> </span>
                        </p>
                    </div>
                    <div class="iconContainer">
                        <div>
                            <a href="https://itunes.apple.com/us/app/chaldal-online-grocery/id1104493220">
                            <svg id="google-play-badge" width="100px" height="80px" viewBox="0 0 194.37 57.592">
                                
                            </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=com.chaldal.poizon">
                                <img src="https://www.chaldal.com/_nuxt/img/icon-google-play.f95d37e.png" alt="Google Play Icon" style={{width: '150px', height:' 50px'}}/>
                            </a>
                        </div>
                    </div>
                    <div class="imageContainer">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/downloadApp.png?q=low&amp;webp=1" alt="Download App"/></div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Down;
