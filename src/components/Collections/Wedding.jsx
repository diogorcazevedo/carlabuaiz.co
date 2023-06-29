//import Link from 'next/link'

const product = {
    name: 'CASAMENTO',
    images: [
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3979.webp?t=234234234234',
            alt: 'CASAMENTO.',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3982.webp?t=234234234234',
            alt: 'CASAMENTO',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3980.webp?t=234234234234',
            alt: 'CASAMENTO',
        },
        {
            src: 'https://administracaodosistema.com.br/master/storage/images/3981.webp?t=234234234234',
            alt: 'CASAMENTO',
        },
    ]
}


export default function Wedding() {
    return (
        <div className="bg-white">
            <div className="pt-6">
                <div className="mx-auto max-w-full py-16 sm:py-24 px-8">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-500">Wedding</h2>
                        <a href="#" className="right-8 hidden text-sm font-semibold text-gray-500 hover:text-gray-800 sm:block">
                            Saiba mais
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="mx-auto mt-6 max-w-2xl lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8">
                    <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center"
                        />
                        {/*
                        <div className="flex items-start p-6">
                            <div>
                                <h3 className="font-normal text-3xl text-white">
                                    <Link href={route('store.category',{category:'aneis'})}>
                                        <span className="absolute inset-0" />
                                        Solitários
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                        */}
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <img
                                src={product.images[1].src}
                                alt={product.images[1].alt}
                                className="h-full w-full object-cover object-center"
                            />
                            {/*
                            <div className="flex items-start justify-end pt-6 px-4">
                                <div>
                                    <h3 className="font-normal text-3xl text-gray-900">
                                        <Link href={route('store.category',{category:'aneis'})}>
                                            <span className="absolute inset-0" />
                                            Alianças
                                        </Link>
                                    </h3>
                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-900">
                                        Shop now
                                    </p>
                                </div>
                            </div>
                            */}

                        </div>
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <img
                                src={product.images[2].src}
                                alt={product.images[2].alt}
                                className="h-full w-full object-cover object-center"
                            />
                            {/*
                            <div className="flex items-end justify-end p-2">
                                <div>
                                    <h3 className="font-normal text-3xl text-gray-900">
                                        <Link href={route('store.category',{category:'tiaras'})}>
                                            <span className="absolute inset-0" />
                                            Cabeças
                                        </Link>
                                    </h3>
                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-900">
                                        Shop now
                                    </p>
                                </div>
                            </div>
                             */}
                        </div>
                    </div>
                    <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={product.images[3].src}
                            alt={product.images[3].alt}
                            className="h-full w-full object-cover object-center"
                        />
                        {/*
                        <div className="flex items-start justify-end p-6">
                            <div>
                                <h3 className="font-normal text-3xl text-white">
                                    <Link href={route('store.category',{category:'brincos'})}>
                                        <span className="absolute inset-0" />
                                        NOIVA
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                        */}
                    </div>
                </div>

            </div>
        </div>
    )
}
