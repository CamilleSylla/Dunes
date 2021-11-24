import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import Button from '../button/Button'
import Spacing from '../Spacing'
import Layout from '../wrappers/Layout/Layout'
import style from './banner.module.scss'

export default function Banner ({videoSrc, imgSrc}) {

    const wrapper = useRef()
    const video = useRef()

    const Content = () => {

        return (
            <div ref={wrapper} className={style.content_wrapper}>
                <div className={style.container}>
                    <h1>Global sport training</h1>
                    <Spacing height="1vh"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam.</p>
                    <Spacing height="2.5vh"/>
                    <Button text="Reserver un spot"/>
                </div>

            </div>
        )
    }

    const Video = () => {

        return (
<video ref={video} loop="true" autoplay="autoplay" muted className={style.video} >
            <source src={videoSrc}
            type="video/mp4"/>
            </video>
        )
    }

    const Image = () => {
        return <img src={imgSrc} className={style.img}/>
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(wrapper.current, {
            y: "+=40%",
            scrollTrigger : {
                trigger: wrapper.current,
                start : "top top",
                scrub: .2,
            }
        })
        gsap.to(video.current, {
            scale: "1.5",
            scrollTrigger : {
                trigger: wrapper.current,
                start : "top top",
                scrub: .2,
            }
        })
    },[])

    return (
        <Layout>
            {videoSrc ? <Video/> : null}
            {imgSrc ? <Image/> : null}
            <Content/>
            <div className={style.filter}/>
        </Layout>
    )
}