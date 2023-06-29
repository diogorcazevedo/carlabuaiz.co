import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import React from "react";


const navigation = {
    categories: [
        {
            id: 'colecoes',
            name: 'Coleções',
            featured: [
                {
                    name: 'Bee',
                   // href: route('store.dear_collections'),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3882.webp',
                    imageAlt: 'Coleção Bee',
                    sections: [
                        [
                            {
                                id: 'bee',
                                name: 'Coleções queridinhas da marca.',
                                description: 'Para estar com você em todos os seus momentos',
                                items: [
                                   // { name: 'Abbraccio', href:  route('store.collection',{collection:'abbraccio'}) },
                                   // { name: 'Honeycomb', href: route('store.collection',{collection:'honeycomb'}) },
                                   // { name: 'Provence', href: route('store.collection',{collection:'provence'}) },
                                 //   { name: 'Aqua', href: route('store.collection',{collection:'aquamarine'}) },
                                //    { name: 'Miracle', href: route('store.collection',{collection:'miracle'}) },
                                  //  { name: 'Mais ...', href: route('store.dear_collections') },
                                ],
                            }

                        ],
                    ],
                },
                {
                    name: 'Fenceless',
                    //href: route('store.exclusive_collections'),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3885.webp',
                    imageAlt: 'Coleção Fenceless',
                    sections: [
                        [
                            {
                                id: 'fenceless',
                                name: 'Coleções exclusivas, com peças únicas',
                                description: 'Destinada a encontrar a pessoa perfeita',
                                items: [
                                 //   { name: 'Symphony', href:  route('store.collection',{collection:'symphony'}) },
                                  //  { name: 'Organic', href: route('store.collection',{collection:'organic'}) },
                                  //  { name: 'Provence', href: route('store.collection',{collection:'provence'}) },
                                 //   { name: 'Fly', href: route('store.collection',{collection:'abbraccio'}) },
                                   // { name: 'Arpoador', href: route('store.collection',{collection:'miracle'}) },
                                   //  { name: 'Mais ...', href: route('store.exclusive_collections') },
                                ],
                            }

                        ],
                    ],
                }
            ],
        },
    ]
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CollectionsNavComponent() {

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
                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">

                                                            {category.featured.map((item, itemIdx) => (
                                                                <div key={item.name}  className="grid grid-cols-3 grid-rows-1 gap-8 text-sm">
                                                                <div className="col-span-2 aspect-w-2">
                                                                    <a href={item.href}>
                                                                        <img
                                                                            src={item.imageSrc}
                                                                            alt={item.imageAlt}
                                                                            className="object-cover object-center group-hover:opacity-75"
                                                                        />
                                                                    </a>
                                                                    <div className="flex flex-col justify-end">
                                                                        <div className="bg-white bg-opacity-50 text-sm">
                                                                            <a href={item.href} className="font-medium text-gray-900">
                                                                                <span className="absolute inset-0" aria-hidden="true" />
                                                                                {item.name}
                                                                            </a>
                                                                            <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">

                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {item.sections.map((column, columnIdx) => (
                                                                        <div key={columnIdx} className="space-y-10">
                                                                            {column.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p
                                                                                        id={`${category.id}-${section.id}-heading`}
                                                                                        className="mt-2 flex items-center text-sm font-light  hover:text-gray-400"
                                                                                    >
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <p
                                                                                        id={`${category.id}-${section.id}-heading`}
                                                                                        className="mt-2 flex items-center font-light text-sm hover:text-gray-400"
                                                                                    >
                                                                                        {section.description}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${category.id}-${section.id}-heading`}
                                                                                        className="mt-6 space-y-1"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name} className="flex font-light text-sm">
                                                                                                <a href={item.href} className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
                                                    <div className="grid grid-cols-1 pb-12 ">
                                                        <div className="flex flex-row-reverse">
                                                            <div>
                                                                <p className="flex font-light text-sm">
                                                                    <a
                                                                        // href={route('store.collections')}
                                                                        href="#"
                                                                        className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                                        Visualizar Todas
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
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
