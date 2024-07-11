import React, { createContext, useState, useContext, useMemo } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const removeFromCart = (itemId) => {
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
    };
    const updateCartItemQuantity = (itemId, quantity) => {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
        )
      );
    };
    

    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            let updatedCart = [...prevCart];

            // Find the index of the item in the cart
            const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

            if (itemIndex !== -1) {
                // Item exists in cart
                if (quantity > 0) {
                    // Update quantity if greater than 0
                    updatedCart[itemIndex].quantity = quantity;
                } else {
                    // Remove item from cart if quantity is 0
                    updatedCart.splice(itemIndex, 1);
                }
            } else {
                // Add new item to cart if not already present
                if (quantity > 0) {
                    updatedCart.push({ ...item, quantity });
                }
            }

            // Calculate total price based on updated cart
            const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.quantity);
            }, 0);

            setTotalPrice(updatedTotalPrice);

            return updatedCart;
        });
    };

    // Calculate total items
    const totalItems = useMemo(() => {
        return Object.keys(cart.reduce((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {})).length;
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, totalPrice, totalItems, addToCart, removeFromCart, updateCartItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook 
export const useCart = () => {
    return useContext(CartContext);
};
