import React, { useState } from "react";
import './css/sticky_cart.css';
import { IoIosArrowForward } from "react-icons/io";
import { useCart } from './CartContext';

const CartSidebar = ({ isCartOpen, toggleCart   }) => {
    const { items, cart,totalItems, removeFromCart,handleDecrement,handleIncrement } = useCart();
    const {totalPrice } = useCart(); 
    const [dropdowns, setDropdowns] = useState({});
    const [rotations, setRotations] = useState({});



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



    return (
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
                            <span>{totalItems} ITEMS</span>
                        </div>
                        <button className="closeCartButtonTop" onClick={toggleCart}>Close</button>
                    </div>

                    <div className="deliveryFeeHeader" >
                        <section className="in-shopping-cart isNewNavBarHeader" id="shipping-cost-meter">
                            <div className="costMeterSection">
                                <div className="costMeter">
                                    <div className="container" style={{}}>
                                        <div className="progress"  >
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

                    <div className="body"  key={items.id} item={items}>
                        <div style={{ backgroundColor: '#f6f6f6', alignItems:'center'}}>
                            <div className="cartItemsHeaderIcon">
                                <div style={{width:'15%',marginLeft: '10px'}}>
                                    <svg version="1.1" x="0px" y="0px" viewBox="0 20 90 90"  style={{ color:'black', height:'30px', width:'30px'}}>
                                        <path className="st0" d="M59.4,32.6c0.2,0.2-0.2,0.3-0.2,0.3s-1.2,0.3-1.5,0.8c-0.3,0.3-0.8,1.5-0.8,1.5c0.7-0.2,1.5-0.3,2.3-0.7 c0.2,0,0.3,0.2,0.5,0.3c0.2,0-2,0.8-2.5,1.2c-0.3,0.3-2,1.7-2.5,1.7S53,37.9,53,37.9c0.2,0.3,0.3,0.7,0.7,1.2c0,0-1.2,0.7-1.2,0.8 c-0.2,0.2-1,1.2-1,1.2s3,0.3,4-1.3c-1,1.7-3.3,3.3-8.2,3.3c-5,0-9-2-11.7-3c-2.8-1.2-6.5-2.5-9.5-2.5c-2.8,0-6.2,0.8-8.4,2.9 c-3.9-1.5-9.2-0.7-11.7,1.7c-2.3,2.3-4.7,5.2-5,7.2c-0.5,2.2-1.7,7.4-3.3,9.7c-2.3,3.8-5,4.8-5.9,6.5c-0.8,1.7-0.8,5.2-0.7,5.2 c0.3,0.2,1.5,0,2.2-0.3c1.3-0.5,5-4.3,6.4-6.2c1.3-1.8,5.9-9.9,6.5-12.7c0.7-2.8,1.3-5.7,3.3-7.2c2.2-1.5,4.8-0.8,4.8-0.7 c0,0-2.5,2-2.7,7.5c-0.2,5.5,3.2,4.9,1.5,8.4c-1.7,3-6.7,1-8.4,2.8c-1.3,1.5,0,6.9,0,7.9c0,1-0.5,5.7-0.8,6.9c-0.2,1,0,1.7-0.2,2.3 c-0.2,0.5,1,0.7,1,0.7s-1,1.3-1.5,1c-0.5-0.2-0.8-0.2-1.2,0c-0.3,0-1,0.3-1.7,0l-2.7,5.7c0.3,0.2,0.8,0.3,1.3,0.2 c0.7-0.2,4-1.7,4.4-2c0.5-0.2,3.3-1.8,3.8-2.8c0.3-1,1-4.2,1-5.2c0.2-1,0.3-4.2,0.3-5c0-0.8-0.2-2.3,0-3c0.3-0.5,0.8-1.2,1.5-1.5 c0.8-0.2,1.8-0.2,2-0.2c0.3,0,3.2,0.3,3.7,0.3c0.7,0,3.3-0.5,4-0.8c0.8-0.2,1.3,0,1.5,0.3c0.3,0.3-0.3,0.8-0.3,1 c-0.2,0.2-1.5,1.8-1.8,2.5c-0.3,0.8-1.5,2.3-1.2,3c0.3,0.7,0.3,0.8,1.3,1.3c1,0.3,4.9,2.3,7,4.3c2.3,2.2,4.5,4.8,4.9,6.2 c0.5,1.5,1.3,1.7,1.8,1.7c0.5,0.2,1.5,0.3,1.5,1c0,0.7-0.2,1.5-0.2,1.5l6.2,2.3c0,0,0-2.2-0.2-3c-0.2-1-1.2-2-2-3 c-0.8-1.2-9.5-9.7-10.4-10.4c-0.8-0.5-1.5-1.2-1.7-2.5c-0.2-1.3,1.5-2.3,2.5-3.5c0.7-0.8,2.5-4.7,2.8-5.2c0.3-0.5,1.5-1.8,2.2-1.8 c0.8,0,2.7,1.2,5,2c1,0.3,8.2,2.2,9.2,2.5c1,0.2,3.2,0,3.8,0.7c0.7,0.5,0,1.8-0.2,2.7c-0.2,1-2,4.7-2,4.7s0.3,1.3,0.3,2.4 c0,1.2-0.5,5.3-1,6.7c-0.3,1.5-2.7,5.4-3.2,6c-0.3,0.5-0.8,0.8-0.8,1.7c0,0.8,1.5,1,2,1.7c0.7,0.5,0.2,1.5,0,2.5l6.7,2.8 c0-0.5,0.3-1.3,0-1.7c-0.2-0.5-1-1.5-1.5-2.2c-0.3-0.5-1.5-2.3-1.8-2.7c-0.3-0.5-0.3-1.5,0-2.3c0.2-0.8,2.3-6.5,2.5-7.2 c0.3-0.8,3.5-7.5,3.8-8.4c0.3-1,3-5.9,3.3-6.7c0.3-1,2.5-1.8,3.2-1.8c0.8,0,5,1.5,5.7,1.8c0.5,0.2,4.4,1.8,5,2.2 c0.8,0.3,0.3,1-0.2,1.2c-0.5,0.3-6.7,4.5-7.2,4.7c-0.5,0.2-1,0.7-1.3,0.7c-0.5,0-1.2,0.5-1.2,0.7c0,0.3-0.2,1-1,1c-0.7,0-2-1-2.8-2 c-1.2,0.7-2,1.2-2.5,2.2c-0.8,0.8-1.2,1.5-1.7,2.7c0.3,0.3,1,0.5,1.5,0.5h5.4c0.5,0,1.2-0.2,1.7-0.3c0.5-0.3,13.7-9,13.7-9 s2.2-1.7,2.2-3.2c0-1.2-1-1.5-1.3-2c-0.5-0.3-3.5-2.3-4-2.7c-0.7-0.5-3-1.8-3.7-2.2c-0.5-0.3-2.4-1-2.4-1c0.5-1.5,0.8-2.7,1-3 c0.2-0.3,0.2-3.4,0.3-3.9c0-0.5,0.8-2.7,1.2-3c0.3-0.3,1.2-3,1.3-3.5c0.2-0.3,1.5-4.2,2.2-4.2c0.7-0.2,1.3,0.5,2,0.5 c0.7,0.2,3.2-0.2,4.5,0c1.2,0.2,2.7,1.7,3,1.8c0.5,0.2,1.7,0.7,2,0.7c0.2,0,1.8-1.2,1.8-1.5c0-0.3-1.2-1-1.3-1 c-0.2-0.2-1.3-0.8-1.3-0.8c0,0.2,0.5-0.3,1.3-0.3c0.7,0,1.3,0.7,1.5,0.8c0.3,0.2,1.2,0.7,1.3,0.3c0.2-0.2,0.8-1,0.8-1.5 c0-0.7-0.7-1.5-1-1.8c-0.3-0.3-4.2-4-4.5-4.2c-0.5-0.2-2.5-2-2.5-2.5c-0.2-0.3-1.2-1.2-1.3-1.3c-0.2-0.2-5.2-3.7-5.9-4.2 c-0.7-0.5-1.3-1.3-1.3-2.2c0-0.8-0.3-3-0.3-3s-1.2-0.2-1.7,0.3c-0.5,0.3-1.7,3-2.3,3c-1.8-0.3-4.2,0.2-4.2,0.5 c0.2,0.5,1.8,0.2,1.8,0.2c0,0.2-0.7,1-1.2,1c-0.3,0-1.3,0.3-1.5,0.5c-0.3,0-1,0.5-1,0.5c0.5,0,1,0,1.7,0.2c0,0-1,0.7-1.5,0.7 c-0.5,0-2.2,0.5-2.7,0.7c-0.3,0.3-1.7,1.3-1.7,1.3h-1.5l0.2,0.3h0.8L59.4,32.6L59.4,32.6z"></path>
                                    </svg>
                                </div>
                                <div style={{color:'black', width:'80%'}}>
                                    <span>
                                        Express Delivery
                                    </span>
                                </div>
                            </div>
                        </div>
                        {cart.length > 0 ? (
                            <div className="shoppingBagItems" style={{width:'300px'}}>
                                <ul style={{paddingLeft:'5px'}}>
                                    {cart.map((items, index) => (
                                        <li key={index} className="item_dis">
                                            <div className="Button" style={{height:'auto', width: 'auto'}}>
                                                <div type="button" className="minusQuantity" id='same'onClick={() => handleDecrement(items.id)}>–</div>
                                                    <div className="QuantityTextContainer">
                                                        <span>{items.quantity}</span>
                                                        <span> </span>
                                                    </div>
                                                <div type="button" className="plusQuantity" id='same' onClick={() => handleIncrement(items.id)}>+</div>
                                            </div>
                                            <div className="img" style={{width:'40px',height:'40px'}}>
                                                <img src={items.image} alt={items.name} style={{width:'40px',height:'40px'}}/>
                                            </div>
                                            
                                            <div className="name" style={{display:'block'}}>
                                                <div style={{height:'auto', width: 'auto'}}>
                                                    {items.name}
                                                </div>
                                                <div style={{height:'auto', width: 'auto'}}>
                                                    {items.quantity_inKGorPCS}
                                                </div>
                                            </div>
                                            <div className="price" style={{display:'block'}}>
                                                <div style={{height:'auto', width: 'auto', color:'#e43215'}}>
                                                    ৳{items.price * items.quantity}
                                                </div>
                                                <div style={{height:'auto', width: 'auto', textDecoration:'line-through red'}}>
                                                    ৳{items.originalPrice * items.quantity}
                                                </div>
                                            </div>
                                            <div className="remove" title="Remove from bag"  onClick={() => removeFromCart(items.id)} style={{display:'block'}}>
                                                <span>&nbsp;&nbsp;X&nbsp;</span>
                                            </div>
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

                        <section className="discountCodeContainer">
                            <div className="main-discount-container">
                                <div className="discountCodeHeader" style={{display:'flex',alignItems: 'center'}}>
                                    <div className="btnDiscount" style={{alignItems: 'center'}}>
                                        <IoIosArrowForward className="arrow-icon" 
                                        style={{ transform: `rotate(${rotations[1] || 0}deg)`,color:'#ff4e56', alignItems: 'center' }} 
                                        onClick={(e) => {e.preventDefault();  
                                        e.stopPropagation();  toggleDropdown(1); }}
                                        />
                                        <span style={{alignItems: 'center'}}>Have a special code?</span>
                                        {dropdowns[1] && (
                                        <div className="discountCodeContent">
                                            <form>
                                                <span className="inputNbtn">
                                                    <input className="MMMM" required maxLength="100" type="text" placeholder="Referral/Discount Code" />
                                                    <div className="discountSubmitBtn">
                                                        <span>
                                                            <span> </span>
                                                            <span>Go</span>
                                                            <span> </span>
                                                        </span>
                                                    </div>
                                                    <div className="discountCloseBtn"  
                                                        onClick={(e) => {e.preventDefault();  
                                                        e.stopPropagation();  toggleDropdown(1); }}>Close</div>
                                                </span>
                                            </form>
                                            
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="shoppingtCartActionButtons">
                                    <div id="placeOrderButton">
                                        <span className="placeOrderText" style={{alignItems:'center', marginLeft:'20px',paddingLeft:'25px'}}>Place Order</span>
                                        <span className="totalMoneyCount">
                                            <span>৳ </span>
                                            <span> {totalPrice} </span>
                                            <span> </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
    );
};

export default CartSidebar;
