import Head from 'next/head'
import Bee from "../../components/Collections/Bee";
import Emeralds from "../../components/Collections/Emeralds";
import ColorGems from "../../components/Collections/ColorGems";
import Diamonds from "../../components/Collections/Diamonds";
import CollectionsBlocks from "../../components/Collections/CollectionsBlocks";


export async function getServerSideProps() {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "jewelry/collections/123")
    const cb_collections = await res.json()
    return { props: { cb_collections } }
}
export default function Index({ cb_collections }) {
    return (
        <>
            <Head title="Collections" />
            <main>
                <div className="sm:py-0 lg:py-28">
                    <Emeralds/>
                    <Bee/>
                    <ColorGems/>
                    <Diamonds/>
                </div>
                <div className="py-6 lg:py-28">
                    <CollectionsBlocks cb_collections={cb_collections} />
                </div>
            </main>
        </>
    )
}
