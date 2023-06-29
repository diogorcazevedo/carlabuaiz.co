import {SparklesIcon} from "@heroicons/react/24/outline";


export default function OrderDescription({  }) {

    return (
        <>
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                <h2 id="summary-heading" className="sr-only">
                    Order summary
                </h2>
                <div>
                    <div className="flex flex-row">
                        <div className="basis-1/4">
                       <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                          <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                        </div>
                        <div className="basis-3/4">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Garantimos a entrega
                            </h2>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="mt-4 text-lg text-gray-500">
                            Sem risco de
                            extravio ou qualquer outro imprevisto que possa comprometer a
                            chegada da sua joia até você.
                            A Carla Buaiz Joias garante a entrega.
                        </p>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="flex flex-row">
                        <div className="basis-1/4">
                           <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                              <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                        </div>
                        <div className="basis-3/4">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Segurança e Agilidade
                            </h2>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="mt-4 text-lg text-gray-500">
                            Após a confirmação da compra entraremos em
                            contato para confirmar todos os dados e combinar a
                            melhor forma de entrega para você receber suas joias
                            com segurança e rapidez
                        </p>
                    </div>
                </div>
            </div>
        </>



    )
}
