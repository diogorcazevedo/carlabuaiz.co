import {CheckIcon} from '@heroicons/react/24/outline'
import Head from "next/head";


const actions = [
    {
        title: 'Atelier Praia do Canto',
        subtitle: 'Vitória - Espírito Santo',
        icon: (props) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
        ),
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
        address: 'Rua Aleixo Netto, 1226, Loja 2 - Praia do Canto, Vitória - ES, 29055-260',
        phone: '(027) 99625-9976',
        address_description: 'Nosso Atelier fica no coração de um dos bairros mais charmosos de Vitória, na Rua Aleixo Netto principal endereço do luxo capixaba.',
        description: 'Trata-se de um iluminado casarão, cheio de bom gosto e delicadeza, onde abelhinhas, flores e obras da design se encontram em perfeita harmonia.',
        subdescription: 'Nos andares superiores estão instaladas nossas estruturas de criação, produção, qualidade, certificação e gemologia.'
    },
    {
        title: 'Shopping Vitória',
        subtitle: 'Vitória - Espírito Santo',
        icon: (props) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
        ),
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
        address: 'Av. Américo Buaiz, 200 - Ilha do Boi, Vitória - ES, 29050-902, Brasil',
        phone: '(027) 99625-9976',
        address_description: 'Nosso Atelier fica no coração de um dos bairros mais charmosos de Vitória, na Rua Aleixo Netto principal endereço do luxo capixaba.',
        description: 'Trata-se de um iluminado casarão, cheio de bom gosto e delicadeza, onde abelhinhas, flores e obras da design se encontram em perfeita harmonia.',
        subdescription: 'Nos andares superiores estão instaladas nossas estruturas de criação, produção, qualidade, certificação e gemologia.'


    },
    {
        title: 'AMARE - Batel',
        subtitle: 'Curitiba - Paraná',
        icon: (props) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
        ),
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
        address: 'R. Des. Costa Carvalho, 291 - Batel, Curitiba - PR, 80420-170',
        phone: '(041) 99713-8474',
        address_description: 'Nosso Atelier fica no coração de um dos bairros mais charmosos de Vitória, na Rua Aleixo Netto principal endereço do luxo capixaba.',
        description: 'Trata-se de um iluminado casarão, cheio de bom gosto e delicadeza, onde abelhinhas, flores e obras da design se encontram em perfeita harmonia.',
        subdescription: 'Nos andares superiores estão instaladas nossas estruturas de criação, produção, qualidade, certificação e gemologia.'

    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Address() {

    return (
        <>
            <Head title="Address"/>
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-48 mb-48">
                    <div
                        className="rounded-lg  overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                        {actions.map((action, actionIdx) => (
                            <div
                                key={action.title}
                                className={classNames(
                                    actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                    actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                    actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                                    actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                                )}
                            >
                                <div>
                            <span
                                className={classNames(
                                    action.iconBackground,
                                    action.iconForeground,
                                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                                )}
                            >
                              <action.icon className="h-6 w-6" aria-hidden="true"/>
                            </span>
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-lg font-medium">
                                        <a href={action.href} className="focus:outline-none">
                                            {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true"/>
                                            {action.title}
                                        </a>
                                    </h3>
                                    <h3 className="text-gray-500 leading-8 ">
                                        <a href={action.href} className="focus:outline-none">
                                            {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true"/>
                                            {action.subtitle}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {action.address}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {action.phone}
                                    </p>
                                    {/*
                             <p className="mt-2 text-sm text-gray-500">
                                {action.address_description}
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                {action.description}
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                {action.subdescription}
                            </p>
                            */}

                                </div>
                                <span
                                    className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                    aria-hidden="true"
                                >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 24 24">
                              <path
                                  d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"/>
                            </svg>
                        </span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
