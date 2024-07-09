import React, { useState } from "react";
import './css/Offers.css';

const ItemCard = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <ul className="offer-container">
            <li className="offer-item">
                <img src={item.image} alt={item.name} className="offer-image" />
                <div className="product">
                    <div className="imageWrapper">
                        <div className="imageWrapperWrapper">
                            <img src={item.image} alt={item.name} size="400" style={{ backgroundColor: 'transparent' }} />
                        </div>
                        <div className="name">{item.name}</div>
                        <div className="subText">
                            <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
                        </div>
                        <div className="discountedPriceSection">
                            <div className="discountedPrice">
                                <span>৳ </span><span>{item.price}</span>
                            </div>
                            <div className="price">
                                <span>৳ </span><span>{item.originalPrice}</span>
                            </div>
                        </div>
                    </div>
                    <span>
                        <a href="/item-details" className="btnShowDetails">
                            <span>Details</span><span>  &gt;</span>
                        </a>
                        <div className="btnShowDetailsIcon">
                            <svg width="24px" height="24px" style={{ fill: '#e1e1e1', stroke: '#e1e1e1', display: 'inline-block', verticalAlign: 'middle' }} version="1.1" viewBox="0 0 100 100">
                                <path d="m50 5c-24.898 0-45 20.102-45 45s20.102 45 45 45 45-20.102 45-45-20.102-45-45-45zm7.1016 70c0 2.1992-1.8984 4.1016-4.1016 4.1016h-6.1992c-2.1992 0-4.1016-1.8984-4.1016-4.1016v-26.199c0-2.3008 1.8984-4.1016 4.1016-4.1016h6.1992c2.1992 0 4.1016 1.8984 4.1016 4.1016zm-7.2031-37.102c-4.6016 0-8.3984-3.8008-8.3984-8.5 0-4.6992 3.8008-8.5 8.3984-8.5 4.6992 0 8.5 3.8008 8.5 8.5 0 4.7031-3.7969 8.5-8.5 8.5z"></path>
                            </svg>
                        </div>
                    </span>
                    <section className="addButtonWrapper border-radius-small">
                        <div onClick={() => addToCart(item, quantity)} className="buyText" style={{ color: '#ff8182' }}>Add to bag</div>
                    </section>
                </div>
            </li>
        </ul>
    );
};

export default ItemCard;
