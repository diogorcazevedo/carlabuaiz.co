import React from 'react';
import Head from "next/head";

export default function Warranty() {

    return (
        <>
            <Head title="Policies" />
            <main>
                <div className="relative py-16 bg-white overflow-hidden">
                    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                            <svg
                                className="absolute top-12 left-full transform translate-x-32"
                                width={404}
                                height={884}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={884} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                            </svg>
                            <svg
                                className="absolute top-12 right-full transform -translate-y-1/2 -translate-x-32"
                                width={404}
                                height={884}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={884} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <div className="text-lg max-w-prose mx-auto mt-24">
                            <h1>
                                <span className="block text-base text-xl text-center text-indigo-600 font-semibold tracking-wide uppercase">
                                  Garantia
                                </span>
                            </h1>
                            <p className="mt-8 text-gray-500 leading-8 text-justify">
                                A Garantia Carla Buaiz Joias é válida por 1 (um) ano e cobre eventuais defeitos que se
                                refiram a aspectos técnicos de fabricação e/ou dos materiais envolvidos.<br/>
                                Excluem-se da garantia avarias decorrentes de quedas, uso inadequado,
                                acidentes de qualquer natureza e contato com agentes químicos que possam causar danos
                                aos materiais de sua joia.<br/>
                                Na impossibilidade de reparar a peça dentro das condições de garantia, outra igual ou similar de
                                mesmo valor
                                será fornecida sem qualquer acréscimo.
                            </p>
                        </div>
                        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            <p className="text-gray-500 leading-8 text-justify">
                                Haverá perda da garantia para o caso de conserto em estabelecimento comercial diferente
                                da Carla Buaiz Joias.<br/>
                                Poderá haver custo no caso de reposição de peças (pedras, bateria, pulseira, fecho, elos, etc.);<br/>
                                A política de troca obedece ao previsto no Código de Defesa do Consumidor.&nbsp;
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
}
