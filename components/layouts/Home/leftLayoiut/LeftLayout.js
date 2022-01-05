import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { userDevice } from "../../../../tools/global";
import Button from "../../../global/button/Button";
import Spacing from "../../../global/Spacing";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./leftLayout.module.scss";

export default function LeftLayout({ i, img, title, desc, button }) {
  const contentRef = useRef();
  const start = useRef();

  const Content = () => {
    return (
      <article ref={start} className={style.content}>
        <div
          ref={contentRef}
          className={style.container}
          style={{ textAlign: "rigth" }}
        >
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <Spacing height="1vh" />
          <p>{desc}</p>
          <Spacing height="3vh" />
          <Button text={button.label} link={button.link} />
        </div>
      </article>
    );
  };

  useEffect(() => {
    const isMobile = userDevice()
    gsap.registerPlugin(ScrollTrigger);
    if (isMobile == null) {
      gsap.from(contentRef.current, {
        y: "+=80%",
        scrollTrigger: {
          trigger: start.current,
          start: "top bottom",
          end: "bottom top+=50%",
          scrub: 0.2,
        },
      });
    }

    
  }, []);

  return (
    <div key={i}>
      <Layout>
        <img className={style.illustration} src={img} />
        <Content />
      </Layout>
    </div>
  );
}
