import Head from 'next/head'
import Products from "../../../components/Loops/Products";

export async function getServerSideProps(context) {

    const {params} = context;
    const {id} = params;
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "jewelry/subcategory/"+id)
    const products = await res.json()
    return { props: { products }

    }
}


export default function Index({ products }) {
    return (
        <>
            <Head title="Collection " />
            <main>
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="pt-28">
                        <Products data={products}/>
                    </div>
                </div>
            </main>
        </>
    )
}
