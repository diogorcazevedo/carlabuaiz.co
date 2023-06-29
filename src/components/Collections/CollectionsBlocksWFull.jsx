import Link from 'next/link'

export default function CollectionsBlocksWFull({cb_collections}) {
    return (
        <div className="mx-auto max-w-full">
            <ul role="list" className="grid grid-cols-1 gap-y-2 sm:grid-cols-1 lg:grid-cols-1">
                {cb_collections.map((collection) => (
                    <li key={collection.id} className="relative">
                        <div className="group aspect-w-10 aspect-h-5 block w-full overflow-hidden rounded-lg  focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <div className="mb-6">
                                <Link href={"/collections/" + collection.slug}>
                                    <div aria-hidden="true" className=" w-full">
                                        <img
                                            src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+collection.images[0]?.path}
                                            alt=""
                                            className="w-full object-center object-cover"
                                        />
                                        <div className="relative h-20 pt-8 ">
                                            <div className="absolute bottom-0 left-8 h-16 text-3xl text-gray-700">{collection.name}</div>
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
