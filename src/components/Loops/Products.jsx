import React from 'react';
import ProductsList from "../../components/Loops/ProductsList";

export default function Products({ data }) {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
            product.images[0]?.path  && (
                <div key={product.id} >
                    <ProductsList product={product}/>
                </div>
            )
        ))}
    </ul>
    );
}
