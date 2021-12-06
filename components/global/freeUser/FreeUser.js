import gsap from "gsap"
import { useContext, useEffect, useRef, useState } from "react"
import { FreeReservationsContext } from "../../../context/FreeReservation"
import { PlanningContext } from "../../../context/PlanningContext"
import Button from "../button/Button"
import style from "./freeuser.module.scss"
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


export default function FreeUser () {
    const [active, setActive] = useContext(FreeReservationsContext)
    const [planning, setPlanning] = useContext(PlanningContext)
    const [form, setForm] = useState({
        selectedDay : null,
        selectedDayTraings : [],
        selectedSpot : null
    })
    // const [freeInfo, setFreeInfo] = useState({captcha : false})
    const wrapperRef = useRef()

    // const captchaSubmit = () => {
    //     let user_captcha_value = document.getElementById('user_captcha_input').value;

    //     if (validateCaptcha(user_captcha_value)==true) {
    //         alert('Captcha Matched');
    //     }
   
    //     else {
    //         alert('Captcha Does Not Match');
    //     }

    // }

    const Captcha = () => {
        return (
            <>
                
            </>
        )
    }
 
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

    function onDaySelectChange (day) {
        console.log("change", day);
        setForm({...form, selectedDay : day})
        const setChildrenSelect = planning.filter(el => {
            if (el.day == day) {
                return el.trainings
            }
        }).map((el, i) => {
            console.log("traing",el);
            setForm({...form, selectedDayTraings : el.trainings})
        })
    }

    function onSpotSelectChange (target) {

    }
    const WindowRight = () => {
        return(
            <form className={style.right}>
                <label for="name" value="Nom et Prénom">Nom et Prénom</label>
                <input name="name" type="text" />
                <label for="name" >Votre adresse e-mail</label>
                <input name="mail" type="email" />
                <select onChange={e => onDaySelectChange(e.target.value)}>
                    {planning ? planning.map((spot, i) => {
                        console.log(spot);
                        return <option value={spot.day}>{spot.day.charAt(0).toUpperCase() + spot.day.slice(1)}</option>
                    }) : null}
                </select>
                <select>
                    {
                        form.selectedDayTraings ? form.selectedDayTraings.map((el, i) => {
                            console.log(el);
                            return <option>{el.nom} - {el.start}</option>
                        })  : null
                    }
                </select>

                <input type="checkbox"/>
                <button>Valider</button>
                {/* <LoadCanvasTemplate /> */}
                {/* <input name="text" id="user_captcha_input" type="text" /> */}

            </form>
        )
    }

    const CloseBtn = () => {

        return (
            <div onClick={() => setActive(!active)} className={style.closeBtn}>

            </div>
        )
    }

    useEffect(() => {
        // loadCaptchaEnginge(6)
        if (active) {
            gsap.from(wrapperRef.current, {
                opacity : 0
            })
        }

    }, [])

    return(
        <>
        {/* {active ? <div ref={wrapperRef} className={style.wrapper}>
            <Windows/>
            <CloseBtn/>
        </div> : null} */}
        <div ref={wrapperRef} className={style.wrapper}>
            <Windows/>
            <CloseBtn/>
        </div>
        </>
        
    )
}