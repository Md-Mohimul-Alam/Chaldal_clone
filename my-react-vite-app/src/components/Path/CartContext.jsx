import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Initialize cart from local storage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [totalPrice, setTotalPrice] = useState(() => {
        // Initialize totalPrice from local storage
        const savedTotalPrice = localStorage.getItem('totalPrice');
        return savedTotalPrice ? JSON.parse(savedTotalPrice) : 0;
    });

    const items = [
        {
            id: 1,
            name: "Mango Himshagor ± 50 gm",
            quantity_inKGorPCS: "3kg",
            price: 399,
            originalPrice: 510,
            image: "https://chaldn.com/_mpimage/mango-himshagor-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78548&amp;q=best&amp;v=1&amp;m=400&amp;webp=1",
        },
        {
            id: 2,
            name: "Chaldal Premium Mango (Aamropali)",
            quantity_inKGorPCS: "3kg",
            price: 400,
            originalPrice: 450,
            image: "https://chaldn.com/_mpimage/chaldal-premium-mango-aamropali-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D137032&q=best&v=1&m=400&webp=1",
        },
        {
            id: 3,
            name: "Guava Premium (± 50 gm)",
            quantity_inKGorPCS: "1kg",
            price: 99,
            originalPrice: 119,
            image: "https://chaldn.com/_mpimage/guava-premium-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67818&q=best&v=1&m=400&webp=1",
        },
        {
            id: 4,
            name: "Dragon Fruit Local (± 50 gm)",
            quantity_inKGorPCS: "1kg",
            price: 229,
            originalPrice: 259,
            image: "https://chaldn.com/_mpimage/dragon-fruit-local-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D93407&q=best&v=1&m=400&webp=1",
        },
        {
            id: 5,
            name: "Dettol Soap Bathing Bar Original Germ Defence 75 gm (Free Tiffin Box)",
            quantity_inKGorPCS: "3 pcs",
            price: 159,
            originalPrice: 180,
            image: "https://chaldn.com/_mpimage/dettol-soap-bathing-bar-original-germ-defence-75-gm-free-tiffin-box-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151122&q=best&v=1&m=400&webp=1",
        },
        {
            id: 6,
            name: "Harpic All-In-One Toilet & Bathroom Cleaning Powder 400 gm (Combo Offer)",
            quantity_inKGorPCS: "2 pcs",
            price: 139,
            originalPrice: 180,
            image: "https://chaldn.com/_mpimage/harpic-all-in-one-toilet-bathroom-cleaningpowder-400-gm-combo-offer-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D134787&q=best&v=1&m=400&webp=1",
        },
        {
            id: 7,
            name: "Lizol Floor Cleaner Citrus Disinfectant Surface",
            quantity_inKGorPCS: "1 ltr",
            price: 259,
            originalPrice: 295,
            image: "https://chaldn.com/_mpimage/lizol-floor-cleaner-citrus-disinfectant-surface-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127902&q=best&v=1&m=400&webp=1",
        },
        {
            id: 8,
            name: "Veet Easy Gel Bikini & Underarm Wax Strips Sensitive Skin",
            quantity_inKGorPCS: "16 pcs",
            price: 249,
            originalPrice: 325,
            image: "https://chaldn.com/_mpimage/veet-easy-gel-bikini-underarm-wax-strips-sensitive-skin-16-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D121888&q=best&v=1&m=400&webp=1",
        },
        {
            id: 9,
            name: "Harpic Drain Xpert Powder",
            quantity_inKGorPCS: "50 gm",
            price: 45,
            originalPrice: 50,
            image: "https://chaldn.com/_mpimage/harpic-drain-xpert-powder-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D140516&q=best&v=1&m=400&webp=1",
        },
        {
            id: 10,
            name: "Trix Lemon Dishwashing Liquid Bottle 500 ml & Refill 250 ml Combo",
            quantity_inKGorPCS: "1 pack",
            price: 190,
            originalPrice: 220,
            image: "https://chaldn.com/_mpimage/trix-lemon-dishwashing-liquid-bottle-500-ml-refill-250-ml-combo?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154549&q=best&v=1&m=400&webp=1",
        },
        {
            id: 11,
            name: "Mortein Mosquito Killer Aerosol Spray",
            quantity_inKGorPCS: "1kg",
            price: 299,
            originalPrice: 375,
            image: "https://chaldn.com/_mpimage/mortein-mosquito-killer-aerosol-spray-425-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D112748&q=best&v=1&m=400&webp=1",
        },
        {
            id: 12,
            name: "Heinz Pumpkin & Potato + Beef (4 months+)",
            quantity_inKGorPCS: "110 gm",
            price: 289,
            originalPrice: 300,
            image: "https://chaldn.com/_mpimage/heinz-pumpkin-potato-beef-4-months-110-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D100054&q=best&v=1&m=400&m=400&webp=1",
        },
    ];

    useEffect(() => {
        // Sync cart and totalPrice with local storage whenever they change
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    }, [cart, totalPrice]);

    const addToCart = (item, quantity) => {
        if (!item || !item.id) {
            console.error('Invalid item payload:', item);
            return;
        }

        setCart(prevCart => {
            let updatedCart = [...prevCart];

            const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

            if (itemIndex !== -1) {
                if (quantity > 0) {
                    updatedCart[itemIndex].quantity = quantity;
                } else {
                    updatedCart.splice(itemIndex, 1);
                }
            } else {
                if (quantity > 0) {
                    updatedCart.push({ ...item, quantity });
                }
            }

            const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.quantity);
            }, 0);

            setTotalPrice(updatedTotalPrice);

            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(cartItem => cartItem.id !== itemId);

            const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.quantity);
            }, 0);

            setTotalPrice(updatedTotalPrice);

            return updatedCart;
        });
    };

    const updateCartItemQuantity = (itemId, quantity) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
                if (item.id === itemId) {
                    return { ...item, quantity };
                }
                return item;
            });

            const updatedTotalPrice = updatedCart.reduce((sum, cartItem) => {
                return sum + (cartItem.price * cartItem.quantity);
            }, 0);

            setTotalPrice(updatedTotalPrice);

            return updatedCart;
        });
    };

    const handleIncrement = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity + 1;
            updateCartItemQuantity(itemId, newQuantity);
        }
    };

    const handleDecrement = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity - 1;
            if (newQuantity <= 0) {
                removeFromCart(itemId);
            } else {
                updateCartItemQuantity(itemId, newQuantity);
            }
        }
    };

    const totalItems = useMemo(() => {
        return cart.length;
    }, [cart]);

    const contextValue = {
        items,
        cart,
        totalPrice,
        totalItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        handleIncrement,
        handleDecrement,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
