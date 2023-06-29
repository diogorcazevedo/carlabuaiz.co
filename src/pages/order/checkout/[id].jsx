import Head from 'next/head'
import CheckoutSummary from "../../../components/Checkout/CheckoutSummary";
import CheckoutFormCard from "../../../components/Checkout/CheckoutFormCard";
import {useEffect} from "react";
import * as fbq from "../../../../lib/fpixel";

export async function getServerSideProps(context) {

    const {params} = context;
    const {id} = params;
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "jewelry/checkout/"+id)
    const data = await res.json()
    return {
        props: {
            order: data.order,
            user : data.user,
            items : data.items,
            operadora : data.operadora,
        }
    }
}


export default function Checkout({order,items,operadora}) {

    useEffect(() => {
        fbq.event_track_custom('initiateCheckoutPersonalizado',
            {
                currency: 'BRL',
                eventref : 'fb_oea'
            }
        )
    }, [order])


    return (
        <>
            <Head title="Order" />
            <main>
                <div className="bg-white mt-20 p-4">
                    {/* Background color split screen for large screens */}
                    <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
                    <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
                    <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 lg:pt-16">
                        <CheckoutSummary items={items} order={order}/>
                        <CheckoutFormCard order={order}  operadora={operadora} />
                    </div>
                </div>
            </main>
        </>
    )
}
