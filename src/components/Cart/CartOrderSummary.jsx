import React, {useContext} from 'react';
import Link from "next/link";
import {CartContext} from "../../context/CartContext/index";


export default function CartOrderSummary() {

    const {cart} = useContext(CartContext);

    const totalPrice = cart.reduce((acc, current) => acc + Number(current.price), 0);
    return (

        <section aria-labelledby="summary-heading"
                 className=" mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Descritivo
            </h2>

            <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                        R$ {totalPrice.toFixed(2)}
                    </dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex items-center text-sm text-gray-600">
                        <span>Frete</span>
                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Frete sem custo</span>
                            {/*<QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />*/}
                        </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">R$ 0.00</dd>
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">Total</dt>
                    <dd className="text-base font-medium text-gray-900">
                        R$ {totalPrice.toFixed(2)}
                    </dd>
                </div>
            </dl>

            <div className="mt-6">
                <Link
                    href="/order"
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                    Pagamento
                </Link>
            </div>
        </section>


    );
}
