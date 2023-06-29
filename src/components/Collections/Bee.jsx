import Link from 'next/link'

const product = {
    name: 'Coleção com abelhas carla buaiz',
    href: '#',
    images: [
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3969.webp?t=234234234234',
            alt: 'Coleção com abelhas carla buaiz',
        },
        {
            src: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/4004.webp',
            alt: 'Coleção com abelhinas carla buaiz',
        },
        {
            src: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/collections/3977.webp',
            alt: 'Coleção com abelhinas carla buaiz',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3970.webp?t=234234234234',
            alt: 'Coleção com abelhinas carla buaiz',
        },
    ],
}


export default function Bee() {
    return (
        <>
            <div className="bg-white">
                <div className="pt-6">
                    <div className="hidden mx-auto mt-6 max-w-2xl lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <Link href="/collections/landing_pages/bee">
                                <img
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </Link>
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <Link href="/collections/landing_pages/bee">
                                <img
                                    src={product.images[1].src}
                                    alt={product.images[1].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                                </Link>
                            </div>
                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                <Link href="/collections/landing_pages/bee">
                                <img
                                    src={product.images[2].src}
                                    alt={product.images[2].alt}
                                    className="h-full w-full object-cover object-center"
                                />
                                </Link>
                            </div>
                        </div>
                        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                            <Link href="/collections/landing_pages/bee">
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
                            <Link href="/collections/landing_pages/bee">
                            <h2 className="text-3xl font-normal tracking-tight text-yellow-700">Abelhinhas CB</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
