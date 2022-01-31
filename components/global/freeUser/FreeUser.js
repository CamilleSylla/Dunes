import axios from "axios";
import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { FreeReservationsContext } from "../../../context/FreeReservation";
import { PlanningContext } from "../../../context/PlanningContext";
import Button from "../button/Button";
import style from "./freeuser.module.scss";
import { Formik, Field, Form } from "formik";
import NotificationWrapper from "../Notifications/Wrapper/Wrapper";
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

export default function FreeUser() {
  const [active, setActive] = useContext(FreeReservationsContext);
  const [planning, setPlanning] = useContext(PlanningContext);
  const [form, setForm] = useState({
    selectedDayTraings: [],
    nom: null,
  });
  // const [freeInfo, setFreeInfo] = useState({captcha : false})
  const wrapperRef = useRef();
  const nameInput = useRef();
  const lastnameInput = useRef();
  const phoneInput = useRef();
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
          <h1>Reservation d'essai</h1>
          <p>
            Venez vous faire votre propre avis gratuitement en reservant une
            séance.
          </p>
          <p>
            SI vous avez besoin de plus amples informations, n'hesitez pas à
            nous contacter !
          </p>
          <Button text="Nous contacter" />
        </div>
      </article>
    );
  };

  async function onSubmit() {
    const url = window.location.host
    const req = {
      nom: nameInput.current.value + " " + lastnameInput.current.value,
      email: mailInput.current.value,
      phone: phoneInput.current.value,
    };

    if ( req.nom.length &&
      req.email.length &&
      req.phone.length
      ) {
        console.log(req)
        const post = await axios
          .post(`/api/mailer`, req)
          .then((res) => res.data);
      } else {
        alert("Une erreur c'est produite, assurez-vous de bien avoir remplir le fomulaire")
        return false
      }
      console.log(url)
  }

  const WindowRight = () => {
    return (
      <div className={style.right}>
        <div className={style.container}>
          <input type="text" placeholder="Nom*" ref={nameInput} />
          <input type="text" placeholder="Prénom*" ref={lastnameInput} />
          <input type="phone" placeholder="Téléphone*" ref={phoneInput} />
          <input
            type="email"
            placeholder="Email*"
            ref={mailInput}
          />
          <p>
            * : champs obligatoire
          </p>
          <p>
            En validant ce formulaire, vous confirmer que les informations envoyés sont réel et vous acceptez que dunesgst.fr puisse vous recontacter à des fins commerciales et concerve vos données.
          </p>
          <button onClick={() => onSubmit()}>Valider ma demande</button>
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
    );
  };
  return <>{active !== true ? null : <Form />}</>;
}
