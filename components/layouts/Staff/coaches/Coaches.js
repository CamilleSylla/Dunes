import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Footer from "../../../global/footer/Footer";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./coaches.module.scss";

export default function Coaches() {
  const coachesRef = useRef();
  const wrapper = useRef();
  const coaches = [
    {
      id: 1,
      name: "Darnell <span>Williams</span>",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/darnell.png",
    },
    {
      id: 1,
      name: "Eddy <span>Lemaire</span>",
      role: "Co-fondateur et coach pour Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/eddy.png",
    },
    {
      id: 1,
      name: "Sylvain <span>Deleau</span>",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/sylvain.png",
    },
    {
      id: 1,
      name: "Quentin <span>Williams</span>",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/quentin.png",
    },
    {
      id: 1,
      name: "Yannis <span>Williams</span>",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/yannis.png",
    },
    {
      id: 1,
      name: "Quentin <span>Williams</span>",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/quentin.png",
    },
    {
      id: 1,
      name: "Yannis <span>Williams</span>",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/yannis.png",
    },
  ];

  const Title = () => {
    return (
      <h1>
        L'équipe
        <br /> Dunes
      </h1>
    );
  };

  const Card = ({ name, imgSrc }) => {
    return (
      <article className={style.card}>
        <h1 dangerouslySetInnerHTML={{ __html: name }} />
        <img src={imgSrc} />
      </article>
    );
  };

  const CardsGrid = () => {
    return (
      <div ref={coachesRef} className={style.grid}>
        {coaches.map((el, i) => {
          return <Card name={el.name} imgSrc={el.profile_url} />;
        })}
      </div>
    );
  };

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from(coachesRef.current.children, {
        opacity: 0,
        scale: .8,
        y : "+=20%",
        stagger: .3,
        scrollTrigger: {
            trigger: wrapper.current,
            start: "top-=20% top",
        }
    })
  },[])


  return (
    // <Layout height="auto">
    <div
    ref={wrapper}
      style={{ background: "#F2F2F2" }}
      className={style.wrapper}
    >
      <Title />
      <CardsGrid />
    </div>
    // </Layout>
  );
}
