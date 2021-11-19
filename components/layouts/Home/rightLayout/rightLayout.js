import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Button from "../../../global/button/Button";
import Spacing from "../../../global/Spacing";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./rightLayout.module.scss";

export default function RightLayout({ i ,img, title, desc, buttonString }) {
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
          <Button text={buttonString} />
        </div>
      </article>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(contentRef.current, {
      y: "+=80%",
      scrollTrigger: {
        trigger: start.current,
        start: "top bottom",
        end: "bottom top+=50%",
        scrub: 0.2,
      },
    });
  }, []);

  return (
    <div key={i}>
      <Layout>
        <Content />
        <img className={style.illustration} src={img} />
      </Layout>
    </div>
  );
}
