import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import React from "react";



const navigation = {
    categories: [
        {
            id: 'newluxury',
            name: 'New Luxury',
            featured: [
                {
                    name: 'Unconventional Materials',
                    // href: route('store.topic',{'topic':'unconventional-materials'}),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3884.webp',
                    imageAlt: 'Unconventional Materials',
                    sections: [
                        [
                            {
                                id: 'unconventional',
                                title: 'Unconventional Materials',
                                name: 'New Luxury, Criação de Joias ousadas de beleza indiscritível e observação do Inusitado.',
                                description: 'A Desing passa a utilizar todos os recursos que a natureza coloca a sua disposição provando que não existe limites para joalheria a e arte',
                                items: [
                                    { name: 'Saiba Mais ...',
                                        href: "#",
                                        // href: route('store.unconventional')
                                    },
                                ],
                            }

                        ],
                    ],
                },
                {
                    name: 'Iconic Designs',
                    // href: route('store.iconic_designs'),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/10.webp',
                    imageAlt: 'design iconicos',
                    sections: [
                        [
                            {
                                id: 'high',
                                title: 'Iconic Designs',
                                name: 'Criações que representam as inspirações indomáveis da Designer que se comunica de forma ímpar por meio dessas peças únicas ',
                                description: 'Peças de Arte Carla Buaiz',
                                items: [
                                    { name: 'Conheça ...',
                                        href: "#",
                                        // href: route('store.iconic_designs')
                                    },
                                ],
                            }

                        ],
                    ],
                },
                {
                    name: 'High Jewelry',
                    //href: route('store.high_jewelry'),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/11.webp',
                    imageAlt: 'High Jewelry',
                    sections: [
                        [
                            {
                                id: 'high',
                                title: 'High Jewelry',
                                name: 'Desing único e contemporâneo, entregando aos mais preciosos e delicados elementos linhas precisas e atemporais',
                                description: 'Gemas preciosas de raríssimas e única beleza, com perfeito acabamento, equilíbrio e movimento.',
                                items: [
                                    { name: 'Conheça ...',
                                        href: "#",
                                        // href: route('store.high_jewelry')
                                    },
                                ],
                            }

                        ],
                    ],
                },

            ],
        },
    ]
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function UnconventionalNavComponent() {

    return (
        <>
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                            {({ open }) => (
                                <>
                                    <div className="relative flex">
                                        <Popover.Button
                                            className="flex items-center text-base font-light text-gray-700 hover:text-gray-400"
                                        >
                                            {category.name}
                                            <span
                                                className={classNames(
                                                    open ? 'bg-gray-500' : '',
                                                    'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Panel className="absolute inset-x-0 top-full">
                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                            <div className="relative bg-white">
                                                <div className="mx-auto max-w-7xl px-8">
                                                    <div className="grid grid-cols-3 gap-y-10 gap-x-12 py-16">
                                                        {category.featured.map((item, itemIdx) => (
                                                            <div key={item.name}  className="grid grid-cols-1 text-sm">
                                                            <div className="col-span-1">
                                                                <a href={item.href}>
                                                                <img
                                                                    src={item.imageSrc}
                                                                    alt={item.imageAlt}
                                                                    className="object-cover object-center group-hover:opacity-75"
                                                                />
                                                                </a>
                                                                <div className="flex flex-col justify-end">
                                                                    <div className="bg-white bg-opacity-60 p-4 text-sm">
                                                                        <a href={item.href} className="font-medium text-gray-900">
                                                                            {item.name}
                                                                        </a>
                                                                        <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">

                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {item.sections.map((column, columnIdx) => (
                                                                    <div key={columnIdx} className="col-span-1">
                                                                        {column.map((section) => (
                                                                            <div key={section.name}>

                                                                                <p
                                                                                    id={`${category.id}-${section.id}-heading`}
                                                                                    className=" flex items-center text-sm font-normal text-gray-700 hover:text-gray-400"
                                                                                >
                                                                                    {section.name}
                                                                                </p>
                                                                                <p
                                                                                    id={`${category.id}-${section.id}-heading`}
                                                                                    className="mt-2 flex items-center font-normal text-sm text-gray-700 hover:text-gray-400"
                                                                                >
                                                                                    {section.description}
                                                                                </p>

                                                                                <ul
                                                                                    role="list"
                                                                                    aria-labelledby={`${category.id}-${section.id}-heading`}
                                                                                    className="mt-2 space-y-1"
                                                                                >
                                                                                    {section.items.map((item) => (
                                                                                        <li key={item.name} className="flex font-light text-sm">
                                                                                            <a href={item.href}  className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                                                                {item.name}
                                                                                            </a>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    ))}
                </div>
            </Popover.Group>

        </>
    )
}
