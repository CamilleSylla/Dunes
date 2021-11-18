import gsap from "gsap";
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import "../styles/globals.css";

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
    //auto scroll to section
    // ScrollTrigger.create({
    //   snap: 1 / 4 // snap whole page to the closest section!
    // });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
