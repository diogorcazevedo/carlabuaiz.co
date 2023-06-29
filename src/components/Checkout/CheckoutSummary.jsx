import React from 'react';

export default function CheckoutSummary({items,order}) {
    return (

        <section aria-labelledby="summary-heading" className="hidden md:block text-gray-700 py-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2" >
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                <h2 id="summary-heading" className="sr-only">
                    resumo do pedido
                </h2>

                {/*
                <ul role="list" className="text-sm font-medium divide-y divide-white divide-opacity-90">
                    {items.map((item) => (
                        <li key={item.id} className="flex place-content-end py-6">
                            <img
                                src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+item.product.images[0]?.path}
                                alt={item.product.name}
                                className="flex-none w-40 h-40 rounded-md object-cover shadow"
                            />
                        </li>
                    ))}
                </ul>
                */}

                <dl className="text-sm font-medium space-y-6 border-t border-white border-opacity-90 pt-6">


                    <div className="text-gray-700 flex items-center justify-between">
                        <dt>Custo de frete</dt>
                        <dd>0.00 (sem custo)</dd>
                    </div>


                    <div className="flex items-center justify-between border-t border-white border-opacity-90 text-gray-700 pt-6">
                        <dt className="text-base">Total</dt>
                        <dd className="text-base">
                            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total) }
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}