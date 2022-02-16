import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react/cjs/react.development";
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
      slogan: "BECOME GREAT, BECOME LEGEND, BECOME YOU",
      bio: `- Not self made but self driven....\n\n- From no high-school basketball to 18 years professional career\n\n- From growing up poor to ownling successful business.\n\n -Believin in ME all times`
    },
    {
      id: 2,
      name: "Eddy",
      role: "Directeur et coach",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/eddy.webp",
    },
    {
      id: 3,
      name: "Ousmane",
      role: "Coach",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/ousmane1.webp",
    },
    {
      id: 5,
      name: "Tommy",
      role: "Pôle récupération",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/cryo.webp",
    },
    {
      id: 4,
      name: "Aimel",
      role: "Stagiaire Coach",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/armel.webp",
    },
    {
      id: 6,
      name: "Corentin",
      role: "Directeur Artistique - Community Manager",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/corentin.webp",
      slogan: "Il n’y a pas qu’aux États Unis que tout est possible ! ",
      bio: `Photographe professionnel et diplômé d’un double Master en Management et Business International, j’ai décidé mettre à profit mes aptitudes et mon expérience dans ce projet Dunes afin d’aider à développer l’image du sport dans cette ville dont je suis originaire et qui en 2011 avait été élu « Ville la plus sportive de France » par le quotidien sportif l’équipe.`
    },
    {
      id: 7,
      name: "Camille",
      role: "Développeur web",
      carrere: "Ancien joueur proffessionel de basket-ball",
      profile_url: "/staff/camille-sylla.webp",
      slogan: "Certain veulent que ça arrive. D'autres aimeraient que ca arrive. Les autres font que ça arrive. ",
      bio: `Dunes vous offre l'opportunité d'accomplir vos objectifs physiques. De la remise en forme à la performance vous êtes au bonne endroit !\n\nSe surpasser physiquement c'est ce renforcer mentalement !`
    },
    {
      id: 8,
      name: "Quentin",
      role: "Responsable formation et préparation physique",
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
    console.log(e);
  }


  const Card = ({target,role, name, imgSrc }) => {

    return (
      <article style={{background: `url(${imgSrc})`, backgroundSize: "cover", backgroundPosition: "50% 25%"}}  className={style.card}>
        <p className={style.title} dangerouslySetInnerHTML={{ __html: name }} />
        <div onClick={() => setPresentationTargetContext(target)} className={style.profileBtn}>
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
          return (
            <div key={i}>
            <LazyLoadComponent>
          <Card role={el.role} target={el} name={el.name} imgSrc={el.profile_url} />
          </LazyLoadComponent>
          </div>
          );
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
      className={style.wrapper}
    >
      <Title />
      <CardsGrid />
    </div>
  );
}
