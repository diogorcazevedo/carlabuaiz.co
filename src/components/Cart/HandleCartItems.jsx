import React, {useContext} from "react";
import {CartContext} from "../../context/CartContext/index";
import {XMarkIcon} from "@heroicons/react/24/solid";

const Item = ({indexItem, id, name,image,price,url}) =>{
    const{handleRemoveItemFromCart} = useContext(CartContext);

    return(
        <>
            <li className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                    <img
                        src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+image}
                        alt= ''
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-sm">
                                    <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                                        {name}
                                    </a>
                                </h3>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                                { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price) }
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:pr-9">
                            <div as="div" className="relative inline-block text-left">
                                <div>
                                    <div>
                                        <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                            {price}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0">
                                <button
                                    onClick={()=>handleRemoveItemFromCart(indexItem)}
                                    className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Remove</span>
                                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Item;