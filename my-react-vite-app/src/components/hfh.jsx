import React, { useRef } from 'react';
import './css/crt.css';
import Down from './download';

const Delivery = () => {
    const categoryContainerRef = useRef(null);


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
                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-506/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/image.jpg?q=low&webp=1" alt="Shop & Earn Points" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="initialLabel">
                                <h3>Deal of the Day</h3>
                                <p>Stock up on your favorite groceries for less with our unbeatable deals! Don't miss out - limited stock</p>
                            </div>
                            <div className="imageContainer">
                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-506/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyDealsShopInfo.jpg?q=low&webp=1" alt="Deal of the Day" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="initialLabel">
                                <h3>Premium Care</h3>
                                <p>Too busy to place an order or handling order issues no need to worry as we give you option to take premium assistance.</p>
                            </div>
                            <div className="imageContainer">
                                <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-506/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/premiumImage.jpg?q=low&webp=1" alt="Premium Care" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-to-shop">
                <div className="wrapper">
                    <div className="container">
                        <div id="chaldal-daily-necessities" style={{ background: "url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-506/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyGrocery.png) no-repeat center", backgroundSize: 'cover', height: '300px' }}>
                            <div className="descriptionBox">
                                <div className="label">
                                    <h3>Shop your daily necessities</h3>
                                    <p>Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.</p>
                                </div>
                                <span  href="/popular">Start Shopping</span>
                            </div>
                        </div>
                        <div id="videoContainer">
                            <iframe src="https://www.youtube.com/embed/-Xg2kGPwePM" allowFullScreen title="video"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Down />
        </div>
    );
};

export default Delivery;
