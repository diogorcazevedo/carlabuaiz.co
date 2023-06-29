import React, {useContext} from 'react';
import HandleCartItems from "../../components/Cart/HandleCartItems";
import {CartContext} from "../../context/CartContext/index";

export default function CartOrderEdit() {
    const{cart} = useContext(CartContext);

    return (
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
                Carrinho de Compra
            </h2>
            <ul role="list" className="border-t  border-gray-200 divide-y divide-gray-200">
                {cart.map((cartItem,index) => (
                    <div key={index}>
                       <HandleCartItems
                           indexItem = {index}
                           id={cartItem.id}
                           name={cartItem.name}
                           image={cartItem.image}
                           price={cartItem.price}
                           url={cartItem.url}
                       />
                    </div>
                ))}
            </ul>
        </section>
    );
}
