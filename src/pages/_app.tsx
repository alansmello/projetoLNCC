import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Content from "@/components/content";
import Header from "@/components/header";
import Navigator from "@/components/navigator";

export default function App({ Component, pageProps}: AppProps) {
  return (
    <>
   
      <div style={{ flex: 1 }}>
      <Component {...pageProps} />
      </div>
   
    </>
    
  )
}
