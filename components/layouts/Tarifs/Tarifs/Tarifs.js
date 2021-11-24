import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { isOdd } from "../../../../tools/global";
import Button from "../../../global/button/Button";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./tarifs.module.scss";

export default function Tarifs({ data, i }) {
  const cardsRef = useRef();
  const titleRef = useRef();
  const wrapperRef = useRef();

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
          <ul>
            {data["1"] ? (
              <li>1 séance / semaine : {data["1"]}€ / mois</li>
            ) : null}
            {data["2"] ? (
              <li>2 séances / semaine : {data["2"]}€ / mois</li>
            ) : null}
            {data["3"] ? (
              <li>3 séances / semaine : {data["3"]}€ / mois</li>
            ) : null}
            {data["5"] ? (
              <li>5 séances / semaine : {data["5"]}€ / mois</li>
            ) : null}
          </ul>
          <Button text="En savoir plus" />
        </div>
      </article>
    );
  };

  const CardWrapper = ({ cardColor }) => {
    return (
      <div ref={cardsRef} className={style.cardWrapper}>
        {data.tarifs.map((el, i) => {
          return <Card cardColor={cardColor} data={el} i={i} />;
        })}
      </div>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(cardsRef.current.children, {
      opacity: 0,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top+=25% top",
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
          <CardWrapper
            cardColor={isOdd(i) ? "var(--dark)" : "var(--ocean-blue)"}
          />
        </div>
      </Layout>
    </div>
  );
}
