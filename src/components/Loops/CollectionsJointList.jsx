import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CollectionsJointList({ joints }) {

    return (
        <div className="bg-gray-50 mb-16">
        <div className="mx-auto max-w-2xl py-14 sm:py-12 lg:max-w-full">
            <div className="mx-auto max-w-3xl text-center mb-8">
                <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">Pricipais coleções relacionadas  </h2>
                {/*
                        <p className="mt-4 text-gray-500">
                            Segue abaixo coleções com linhas ou estilos que harmonizam
                        </p>
                        */}
            </div>
            <div className="mt-16 space-y-16">
                {joints.map((collection,collectionIdx) => (
                    <div
                        key={collection.id}
                        className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                    >
                        <div
                            className={classNames(
                                collectionIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                            )}
                        >
                            <a
                                //href={route('store.collection', { collection: collection.joint.slug })}
                                href="#"
                            >
                                <h3 className="text-3xl font-medium text-gray-900 mb-4">{collection.joint.name}</h3>
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Conhecer
                                </button>
                            </a>
                        </div>
                        <div
                            className={classNames(
                                collectionIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                            )}
                        >
                            <a
                                // href={route('store.collection', { collection: collection.joint.slug })}
                                href="#"
                            >
                                <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                                    <img
                                        src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+collection.joint.images[0]?.path}
                                        alt=""
                                        className="object-cover object-center" />
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

