import Link from 'next/link'

const product = {
    name: 'Color Gems',
    href: '#',
    images: [
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3992.webp?t=234234234234',
            alt: 'Gemas coloridas.',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3976.webp?t=234234234234',
            alt: 'Pedras Coloridas',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3995.webp?t=234234234234',
            alt: 'Pedras Coloridas',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3993.webp?t=234234234234',
            alt: 'Pedras Coloridas',
        },
    ],
}


export default function ColorGems() {
    return (
        <>
            <div className="bg-white">
                <div className="pt-6">
                    <div className="hidden mx-auto mt-6 max-w-2xl lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <Link href="/collections/landing_pages/gems">
                            <img
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                            </Link>
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <Link href="/collections/landing_pages/gems">
                                <img
                                    src={product.images[1].src}
                                    alt={product.images[1].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                                </Link>
                            </div>
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <Link href="/collections/landing_pages/gems">
                                <img
                                    src={product.images[2].src}
                                    alt={product.images[2].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                                </Link>
                            </div>
                        </div>
                        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                            <Link href="/collections/landing_pages/gems">
                            <img
                                src={product.images[3].src}
                                alt={product.images[3].alt}
                                className="h-full w-full object-cover object-center"
                            />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden mx-auto max-w-full py-8 sm:py-8 px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <Link href="/collections/landing_pages/gems">
                                <h2 className="text-3xl font-normal tracking-tight text-gray-900">Gemas Coloridas CB</h2>
                            </Link>
                            <Link href="/collections/landing_pages/gems"
                                  className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                                Saiba mais
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
