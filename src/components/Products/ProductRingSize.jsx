import React, {useContext, useState} from 'react';
import {CartContext} from "../../context/CartContext/index";
import {useRouter} from "next/router";

export default function ProductRingSize({ image,product,url,quantity,hoop }) {

    const [imageRing, setImageRing] = useState(image);
    const [productRing, setProductRing] = useState(product);
    const [urlRing, setUrlRing] = useState(url);
    const [quantityRing, setQuantityRing] = useState(quantity);
    const [hoopRing, setHoopRing] = useState(hoop);

    const{handleAddItemToCart} = useContext(CartContext);
    let router= useRouter()

    const handleChange = (event) => {
        event.preventDefault()
        setHoopRing(event.target.value)
        handleAddItemToCart(imageRing,productRing,urlRing,quantityRing,hoopRing)
        router.push('/cart')
    }


    return (
        <>
            <p className="text-base text-gray-700 space-y-6">
                Aro (se não souber, informar aro 0 ou não informar nada, que entraremos em contato para ajudar)
            </p>
            <form  className="mt-8 sm:flex" method="post">
                <label htmlFor="hoopRing" className="sr-only">
                    Aro (se não souber, informar aro 0 ou não informar nada, que entraremos em contato para ajudar)
                </label>
                <select
                    id="hoopRing"
                    name="hoopRing"
                    value={hoopRing} onChange={handleChange}
                    className="w-full px-5 py-1 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
                >
                    <option value='0'>Selecionar numeração</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                    <option value='21'>21</option>
                    <option value='22'>22</option>
                    <option value='23'>23</option>
                    <option value='24'>24</option>
                    <option value='25'>25</option>
                    <option value='26'>26</option>
                    <option value='27'>27</option>
                    <option value='28'>28</option>
                    <option value='29'>29</option>
                    <option value='30'>30</option>
                    <option value='31'>31</option>
                    <option value='32'>32</option>
                    <option value='33'>33</option>
                    <option value='34'>34</option>
                    <option value='35'>35</option>
                    <option value='36'>36</option>
                    <option value='37'>37</option>
                    <option value='38'>38</option>
                    <option value='39'>39</option>
                    <option value='40'>40</option>
                    <option value='41'>41</option>
                    <option value='42'>42</option>
                    <option value='43'>43</option>
                    <option value='44'>44</option>
                    <option value='45'>45</option>
                </select>

                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        comprar
                    </button>
                </div>
            </form>
        </>
    );
}
