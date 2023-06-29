import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {Bars3Icon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {XMarkIcon} from "@heroicons/react/24/outline";
import React, { Fragment, useState } from 'react'
import Link from "next/link";

export default function MobileNavBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigation = {
        categories: [
            {
                id: 'Categorias',
                name: 'Categorias',
                featured: [
                    {
                        name: 'Colares',
                        href: "/categories/colares",
                        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4022.webp',
                        imageAlt:
                            'Colares',
                    },
                    {
                        name: 'Brincos',
                        href: "/categories/brincos",
                        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4005.webp',
                        imageAlt: 'Brincos.',
                    },
                    {
                        name: 'Anéis',
                        href: "/categories/aneis",
                        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/3978.webp',
                        imageAlt:'Anéis',
                    },
                    {
                        name: 'Pulseiras',
                        href: "/categories/pulseiras",
                        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4045.webp',
                        imageAlt:'Pulseiras',
                    },
                ]
            },
            {
                id: 'Coleções',
                name: 'Coleções',
                featured: [
                    {
                        name: 'Bee',
                        href: "/collections/bee",
                        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/4001.webp',
                        imageAlt: 'Coleção Bee',
                    },
                    {
                        name: 'Fenceless',
                        href: "/collections/fenceless",
                        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3895.webp',
                        imageAlt: 'Coleção Fenceless',
                    }
                ],
            },
        ],
        pages: [
            { name: 'Todas as coleções', href: "/collections" },
            { name: 'Sobre Carla Buaiz', href: "/institutional/designer" },
            { name: 'Endereços', href: "/institutional/address" },
        ],
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <>
            <div className="flex-1 flex items-center lg:hidden ee">
                <button type="button" className=" -ml-2 p-2 text-dark" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Search */}
                <Link href="#" className="ml-2 p-2 text-dark">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                </Link>
            </div>
            <div>
                <Link href="/" className="lg:hidden">
                    <span className="sr-only">carla buaiz joias</span>
                    <img
                        src="/img/logo.svg"
                         alt=""
                        className="h-20 w-auto"
                    />
                </Link>
            </div>

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => setMobileMenuOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                                            'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                                <div className="space-y-4">
                                                    {category.featured.map((item, itemIdx) => (
                                                        <div
                                                            key={itemIdx}
                                                            className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100"
                                                        >
                                                            <img
                                                                src={item.imageSrc}
                                                                alt={item.imageAlt}
                                                                className="object-cover object-center group-hover:opacity-75"
                                                            />
                                                            <div className="flex flex-col justify-end">
                                                                <div className="bg-gray-100 bg-opacity-80 p-4 text-base sm:text-sm">
                                                                    <Link href={item.href} className="font-medium text-gray-900">
                                                                        <span className="absolute inset-0" aria-hidden="true" />
                                                                        {item.name}
                                                                    </Link>
                                                                    <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/*{category.sections.map((column, columnIdx) => (*/}
                                                {/*    <div key={columnIdx} className="space-y-10">*/}
                                                {/*        {column.map((section) => (*/}
                                                {/*            <div key={section.name}>*/}
                                                {/*                <p*/}
                                                {/*                    id={`${category.id}-${section.id}-heading-mobile`}*/}
                                                {/*                    className="font-medium text-gray-900"*/}
                                                {/*                >*/}
                                                {/*                    {section.name}*/}
                                                {/*                </p>*/}
                                                {/*                <ul*/}
                                                {/*                    role="list"*/}
                                                {/*                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}*/}
                                                {/*                    className="mt-6 flex flex-col space-y-6"*/}
                                                {/*                >*/}
                                                {/*                    {section.items.map((item) => (*/}
                                                {/*                        <li key={item.name} className="flow-root">*/}
                                                {/*                            <Link href={item.href} className="-m-2 block p-2 text-gray-500">*/}
                                                {/*                                {item.name}*/}
                                                {/*                            </Link>*/}
                                                {/*                        </li>*/}
                                                {/*                    ))}*/}
                                                {/*                </ul>*/}
                                                {/*            </div>*/}
                                                {/*        ))}*/}
                                                {/*    </div>*/}
                                                {/*))}*/}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                {/*<div className="border-t border-gray-200 px-4 py-6">*/}
                                {/*    <Link href="#" className="-m-2 flex items-center p-2">*/}
                                {/*        <img*/}
                                {/*            src="https://tailwindui.com/img/flags/flag-canada.svg"*/}
                                {/*            alt=""*/}
                                {/*            className="block h-auto w-5 flex-shrink-0"*/}
                                {/*        />*/}
                                {/*        <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>*/}
                                {/*        <span className="sr-only">, change currency</span>*/}
                                {/*    </Link>*/}
                                {/*</div>*/}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

        </>

    );
}
