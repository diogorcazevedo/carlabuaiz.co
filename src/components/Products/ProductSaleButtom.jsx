import React, {useContext} from 'react';
import {CartContext} from "../../context/CartContext/index";
import {useRouter} from "next/router";


export default function ProductSaleButtom({ image,product,url,quantity,hoop }) {

    const{handleAddItemToCart} = useContext(CartContext);
    let router= useRouter()
    function sale(image,product,url,quantity,hoop){
        handleAddItemToCart(image,product,url,quantity,hoop)
        router.push('/cart')
    }


    return (
        <>

            <div className="flex flex-row">
                <div className="basis-full">
                    <button
                        onClick={()=>sale(image,product,url,quantity,hoop)}
                        className="max-w-full flex-1 bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500 w-full">
                        comprar
                    </button>
                </div>

                {/*<div className="lg:basis-3/4">*/}
                {/*    <button*/}
                {/*        onClick={()=>sale(image,product,url,quantity)}*/}
                {/*        className="max-w-full flex-1 bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500 w-full">*/}
                {/*        comprar*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<div className="lg:basis-1/4">*/}
                {/*    <button*/}
                {/*        // href="/cart"*/}
                {/*        onClick={()=>handleAddItemToCart(image,product,url,quantity)}*/}
                {/*        className="max-w-xs flex-1 bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500 sm:w-full">*/}
                {/*        adicionar e continuar comprando*/}
                {/*
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </>
    );
}
