import React from 'react';
import {Disclosure} from "@headlessui/react";
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/react/24/outline";
import ProductRingSize from "../../components/Products/ProductRingSize";
import ProductSaleButtom from "../../components/Products/ProductSaleButtom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function ProductDescriptions({images, product}) {
    const image = images[0].path;
    const hoop = 0;
    const quantity = 1;
    const url = typeof window !== "undefined" ? window.location.href: "undefined";
    const p = {
        name: product.name,
        div:   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.stock.offered_price / 12 ) ,
        price:   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.stock.offered_price ) ,
        description: "<p>"+ product.description +"</p>",
        details: [
            {
                name: 'Materiais',
                items: [
                    product.materia,
                    product.gem_description
                ],
            },
            {
                name: 'Destaque',
                items: [
                    product.destaque
                ],
            },
            {
                name: 'Dimensões',
                items: [
                    product.dimensoes
                ],
            },
        ],
    }

    return (
       <>
           <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
               <h3 className="tracking-tight text-gray-900">{p.name}</h3>
               <div className="mt-3">
                   <h3 className="sr-only">Product information</h3>
                   <div className="flex flex-col">
                       <p className="text-base text-gray-700 space-y-6">12 X {p.div}</p>
                       <p className="text-base text-gray-700 space-y-6">{p.price}</p>
                   </div>
               </div>
               <div className="mt-10">
                   {product.category_id == "1" ? (
                       <ProductRingSize image={image} product={product} url={url} quantity={quantity} hoop={hoop} />
                   ) : (
                       <ProductSaleButtom image={image} product={product} url={url} quantity={quantity} hoop={hoop} />
                   )}

               </div>
               <section aria-labelledby="details-heading" className="mt-12">
                   <h2 id="details-heading" className="sr-only">
                       Additional details
                   </h2>
                   <div className="border-t divide-y divide-gray-200">
                       <div className="mt-6">
                           <h3 className="sr-only">Description</h3>
                           <div className="text-base text-gray-700 space-y-6" dangerouslySetInnerHTML={{ __html: p.description }}/>
                       </div>

                       {p.details.map((detail) => (
                           <Disclosure as="div" key={detail.name}>
                               {({ open }) => (
                                   <>
                                       <h3>
                                           <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                <span
                                    className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                >
                                  {detail.name}
                                </span>

                                 <span className="ml-6 flex items-center">
                                     <p>.</p>
                                  {open ? (
                                      <MinusSmallIcon
                                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                          aria-hidden="true"
                                      />
                                  ) : (
                                      <PlusSmallIcon
                                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                          aria-hidden="true"
                                      />
                                  )}
                                </span>
                                           </Disclosure.Button>
                                       </h3>
                                       <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                                           <ul role="list">
                                               {detail.items.map((item) => (
                                                   <li key={item}>{item}</li>
                                               ))}
                                           </ul>
                                       </Disclosure.Panel>
                                   </>
                               )}
                           </Disclosure>
                       ))}
                   </div>
               </section>
           </div>
       </>
    );
}
