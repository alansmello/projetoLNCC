import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Paperbase from "@/components/paperBase";

export default function App({ Component, pageProps}: AppProps) {
  return (
    <>
    <Paperbase/>
      <div style={{ flex: 1 }}>
      <Component {...pageProps} />
      </div>
   
    </>
    
  )
}
