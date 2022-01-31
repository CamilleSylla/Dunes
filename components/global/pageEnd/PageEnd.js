import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import { FreeReservationsContext } from "../../../context/FreeReservation";
import Button from "../button/Button";
import Spacing from "../Spacing";
import Layout from "../wrappers/Layout/Layout";
import style from './pageend.module.scss'

export default function PageEnd ({video_url, title, desc}) {

  const [active, setActive] = useContext(FreeReservationsContext)
    const video = useRef();

  const 
  
  Content = () => {

    return (
        <article className={style.content}>
            <div className={style.wrapper}>
            <h1>{title}</h1>
            <Spacing height="2vh"/>
            <p>{desc}</p>
            <Spacing height="4vh"/>
            <div onClick={() => setActive(true)}>
            <Button text="Réserver"/>
            </div>    
                </div>
        </article>
    )
  }
  const Video = () => {
    return (
      <video
        ref={video}
        loop
        autoPlay
        muted
        className={style.video}
      >
        <source src={video_url} type="video/mp4" />
      </video>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(video.current, {
        scale: '1.2',
        scrollTrigger : {
            trigger: video.current,
            start:"top top",
            scrub: .5,
        }
    })
  }, [])

    return (
        <Layout>
      <Video />
      <div className={style.filter} />
      <Content/>
    </Layout>
    )
}