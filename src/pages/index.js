import Head from 'next/head'
import CollectionsBlocksWFull from "@/components/Collections/CollectionsBlocksWFull";


export async function getServerSideProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "jewelry/dear_collections/123")
    const cb_collections = await res.json()
    return { props: { cb_collections } }
}




export default function Home({cb_collections} ) {
    return (
        <>
            <Head title="Home" />
            <main>
                <div className="py-28">
                    <CollectionsBlocksWFull cb_collections={cb_collections} />
                </div>
            </main>
        </>
)
}
