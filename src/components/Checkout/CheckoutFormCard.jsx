import React, {useState} from 'react';
import InputMask from "react-input-mask";
import {SparklesIcon} from "@heroicons/react/24/outline";
import {useRouter,useEffect} from "next/router";
import FormValidate from "../../components/Validate/FormValidate";


export default function CheckoutFormCard({order,operadora }) {

    const [errors,setErrors] = useState();
    const router = useRouter();

    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [expiry,setExpiry] = useState('')
    const [cvv,setCvv] = useState('')
    const [bandeira,setBandeira] = useState('')
    const [parcelas,setParcelas] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        document.getElementById("submitbutton").disabled = true;
        document.getElementById("submitbutton").value = "Please wait...";
        let node = document.getElementById("submitbutton");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }

        const data = {
            name: name,
            number: number,
            expiry: expiry,
            cvv: cvv,
            operadora: operadora.id,
            bandeira: bandeira,
            parcelas: parcelas,

        };
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND +  "checkout/submit/"+ order.id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const res_data = await res.json();
        if (res_data.success === false){
            setErrors(res_data.data)
        }else {
            if (res_data.status === 2) {
                await router.push('/order/success/' + res_data.id)
            } else {
                await router.push('/order/exception/' + res_data.id)
            }
        }

    };
    

    return (
        <>
            <section aria-labelledby="payment-and-shipping-heading" className=" lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1">
                <div className="flex flex-row">
                    <div className="basis-1/4">
                       <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                          <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="basis-3/4">
                        <p className="text-3xl font-extrabold tracking-tight text-gray-900">Dados do pagamento</p>

                    </div>
                </div>
                <div className="mt-10">
                    <form onSubmit={handleSubmit}>
                        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                    Nome idêntico ao cartão
                                </label>
                                {errors?.name &&
                                    <FormValidate errors={errors.name} field="ERRO AO PREENCHER CAMPO NOME" />
                                }
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        name="name"
                                        autoComplete="name"
                                        className="uppercase block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="cc-name" className="block text-sm font-medium text-gray-700">
                                    Selecionar Bandeira do Cartão
                                </label>
                                {errors?.bandeira &&
                                    <FormValidate errors={errors} field="ERRO AO PREENCHER CAMPO BANDEIRA" />
                                }
                                <div className="mt-1">
                                    <select
                                        onChange={e => setBandeira(e.target.value)}
                                        value={bandeira}
                                        id="bandeira"
                                        name="bandeira"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        required>
                                        <option  value="" ></option>
                                        <option  value="visa">visa</option>
                                        <option  value="mastercard">mastercard</option>
                                        <option  value="amex">amex</option>
                                        <option  value="elo">elo</option>
                                        <option  value="banescard">banescard</option>
                                        <option  value="diners">diners</option>
                                        <option  value="hipercard">hipercard</option>
                                        <option  value="discover">discover</option>
                                        <option  value="aura">aura</option>
                                        <option  value="jcb">jcb</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                    Número do cartão
                                </label>
                                {errors?.number &&
                                    <FormValidate errors={errors} field="ERRO AO PREENCHER CAMPO NÚMERO DO CARTÃO" />
                                }
                                <div className="mt-1">
                                    <InputMask
                                        required
                                        type="text"
                                        id="number"
                                        name="number"
                                        autoComplete="number"
                                        mask="9999.9999.9999.9999"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></InputMask>
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                                    Data de validade
                                </label>
                                {errors?.expiry &&
                                    <FormValidate errors={errors} field="ERRO AO PREENCHER CAMPO DATA DE VALIDADE DO CARTÃO" />
                                }
                                <div className="mt-1">
                                    <InputMask
                                        required
                                        type="text"
                                        id="expiry"
                                        name="expiry"
                                        autoComplete="expiry"
                                        mask="99/99"
                                        value={expiry}
                                        onChange={e => setExpiry(e.target.value)}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></InputMask>
                                </div>
                            </div>
                            <div  className="col-span-2 sm:col-span-1">
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                    CVV ou CVC
                                </label>
                                {errors?.cvv &&
                                    <FormValidate errors={errors} field="ERRO AO PREENCHER CVV OU CVC DO CARTÃO" />
                                }
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        name="cvv"
                                        id="cvv"
                                        autoComplete="cvv"
                                        value={cvv}
                                        onChange={e => setCvv(e.target.value)}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-2">
                                <label htmlFor="parcelas" className="block text-sm font-medium text-gray-700">
                                    Selecionar quantidade de parcelas
                                </label>
                                {errors?.parcelas &&
                                    <FormValidate errors={errors} field="ERRO AO PREENCHER QUANTIDADE DE PARCELAS" />
                                }
                                <div className="mt-1">
                                    <select
                                        required
                                        name="parcelas"
                                        id="parcelas"
                                        autoComplete="parcelas"
                                        value={parcelas}
                                        onChange={e => setParcelas(e.target.value)}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                        <option  value="" ></option>
                                        <option  value="1">1x</option>
                                        <option  value="2">2x</option>
                                        <option  value="3">3x</option>
                                        <option  value="4">4x</option>
                                        <option  value="5">5x</option>
                                        <option  value="6">6x</option>
                                        <option  value="7">7x</option>
                                        <option  value="8">8x</option>
                                        <option  value="9">9x</option>
                                        <option  value="10">10x</option>
                                        <option  value="11">11x</option>
                                        <option  value="12">12x</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <button
                                    type="submit"
                                    id="submitbutton"
                                    name="submitbutton"
                                    className="bg-teal-600 mt-6 w-full border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-teal-500">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" shadow-sm flex items-center justify-between border-t border-white border-opacity-90 text-gray-700 py-6 mb-6">
                    <dt className="text-3xl font-extrabold tracking-tight text-gray-900">Total: </dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                        { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total) }
                    </dd>
                </div>
            </section>
        </>
    );
}
