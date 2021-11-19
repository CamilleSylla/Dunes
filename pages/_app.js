import gsap from "gsap";
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import "../styles/globals.css";
import Nav from "./components/global/nav/Nav";

function MyApp({ Component, pageProps }) {
  const route = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mainChildrens = [
      ...document.body.getElementsByTagName("main")[0].children,
    ];
    gsap.utils.toArray(mainChildrens).forEach((child, i) => {
      ScrollTrigger.create({
        trigger: child,
        start: "top top", 
        pin: true, 
        pinSpacing: false 
      });
    });
  }, []);

  return (
    <>
    <Nav/>
  <Component {...pageProps} />
    </>
  );
}

export default MyApp;
