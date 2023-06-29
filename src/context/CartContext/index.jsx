import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        let localCart = localStorage.getItem("cart");
        localCart = JSON.parse(localCart);
        if (localCart) setCart(localCart)
        localStorage.setItem("cart", JSON.stringify(localCart))
    }, [])


    function handleAddItemToCart(image,product,url,quantity,hoop){

        let cartCopy = [...cart];
        const itemObject = {
            id: product.id,
            image: image,
            name: product.name,
            price:product.stock.offered_price,
            url:  url,
            quantity:  1,
            hoop: !hoop.length ? 0 : hoop.length
        };
        cartCopy.push(itemObject)
        setCart(cartCopy)
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)

    }
    function handleRemoveItemFromCart(clickedIdItemIndex){
        const filteredCart = cart.filter( cartItem =>
            cart.indexOf(cartItem) !== clickedIdItemIndex
        )
        setCart(filteredCart);
        localStorage.setItem('cart', JSON.stringify(filteredCart));

    }

    function clearCart(){
        const newCartItems = setCart([]);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    }


    return (
        <CartContext.Provider value={{cart,handleAddItemToCart,handleRemoveItemFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}