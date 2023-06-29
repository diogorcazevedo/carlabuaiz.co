import '../styles/globals.css'
import '../../tailwind/globals.css';
import React, { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as fbq from '../../lib/fpixel'
import Head from 'next/head'
import StoreHead from "../layouts/Store/StoreHead";
import StoreFooter from "../layouts/Store/StoreFooter";
import {CartProvider} from "../context/CartContext/index";

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
      <>
        <Head>
              <title>Carla Buaiz Joias</title>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta name="robots" content="index, follow"/>

              <meta name="keywords" content="Design de joias,designer de joias es, alianca de ouro es,brinco de ouro es
                                               joias para casamento, alianca de ouro, brinco de ouro, melhor designer de joia,melhor designer de joia es,
                                               joalheria espírito santo,joalheria vitória, joias espírito santo,joias es,
                                               joias vitória, aliancas em vitória,aliancas es, choker em vitória,choker espírito santo,choker es,
                                               aliancas espírito santo, joias de casamento vitória,joias de casamento es,joias de casamento espírito santo"/>

              <meta name="description" content="Design único e especial das
                                        joias em Ouro Carla Buaiz Joias, sinônimo de qualidade e exclusividade.
                                        Compre em até 10x: Alianças, Brincos, Colares, Anéis.
                                        Entrega segura e discreta."/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="icon" href="/favicon.ico"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

              <meta name="facebook-domain-verification" content="16tubwsenvveymsghajvzspu8xw1r5" />
          </Head>
        {/* Global Site Code Pixel - Facebook Pixel */}
        <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
            }}
        />


          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-14L4Z81KBF"/>
          <Script  id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-14L4Z81KBF');
              `}
          </Script>


          <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-951685294"></Script>
          <Script>
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-951685294');
              `}
          </Script>

          <CartProvider>
              <StoreHead></StoreHead>
                <Component {...pageProps} />
              <StoreFooter></StoreFooter>
          </CartProvider>

      </>
  )
}

export default App
