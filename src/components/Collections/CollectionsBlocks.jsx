import Link from 'next/link'

export default function CollectionsBlocks({cb_collections}) {
    return (
        <div className="mx-auto max-w-full">
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-4 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
                {cb_collections.map((collection) => (
                    <li key={collection.id} className="relative">
                        <div className="group aspect-w-10 aspect-h-5 block w-full overflow-hidden rounded-lg  focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <div className="mb-0 lg:mb-16">
                                <Link href={"/collections/" + collection.slug}>
                                    <div aria-hidden="true" className=" w-full">
                                        <img
                                            src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+collection.images[0]?.path}
                                            alt=""
                                            className="w-full object-center object-cover"
                                        />
                                        <div className="relative h-20 left-4">
                                            <div className="absolute bottom-0 left-0 h-16">{collection.name}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
