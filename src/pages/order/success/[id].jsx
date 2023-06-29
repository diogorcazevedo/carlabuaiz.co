import Head from 'next/head'
import React, {useEffect} from "react";
import OrderReturnFooter from "../../../components/Order/OrderReturnFooter";
import * as fbq from "../../../../lib/fpixel";

export async function getServerSideProps(context) {

    const {params} = context;
    const {id} = params;
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND +  "jewelry/success/"+id)
    const data = await res.json()
    return {
        props: {
            order_data: data.order_data,
            order : data.order,
            client : data.client,
            items : data.items,
        }
    }
}

export default function Success({order_data,order,client,items}) {

    useEffect(() => {
        fbq.event('Purchase',
            {
                currency: 'BRL',
                value: order.total.toFixed(2),
                content_ids:[
                    items.map((cartItem,index) => (
                        cartItem.id
                    ))
                ]
            }
        )

    }, [order])


    return (
        <>
            <Head title="Success" />
            <main>
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto pt-28 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="py-12 bg-white">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="lg:text-center">
                                    <h2 className="text-base text-emerald-800 font-semibold tracking-wide uppercase mt-6">  ESTAMOS PROCESANDO SUA SOLICITAÇÃO E ENTRAREMOS EM CONTATO EM BREVE</h2>
                                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mt-6">
                                        Parabéns pela sua nova Joia!!!
                                    </p>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto mt-6">Sua linda Joia será cuidadosamente tratada, embalada e enviada para suas mãos!</p>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Importante saber que garantimos a entrega.</p>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Enviaremos sua nota fiscal por email ou pelo WhatsApp</p>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                        Enviaremos assim que possível o localizador dos correios
                                    </p>
                                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                        Você pode entrar em contato com a Carla Buaiz Joias sempre que precisar pelos seguintes canais:
                                    </p>
                                </div>

                                <OrderReturnFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
