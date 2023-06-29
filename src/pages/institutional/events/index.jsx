import React from 'react';
import Head from "next/head";

const people = [
    {
        name: 'Carla Buaiz',
        role: 'Co-Founder / CEO',
        imageUrl:'/img/designer.jpg',
    }
]

export default function Designer() {
    return (
        <>
            <Head title="Home" />
            <main>
                <div className="bg-white">
                    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                        <div className="mt-16" >
                            <ul
                                role="list"
                                className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                            >
                                {people.map((person) => (
                                    <li key={person.name} className="sm:py-8">
                                        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                                <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="space-y-4">
                                                    <div className="text-lg leading-6 font-medium space-y-1">
                                                        <h3>{person.name}</h3>
                                                        <p className="text-indigo-600">{person.role}</p>
                                                    </div>
                                                    <div className="text-lg">
                                                        <p className="text-justify py-2">
                                                            A capixaba Carla Buaiz se encantou por
                                                            trabalhos artesanais ainda na faculdade.
                                                            Fez cursos de escultura,
                                                            ourivesaria e decidiu então mudar o rumo de sua carreira.
                                                            Depois de alguns anos produzindo artesanalmente suas próprias joias,
                                                            montou seu primeiro atelier na Praia do Canto em Vitória - ES.
                                                        </p>

                                                        <p className="text-justify py-2">
                                                            Consciente das exigências da alta joalheria, do mercado de luxo e principalmente das suas próprias exigências,
                                                            buscou se especializar nos mais importantes centros acadêmicos dentro e fora do Brasil, como a
                                                            University of the Arts London e também a École Van Cleef & Arpels em Paris.
                                                        </p>

                                                        <p className="text-justify py-2"> Carla Buaiz está presente em
                                                            feiras e eventos por todo o mundo com suas joias que já foram
                                                            destaque em exposições como a Fresh From Brasil, em Nova
                                                            York, e a Oslo Fashion Week, na Noruega.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
