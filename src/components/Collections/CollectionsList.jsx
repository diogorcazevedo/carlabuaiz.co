import React from 'react';
import Link from 'next/link'

export default function CollectionsList({ collection }) {

    return (
            <div className="mb-16">
                <Link href={"/collections/" + collection.slug}>
                    <div aria-hidden="true" className=" w-full">
                        <img
                            src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+collection.images[0]?.path}
                            alt=""
                            className="w-full object-center object-cover"
                        />
                        <h1 className="ml-4 mt-4 mb-12 text-3xl tracking-wide text-gray-600">{collection.name}</h1>
                    </div>
                </Link>
            </div>
    )
}
