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
      profile_url: "/staff/darnell.webp",
    },
    {
      id: 2,
      name: "Eddy",
      role: "Co-fondateur et coach",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/eddy.webp",
    },
    {
      id: 3,
      name: "Ousmane",
      role: "Coach",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/ousmane.webp",
    },
    {
      id: 4,
      name: "Armel",
      role: "Coach",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/armel.webp",
    },
    {
      id: 5,
      name: "Julien",
      role: "Responsable cryotéhrapie",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/cryo.webp",
    },
    {
      id: 6,
      name: "Corentin",
      role: "Directeur Artistique - Community Manager",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/corentin.webp",
    },
    {
      id: 7,
      name: "Camille",
      role: "Ingénieur - Développeur web",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/camille-sylla.webp",
    },
    {
      id: 8,
      name: "Quentin",
      role: "Fondateur de Dunes",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/assets/img/quentin.png",
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

  const setPresentationTargetContext = e => {
    setPresentation(e)
  }

  const Card = ({target, name, imgSrc }) => {

    return (
      <article onClick={() => setPresentationTargetContext(target)} className={style.card}>
        <p className={style.title} dangerouslySetInnerHTML={{ __html: name }} />
        <img rel="preload" src={imgSrc} />
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
        x : "-=100%",
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
