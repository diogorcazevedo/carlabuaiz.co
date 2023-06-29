import Head from 'next/head'
import CollectionsList from "../../components/Collections/CollectionsList";
import Products from "../../components/Loops/Products";


export async function getServerSideProps() {

    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "joalheria/lojavirtual")
    const collections = await res.json()
    return { props: { collections } }
}




export default function Home({ collections }) {
    return (
        <>
            <Head title="Loja Virtual" />
            <main>
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
                    {collections.map((collection) => (
                        <div key={collection.id} className="pt-28">
                            {collection.images[0] &&
                                <div>
                                    <CollectionsList collection={collection}/>
                                    <Products data={collection.products}/>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </main>
        </>
)
}
