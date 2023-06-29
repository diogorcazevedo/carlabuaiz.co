import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from "next/link";
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const brincos = [
    { name: 'Pequenos' , href: "/categories/subcategory/22",  icon: "" },
    { name: 'Base sem aplique' , href: "/categories/subcategory/21",  icon: "" },
    { name: 'Base com aplique' , href: "/categories/subcategory/27",  icon: "" },
    { name: 'Apliques' , href: "/categories/subcategory/24",  icon: "" },
    { name: 'Solitários' , href: "/categories/subcategory/25",  icon: "" },
    { name: 'Gancho' , href: "/categories/subcategory/113",  icon: "" },
    { name: 'Infantil' , href: "/categories/subcategory/28",  icon: "" },
    { name: 'Corações' , href: "/categories/subcategory/29",  icon: "" },

]
const head_earring = [
    { name: 'Ear Cuffs' , href: "/categories/subcategory/23",  icon: "" },
    { name: 'Longos ou Grandes' , href: "/categories/subcategory/20",  icon: "" },
    { name: 'Médios' , href: "/categories/subcategory/114",  icon: "" },
    { name: 'Argolas' , href: "/categories/subcategory/26",  icon: "" },

]
const aneis = [
    { name: 'Médios' , href: "/categories/subcategory/10",  icon: "" },
    { name: 'Pequenos' , href: "/categories/subcategory/9",  icon: "" },
    { name: 'Alianças com Pedras Preciosas' , href: "/categories/subcategory/4",  icon: "" },
    { name: 'Anéis Largos (alianças)' , href: "/categories/subcategory/11",  icon: "" },
    { name: 'Aros Múltiplos' , href: "/categories/subcategory/7",  icon: "" },
    { name: 'Aparadores' , href: "/categories/subcategory/4",  icon: "" },
    { name: 'Formatura' , href: "/categories/subcategory/5",  icon: "" },
    { name: 'Corações' , href: "/categories/subcategory/13",  icon: "" },
]
const colares = [
    { name: 'Escapulário' , href: "/categories/subcategory/35",  icon: "" },
    { name: 'Corações' , href: "/categories/subcategory/37",  icon: "" },
    { name: 'Solitário' , href: "/categories/subcategory/38",  icon: "" },
    { name: 'Robustos' , href: "/categories/subcategory/39",  icon: "" },
    { name: 'Pontos de Luz' , href: "/categories/subcategory/122",  icon: "" },
    { name: 'Pingente Grande' , href: "/categories/subcategory/120",  icon: "" },
    { name: 'Infantil' , href: "/categories/subcategory/119",  icon: "" },
]
const blogPosts = [
    {
        id: 1,
        name: 'Colares',
        href: "/categories/colares",
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4022.webp',
    },
    {
        id: 2,
        name: 'Anéis',
        href: "/categories/aneis",
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/3978.webp',
    },
    {
        id: 3,
        name: 'Brincos',
        href: "/categories/brincos",
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4005.webp',
    },
    {
        id: 4,
        name: 'Pulseiras',
        href: "/categories/pulseiras",
        imageUrl:
            'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/4045.webp',
    },
]
const head_chokers = [
    { name: 'Choker (curtos)' , href: "/categories/subcategory/30",  icon: "" },
    { name: 'Médios' , href: "/categories/subcategory/33",  icon: "" },
    { name: 'Longos' , href: "/categories/subcategory/34",  icon: "" },
    { name: 'Gravatinha' , href: "/categories/subcategory/31",  icon: "" },
]
const head_rings = [
    { name: 'Grandes' , href: "/categories/subcategory/6",  icon: "" },
    { name: 'Solitários' , href: "/categories/subcategory/1",  icon: "" },
    { name: 'Alianças' , href: "/categories/subcategory/3",  icon: "" },
    { name: 'Infantil' , href: "/categories/subcategory/12",  icon: "" },
]
export default function CategorySecondNav() {
    return (
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full justify-center space-x-8">
                <Popover className="flex">
                    {({ open }) => (
                        <>
                            <div className="relative flex">
                                    <Popover.Button  className="flex items-center text-base font-light text-gray-700 hover:text-gray-400">
                                        <span>Joias por Categoria</span>
                                    </Popover.Button>

                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1"
                            >
                                <Popover.Panel className=" absolute inset-x-0 top-full text-sm text-gray-500">
                                    <div className="absolute inset-0 flex" aria-hidden="true">
                                        <div className="w-1/4 bg-white" />
                                        <div className="w-1/4 bg-white" />
                                    </div>
                                    <div className="pb-6 relative mx-auto grid max-w-full grid-cols-1 lg:grid-cols-2 bg-white">
                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8">
                                            {blogPosts.map((item) => (
                                                <div key={item.name} className="group relative">
                                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md  group-hover:opacity-75">
                                                        <Link href={item.href}>
                                                            <img
                                                                src={item.imageUrl}
                                                                //alt={item.imageAlt}
                                                                className="object-cover object-center"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <Link href={item.href} className="mt-4 block font-medium text-gray-900 text-center">
                                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                        {item.name}
                                                    </Link>
                                                    <p aria-hidden="true" className="mt-1 block text-center ">
                                                        Shop now
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid gap-y-6 xl:pl-12 px-4 py-4 sm:grid-cols-3 sm:gap-x-2 sm:py-6 sm:px-3 lg:px-4 ">
                                            <div className="w-full px-4">
                                                <div className="mx-auto w-full max-w-md rounded-b-xl bg-white">
                                                    <Disclosure>
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button className=" w-full justify-between rounded-lg bg-gray-50 px-4 text-left text-sm font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                                    <h3 className="text-base font-medium text-gray-900">Colares</h3>
                                                                    <ul role="list" className="mt-4 space-y-1">
                                                                        {head_chokers.map((item) => (
                                                                            <li key={item.name} className="flow-root">
                                                                                <Link
                                                                                    href={item.href}
                                                                                    className=" flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                                                >
                                                                                    {/*<item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                                    <span>{item.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                    <div className="flex place-content-end">
                                                                        <div className="flex mt-2 text-gray-500">
                                                                            Mais...
                                                                        </div>
                                                                       <div>
                                                                           <ChevronDownIcon
                                                                               className={`${
                                                                                   open ? 'rotate-180 transform' : ''
                                                                               } h-8 w-9 text-gray-500`}
                                                                           />
                                                                       </div>
                                                                    </div>

                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="px-4  pb-2 text-sm bg-gray-50">
                                                                    <div>
                                                                        <ul role="list" className="mt-2 space-y-2">
                                                                            {colares.map((item) => (
                                                                                <li key={item.name} className="flow-root">
                                                                                    <Link
                                                                                        href={item.href}
                                                                                        className=" flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                                                    >
                                                                                        {/*<item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                                        <span>{item.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                </div>
                                            </div>
                                            <div className="w-full px-4">
                                                <div className="mx-auto w-full max-w-md rounded-b-xl bg-white">
                                                    <Disclosure>
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button className=" w-full justify-between rounded-lg bg-gray-50 px-4 text-left text-sm font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                                    <h3 className="text-base font-medium text-gray-900">Anéis</h3>
                                                                    <ul role="list" className="mt-4 space-y-1">
                                                                        {head_rings.map((item) => (
                                                                            <li key={item.name} className="flow-root">
                                                                                <Link
                                                                                    href={item.href}
                                                                                    className=" flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                                                >
                                                                                    {/*<item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                                    <span>{item.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                    <div className="flex place-content-end">
                                                                        <div className="flex mt-2 text-gray-500">
                                                                            Mais...
                                                                        </div>
                                                                        <div>
                                                                            <ChevronDownIcon
                                                                                className={`${
                                                                                    open ? 'rotate-180 transform' : ''
                                                                                } h-8 w-8 text-gray-500`}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="px-4  pb-2 text-sm bg-gray-50">
                                                                    <div>
                                                                        <ul role="list" className="mt-2 space-y-2">
                                                                            {aneis.map((item) => (
                                                                                <li key={item.name} className="flow-root">
                                                                                    <Link
                                                                                        href={item.href}
                                                                                        className=" flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                                                    >
                                                                                        {/*<item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                                        <span>{item.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                </div>
                                            </div>
                                            <div className="w-full px-4">
                                                <div className="mx-auto w-full max-w-md rounded-b-xl bg-white">
                                                    <Disclosure>
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button className=" w-full justify-between rounded-lg bg-gray-50 px-4 text-left text-sm font-medium text-purple-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                                    <h3 className="text-base font-medium text-gray-900">Brincos</h3>
                                                                    <ul role="list" className="mt-4 space-y-1">
                                                                        {head_earring.map((item) => (
                                                                            <li key={item.name} className="flow-root">
                                                                                <Link
                                                                                    href={item.href}
                                                                                    className=" flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                                                >
                                                                                    {/*<item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                                    <span>{item.name}</span>
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                    <div className="flex place-content-end">
                                                                        <div className="flex mt-2 text-gray-500">
                                                                            Mais...
                                                                        </div>
                                                                        <div>
                                                                            <ChevronDownIcon
                                                                                className={`${
                                                                                    open ? 'rotate-180 transform' : ''
                                                                                } h-8 w-8 text-gray-500`}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="px-4  pb-2 text-sm bg-gray-50">
                                                                    <div>
                                                                        <ul role="list" className="mt-2 space-y-2">
                                                                            {brincos.map((item) => (
                                                                                <li key={item.name} className="flow-root">
                                                                                    <Link
                                                                                        href={item.href}
                                                                                        className=" flex items-center rounded-md text-sm font-light text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50"
                                                                                    >
                                                                                        {/*<item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                                                                                        <span>{item.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </Popover.Group>
    )
}
