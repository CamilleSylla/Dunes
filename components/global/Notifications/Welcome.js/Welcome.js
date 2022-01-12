import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import style from "./welcome.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { WelcomeContext } from "../../../../context/WelcomeContext";
import NotificationWrapper from "../Wrapper/Wrapper";
import { useRouter } from "next/router";

export default function Welcome() {
  const [user, setUser] = useContext(UserContext);
  const [close, setClose] = useContext(WelcomeContext)
  const path = useRouter().asPath

  const notifRef = useRef()

  const onClose = () => { 
      gsap.to(notifRef.current, {
          x : "100%",
          opacity : 0,
          onComplete(){
            setClose(true)
          } 
      })
      
  }

  const Notif = () => {
    return (
      <NotificationWrapper ref={notifRef}>
        <h1>
          Ca fait plaisir de te revoir <span>{user.prenom}</span>
        </h1>
        <p>
          N'hésites pas a{" "}
          <Link href="/plannings">
            <a>reserver</a>
          </Link>{" "}
          tes prochains spots !
        </p>
        <p onClick={onClose} className={style.close}>FERMER</p>
      </NotificationWrapper>
    );
  };

  useEffect(() => {
        gsap.from(notifRef.current, {
            x : "100%",
            opacity : 0
        })
  }, [close])

  return <>{!close && user && path !== "/plannings"? <Notif /> : null}</>;
}
