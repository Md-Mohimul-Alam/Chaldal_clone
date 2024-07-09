import React, { useState } from "react";
import './css/sticky_cart.css';

const CartSidebar = ({ isCartOpen, toggleCart }) => {
    // State to hold items in the shopping bag
    const [shoppingBagItems, setShoppingBagItems] = useState([]);

    // Function to add an item to the shopping bag
    const addToBag = (item) => {
        // Add item to the shopping bag array
        setShoppingBagItems([...shoppingBagItems, item]);
    };

    return (
        <div className="app catalog shoppingCartIsExpanded navOpen chaldal-theme">
            <div className={`shoppingCartWrapper ${isCartOpen ? 'open' : ''}`}>
                <div className="shoppingCart expanded empty responsive">
                    <div className="header">
                        <div className="cart">
                            <svg version="1.1" id="Calque_1" x="0px" y="0px" style={{ fill: '#FDD670', stroke: '#FDD670', width: '21px', height: '32px' }} viewBox="0 0 100 160.13">
                                <g>
                                    <polygon points="11.052,154.666 21.987,143.115 35.409,154.666"></polygon>
                                    <path d="M83.055,36.599c-0.323-7.997-1.229-15.362-2.72-19.555c-2.273-6.396-5.49-7.737-7.789-7.737   c-6.796,0-13.674,11.599-16.489,25.689l-3.371-0.2l-0.19-0.012l-5.509,1.333c-0.058-9.911-1.01-17.577-2.849-22.747   c-2.273-6.394-5.49-7.737-7.788-7.737c-8.618,0-17.367,18.625-17.788,37.361l-13.79,3.336l0.18,1.731h-0.18v106.605l17.466-17.762   l18.592,17.762V48.06H9.886l42.845-10.764l2.862,0.171c-0.47,2.892-0.74,5.865-0.822,8.843l-8.954,1.75v106.605l48.777-10.655   V38.532l0.073-1.244L83.055,36.599z M36.35,8.124c2.709,0,4.453,3.307,5.441,6.081c1.779,5.01,2.69,12.589,2.711,22.513   l-23.429,5.667C21.663,23.304,30.499,8.124,36.35,8.124z M72.546,11.798c2.709,0,4.454,3.308,5.44,6.081   c1.396,3.926,2.252,10.927,2.571,18.572l-22.035-1.308C61.289,21.508,67.87,11.798,72.546,11.798z M58.062,37.612l22.581,1.34   c0.019,0.762,0.028,1.528,0.039,2.297l-23.404,4.571C57.375,42.986,57.637,40.234,58.062,37.612z M83.165,40.766   c-0.007-0.557-0.01-1.112-0.021-1.665l6.549,0.39L83.165,40.766z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="itemCount">
                            <span>{shoppingBagItems.length} ITEMS</span>
                            <span className="count-mobile"><span>{shoppingBagItems.length}</span></span>
                        </div>
                        <button className="closeCartButtonTop" onClick={toggleCart}>Close</button>
                    </div>

                    <div className="deliveryFeeHeader" style={{ display: 'flex' }}>
                        <section className="in-shopping-cart isNewNavBarHeader" id="shipping-cost-meter">
                            <div className="costMeterSection">
                                <div className="costMeter">
                                    <div className="container">
                                        <div className="progress">
                                            <div style={{ width: '0%' }} className="bar"></div>
                                            <div className="meterInfoText">
                                                <div className="InfoTextLeft">
                                                    <span>Shop ৳400 more and save ৳10 fee</span>
                                                </div>
                                                <div className="InfoTextRight">
                                                    <span className="priceSection">
                                                        <span>৳ </span><span>49</span>
                                                    </span>
                                                    <span className="helpIcon">
                                                        <svg width="15px" height="15px" style={{ fill: '#fff', stroke: '#fff', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 100 100">
                                                            <path d="m50 5c-24.898 0-45 20.102-45 45s20.102 45 45 45 45-20.102 45-45-20.102-45-45-45zm7.1016 70c0 2.1992-1.8984 4.1016-4.1016 4.1016h-6.1992c-2.1992 0-4.1016-1.8984-4.1016-4.1016v-26.199c0-2.3008 1.8984-4.1016 4.1016-4.1016h6.1992c2.1992 0 4.1016 1.8984 4.1016 4.1016zm-7.2031-37.102c-4.6016 0-8.3984-3.8008-8.3984-8.5 0-4.6992 3.8008-8.5 8.3984-8.5 4.6992 0 8.5 3.8008 8.5 8.5 0 4.7031-3.7969 8.5-8.5 8.5z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="body">
                        {/* Display shopping bag items */}
                        {shoppingBagItems.length > 0 ? (
                            <div className="shoppingBagItems">
                                <h3>Shopping Bag Items:</h3>
                                <ul>
                                    {shoppingBagItems.map((item, index) => (
                                        <li key={index}>
                                            {item.name} - {item.price}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="emptyCart">
                                <div className="nothingToSeeHereMoveOn">
                                    <div>
                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-517/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1" alt="Empty Shopping Bag" />
                                    </div>
                                    <span>Your shopping bag is empty. Start shopping</span>
                                </div>
                            </div>
                        )}


                        <div className="addToBagButton">
                            <button onClick={() => addToBag({ item})}>
                                Add Example Product to Shopping Bag
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
