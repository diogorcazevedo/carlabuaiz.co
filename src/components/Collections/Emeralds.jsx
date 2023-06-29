import Link from 'next/link'

const product = {
    name: 'Esmeraldas',
    images: [
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3966.JPG?t=234234234234',
            alt: 'Esmeraldas carla buaiz',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3968.webp?t=234234234234',
            alt: 'Esmeraldas carla buaiz',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3965.webp?t=234234234234',
            alt: 'Esmeraldas carla buaiz',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3971.webp?t=234234234234',
            alt: 'Esmeraldas carla buaiz',
        },
    ]
}


export default function Emeralds() {
    return (
        <div className="bg-white">
            <div className="pt-6">
                <div className="hidden mx-auto mt-6 max-w-2xl lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8 ">
                    <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <Link href="/collections/landing_pages/green">
                            <img
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <Link href="/collections/landing_pages/green">
                                <img
                                    src={product.images[1].src}
                                    alt={product.images[1].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </Link>
                        </div>
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <Link href="/collections/landing_pages/green">
                                <img
                                    src={product.images[2].src}
                                    alt={product.images[2].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <Link href="/collections/landing_pages/green">
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
                        <Link href="/collections/landing_pages/green">
                            <h2 className="text-3xl font-normal tracking-tight text-gray-900">Esmeraldas CB</h2>
                        </Link>
                        <Link href="/collections/landing_pages/green"
                            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Saiba mais
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
