import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import { PresentationContext } from "../../../../context/PresentationContext";
import Footer from "../../../global/footer/Footer";
import Layout from "../../../global/wrappers/Layout/Layout";
import style from "./coaches.module.scss";

export default function Coaches() {

  const [presentation, setPresentation] = useContext(PresentationContext)
  const [loaded, setLoaded] = useState({loaded: 0})
  const coachesRef = useRef();
  const wrapper = useRef();
  const imagesRef = useRef()
  
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
      id: 5,
      name: "Tommy",
      role: "Responsable cryotéhrapie",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/cryo.webp",
    },
    {
      id: 4,
      name: "Aimel",
      role: "Coach",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/armel.webp",
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
  function handleImageLoaded (loadIncrement) {
    if (!loaded.loaded) {
      setLoaded({loaded : loadIncrement})
    }
  }

  useEffect(() => {
    const img = imagesRef.current;
    if (img&&img.complete) {

    }
  }, [])

  const Card = ({target,role, name, imgSrc }) => {

    return (
      <article  className={style.card}>
        <p className={style.title} dangerouslySetInnerHTML={{ __html: name }} />
        <p style={{left: "40%",width:"100%",textAlign: "left", fontSize: "1rem"}}className={style.title} dangerouslySetInnerHTML={{ __html: role }}/>
        <img onLoad={handleImageLoaded} ref={imagesRef} rel="preload" src={imgSrc} />
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
          return <Card key={i} role={el.role} target={el} name={el.name} imgSrc={el.profile_url} />;
        })}
      </div>
    );
  };

  // useEffect(() => {

  //   gsap.registerPlugin(ScrollTrigger)

  //   gsap.from(coachesRef.current.children, {
  //       x : "-=100%",
  //       stagger: .3,
  //       scrollTrigger: {
  //           trigger: wrapper.current,
  //           start: "top-=20% top",
  //       }
  //   })
  // },[])


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
