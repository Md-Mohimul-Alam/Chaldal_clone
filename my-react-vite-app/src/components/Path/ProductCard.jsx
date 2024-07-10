import React, { useState } from "react";
import './css/Offers.css';

const ItemCard = ({ item, addToCart }) => {
    const [quantity, setQuantity] = useState(0); 
    const [showQuantityEditor, setShowQuantityEditor] = useState(false);

    const handleIncrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            addToCart(item, newQuantity); // Add the updated quantity to the cart
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
            if (newQuantity <= 0) {
                setShowQuantityEditor(false);
                addToCart(item, 0); // Remove the item from cart or set quantity to 0
                return 0;
            } else {
                addToCart(item, newQuantity); // Update the cart with new quantity
                return newQuantity;
            }
        });
    };

    const handleAddToBag = () => {
        setShowQuantityEditor(!showQuantityEditor);
        if (!showQuantityEditor && quantity === 0) {
            setQuantity(1);
            addToCart(item, 1);
        }
    };

    return (
        <ul className="offer-container">
            <li className="offer-item">
                <img src={item.image} alt={item.name} className="offer-image" />
                <div className="product">
                    <div className="imageWrapper">
                        
                        <div className="choto" style={{alignItems:'center', position:'relative'}}>
                            <div className="imageWrapperWrapper">
                                <img src={item.image} alt={item.name} size="400" style={{ backgroundColor: 'transparent', width:'100%', padding:'5px',marginLeft:'2px'}} />
                            </div>
                            <div className="name">{item.name}</div>

                            <div className="subText">
                                {item.quantity_inKGorPCS}
                            </div>

                            <div className="discountedPriceSection" style={{ display:'flex' }}>
                                <div className="discountedPrice">
                                    <span>৳ </span><span>{item.price}</span>
                                </div>
                                <div className="price">
                                    <span>৳ </span><span>{item.originalPrice}</span>
                                </div>
                            </div>

                        </div>
                        
                        
                        {showQuantityEditor ? (
                            <div className="productQuantityEditor addButtonWrapper border-radius-small">
                                <button className="minusQuantity" onClick={handleDecrement}>–</button>

                                <div className="QuantityTextContainer" >
                                    <span>{quantity}</span>
                                    <span> </span>
                                    <span>in bag</span>
                                </div>

                                <button className="plusQuantity"  onClick={handleIncrement}>+</button>
                            </div>
                        ) : (
                            <section className="addButtonWrapper border-radius-small" style={{display:'flex', alignItems:'center',justifyContent:'center'}}  onClick={handleAddToBag}>
                                <span class="fifteenMinute" id="svgIcon"><svg style={{display:'inline-block', verticalAlign:'middle'}} width="22px" height="25px" version="1.1" x="0px" y="0px" viewBox="0 -5 5.153 40.012"><path d="M38.487 11.472H31.78l6.12-9.643h-8.457L21.9 16.906h5.723l-6.289 14.935z" transform="translate(-21.334 -1.829)"></path></svg></span>
                                <div className="buyText" style={{ color: '#ff8182' }}>
                                    {showQuantityEditor ? "Cancel" : "Add to bag"}
                                </div>
                            </section>
                        )}

                    </div>

                </div>
            </li>
        </ul>
    );
};

export default ItemCard;
