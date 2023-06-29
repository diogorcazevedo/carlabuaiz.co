import Link from "next/link";

const categories = [
    {
        name: 'Anéis',
        href: "/categories/aneis",
        imageSrc: 'https://administracaodosistema.com.br/master/storage/images/3924.webp?t=234234234234',
    },
    {
        name: 'Brincos',
        href: "/categories/brincos",
        imageSrc: 'https://administracaodosistema.com.br/master/storage/images/3930.webp?t=234234234234',
    },
    {
        name: 'Colares',
        href: "/categories/colares",
        imageSrc: 'https://administracaodosistema.com.br/master/storage/images/3933.webp?t=234234234234',
    },
    {
        name: 'Pulseiras',
        href: "/categories/pulseiras",
        imageSrc: 'https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/products/5144.webp',
    },
    {   name: 'Pingentes',
        href: "/categories/pingentes",
        imageSrc: 'https://administracaodosistema.com.br/master/storage/images/3977.webp?t=234234234234' },
]

export default function Category() {
    return (
        <div className="bg-white">
            <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-full">
                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                            <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                {categories.map((category) => (
                                    <Link
                                        key={category.name}
                                        href={category.href}
                                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                    >
                                        <span aria-hidden="true" className="absolute inset-0">
                                          <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                        />
                                        <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                <div className="px-4 mt-6 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Busca por Categoria</h2>
                    <Link href="#" className="hidden text-sm font-semibold text-gray-900 hover:text-gray-800 sm:block">
                        Browse all categories
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
                */}

                {/*<div className="mt-6 px-4 sm:hidden">*/}
                {/*    <Link href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">*/}
                {/*        Browse all categories*/}
                {/*        <span aria-hidden="true"> &rarr;</span>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
