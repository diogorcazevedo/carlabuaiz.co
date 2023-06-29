
export default function ProductFeature({features}) {
    return (
        <>
            <div className="bg-white">
                <h2 id="products-heading" className="sr-only">
                    Detalhes
                </h2>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {features.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                                    <img
                                        src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+product.path}
                                        alt={product.id}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}
