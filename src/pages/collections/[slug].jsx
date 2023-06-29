import Head from 'next/head'
import Link from 'next/link'
import Products from "../../components/Loops/Products";
import CollectionsJointList from "../../components/Loops/CollectionsJointList";


export async function getServerSideProps(context) {

    const {params} = context;
    const {slug} = params;
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "jewelry/collection/"+slug)
    const collection = await res.json()
    return { props: {
            image:collection.image,
            joints:collection.joints,
            products:collection.products,
            collection:collection.collection,
        }
    }


}


export default function Index({ collection,image,joints,products }) {
    return (
        <>
            <Head title="Collection " />
            <main>
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="pt-24">

                        <Link href="/">
                            <div aria-hidden="true" className="relative">
                                <img
                                    src={"https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/"+image.path}
                                    alt=""
                                    className="w-full object-center object-cover"

                                />
                            </div>
                            <h1 className="ml-4 mt-4 mb-12 text-3xl text-gray-700 tracking-wide"> {collection.name}</h1>
                        </Link>

                        <Products data={products}/>

                        <div key={collection.id} className="pt-12">
                            <CollectionsJointList joints={joints}/>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
