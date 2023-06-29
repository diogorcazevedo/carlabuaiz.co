import Head from 'next/head'
import ProductGalleryImage from "../../components/Products/ProductGalleryImage";
import ProductDescriptions from "../../components/Products/ProductDescriptions";
import ProductFeature from "../../components/Products/ProductFeature";
import {useEffect} from "react";
import * as fbq from "../../../lib/fpixel";
import {event} from "../../../lib/fpixel";


export async function getServerSideProps(context) {

    const {params} = context;
    const {slug} = params;
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "jewelry/product/"+slug)
    const data = await res.json()
    return { props: {
            product:data.product,
            images:data.images,
            stock:data.stock,
            cat_img:data.cat_img,
            features:data.features,
        }
    }
}



export default function Index({product,images,stock,cat_img,features} ) {

    useEffect(() => {
        fbq.event('ViewContent',
            {
                currency: 'BRL',
                value: product.stock.offered_price,
                //value: product.stock.offered_price.toFixed(2),
                content_type:[
                    product.collection_id
                ],
                content_ids:[
                    product.id
                ],

            }
        )
    }, [product])

    return (
        <>
            <Head>
                <title>Product</title>
                <meta property="og:title" content={product.name.toLowerCase()}/>
                <meta property="og:description" content={product.name.toLowerCase()}/>
                <meta property="og:url" content= {typeof window !== "undefined" ? window.location.href: "undefined" }/>
                <meta property="og:image" content= { "https://carlabuaizjoias.s3.sa-east-1.amazonaws.com/" + images[0].path }/>
                <meta property="id" content={product.id}/>
                <meta property="product:retailer_item_id" content={product.id}/>
                <meta property="product:brand" content="Carla Buaiz Joias"/>
                <meta property="product:availability" content="in stock"/>
                <meta property="product:condition" content="new"/>
                <meta property="product:price:amount" content={product.stock.offered_price}/>
                <meta property="product:price:currency" content="BRL"/>
                <meta property="g:google_product_category" content="Apparel & Accessories > Jewelry"/>
                <meta property="og:google_product_category" content="Apparel & Accessories > Jewelry"/>
                <meta property="product:google_product_category" content="Apparel & Accessories > Jewelry"/>
                <meta property="product:gender" content="Female"/>
            </Head>
            <main>
                <div className="bg-white pt-16">
                    {/*<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">*/}
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                            {/* Image gallery */}
                            <ProductGalleryImage images={images} product={product} />
                            {/* Product info */}
                            <ProductDescriptions images={images} product={product} />
                            {/* Product detaques */}
                        </div>

                        {features != null  &&
                            <ProductFeature features={features} />
                        }

                    </div>
                </div>
            </main>
        </>
    )
}
