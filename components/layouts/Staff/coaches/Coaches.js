import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { PresentationContext } from "../../../../context/PresentationContext";
import Footer from "../../../global/footer/Footer";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./coaches.module.scss";

export default function Coaches() {

  const [presentation, setPresentation] = useContext(PresentationContext)
  const coachesRef = useRef();
  const wrapper = useRef();
  const coaches = [
    {
      id: 1,
      name: "Darnell",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/darnell.png",
    },
    {
      id: 2,
      name: "Eddy",
      role: "Co-fondateur et coach pour Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/eddy.png",
    },
    {
      id: 3,
      name: "Sylvain",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/sylvain.png",
    },
    {
      id: 4,
      name: "Quentin",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/quentin.png",
    },
    {
      id: 5,
      name: "Yannis",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/yannis.png",
    }
  ];

  const Title = () => {
    return (
      <h1>
        L'équipe
        <br /> Dunes
      </h1>
    );
  };

  const setPresentationTargetContext = e => {
    setPresentation(e)
  }

  const Card = ({target, name, imgSrc }) => {

    return (
      <article onClick={() => setPresentationTargetContext(target)} className={style.card}>
        <p className={style.title} dangerouslySetInnerHTML={{ __html: name }} />
        <img src={imgSrc} />
        <div className={style.profileBtn}>
          <p>Voir profile</p>
        </div>
        <div className={style.filter}/>
      </article>
    );
  };


  const CardsGrid = () => {
    return (
      <div ref={coachesRef} className={style.grid}>
        {coaches.map((el, i) => {
          return <Card target={el} name={el.name} imgSrc={el.profile_url} />;
        })}
      </div>
    );
  };

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from(coachesRef.current.children, {
        opacity: 0,
        scale: .8,
        x : "+=20%",
        stagger: .3,
        scrollTrigger: {
            trigger: wrapper.current,
            start: "top-=20% top",
        }
    })
  },[])


  return (
    <div
    ref={wrapper}
      style={{ background: "#F2F2F2" }}
      className={style.wrapper}
    >
      <Title />
      <CardsGrid />
    </div>
  );
}
