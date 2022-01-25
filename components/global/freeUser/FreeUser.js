import axios from "axios";
import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { FreeReservationsContext } from "../../../context/FreeReservation";
import { PlanningContext } from "../../../context/PlanningContext";
import Button from "../button/Button";
import style from "./freeuser.module.scss";
import { Formik, Field, Form } from "formik";
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

export default function FreeUser() {
  const [active, setActive] = useContext(FreeReservationsContext);
  const [planning, setPlanning] = useContext(PlanningContext);
  const [form, setForm] = useState({
    selectedDayTraings: [],
    nom: null
  });
  // const [freeInfo, setFreeInfo] = useState({captcha : false})
  const wrapperRef = useRef();
  const nameInput = useRef();
  const lastnameInput = useRef();
  const mailInput = useRef();
  const spotRef = useRef();

  const Windows = () => {
    return (
      <div className={style.window}>
        <WindowLeft />
        <WindowRight />
      </div>
    );
  };

  const WindowLeft = () => {
    return (
      <article className={style.left}>
        <div className={style.content}>
          <h1>Reservation d'essais</h1>
          <p>
            Venez vous faire votre propre avis gratuitement en reservant une
            séance.
          </p>
          <p>
            SI vous avez besoin de plus amples informations, n'hesitez pas a
            nous contacter !
          </p>
          <Button text="Nous contacter" />
        </div>
      </article>
    );
  };

  async function onSubmit () {
      const req = {
          nom: nameInput.current.value + " " + lastnameInput.current.value,
          email: mailInput.current.value,
          spot_id : spotRef.current.value
      }

      const post = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reservation-essaies`, req)
      .then(res => res.data)

      if (typeof post === 'object') {
          console.log("save");
      } else {
          alert(post)
      }
  }

  const WindowRight = () => {
    return (
      <div className={style.right}>
          <div className={style.container}>
          <input type="text" placeholder="Nom" ref={nameInput}/>
          <input type="text" placeholder="Prénom" ref={lastnameInput}/>
          <input type="email" placeholder="Votre adresse Email" ref={mailInput}/>
          <select onChange={e => {
              const Daytrainings = planning.filter(el => el.day == e.target.value)
                const createOptions = Daytrainings[0].trainings.map((el, i) => {
                    const options = document.createElement('option')
                    options.innerHTML = el.nom + " - " + el.start
                    options.value = el.id
                    spotRef.current.appendChild(options)
                })
          }}>
              {
              planning ? planning.map((el, i) => {
                  return <option key={i} value={el.day}>{el.day}</option>
              }) 
              : null}
          </select>
          <select ref={spotRef}/>
          <button onClick={() => onSubmit()}>Reserver mon essaie</button>
          </div>
      </div>
    );
  };

  const CloseBtn = () => {
    return (
      <div onClick={() => setActive(null)} className={style.closeBtn}></div>
    );
  };

  useEffect(() => {
    // loadCaptchaEnginge(6)
    if (active) {
      gsap.from(wrapperRef.current, {
        opacity: 0,
      });
    }
  }, [active]);
  const Form = () => {
    return (
<div ref={wrapperRef} className={style.wrapper}>
        <Windows />
        <CloseBtn />
      </div>
    )
  }
  return (
    <>
      {active !== true ? null : <Form/>}
      
    </>
  );
}
