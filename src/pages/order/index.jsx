import Head from 'next/head'
import React, {useContext, useEffect} from "react";
import OrderSummary from "../../components/Order/OrderSummary";
import OrderDescription from "../../components/Order/OrderDescription";
import OrderForm from "@/components/Order/OrderForm";
import * as fbq from '../../../lib/fpixel'
import {CartContext} from "@/context/CartContext";
//import { useRouter } from 'next/router'
export default function Order() {

    //const router = useRouter()
    const {cart} = useContext(CartContext);
    const totalPrice = cart.reduce((acc, current) => acc + Number(current.price), 0);

    useEffect(() => {
        // This pageview only triggers the first time (it's important for Pixel to have real information)
        fbq.event_track_custom('initiateCheckoutPersonalizado',
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

        // const handleRouteChange = () => {
        //     fbq.event_track_custom('initiateCheckoutPersonalizado',
        //         {
        //             currency: 'BRL',
        //             value: totalPrice.toFixed(2),
        //             content_ids:[
        //                 cart.map((cartItem,index) => (
        //                     cartItem.id
        //                  ))
        //                 ]
        //         }
        //     )
        // }
        //
        // router.events.on('routeChangeComplete', handleRouteChange)
        // return () => {
        //     router.events.off('routeChangeComplete', handleRouteChange)
        // }


    //}, [router.events,cart,totalPrice])
    }, [cart,totalPrice])


    return (
        <>
            <Head title="Order" />
            <main>
                <div className="bg-white mt-24">
                    {/* Background color split screen for large screens */}
                    <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
                    <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-white" aria-hidden="true" />
                    <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-16">
                        <section aria-labelledby="summary-heading" className="hidden md:block py-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2">
                            <OrderSummary />
                            <br/>
                            <OrderDescription />
                        </section>
                        <section aria-labelledby="payment-and-shipping-heading" className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1">
                            <OrderForm/>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
