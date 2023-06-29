import React, {useContext, useState} from 'react';
import {SparklesIcon} from "@heroicons/react/24/outline";
import InputMask from "react-input-mask";
import FormValidate from "../../components/Validate/FormValidate";
import {CartContext} from "../../context/CartContext/index";
import {useRouter} from "next/router";




export default function OrderForm() {
    const {cart} = useContext(CartContext);
    const [errors,setErrors] = useState();
    const router = useRouter();

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [cpf,setCpf] = useState('')
    const [cel,setCel] = useState('')
    const [zipcode,setZipcode] = useState('')
    const [logradouro,setLogradouro] = useState('')
    const [number,setNumber] = useState('')
    const [complement,setComplement] = useState('')
    const [bairro,setBairro] = useState('')
    const [localidade,setLocalidade] = useState('')
    const [state,setState] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            cpf: cpf,
            cel: cel,
            email: email,
            zipcode: zipcode,
            address: logradouro,
            complement: complement,
            neighborhood: bairro,
            number: number,
            city: localidade,
            state: state,
            cart: cart,

        };
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND +  "checkout/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            // .then(async (response) => {
            //     if(response.status === 200) {
            //         const data = await response.json();
            //         console.log("Success response:", data);
            //     };
            //
            //
            //
            // })
            // .then((data) => {
            //     console.log("Success Data:", data);
            // })
            // .catch((error) => {
            //     console.error("Error:", error);
            // });

        const res_data = await res.json();
        if (res_data.success === false){
            setErrors(res_data.data)
        }else {
            await router.push('/order/checkout/' + res_data.order_id)
        }

    };
    function clear_zipcode_form() {
        setLogradouro("");
        setNumber("");
        setComplement("");
        setBairro("");
        setLocalidade("");
        setState("");
    }
    function callback(data) {
        if (!("error" in data)) {
            setZipcode(data.cep);
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setLocalidade(data.localidade)
            setState(data.uf)
        }
        else {
            clear_cep_form();
            alert("CEP não encontrado.");
        }
    }
    const zipcode_search = async (e) => {
        const zip_code = e.target.value.replace(/\D/g, '')

        if (zip_code !== "") {
            let zipcode_validate = /^[0-9]{8}$/;
            if (zipcode_validate.test(zip_code)) {

                document.getElementById('logradouro').value = "...";
                document.getElementById('bairro').value = "...";
                document.getElementById('localidade').value = "...";
                document.getElementById('state').value="...";

                // const script = document.createElement('script');
                const script = 'https://viacep.com.br/ws/'+ zip_code + '/json/';

                fetch(script)
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                    callback(data)
                })
            } else {
                clear_zipcode_form();
                alert("Formato de CEP inválido.");
            }
        } else {
            clear_zipcode_form();
        }
    };

    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/4">
                       <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                          <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                </div>
                <div className="basis-3/4">
                    <p className="text-3xl font-extrabold tracking-tight text-gray-900">Dados para entrega e nota</p>
                    <p className="mt-2 text-gray-500">
                        Endereço para entrega das suas joias e nota fiscal
                    </p>
                </div>
            </div>
            <form method="post" onSubmit={handleSubmit}>
                <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                    <div className="mt-4">
                        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                            {errors?.cart &&
                            <div className="col-span-3 sm:col-span-4">
                               <FormValidate errors={errors.cart} field="CARRINHO NÃO ENVIADO" />
                            </div>
                            }
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Nome:
                                </label>
                                {errors?.name &&
                                    <FormValidate errors={errors.name} field="ERRO AO PREENCHER CAMPO NOME" />
                                }
                                <div className="mt-1">
                                    <input
                                        //required
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
                                <label htmlFor="cel" className="block text-sm font-medium text-gray-700">
                                    Telefone:
                                </label>
                                {errors?.cel &&
                                    <FormValidate errors={errors} field="ERRO AO PREENCHER CAMPO TELEFONE" />
                                }
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="cel"
                                        name="cel"
                                        value={cel}
                                        onChange={e => setCel(e.target.value)}
                                        autoComplete="cel"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email:
                                </label>
                                {errors?.email &&
                                    <FormValidate errors={errors.email} field="ERRO AO PREENCHER CAMPO EMAIL" />
                                }
                                <div className="mt-1">
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        autoComplete="email"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-4">
                                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                                    CPF:
                                </label>
                                {errors?.cpf &&
                                    <FormValidate errors={errors.cpf} field="ERRO AO PREENCHER CAMPO CPF" />
                                }
                                <div className="mt-1">
                                    <InputMask
                                        required
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        mask="999.999.999.99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                        autoComplete="cpf"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></InputMask>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                            <div className="col-span-3 sm:col-span-3">
                                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
                                    CEP:
                                </label>
                                <div className="mt-1">
                                    <InputMask
                                        required
                                        minLength={10}
                                        type="text"
                                        id="zipcode"
                                        mask="99999999"
                                        //onChange={e => setZipcode(e.target.value)}
                                        onBlur={(e) => zipcode_search(e)}
                                        name="zipcode"
                                        autoComplete="zipcode"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></InputMask>
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                                <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700">
                                    Endereço:
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        name="logradouro"
                                        id="logradouro"
                                        value={logradouro}
                                        onChange={e => setLogradouro(e.target.value)}
                                        autoComplete="logradouro"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-1">
                                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                    Número:
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        name="number"
                                        id="number"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        autoComplete="number"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-2">
                                <label htmlFor="complement" className="block text-sm font-medium text-gray-700">
                                    Complemento:
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="complement"
                                        name="complement"
                                        value={complement}
                                        onChange={e => setComplement( e.target.value)}
                                        autoComplete="complement"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-1">
                                <label htmlFor="bairro" className="block text-sm font-medium text-gray-700">
                                    Bairro:
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="bairro"
                                        name="bairro"
                                        value={bairro}
                                        onChange={e => setBairro(e.target.value)}
                                        autoComplete="bairro"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="localidade" className="block text-sm font-medium text-gray-700">Cidade:</label>
                                <div className="mt-1">
                                    <input
                                        required
                                        type="text"
                                        id="localidade"
                                        name="localidade"
                                        value={localidade}
                                        onChange={e => setLocalidade(e.target.value)}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado</label>
                                <div className="mt-1">
                                    <InputMask
                                        required
                                        type="text"
                                        id="state"
                                        mask="aa"
                                        value={state}
                                        onChange={e => setState(e.target.value)}
                                        name="state"
                                        className="uppercase block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                    ></InputMask>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                        <button
                            type="submit"
                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            // disabled={processing}
                            >
                            Salvar
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}