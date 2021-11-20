import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import "../styles/globals.css";
import Footer from "../components/global/footer/Footer";
import Nav from "../components/global/nav/Nav";
import Social from "../components/global/social/Social";

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
        pinSpacing: false,
      });
    });
  }, [route]);

  return (
    <>
      <Nav />
      <Social />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
