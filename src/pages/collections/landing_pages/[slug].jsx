import Head from 'next/head'
import Products from "../../../components/Loops/Products";
import CollectionsList from "../../../components/Collections/CollectionsList";



export async function getServerSideProps(context) {

    const {params} = context;
    const {slug} = params;
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "jewelry/collections_group/"+slug)
    const collections = await res.json()
    return { props: {collections}}
}

export default function Index({collections}) {
    return (
        <>
            <Head title="Collection" />
            <main>
                <div className="mx-auto mt-6 max-w-full">
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
