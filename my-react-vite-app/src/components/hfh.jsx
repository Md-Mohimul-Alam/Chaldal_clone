import React, { useRef } from 'react';
import './css/crt.css';

const Delivery = () => {
    const categoryContainerRef = useRef(null);

    const scrollLeft = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <section id="shopInfoComponent">
                <div className="wrapper" ref={categoryContainerRef}>
                    <div className="shopContainer">
                        <div className="container">
                            <div className="initialLabel">
                                <h3>Shop &amp; Earn Points</h3>
                                <p>The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Discover the perks of <b>Egg Club</b> membership.</p>
                            </div>
                            <div className="imageContainer">
                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/image.jpg?q=low&amp;webp=1" alt="Shop & Earn Points"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="initialLabel">
                                <h3>Deal of the Day</h3>
                                <p>Stock up on your favorite groceries for less with our unbeatable deals! Don't miss out - limited stock</p>
                            </div>
                            <div className="imageContainer">
                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyDealsShopInfo.jpg?q=low&amp;webp=1" alt="Deal of the Day"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="initialLabel">
                                <h3>Premium Care</h3>
                                <p>Too busy to place an order or handling order issues no need to worry as we give you option to take premium assistance.</p>
                            </div>
                            <div className="imageContainer">
                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/premiumImage.jpg?q=low&amp;webp=1" alt="Premium Care"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="how-to-shop">
                <div className="wrapper">
                    <div className="container">
                        <div id="chaldal-daily-necessities" style={{ background: 'url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyGrocery.png) no-repeat center', backgroundSize: 'cover', height: '300px' }}>
                            <div className="descriptionBox">
                                <div className="label">
                                    <h3>Shop your daily necessities</h3>
                                    <p>Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.</p>
                                </div>
                                <a href="/popular">Start Shopping</a>
                            </div>
                        </div>
                        <div id="videoContainer">
                            <iframe src="https://www.youtube.com/embed/-Xg2kGPwePM" frameBorder="0" allowFullScreen title="video"></iframe>
                        </div>
                    </div>
                </div>
            </section>




            {/*    */}
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

export default Delivery;
