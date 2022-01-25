import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import { ResponsiveContext } from "../../../../context/MobileContext";
import { isOdd, userDevice } from "../../../../tools/global";
import Button from "../../../global/button/Button";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./tarifs.module.scss";

export default function Tarifs({ data, i }) {
  const cardsRef = useRef();
  const titleRef = useRef();
  const wrapperRef = useRef();
  const [responsive, setResponsive] = useContext(ResponsiveContext)

  const Title = () => {
    return (
      <h1 ref={titleRef} className={style.title}>
        {data.label}
      </h1>
    );
  };

  const Card = ({ data, i, cardColor }) => {
    return (
      <article
        style={{ background: `${cardColor}` }}
        key={i}
        className={style.card}
      >
        <div className={style.container}>
          <h1>{data.label}</h1>
          <div className={style.price}>
            <p>A partir de :</p>
            <p><span>{data["1"] ? data["1"] : data["2"]}€</span>/mois</p>
          </div>
          <Button link="/contact" text="En savoir plus" />
        </div>
      </article>
    );
  };

  const CardWrapper = ({ cardColor }) => {
    return (
      <div ref={cardsRef} className={style.cardWrapper}>
        {data.tarifs.map((el, i) => {
          return <Card key={i} cardColor={cardColor} data={el} i={i} />;
        })}
      </div>
    );
  };

  useEffect(() => {
    const isMobile = userDevice()

    gsap.registerPlugin(ScrollTrigger);

    if (isMobile == null) {
      gsap.to(cardsRef.current.children, {
        opacity: 0,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top+=15% top",
          scrub: 0.5,
        },
      });
      gsap.from(cardsRef.current.children, {
        opacity: 0,
        y: "-=10%",
        stagger: 0.1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top-=25% top",
        },
      });
      gsap.from(titleRef.current, {
        opacity: 0,
        x: "+=30%",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "top+=50% bottom",
          scrub: 0.5,
        },
      });
    }

    
  }, []);

  return (
    <div ref={wrapperRef} key={i}>
      <Layout>
        <div
          style={{
            background: `${isOdd(i) ? "var(--ocean-blue)" : "var(--dark)"}`,
          }}
          className={style.wrapper}
        >
          <Title />
          <p className={style.asterix}>*Family Pack : 2 Adultes et 1 enfant</p>
          <CardWrapper
            cardColor={isOdd(i) ? "var(--dark)" : "var(--ocean-blue)"}
          />
        </div>
      </Layout>
    </div>
  );
}
