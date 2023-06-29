import Head from "next/head";
import React from "react";

export async function getServerSideProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "institutional/clipping/123")
    const clipping = await res.json()
    return {
        props: {clipping}
    }
}


export default function Exception({clipping}) {

    return (
        <>
            <Head title="Clipping" />
            <main>
                <div className="pt-28">
                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {clipping.map((clip) => (
                            clip.images[0]?.path  && (
                                <div key={clip.id} >
                                    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-sm">
                                        <div className="flex-1 flex flex-col p-8">
                                            <div className="aspect-w-1 aspect-h-1">

                                                <img className="flex-shrink-0 mx-auto"
                                                     src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+clip.images[0].path}
                                                     alt={clip.name} />
                                            </div>

                                            <h3 className="mt-6 text-gray-900 text-sm font-medium">{clip.name}</h3>
                                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                                <dt className="sr-only">PRICE</dt>
                                                <dt className="sr-only">Saiba Mais</dt>
                                                <dd className="mt-3">
                                                    <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                                        Saiba Mais
                                                    </span>
                                                </dd>
                                            </dl>

                                        </div>
                                    </li>
                                </div>
                            )
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}
