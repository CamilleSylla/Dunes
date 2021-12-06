import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { FreeReservationsContext } from "../../../context/FreeReservation"
import Button from "../button/Button"
import style from "./freeuser.module.scss"

export default function FreeUser () {
    const [active, setActive] = useContext(FreeReservationsContext)
    const wrapperRef = useRef()

    const Windows = () => {

        return (
            <div className={style.window}>
                <WindowLeft/>
                <WindowRight/>
            </div>
        )
    }

    const WindowLeft = () => {

        return (
            <article className={style.left}>
                <div className={style.content}>
                <h1>Reservation d'essais</h1>
                <p>Venez vous faire votre propre avis gratuitement en reservant une séance.</p> 
                <p>SI vous avez besoin de plus amples informations, n'hesitez pas a nous contacter !</p> 
                <Button text="Nous contacter"/>
                </div>    
            </article>
        )
    }
    const WindowRight = () => {
        return(
            <form className={style.right}>
                <label for="name" value="Nom et Prénom">Nom et Prénom</label>
                <input name="name" type="text" />
                <label for="name" >Votre adresse e-mail</label>
                <input name="mail" type="email" />

            </form>
        )
    }

    const CloseBtn = () => {

        return (
            <div className={style.closeBtn}>

            </div>
        )
    }

    useEffect(() => {
        if (active) {
            gsap.from(wrapperRef.current, {
                opacity : 0
            })
        }

    }, [])

    return(
        <div ref={wrapperRef} className={style.wrapper}>
            <Windows/>
            <CloseBtn/>
        </div>
    )
}