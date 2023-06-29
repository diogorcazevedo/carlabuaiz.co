import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'


const navigation = {
    categories: [
        {
            name: 'Pedras Preciosas',
            featured: [
                {
                    name: 'Diamantes',
                    //href: route('store.gem',{'gem':'1'}),
                    //href: route('store.topic',{'topic':'gemas-diamantes'}),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/3.webp',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Esmeraldas',
                    //href: route('store.topic',{'topic':'gemas-boutique-de-esmeraldas'}),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/4.webp',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Cores Quentes',
                    //href: route('store.topic',{'topic':'gemas-cores-quentes'}),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/5.webp',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Pérolas. Amamos!',
                    //href: route('store.gem',{'gem':'54'}),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/7.webp',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Gemas Azuis',
                    //href: route('store.topic',{'topic':'gemas-azuis'}),
                    href: "#",
                    imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/topics/6.webp',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
        },
    ]
}

const secondnavigation = {
    pages: [
        // { name: 'Turmalina', href: route('store.gem',{'gem':'47'})},
        // { name: 'Paraíba', href: route('store.gem',{'gem':'46'})},
        // { name: 'Rubi', href: route('store.gem',{'gem':'38'})},
        // { name: 'Tanzanita', href: route('store.gem',{'gem':'40'})},
        // { name: 'Topázio Imperial', href: route('store.gem',{'gem':'42'})},
    ],
}

export default function GemsNavItem() {

    return (
        <>
            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full justify-center space-x-8">
                    {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                            {({ open }) => (
                                <>
                                    <div className="relative flex">
                                        <Popover.Button
                                            className="flex items-center text-base font-light text-gray-700 hover:text-gray-400"
                                        >
                                            {category.name}
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
                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                            <div className="relative bg-white">
                                                <div className="mx-auto max-w-7xl px-8">
                                                    <div className="flex flex-row">
                                                        <div className="basis-3/4">
                                                            <div className="grid grid-cols-5 gap-y-10 gap-x-8 py-16">
                                                                {category.featured.map((item) => (
                                                                    <div key={item.name} className="group relative">
                                                                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                            <a href={item.href} >
                                                                            <img
                                                                                src={item.imageSrc}
                                                                                alt={item.imageAlt}
                                                                                className="object-cover object-center"
                                                                            />
                                                                            </a>
                                                                        </div>
                                                                        <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                            {item.name}
                                                                        </a>
                                                                        <p aria-hidden="true" className="mt-1">
                                                                            Shop now
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="basis-1/4">
                                                            <div className="py-16 px-8">
                                                                {secondnavigation.pages.map((page) => (
                                                                    <a
                                                                        key={page.name}
                                                                        href={page.href}
                                                                        className="flex items-center text-sm mt-2 font-medium text-gray-700 hover:text-gray-800"
                                                                    >
                                                                        {page.name}
                                                                    </a>
                                                                ))}
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
