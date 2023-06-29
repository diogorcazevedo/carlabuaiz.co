import React from 'react';
import Head from "next/head";

export default function Refund() {


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

                                Para todas as compras feitas através da loja virtual os clientes devem saber:<br/>
                                <br/>
                                O prazo para solicitação de troca ou devolução é de 15 dias corridos a contar da
                                data de recebimento do pedido.

                                <br/>
                                <br/>
                                Para realizar a devolução do seu pedido, entre em contato pelo email: contato@carlabuaiz.com.br ou pelo telefone: 27-99625-9976
                                <br/>
                                <br/>
                                As condições para a troca/devolução são:<br/>
                                <br/>
                                - A peça deve estar na embalagem original, em perfeito estado e sem vestígios de uso;<br/>
                                - A troca se fará por outra peça de mesmo valor (à escolha do cliente), como parte do pagamento de
                                outra peça de valor superior ao da peça trocada ou por um cupom, que pode variar de acordo com as
                                promoções e pode não ser cumulativo;<br/>
                                - Após o contato com o nosso Serviço de Atendimento ao Cliente basta enviar o produto na embalagem
                                original em uma agência dos Correios. A partir da confirmação do recebimento do
                                volume será feita a liberação do novo produto ou cupom de troca<br/>
                                <br/>
                                <strong><u>IMPORTANTE</u></strong>:<br/><br/>
                                - Em qualquer tempo não é permitida a troca de joias feitas sob encomenda ou joias que tenham sido
                                alvo de reformas e modificações. O valor da peça devolvida, que será amortizado em uma nova peça,
                                está sujeito a mudanças baseadas na cotação do ouro no dia da troca.<br/>
                                - Antes de receber o novo produto, cupom de desconto ou estorno, o item trocado ou devolvido precisa
                                chegar a nossa Assistência Técnica, onde será feito um processo de qualidade que pode levar até 5
                                dias úteis para ser concluído. Caso a escolha seja por outro produto, será calculado o novo prazo de
                                entrega.
                                <br/>
                                <br/>
                                Caso a assistência técnica entenda que o produto devolvido não compreende os critérios
                                pontuados acima, o site fica dispensado de aceitar a devolução ou fazer a troca. A Carla Buaiz Joias reenviará
                                o produto ao cliente sem consulta prévia, acompanhado da justificativa do motivo da recusa. &nbsp;

                            </p>
                        </div>
                        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            <p className="text-gray-500 leading-8 text-justify">
                                Antes de receber o estorno, o item devolvido precisa chegar a nossa Assistência Técnica, onde será
                                feito um processo de qualidade que pode levar até 5 dias úteis para ser concluído. A partir da
                                confirmação do recebimento do volume e de nossa auditoria de qualidade será feita a liberação do
                                estorno. O estorno é de responsabilidade da administradora do cartão e pode levar até 2 faturas para
                                ser devidamente creditado na conta do cliente, de acordo com o prazo fornecido pela administradora.&nbsp;<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
}
