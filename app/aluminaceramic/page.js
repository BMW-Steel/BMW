import Layout from "@/components/layout/layout"
import Index3 from "@/components/sections/Aluminia/Index3";
import Script from "next/script";

export default function AluminaCeramic(){
    return(
        <>
       <Layout>
        <Index3/>
       <Script src="/js/index.js"/>
       </Layout>
        </>
    )
}