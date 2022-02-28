import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useContext, useEffect, useRef } from 'react'
import { UserContext } from '../../../context/UserContext'
import { userDevice } from '../../../tools/global'
import Button from '../button/Button'
import Spacing from '../Spacing'
import Layout from '../wrappers/Layout/Layout'
import style from './banner.module.scss'

export default function Banner ({videoSrc, imgSrc, title, phrase}) {
    const [user, setUser] = useContext(UserContext)
    const wrapper = useRef()
    const video = useRef()

    const Content = () => {

        return (
            <div ref={wrapper} className={style.content_wrapper}>
                <div className={style.container}>
                    <h1>{title ? title : "Global sport training"}</h1>
                    <Spacing height="1vh"/>
                    <p>{phrase ? phrase : null}</p>
                    <Spacing height="2.5vh"/>
                    <Button text="Réserver un spot" link={user ? "/plannings" : "/contact"}/>
                    <Spacing height="2.5vh"/>
                    <div onClick={e => window.scrollTo(0, 500)} style={{height: '5vh', cursor: "pointer"}}>
                    <img className={style.icon}  src="/assets/icon/arrow.svg"/>

                    </div>
                </div>

            </div>
        )
    }

    const Video = () => {

        return (
<video ref={video} loop autoPlay muted className={style.video} >
            <source src={videoSrc}
            type="video/mp4"/>
            </video>
        )
    }

    const Image = () => {
        return <img src={imgSrc} className={style.img}/>
    }

    useEffect(() => {
        const isMobile = userDevice()
        gsap.registerPlugin(ScrollTrigger)
        if (isMobile == null) {
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
        }

        
    },[])

    return (
        <div style={{width: "100%", height: "100vh", position: "relative"}}>
            {videoSrc ? <Video/> : null}
            {imgSrc ? <Image/> : null}
            <Content/>
            <div className={style.filter}/>
        </div>
    )
}