import Head from 'next/head';
import CartOrderEdit from "../../components/Cart/CartOrderEdit";
import CartOrderSummary from "../../components/Cart/CartOrderSummary";
import {useContext, useEffect} from "react";
import * as fbq from "../../../lib/fpixel";
import {CartContext} from "@/context/CartContext";

export default function Cart() {

    const {cart} = useContext(CartContext);
    const totalPrice = cart.reduce((acc, current) => acc + Number(current.price), 0);

    useEffect(() => {
        fbq.event_track_custom('viewShoppingCart',
            {
                currency: 'BRL',
                value: totalPrice.toFixed(2),
                content_ids:[
                    cart.map((cartItem,index) => (
                        cartItem.id
                    ))
                ]
            }
        ),
        fbq.event_track_custom('VisualizouCarrinhodeCompra',
            {
                currency: 'BRL',
                value: totalPrice.toFixed(2),
                content_ids:[
                    cart.map((cartItem,index) => (
                        cartItem.id
                    ))
                ]
            }
        )

    }, [cart,totalPrice])
    return (
        <>
            <Head title="Cart" />
            <main>
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto pt-28 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                            {/* Order edit */}
                            <CartOrderEdit/>
                            {/* Order summary */}
                            <CartOrderSummary />
                        </div>
                    </div>
                </div>
            </main>
        </>
)
}
