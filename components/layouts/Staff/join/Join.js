import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Button from "../../../global/button/Button";
import Spacing from "../../../global/Spacing";
import Layout from "../../../global/wrappers/Layout/Layout";
import LeftLayout from "../../Home/leftLayoiut/LeftLayout";
import style from "./join.module.scss";

export default function Join() {
  const video = useRef();

  const Content = () => {

    return (
        <article className={style.content}>
            <div className={style.wrapper}>
            <h1>Joignez notre staff</h1>
            <Spacing height="2vh"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis.</p>
            <Spacing height="4vh"/>
            <Button text="Contact"/>
                </div>
        </article>
    )
  }
  const Video = () => {
    return (
      <video
        ref={video}
        loop="true"
        autoplay="autoplay"
        muted
        className={style.video}
      >
        <source src="/assets/video/staff.mp4" type="video/mp4" />
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
  );
}
