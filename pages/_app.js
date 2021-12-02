import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import "../styles/globals.css";
import Footer from "../components/global/footer/Footer";
import Nav from "../components/global/nav/Nav";
import Social from "../components/global/social/Social";
import Promote from "../components/global/Promote/promote";
import { PromoteProvider } from "../context/PromoteContext";
import Router from "next/router";
import nProgress, { set } from "nprogress";
import "../styles/globals.css";
import "../styles/nprogress.css";
import Transition from "../components/global/Transition/Transition";
import { AnimatePresence } from "framer-motion";
import { PresentationProvider } from "../context/PresentationContext";
import Presentation from "../components/layouts/Staff/presentation/Presentation";
import { UserContext, UserProvider } from "../context/UserContext";
import Welcome from "../components/global/Notifications/Welcome.js/Welcome";
import { WelcomeProvider } from "../context/WelcomeContext";

function MyApp({ Component, pageProps }) {
  const route = useRouter();

  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

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
    <UserProvider>
      <WelcomeProvider>
        <PromoteProvider>
          <PresentationProvider>
            <Nav />
            <Promote />
            <Social />
            <Welcome />
            <Presentation />
            <AnimatePresence exitBeforeEnter>
              <Transition>
                <Component {...pageProps} />
              </Transition>
            </AnimatePresence>
            {/* <Footer /> */}
          </PresentationProvider>
        </PromoteProvider>
      </WelcomeProvider>
    </UserProvider>
  );
}

export default MyApp;
